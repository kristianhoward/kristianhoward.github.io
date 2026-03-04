import {useEffect, useState} from "react";


export function CyclingImage( { images, imagesNames, hoveredIndex }) {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, [images]);

    useEffect(() => {
        if (hoveredIndex !== null) return;

        const interval = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setIndex((prev) => (prev + 1) % images.length);
                setFade(true);
            }, 300);
        }, 3000);

        return () => clearInterval(interval);
    }, [hoveredIndex]);

    const displayIndex =
        hoveredIndex !== null ? hoveredIndex : index;

    return (<>
        <div className="flex justify-center">
            <h1 className="text-3xl font-bold pt-5 p-5">{imagesNames[displayIndex]}</h1>
        </div>
        <div className="aspect-[5/4] overflow-hidden rounded-xl shadow-lg">
            <img
                src={images[displayIndex]}
                alt="Portfolio preview"
                className={`w-full h-full object-center object-cover transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
            />
        </div>
    </>)
}