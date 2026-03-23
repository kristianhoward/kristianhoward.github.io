import {CyclingImage} from "./CyclingImage.jsx";
import {useState} from "react";
import {
    csharp_alt_path, father_alt_path, home_display_img_paths, home_display_img_names,
    javascript_alt_path,
    playwright_alt_path,
    python_alt_path,
    selenium_alt_path, sql_alt_path, unity_alt_path, typescript_alt_path, react_alt_path,
} from "./constants.js";
import {SkillsBar, SocialMediaBar} from "./ToolBar.jsx";

export function Home() {
    const skills = [python_alt_path, unity_alt_path, csharp_alt_path, playwright_alt_path, javascript_alt_path, selenium_alt_path, sql_alt_path, react_alt_path, typescript_alt_path];
    const names = ["Python", "Unity", "C#", "Playwright", "JavaScript", "Selenium", "SQL", "React", "TypeScript"];
    const proficiencies = ["S", "A", "A", "B", "B", "C", "C", "C", "C"];
    const [hoveredIndex] = useState(null);

    return (<>
        <div className="grid grid-cols-1 gap-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center">
                    <ul>
                        <li>
                            <h1 className="text-3xl font-bold">
                                Name
                            </h1>
                            <hr className="w-full border-pink-300"/>
                        </li>
                        <li>
                            <h1 className="text-2xl font-bold pt-4 pl-4 ">
                                Kristian Howard Jr
                            </h1>
                            <h2 className="text-1xl font-bold pl-4">SDET with 7 years experience focused on scalable systems solutions</h2>
                        </li>
                        <li>
                            <h1 className="text-3xl font-bold pt-6">
                                Current Role
                            </h1>
                            <hr className="w-full border-pink-300"/>
                        </li>
                        <li>
                            <div className="flex items-center gap-4 pt-8">
                                <img className="w-24 h-24 border-2 border-rose-300 shadow-[0_0_25px_rgba(255,120,0,0.6)] focus:outline-none focus:ring-0" src={father_alt_path} alt="father" />
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
                            <h1 className="text-3xl font-bold pt-10">
                                Titles
                            </h1>
                            <hr className="w-full border-pink-300"/>
                        </li>
                        <li>
                            <ul className="p-5">
                                <li><h2 className="text-2xl font-bold">Automation Engineer</h2></li>
                                <li><h2 className="text-2xl font-bold">Game Developer</h2></li>
                                <li><h2 className="text-2xl font-bold">QA Engineer</h2></li>
                            </ul>
                        </li>
                        <li>
                            <h1 className="text-3xl font-bold pt-6">
                                Skills:
                            </h1>
                            <hr className="w-full border-pink-300"/>

                            <div className="p-4">
                                <SkillsBar skillList={skills} nameList={names} proficiencyList={proficiencies} />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="justify-start">
                    <CyclingImage
                        images={home_display_img_paths}
                        imagesNames={home_display_img_names}
                        hoveredIndex={hoveredIndex}
                    />
                    <h1 className="text-3xl font-bold pt-5">
                        Social Media:
                    </h1>
                    <div className="p-4">
                        <SocialMediaBar/>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export function ProficiencyBadge({ children }) {
    return (
        <>
            <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2
                    bg-black/70 px-2 py-0.5 rounded-full shadow-md">
                <h2 className="text-sm font-bold text-yellow-300 leading-none">
                    { children }
                </h2>
            </div>
        </>
    )
}

export function HoverImageWithBadge( { path, name, children }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative w-14 h-14">
            <img
                className="w-14 h-14 p-1 border-2 border-rose-300 hover:shadow-[0_0_25px_rgba(255,120,0,0.6)] focus:outline-none focus:ring-0"
                src={path} alt="python"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
            <ProficiencyBadge>{children}</ProficiencyBadge>
            <div className="items-center absolute">
                {isHovered && (
                    <p className="font-bold">{name}</p>
                )}
            </div>
        </div>
    );
}
