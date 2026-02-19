import {useEffect, useState} from "react";


export function About(){
    return (
        <div className="h-16 bg-gray-800 rounded justify-end">
            <div className="content-center text-white">
                <Typewriter text="Based on my past conversations, can you analyze my behavioral tendencies?"/>
            </div>
        </div>
    );
}

function Typewriter({ text, speed = 50}){
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            setDisplayed(text.slice(0, index + 1));
            index++;

            if (index === text.length) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <span className="border-r-2 border-white pr-1 animate-pulse">
            {displayed}
        </span>
    );
}

function ReverseFade(){

}