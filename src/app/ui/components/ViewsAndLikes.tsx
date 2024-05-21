'use client'
import React, { useEffect, useState, useRef } from 'react';

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
        <div className="mt-4">
            <p>Views: {views}</p>
            <button onClick={handleLike} className="text-blue-600 hover:underline">
                Like ({likes})
            </button>
        </div>
    );
};

export default ViewsAndLikes;
