import {ContextFireButton, FireButton} from "./AnimatedButton.jsx";
import {
    csharp_alt_path, playwright_alt_path, pytest_alt_path,
    python_alt_path,
    python_img_path,
    qa_img_path, selenium_alt_path, sql_alt_path,
    unity_alt_path,
    unity_img_path
} from "./constants.js";
import {useState} from "react";
import {ToolsUsedBar} from "./ToolBar.jsx";


export function Experience() {
    const [currentContext, setText] = useState("")
    const [setHoveredIndex] = useState(null);

    return (
        <>
            <ul>
                <li>
                    <h1 className="text-3xl font-bold pt-5">
                        Experience:
                    </h1>
                </li>
                <li>
                    <ContextFireButton
                        className="text-3xl font-bold p-5 w-96 rounded-lg text-white"
                        icon={python_img_path}
                        onClick={() => setText("python")}
                        index={3}
                        setHoveredIndex={setHoveredIndex}
                    > Automation Engineer </ContextFireButton>
                    <h1 className="p-5 font-bold text-2xl">Prev. Employer: Econolite Intelligent Systems</h1>
                    <p className="pl-10">Seven years experience developing professional projects, frameworks,
                        and APIs for hardware, software, and web.</p>
                    {currentContext === "python" && <Python/>}
                </li>
                <li>
                    <ContextFireButton
                        className="text-3xl font-bold p-5 w-96 rounded-lg text-white"
                        icon={unity_img_path}
                        onClick={() => setText("gamedev")}
                        index={0}
                        setHoveredIndex={setHoveredIndex}
                    > Game Developer</ContextFireButton>
                    <h1 className="p-5 font-bold text-2xl">Employer: Self</h1>
                    <p className="pl-10">Unity developer with a rogue-lite card game scheduled to release
                        in 2027.</p>
                    {currentContext === "gamedev" && <GameDev/>}
                </li>
                <li>
                    <ContextFireButton
                        className="text-3xl font-bold p-5 w-96 rounded-lg text-white"
                        icon={qa_img_path}
                        onClick={() => setText("qa")}
                        index={3}
                        setHoveredIndex={setHoveredIndex}
                    > Quality Assurance</ContextFireButton>
                    <h1 className="p-5 font-bold text-2xl">Prev. Employers: DTT Surveillance, SEGA of America</h1>
                    <p className="pl-10">9 Years experience with ensuring quality in the traffic industry,
                        surveillance industry, and video games.</p>
                    {currentContext === "qa" && <QualityAssurance/>}
                </li>
            </ul>
        </>
    );
}


export function Python() {
    const radarToolsUsed = [python_alt_path, pytest_alt_path, playwright_alt_path]
    const radarToolNames = ["Python", "Pytest", "Playwright"]
    const controllerToolsUsed = [python_alt_path, pytest_alt_path, selenium_alt_path, sql_alt_path]
    const controllerToolNames = ["Python", "Pytest", "Selenium", "SQL",]

    return (
        <>
            <div className="pl-16 pt-3">
                <ul className="list-disc">
                    <li>
                        <p className="text-2xl font-bold pt-3 text-gray-50">Traffic Radar Playwright-based Framework</p>
                        <div className="flex p-5">
                            <ToolsUsedBar toolsUsed={radarToolsUsed} names={radarToolNames}/>
                        </div>
                        <p>Web-based framework that validated map location behavior and radar sensor data.</p>
                    </li>
                    <li>
                        <p className="text-2xl font-bold pt-3 text-gray-50">Traffic Signal Controller Python API</p>
                        <div className="flex p-5">
                            <ToolsUsedBar toolsUsed={controllerToolsUsed} names={controllerToolNames}/>
                        </div>
                        <p>Crafted high-level APIs meant for those not experienced in scripting.</p>
                        <p>Configures, and verifies Traffic Controller behavior.</p>
                    </li>
                </ul>
            </div>
        </>
    )
}


export function GameDev() {
    const toolsUsed = [unity_alt_path, csharp_alt_path, python_alt_path]
    const toolNames = ["Unity", "C#", "Python"]
    return (
        <>
            <div className="pl-16 pt-3">
                <ul className="list-disc">
                    <li>
                        <p className="text-2xl font-bold pt-3 text-gray-50">Rogue Cards of Dungeon (Name TBD)</p>
                        <div className="flex p-5">
                            <ToolsUsedBar toolsUsed={toolsUsed} names={toolNames}/>
                        </div>
                        <p>Web-based framework that validated map location behavior and radar sensor data.</p>
                    </li>
                    <li>
                        <p className="text-2xl font-bold pt-3 text-gray-50">Traffic Signal Controller Python API</p>
                        <p className="pl-3 p-1">Major Tools used: Pytest, JSON, SQLite, SNMP, TCP, UDP, C++, </p>
                        <p>Crafted high-level APIs meant for those not experienced in scripting.</p>
                        <p>Configures, and verifies Traffic Controller behavior.</p>
                    </li>
                    <li>
                        <FireButton className="text-2xl font-bold pt-3 text-gray-50">GIS AI Anomaly
                            Detector</FireButton>
                        <p className="pl-3 p-1">Major Tools used: Marimo, Osmnx, Geopandas, Anthropic</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export function QualityAssurance() {
    return (
        <>
            <div>
                <CreditedWorks/>
            </div>
        </>
    )
}

function CreditedWorks() {
    return (
        <>
            <h1 className="text-3xl font-bold p-5 w-96">
                Credited Works
            </h1>
            <p className="pl-10">Puyo Puyo Tetris</p>
            <p className="pl-10">Utawarerumono: Mask of Deception</p>
            <p className="pl-10">Valkyria Revolution</p>
            <p className="pl-10">Utawarerumono: Mask of Truth</p>
        </>
    )
}