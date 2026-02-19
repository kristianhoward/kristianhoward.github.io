import {useEffect, useState} from "react";
import {imageNames, home_display_img_paths} from "./constants.js";


export function CyclingImage( {hoveredIndex}) {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        if (hoveredIndex !== null) return;

        const interval = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setIndex((prev) => (prev + 1) % home_display_img_paths.length);
                setFade(true);
            }, 300);
        }, 3000);

        return () => clearInterval(interval);
    }, [hoveredIndex]);

    const displayIndex =
        hoveredIndex !== null ? hoveredIndex : index;

    return (<>
        <div className="flex justify-center">
            <h1 className="text-3xl font-bold pt-5 p-5">{imageNames[index]}</h1>
        </div>
        <div className="aspect-[5/4] overflow-hidden rounded-xl shadow-lg">
            <img
                src={home_display_img_paths[displayIndex]}
                alt="Portfolio preview"
                className={`w-full h-full object-center object-cover scale-150 transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
            />
        </div>
    </>)
}