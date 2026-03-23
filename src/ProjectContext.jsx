import {ContextFireButton, FireButton} from "./AnimatedButton.jsx";
import {CyclingImage} from "./CyclingImage.jsx";
import {
    github_link, github_path,
    home_display_img_paths, home_display_img_names,
    python_img_path,
    technologies,
    unity_img_path, rcod_teaser_1_gif_path, rcod_teaser_2_gif_path, rcod_teaser_3_gif_path, rcod_teaser_4_gif_path,
    rcod_screenshot_1_path, rcod_screenshot_2_path, react_path, property_app_teaser_3, property_app_teaser_1,
    property_app_teaser_4, property_app_teaser_5, property_app_teaser_6
} from "./constants.js";
import {useState} from "react";
import {ToolsUsedBar} from "./ToolBar.jsx";
import dndPath from "./assets/img/dnddisplay.png";
import mapPath from "./assets/img/mapvalidation.png";


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

            {currentView === "realEstate" && (
                <RealEstate
                    hoveredIndex={hoveredIndex}
                    setCurrentView={setCurrentView}
                />
            )}

            {currentView === "rcod" && (
                <Rcod
                    name="Rogue Cards of Dungeon (Name TBD)"
                    setCurrentView={setCurrentView}
                />
            )}

            {currentView === "dnd" && (
                <DndDisplay
                    name="DnD Display"
                    setCurrentView={setCurrentView}
                />
            )}

            {currentView === "gis" && (
                <GisDetector
                    name="GIS Anomaly Detector"
                    setCurrentView={setCurrentView}
                />
            )}
        </>
    );
}

function Overview({ hoveredIndex, setCurrentView }) {
    return (
        <div className="flex flex-col md:flex-row gap-8 w-full">
            <div className="flex-shrink-0">
                <h1 className="text-2xl md:text-3xl font-bold p-3 md:p-5">
                    Projects:
                </h1>
                <div className="flex md:hidden flex-row flex-wrap gap-2 pb-2">
                    <ContextFireButton className="text-sm font-bold px-3 py-2 rounded-lg text-white" icon={unity_img_path} onClick={() => setCurrentView("rcod")}>RCOD</ContextFireButton>
                    <ContextFireButton className="text-sm font-bold px-3 py-2 rounded-lg text-white" icon={react_path} onClick={() => setCurrentView("rcod")}>Real Estate Portfolio</ContextFireButton>
                    <ContextFireButton className="text-sm font-bold px-3 py-2 rounded-lg text-white" icon={python_img_path} onClick={() => setCurrentView("dnd")}>D&D Display</ContextFireButton>
                    <ContextFireButton className="text-sm font-bold px-3 py-2 rounded-lg text-white" icon={python_img_path} onClick={() => setCurrentView("gis")}>GIS Detector</ContextFireButton>
                </div>
                <ul className="hidden md:block">
                    <li>
                        <ContextFireButton className="text-3xl font-bold p-15 w-96 rounded-lg text-white" icon={unity_img_path} onClick={() => setCurrentView("rcod")}> Rogue Cards of Dungeon (Name TBD)</ContextFireButton>
                    </li>
                    <li>
                        <ContextFireButton className="text-3xl font-bold p-15 w-96 rounded-lg text-white" icon={react_path} onClick={() => setCurrentView("realEstate")}> Real Estate Portfolio</ContextFireButton>
                    </li>
                    <li>
                        <ContextFireButton className="text-3xl font-bold p-15 w-96 rounded-lg text-white" icon={python_img_path} onClick={() => setCurrentView("dnd")}> D&D Display</ContextFireButton>
                    </li>
                    <li>
                        <ContextFireButton className="text-3xl font-bold p-15 w-96 rounded-lg text-white" icon={python_img_path} onClick={() => setCurrentView("gis")}> GIS Anomaly Detector</ContextFireButton>
                    </li>
                </ul>
            </div>
            <div className="md:flex-1">
                <CyclingImage
                    images={home_display_img_paths}
                    imagesNames={home_display_img_names}
                    hoveredIndex={hoveredIndex}
                />
            </div>
        </div>
    )
}

function RealEstate({ name, setCurrentView }) {
    const toolNames = ["React", "Javascript", "TypeScript", "Python", "Postgresql"]
    const propertyTeasers = [
        property_app_teaser_3,
        property_app_teaser_4,
        property_app_teaser_5,
        property_app_teaser_6,
    ]
    const [hoveredIndex] = useState(null);

    return (
        <>
            <div className="grid grid-cols-1 gap-8">
                <ContextNavbar setCurrentView={setCurrentView}></ContextNavbar>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="justify-start">
                        <div className="aspect-[5/4] overflow-hidden rounded-xl shadow-lg">
                            <CyclingImage
                                images={propertyTeasers}
                                imagesNames={[""] * propertyTeasers.length}
                                hoveredIndex={hoveredIndex}
                            />
                        </div>
                    </div>
                    <div className="justify-end items-center">
                        <div className="flex">
                            <h1 className="text-xl md:text-3xl font-bold">{name}</h1>
                        </div>
                        <div className="flex p-5">
                            <ToolsUsedBar toolsUsed={toolNames.map(key => technologies[key])} names={toolNames}/>
                        </div>
                        <div className="p-5">
                            <ul >
                                <li>
                                    <p className="text-sm md:text-xl font-bold">
                                        Tracks Real Estate Investment Portfolios and offers predictive services.
                                    </p>
                                </li>
                                <li>
                                    <p className="text-sm md:text-xl font-bold">
                                        Built in React Native for dual compatibility with mobile and web.
                                    </p>
                                </li>
                                <li>
                                    <p className="text-sm md:text-xl font-bold">
                                        An alternative to Zillow, which buries investment information behind it's complex interface.
                                    </p>
                                </li>
                                <li>
                                    <p className="text-sm md:text-xl font-bold">
                                        Unique style blending happy-bubble themes with retro gaming voxel art styles.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <h1 className="text-lg md:text-2xl font-bold text-white p-3 md:p-5">
                            Coming soon to Google Play Store
                        </h1>
                        <div className="pl-10">
                            <h2></h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function Rcod({ name, setCurrentView }) {
    const rcodTeaserGifs = [
        rcod_screenshot_1_path,
        rcod_teaser_1_gif_path,
        rcod_teaser_2_gif_path,
        rcod_teaser_3_gif_path,
        rcod_screenshot_2_path,
        rcod_teaser_4_gif_path,
    ]
    const toolNames = ["Unity", "C#", "Python"]
    const [hoveredIndex] = useState(null);

    return (
        <>
            <div className="grid grid-cols-1 gap-8">
                <ContextNavbar setCurrentView={setCurrentView}></ContextNavbar>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="justify-start">
                        <div className="aspect-[5/4] overflow-hidden rounded-xl shadow-lg">
                            <CyclingImage
                                images={rcodTeaserGifs}
                                imagesNames={[""] * rcodTeaserGifs.length}
                                hoveredIndex={hoveredIndex}
                            />
                        </div>
                    </div>
                    <div className="justify-end items-center">
                        <div className="flex">
                            <h1 className="text-xl md:text-3xl font-bold">{name}</h1>
                        </div>
                        <div className="flex p-5">
                            <ToolsUsedBar toolsUsed={toolNames.map(key => technologies[key])} names={toolNames}/>
                        </div>
                        <div className="p-2">
                            <ul >
                                <li>
                                    <p className="text-sm md:text-xl font-bold text-white">
                                        Rogue-lite Deckbuilding Dungeon Crawler
                                    </p>
                                </li>
                                <li>
                                    <p className="text-sm md:text-xl font-bold text-white">
                                        Navigate through perilous dungeons
                                    </p>
                                </li>
                                <li>
                                    <p className="text-sm md:text-xl font-bold text-white">
                                        Create the ultimate deck to defeat challenging bosses
                                    </p>
                                </li>
                                <li>
                                    <p className="text-sm md:text-xl font-bold text-white">
                                        10-15 hour experience
                                    </p>
                                </li>
                                <li>
                                    <p className="text-sm md:text-xl font-bold text-white">
                                        Multiple playstyles
                                    </p>
                                </li>
                                <li>
                                    <p className="text-sm md:text-xl font-bold text-white">
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

function DndDisplay({ name, setCurrentView }) {
    const toolNames = ["Python", "Raspberry Pi", "JSON", "Tornado", "Javascript"]

    return (
        <>
            <div className="grid grid-cols-1 gap-8">
                <ContextNavbar setCurrentView={setCurrentView}></ContextNavbar>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="justify-start">
                        <div className="aspect-[5/4] overflow-hidden rounded-xl shadow-lg">
                            <img
                                src={dndPath}
                                alt={name}
                                className={`w-full h-full object-center object-cover scale-150 transition-opacity duration-300`}
                            />
                        </div>
                    </div>
                    <div className="justify-end items-center">
                        <div className="flex">
                            <h1 className="text-xl md:text-3xl font-bold">{name}</h1>
                        </div>
                        <div className="flex p-5">
                            <ToolsUsedBar toolsUsed={toolNames.map(key => technologies[key])} names={toolNames}/>
                        </div>
                        <div className="p-5">
                            <ul >
                                <li>
                                    <p className="text-sm md:text-xl font-bold">
                                        Centralized display that shows live character data in an always-on, low-maintenance environment
                                    </p>
                                </li>
                                <li>
                                    <p className="text-sm md:text-xl font-bold">
                                        Utilizes websockets to be deployed and accessed from any device on the network
                                    </p>
                                </li>
                                <li>
                                    <p className="text-sm md:text-xl font-bold">
                                        Upload image of your character to enhance your immersion
                                    </p>
                                </li>
                                <li>
                                    <p className="text-sm md:text-xl font-bold">
                                        Adjustable scenario backgrounds to give visual feedback on player locations
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <h1 className="text-lg md:text-2xl font-bold text-white p-3 md:p-5">
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

function GisDetector({ name, setCurrentView }) {
    const toolNames = ["Python", "Marimo", "Claude AI"]
    return (
        <>
            <div className="grid grid-cols-1 gap-8">
                <ContextNavbar setCurrentView={setCurrentView}></ContextNavbar>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="justify-start">
                        <div className="aspect-[5/4] overflow-hidden rounded-xl shadow-lg">
                            <img
                                src={mapPath}
                                alt={name}
                                className={`w-full h-full object-center object-cover scale-150 transition-opacity duration-300`}
                            />
                        </div>
                    </div>
                    <div className="justify-end items-center">
                        <div className="flex">
                            <h1 className="text-xl md:text-3xl font-bold">{name}</h1>
                        </div>
                        <div className="flex p-5">
                            <ToolsUsedBar toolsUsed={toolNames.map(key => technologies[key])} names={toolNames}></ToolsUsedBar>
                        </div>
                        <div className="p-5">
                            <ul >
                                <li>
                                    <p className="text-sm md:text-xl font-bold">
                                        Qualify Validation tool for OpenStreetMaps data
                                    </p>
                                </li>
                                <li>
                                    <p className="text-sm md:text-xl font-bold">
                                        Enter in a town name or city name
                                    </p>
                                </li>
                                <li>
                                    <p className="text-sm md:text-xl font-bold">
                                        A list of anomalies will be found
                                    </p>
                                </li>
                                <li>
                                    <p className="text-sm md:text-xl font-bold">
                                        Claude AI will explain the anomalies and why they were flagged
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <h1 className="text-lg md:text-2xl font-bold text-white p-3 md:p-5">
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
        <div className="flex flex-wrap gap-1">
            <FireButton onClick={() => setCurrentView("overview")} className="text-sm md:text-2xl font-bold px-3 py-2 md:px-9 md:py-6 rounded-lg text-white">Overview</FireButton>
            <FireButton onClick={() => setCurrentView("realEstate")} className="text-sm md:text-2xl font-bold px-3 py-2 md:px-9 md:py-6 rounded-lg text-white">Real Estate</FireButton>
            <FireButton onClick={() => setCurrentView("rcod")} className="text-sm md:text-2xl font-bold px-3 py-2 md:px-9 md:py-6 rounded-lg text-white">RCOD</FireButton>
            <FireButton onClick={() => setCurrentView("dnd")} className="text-sm md:text-2xl font-bold px-3 py-2 md:px-9 md:py-6 rounded-lg text-white">DnD Display</FireButton>
            <FireButton onClick={() => setCurrentView("gis")} className="text-sm md:text-2xl font-bold px-3 py-2 md:px-9 md:py-6 rounded-lg text-white">GIS Anomaly Detector</FireButton>
        </div>
    </nav>
    );
}
