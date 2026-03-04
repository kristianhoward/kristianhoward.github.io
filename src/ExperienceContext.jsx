import {ContextFireButton} from "./AnimatedButton.jsx";
import {
    ball_alt_path,
    block_builder_alt_path,
    csharp_alt_path, dad_joke_alt_path, father_alt_path,
    game_dev_alt_path, json_alt_path, playwright_alt_path, pytest_alt_path,
    python_alt_path, qa_alt_path, selenium_alt_path, sql_alt_path,
    unity_alt_path,
} from "./constants.js";
import {useState} from "react";
import {SkillsBar} from "./ToolBar.jsx";
import {HoverImage} from "./HoverImage.jsx";


export function Experience() {
    const [currentContext, setText] = useState("dad")

    return (
        <>
            <div className="grid grid-cols-2 gap-8 w-full">
                <div className="justify-start">
                    <ul>
                        <li>
                            <h1 className="text-3xl font-bold pt-5">
                                Select a Role:
                            </h1>
                        </li>
                        <li>
                            <div className="flex items-center gap-4 pt-8">
                                <HoverImage path={python_alt_path} className="w-20 h-20" onClick={() => setText("automation")} />
                                <ul>
                                    <li>
                                        <h1 className="inline text-2xl font-bold pt-10">
                                            Automation Engineer
                                        </h1>
                                    </li>
                                    <li>
                                        <h1 className="text-1xl font-bold pb-2">
                                            Years Experience: 7
                                        </h1>
                                        <div className="w-11/12 h-1 bg-pink-300"/>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-4 pt-8">
                                <HoverImage path={qa_alt_path} className="w-20 h-20" onClick={() => setText("qa")} />
                                <ul>
                                    <li>
                                        <h1 className="inline text-2xl font-bold pt-10">
                                            QA Engineer
                                        </h1>
                                    </li>
                                    <li>
                                        <h1 className="text-1xl font-bold pb-1">
                                            Years Experience: 7
                                        </h1>
                                        <div className="w-11/12 h-1 bg-pink-300"/>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-4 pt-8">
                                <HoverImage path={game_dev_alt_path} className="w-20 h-20" onClick={() => setText("unity")}/>
                                <ul>
                                    <li>
                                        <h1 className="inline text-2xl font-bold pt-10">
                                            Game Developer
                                        </h1>
                                    </li>
                                    <li>
                                        <h1 className="text-1xl font-bold pb-2">
                                            Years Experience: 5
                                        </h1>
                                        <div className="w-8/12 h-1 bg-pink-300"/>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-4 pt-8">
                                <HoverImage path={father_alt_path} className="w-20 h-20" onClick={() => setText("dad")} />
                                <ul>
                                    <li>
                                        <h1 className="inline text-2xl font-bold pt-10">
                                            Dad
                                        </h1>
                                    </li>
                                    <li>
                                        <h1 className="text-1xl font-bold pb-2">
                                            Years Experience: 1
                                        </h1>
                                        <div className="w-1/12 h-1 bg-pink-300"/>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                {currentContext === "dad" && <Fatherhood/>}
                {currentContext === "automation" && <Automation/>}
                {currentContext === "qa" && <QualityAssurance/>}
                {currentContext === "unity" && <Unity/>}
            </div>
        </>
    )
}


export function Fatherhood() {
    const toolsPaths = [block_builder_alt_path, dad_joke_alt_path, ball_alt_path]
    const toolNames = ["Block Building", "Dad Jokes", "Basketball"]
    const toolSkillRatings = ["S", "D", "B"]
    return (
        <>
            <div className="flex items-center">
                <ul>
                    <li>
                        <h1 className="text-3xl font-bold pt-6">
                            Current Role
                        </h1>
                        <hr className="w-full border-pink-300"/>
                    </li>
                    <li>
                        <div className="flex items-center gap-4 pt-8">
                            <img
                                className="w-24 h-24 border-2 border-rose-300 shadow-[0_0_25px_rgba(255,120,0,0.6)] focus:outline-none focus:ring-0"
                                src={father_alt_path} alt="father"/>
                            <ul>
                                <li>
                                    <h1 className="inline text-3xl font-bold pt-10">
                                        Dad
                                    </h1>
                                </li>
                                <li>
                                    <h1 className="text-3xl font-bold">
                                        Years Experience: 1
                                    </h1>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <h1 className="text-3xl font-bold pt-6">
                            Skills:
                        </h1>
                        <hr className="w-full border-pink-300"/>
                        <SkillsBar skillList={toolsPaths} nameList={toolNames} proficiencyList={toolSkillRatings}/>
                    </li>
                    <li>
                        <h1 className="text-3xl font-bold pt-10">
                            Accolades
                        </h1>
                        <hr className="w-full border-pink-300"/>
                    </li>
                    <li>
                        <ul className="p-5">
                            <li><h2 className="text-2xl font-bold">Supported by a loving wife.</h2></li>
                            <li><h2 className="text-2xl font-bold">Proud Dad of one, with another on the way.</h2></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}

export function QualityAssurance() {
    const toolsPaths = [qa_alt_path, python_alt_path, pytest_alt_path, playwright_alt_path, selenium_alt_path, json_alt_path, sql_alt_path]
    const toolNames = ["Fundamentals", "Python", "Pytest", "Playwright", "Selenium", "JSON", "SQL"]
    const toolSkillRatings = ["S", "S", "A", "A", "C", "B", "C"]

    return (
        <>
            <div className="flex items-center">
                <ul>
                    <li>
                        <h1 className="text-3xl font-bold pt-6">
                            Current Role
                        </h1>
                        <hr className="w-full border-pink-300"/>
                    </li>
                    <li>
                        <div className="flex items-center gap-4 pt-8">
                            <img
                                className="w-24 h-24 border-2 border-rose-300 shadow-[0_0_25px_rgba(255,120,0,0.6)] focus:outline-none focus:ring-0"
                                src={qa_alt_path} alt="qa"/>
                            <ul>
                                <li>
                                    <h1 className="inline text-3xl font-bold pt-10">
                                        QA Engineer
                                    </h1>
                                </li>
                                <li>
                                    <h1 className="text-3xl font-bold">
                                        Years Experience: 7
                                    </h1>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <h1 className="text-3xl font-bold pt-6">
                            Skills:
                        </h1>
                        <hr className="w-full border-pink-300"/>
                        <SkillsBar skillList={toolsPaths} nameList={toolNames} proficiencyList={toolSkillRatings}/>
                    </li>
                    <li>
                        <h1 className="text-3xl font-bold pt-10">
                            Accolades
                        </h1>
                        <hr className="w-full border-pink-300"/>
                    </li>
                    <li>
                        <ul className="p-5">
                            <li><h2 className="text-1xl font-bold">Quality tested Web Interfaces, Traffic Controllers,
                                Radars, Surveillance Equipment and more.</h2></li>
                            <li><h2 className="text-1xl font-bold">Built over 1,500 automated test cases with
                                parameterization covering 10,000+ configuration permutations.</h2></li>
                            <li><h2 className="text-1xl font-bold">Improved CI stability by identifying, debugging, and
                                eliminating flaky tests from nightly CLI test runs.</h2></li>
                        </ul>
                    </li>
                    <li>
                        <CreditedWorks/>
                    </li>
                </ul>
            </div>
        </>
    )
}

export function Automation() {
    const toolsPaths = [python_alt_path, playwright_alt_path, selenium_alt_path, json_alt_path, sql_alt_path]
    const toolNames = ["Python", "Playwright", "Selenium", "JSON", "SQL"]
    const toolSkillRatings = ["S", "A", "C", "B", "C"]

    return (
        <>
            <div className="flex items-center">
                <ul>
                    <li>
                        <h1 className="text-3xl font-bold pt-6">
                            Current Role
                        </h1>
                        <hr className="w-full border-pink-300"/>
                    </li>
                    <li>
                        <div className="flex items-center gap-4 pt-8">
                            <img
                                className="w-24 h-24 border-2 p-2 border-rose-300 shadow-[0_0_25px_rgba(255,120,0,0.6)] focus:outline-none focus:ring-0"
                                src={python_alt_path} alt="automation"/>
                            <ul>
                                <li>
                                    <h1 className="inline text-3xl font-bold pt-10">
                                        Automation Engineer
                                    </h1>
                                </li>
                                <li>
                                    <h1 className="text-3xl font-bold">
                                        Years Experience: 7
                                    </h1>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <h1 className="text-3xl font-bold pt-6">
                            Skills:
                        </h1>
                        <hr className="w-full border-pink-300"/>
                        <SkillsBar skillList={toolsPaths} nameList={toolNames} proficiencyList={toolSkillRatings}/>
                    </li>
                    <li>
                        <h1 className="text-3xl font-bold pt-10">
                            Accolades
                        </h1>
                        <hr className="w-full border-pink-300"/>
                    </li>
                    <li>
                        <ul className="p-5">
                            <li><h2 className="text-1xl font-bold">Architected and implemented a Python-based automation
                                framework for traffic controller and radar systems.</h2></li>
                            <li><h2 className="text-1xl font-bold">Developed high-level Python APIs to abstract complex
                                hardware I/O and proprietary binary TCP/UDP protocols.</h2></li>
                            <li><h2 className="text-1xl font-bold">Crafted high-level APIs meant for those not
                                experienced in scripting.</h2></li>
                            <li><h2 className="text-1xl font-bold">Translated C++ struct definitions and database
                                conversion routines into reusable Python modules.</h2></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}

export function Unity() {
    const toolsPaths = [unity_alt_path, csharp_alt_path, json_alt_path]
    const toolNames = ["Unity", "C#", "JSON"]
    const toolSkillRatings = ["S", "A", "B"]

    return (
        <>
            <div className="flex items-center">
                <ul>
                    <li>
                        <h1 className="text-3xl font-bold pt-6">
                            Current Role
                        </h1>
                        <hr className="w-full border-pink-300"/>
                    </li>
                    <li>
                        <div className="flex items-center gap-4 pt-8">
                            <img
                                className="w-24 h-24 border-2 border-rose-300 shadow-[0_0_25px_rgba(255,120,0,0.6)] focus:outline-none focus:ring-0"
                                src={game_dev_alt_path} alt="game dev"/>
                            <ul>
                                <li>
                                    <h1 className="inline text-3xl font-bold pt-10">
                                        Game Developer
                                    </h1>
                                </li>
                                <li>
                                    <h1 className="text-3xl font-bold">
                                        Years Experience: 5
                                    </h1>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <h1 className="text-3xl font-bold pt-6">
                            Skills:
                        </h1>
                        <hr className="w-full border-pink-300"/>
                        <SkillsBar skillList={toolsPaths} nameList={toolNames} proficiencyList={toolSkillRatings}/>
                    </li>
                    <li>
                        <h1 className="text-3xl font-bold pt-10">
                            Accolades
                        </h1>
                        <hr className="w-full border-pink-300"/>
                    </li>
                    <li>
                        <ul className="p-5">
                            <li><h2 className="text-1xl font-bold"> Engineered a 10–20 hour 2D roguelite deckbuilder in
                                Unity using C#, featuring
                                multiple characters, complex card interactions, and tile-based dungeon systems.</h2>
                            </li>
                            <li><h2 className="text-1xl font-bold">Designed a data-driven card and effect system
                                supporting dynamic behaviors, status
                                stacking, and conditional logic across dozens of card types.</h2></li>
                            <li><h2 className="text-1xl font-bold">Implemented modular combat, AI, and progression
                                systems using event-driven
                                architecture to support extensibility and rapid feature iteration.</h2></li>
                            <li><h2 className="text-1xl font-bold">Developed even more prototypes including a Final
                                Fantasy roguelike, Parking Lot Racing game, Clicker RPG game, and more.</h2></li>
                        </ul>
                    </li>
                </ul>
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