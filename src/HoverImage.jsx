import {useState} from "react";

export function HoverImage({path, name, className="w-14 h-14", onClick={}}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`relative ${className}`}>
            <img
                className={`${className} p-1 border-2 border-rose-300 hover:shadow-[0_0_25px_rgba(255,120,0,0.6)] focus:outline-none focus:ring-0`}
                src={path}
                alt="python"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={onClick}
            />
            <div className="items-center font-bold absolute">
                {isHovered && (
                    <p>{name}</p>
                )}
            </div>
        </div>
    );
}
