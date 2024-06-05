'use client';

import { updatePostViews, updateProjectViews, incrementPostLikes, incrementProjectLikes } from '@/services';
import React, { useEffect, useState, useRef } from 'react';
import { SlLike } from 'react-icons/sl';
import { TbEye } from 'react-icons/tb';

interface ViewsAndLikesProps {
    slug: string;
    type: 'project' | 'post';
    initialViews: number;
    initialLikes: number;
}

const ViewsAndLikes: React.FC<ViewsAndLikesProps> = ({ slug, initialViews, initialLikes, type }) => {
    const [views, setViews] = useState(initialViews);
    const [likes, setLikes] = useState(initialLikes);
    const hasFetchedViews = useRef(false);

    useEffect(() => {
        if (hasFetchedViews.current) {
            return;
        }
        hasFetchedViews.current = true;

        async function updateViews() {
            try {
                if (type === 'project') {
                    await updateProjectViews(slug);
                } else if (type === 'post') {
                    await updatePostViews(slug);
                }
                setViews((prev) => prev + 1); // Increment local views count
            } catch (error) {
                console.error('Error updating views:', error);
            }
        }

        updateViews();
    }, [slug, type]);

    const handleLike = async () => {
        try {
            if (type === 'project') {
                await incrementProjectLikes(slug);
            } else if (type === 'post') {
                await incrementPostLikes(slug);
            }
            setLikes((prev) => prev + 1); // Increment local likes count
        } catch (error) {
            console.error('Error updating likes:', error);
        }
    };

    return (
        <div className="mt-4 flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-700">
                <TbEye className="text-xl" />
                <span className="text-lg">{views}</span>
            </div>
            <button
                onClick={handleLike}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 focus:outline-none"
            >
                <SlLike className="text-xl" />
                <span className="text-lg">{likes}</span>
            </button>
        </div>
    );
};

export default ViewsAndLikes;
