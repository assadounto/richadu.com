'use client'
import React, { useEffect, useState, useRef } from 'react';
import { FaEye, FaThumbsUp } from 'react-icons/fa';
import { SlLike } from "react-icons/sl";
import { TbEye } from "react-icons/tb";
interface ViewsAndLikesProps {
    slug: string;
    initialViews: number;
    initialLikes: number;
}

const ViewsAndLikes: React.FC<ViewsAndLikesProps> = ({ slug, initialViews, initialLikes }) => {
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
                const response = await fetch(`/api/update-views?slug=${slug}`, { method: 'POST' });
                const data = await response.json();
                setViews(data.views);
            } catch (error) {
                console.error("Error updating views:", error);
            }
        }

        updateViews();
    }, [slug]);

    const handleLike = async () => {
        try {
            const response = await fetch(`/api/update-likes?slug=${slug}`, { method: 'POST' });
            const data = await response.json();
            setLikes(data.likes);
        } catch (error) {
            console.error("Error updating likes:", error);
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
