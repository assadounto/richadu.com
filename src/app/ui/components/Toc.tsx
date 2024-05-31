'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { BiSolidBookContent } from "react-icons/bi";
import slugify from 'slugify';
import Heading from './Heading';

interface HeadingObject {
    text: string;
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

interface HeadingProps {
    headings: HeadingObject[];
}

const slugifyText = (text: string) => slugify(text, { lower: true, strict: true });

const TableOfContents: React.FC<HeadingProps> = ({ headings }) => {
    const [activeId, setActiveId] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isHidden, setIsHidden] = useState<boolean>(false);
    const headingElementsRef = useRef<{ [key: string]: IntersectionObserverEntry }>({});

    useEffect(() => {
        const handleObserver = (entries: IntersectionObserverEntry[]) => {
            headingElementsRef.current = entries.reduce((map, entry) => {
                map[entry.target.id] = entry;
                return map;
            }, headingElementsRef.current);

            const visibleHeadings: IntersectionObserverEntry[] = [];
            Object.keys(headingElementsRef.current).forEach((key) => {
                const entry = headingElementsRef.current[key];
                if (entry.isIntersecting) {
                    visibleHeadings.push(entry);
                }
            });

            const getIndexFromId = (id: string) =>
                headings.findIndex((heading) => slugifyText(heading.text) === id);

            if (visibleHeadings.length === 1) {
                setActiveId(visibleHeadings[0].target.id);
            } else if (visibleHeadings.length > 1) {
                const sortedVisibleHeadings = visibleHeadings.sort(
                    (a, b) => getIndexFromId(a.target.id) - getIndexFromId(b.target.id)
                );
                setActiveId(sortedVisibleHeadings[0].target.id);
            }
        };

        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        });

        const elements = document.querySelectorAll('h2[id], h3[id], h4[id], h5[id], h6[id]');
        elements.forEach((elem) => observer.observe(elem));

        return () => observer.disconnect();
    }, [headings]);

    return (
        <div>
            <Transition
                show={!isHidden}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className={`fixed ${isHidden ? 'hidden' : ''}  gap-5 bg-gray-300  dark:bg-gray-900 mx-6 rounded-lg  bottom-3 left-0 right-0 z-10 flex  items-center p-4   shadow-md md:hidden`}>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-blue-600 font-semibold"
                    >
                        <BiSolidBookContent size={30} />
                    </button>
                    <span className="text-gray-600 dark:text-gray-300">{activeId ? headings.find(heading => slugifyText(heading.text) === activeId)?.text : 'Table of Contents'}</span>

                </div>
            </Transition>


            <Transition appear show={isOpen}>
                <Dialog as="div" onClose={() => setIsOpen(false)} className="relative z-10 focus:outline-none">
                    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 transform-[scale(95%)]"
                                enterTo="opacity-100 transform-[scale(100%)]"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 transform-[scale(100%)]"
                                leaveTo="opacity-0 transform-[scale(95%)]"
                            >
                                <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                                    <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                                        Table of Contents
                                    </DialogTitle>
                                    <ul className="space-y-4 mt-4">
                                        {headings.map((heading) => {
                                            const anchor = slugifyText(heading.text);
                                            return (
                                                <li
                                                    key={heading.text}
                                                    className={`transition-colors duration-300 ${activeId === anchor ? 'text-blue-600' : 'text-gray-700'}`}
                                                >
                                                    <a
                                                        href={`#${anchor}`}
                                                        className={`flex items-center space-x-2 hover:text-blue-500 ${activeId === anchor ? 'font-semibold' : 'dark:text-gray-300 font-normal'}`}
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        <span>{heading.text}</span>
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="mt-6 text-blue-600 font-semibold"
                                    >
                                        Close
                                    </button>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            <div className={`p-6 border border-gray-200 rounded-lg hidden md:block ${isHidden ? 'hidden' : ''}`}>
                <Heading type='h3' className="text-xl text-gray-800 mb-6">Table of Contents</Heading>
                <ul className="space-y-4">
                    {headings.map((heading) => {
                        const anchor = slugifyText(heading.text);
                        return (
                            <li
                                key={heading.text}
                                className={`transition-colors duration-300 ${activeId === anchor ? 'text-blue-600' : 'text-gray-700'}`}
                            >
                                <a
                                    href={`#${anchor}`}
                                    className={`flex items-center space-x-2 hover:text-blue-500 ${activeId === anchor ? 'font-semibold' : 'dark:text-gray-300 font-normal'}`}
                                >
                                    <span>{heading.text}</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <button
                onClick={() => setIsHidden(!isHidden)}
                className="fixed transition ease-in-out delay-150 bottom-7  right-10 z-10 bg-blue-600 dark:bg-blue-600 text-white p-2 rounded-full md:hidden"
            >
                <span className="transition-transform transform duration-300 ">
                    {isHidden ? <FaChevronLeft size={16} /> : <FaChevronRight size={16} />}
                </span>
            </button>
        </div>
    );
};

export default TableOfContents;
