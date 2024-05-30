export default function YouTube({ link }: { link: string }) {
    return (
        <div className="my-8 rounded-lg">
            <iframe
                className="aspect-video h-[400px] w-full"
                src={link}
                title="YouTube Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
        </div>
    );
};