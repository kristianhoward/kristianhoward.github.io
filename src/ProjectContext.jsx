import {ContextFireButton, FireButton} from "./AnimatedButton.jsx";
import {CyclingImage} from "./CyclingImage.jsx";
import {
    github_link, github_path,
    home_display_img_paths,
    python_img_path,
    technologies,
    unity_img_path
} from "./constants.js";
import {useState} from "react";
import {ToolsUsedBar} from "./ToolBar.jsx";


export function Projects() {
    const [hoveredIndex] = useState(null);
    const [currentView, setCurrentView] = useState("overview");

    return (
        <>
            {currentView === "overview" && (
                <Overview
                    hoveredIndex={hoveredIndex}
                    setCurrentView={setCurrentView}
                />
            )}

            {currentView === "rcod" && (
                <Rcod
                    name="Rogue Cards of Dungeon (Name TBD)"
                    index={0}
                    setCurrentView={setCurrentView}
                />
            )}

            {currentView === "dnd" && (
                <DndDisplay
                    name="DnD Display"
                    index={1}
                    setCurrentView={setCurrentView}
                />
            )}

            {currentView === "gis" && (
                <GisDetector
                    name="GIS Anomaly Detector"
                    index={2}
                    setCurrentView={setCurrentView}
                />
            )}
        </>
    );
}

function Overview({ hoveredIndex, setCurrentView }) {
    return (
        <>
            <div className="items-center">
                <ul>
                    <li>
                        <h1 className="text-3xl font-bold p-5">
                            Projects:
                        </h1>
                    </li>
                    <li>
                        <ContextFireButton className="text-3xl font-bold p-15 w-96 rounded-lg text-white" icon={unity_img_path} onClick={() => setCurrentView("rcod")}> Rogue Cards of Dungeon (Name TBD)</ContextFireButton>
                    </li>
                    <li>
                        <ContextFireButton className="text-3xl font-bold p-15 w-96 rounded-lg text-white" icon={python_img_path} onClick={() => setCurrentView("dnd")}> D&D Display</ContextFireButton>
                    </li>
                    <li>
                        <ContextFireButton className="text-3xl font-bold p-15 w-96 rounded-lg text-white" icon={python_img_path} onClick={() => setCurrentView("gis")}> GIS Anomaly Detector</ContextFireButton>
                    </li>
                </ul>
            </div>
            <div className="justify-end">
                <CyclingImage hoveredIndex={hoveredIndex}/>
            </div>
        </>
    )
}

function Rcod({ name, index, setCurrentView }) {
    const toolNames = ["Unity", "C#", "Python"]

    return (
        <>
            <div className="grid grid-cols-1 gap-8">
                <ContextNavbar setCurrentView={setCurrentView}></ContextNavbar>
                <div className="grid grid-cols-2 gap-8">
                    <div className="justify-start">
                        <div className="aspect-[5/4] overflow-hidden rounded-xl shadow-lg">
                            <img
                                src={home_display_img_paths[index]}
                                alt={name}
                                className={`w-full h-full object-center object-cover scale-150 transition-opacity duration-300`}
                            />
                        </div>
                    </div>
                    <div className="justify-end items-center">
                        <div className="flex">
                            <h1 className="text-3xl font-bold">{name}</h1>
                        </div>
                        <div className="flex p-5">
                            <ToolsUsedBar toolsUsed={toolNames.map(key => technologies[key])} names={toolNames}/>
                        </div>
                        <div className="p-2">
                            <ul >
                                <li>
                                    <p className="text-xl font-bold text-white">
                                        Rogue-lite Deckbuilding Dungeon Crawler
                                    </p>
                                </li>
                                <li>
                                    <p className="text-xl font-bold text-white">
                                        Navigate through perilous dungeons
                                    </p>
                                </li>
                                <li>
                                    <p className="text-xl font-bold text-white">
                                        Create the ultimate deck to defeat challenging bosses
                                    </p>
                                </li>
                                <li>
                                    <p className="text-xl font-bold text-white">
                                        10-15 hour experience
                                    </p>
                                </li>
                                <li>
                                    <p className="text-xl font-bold text-white">
                                        Multiple playstyles
                                    </p>
                                </li>
                                <li>
                                    <p className="text-xl font-bold text-white">
                                        Over 75 different cards
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function DndDisplay({ name, index, setCurrentView }) {
    const toolNames = ["Python", "Raspberry Pi", "JSON", "Tornado", "Javascript"]

    return (
        <>
            <div className="grid grid-cols-1 gap-8">
                <ContextNavbar setCurrentView={setCurrentView}></ContextNavbar>
                <div className="grid grid-cols-2 gap-8">
                    <div className="justify-start">
                        <div className="aspect-[5/4] overflow-hidden rounded-xl shadow-lg">
                            <img
                                src={home_display_img_paths[index]}
                                alt={name}
                                className={`w-full h-full object-center object-cover scale-150 transition-opacity duration-300`}
                            />
                        </div>
                    </div>
                    <div className="justify-end items-center">
                        <div className="flex">
                            <h1 className="text-3xl font-bold">{name}</h1>
                        </div>
                        <div className="flex p-5">
                            <ToolsUsedBar toolsUsed={toolNames.map(key => technologies[key])} names={toolNames}/>
                        </div>
                        <div className="p-5">
                            <ul >
                                <li>
                                    <p className="text-xl font-bold">
                                        Centralized display that shows live character data in an always-on, low-maintenance environment
                                    </p>
                                </li>
                                <li>
                                    <p className="text-xl font-bold">
                                        Utilizes websockets to be deployed and accessed from any device on the network
                                    </p>
                                </li>
                                <li>
                                    <p className="text-xl font-bold">
                                        Upload image of your character to enhance your immersion
                                    </p>
                                </li>
                                <li>
                                    <p className="text-xl font-bold">
                                        Adjustable scenario backgrounds to give visual feedback on player locations
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <h1 className="text-2xl font-bold text-white p-5">
                            Github Repo
                        </h1>
                        <div className="pl-10">
                            <a href={github_link}><img className="w-14 h-14 p-1 border-2 border-rose-300 hover:shadow-[0_0_25px_rgba(255,120,0,0.6)] focus:outline-none focus:ring-0" src={github_path} alt="github" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function GisDetector({ name, index, setCurrentView }) {
    const toolNames = ["Python", "Marimo", "Claude AI"]
    return (
        <>
            <div className="grid grid-cols-1 gap-8">
                <ContextNavbar setCurrentView={setCurrentView}></ContextNavbar>
                <div className="grid grid-cols-2 gap-8">
                    <div className="justify-start">
                        <div className="aspect-[5/4] overflow-hidden rounded-xl shadow-lg">
                            <img
                                src={home_display_img_paths[index]}
                                alt={name}
                                className={`w-full h-full object-center object-cover scale-150 transition-opacity duration-300`}
                            />
                        </div>
                    </div>
                    <div className="justify-end items-center">
                        <div className="flex">
                            <h1 className="text-3xl font-bold">{name}</h1>
                        </div>
                        <div className="flex p-5">
                            <ToolsUsedBar toolsUsed={toolNames.map(key => technologies[key])} names={toolNames}></ToolsUsedBar>
                        </div>
                        <div className="p-5">
                            <ul >
                                <li>
                                    <p className="text-xl font-bold">
                                        Qualify Validation tool for OpenStreetMaps data
                                    </p>
                                </li>
                                <li>
                                    <p className="text-xl font-bold">
                                        Enter in a town name or city name
                                    </p>
                                </li>
                                <li>
                                    <p className="text-xl font-bold">
                                        A list of anomalies will be found
                                    </p>
                                </li>
                                <li>
                                    <p className="text-xl font-bold">
                                        Claude AI will explain the anomalies and why they were flagged
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <h1 className="text-2xl font-bold text-white p-5">
                            Github Repo
                        </h1>
                        <div className="pl-10">
                            <a href={github_link}><img className="w-14 h-14 p-1 border-2 border-rose-300 hover:shadow-[0_0_25px_rgba(255,120,0,0.6)] focus:outline-none focus:ring-0" src={github_path} alt="github" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function ContextNavbar( { setCurrentView } ) {
    return (<nav>
        <div>
            <FireButton onClick={() => setCurrentView("overview")} className="text-2xl font-bold px-9 py-6 rounded-lg text-white">Overview</FireButton>
            <FireButton onClick={() => setCurrentView("rcod")} className="text-2xl font-bold px-9 py-6 rounded-lg text-white">RCOD</FireButton>
            <FireButton onClick={() => setCurrentView("dnd")} className="text-2xl font-bold px-9 py-6 rounded-lg text-white">DnD Display</FireButton>
            <FireButton onClick={() => setCurrentView("gis")} className="text-2xl font-bold px-9 py-6 rounded-lg text-white">GIS Anomaly Detector</FireButton>
        </div>
    </nav>
    );
}

export function HoverImage( { path, name}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative w-14 h-14">
            <img
                className="w-14 h-14 p-1 border-2 border-rose-300 hover:shadow-[0_0_25px_rgba(255,120,0,0.6)] focus:outline-none focus:ring-0"
                src={path} alt="python"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
            <div className="items-center font-bold absolute">
                {isHovered && (
                    <p>{name}</p>
                )}
            </div>
        </div>
    );
}
