import {github_link, github_path, linkedin_link, linkedin_path} from "./constants.js";
import {HoverImageWithBadge} from "./HomeContext.jsx";
import {HoverImage} from "./HoverImage.jsx";


export function SkillsBar({ skillList, nameList, proficiencyList }) {
    return (
        <>
            <div className="inline-flex p-2 gap-4">

                {skillList.map((skill, index) => (
                    <div key={index}>
                        <HoverImageWithBadge path={skill} name={nameList[index]}>{proficiencyList[index]}</HoverImageWithBadge>
                    </div>
                ))}
            </div>
        </>
    )
}

export function SocialMediaBar() {
    return (
        <>
            <div className="inline-flex p-2 gap-4">
                <a href={github_link}><img className="w-14 h-14 p-1 border-2 border-rose-300 hover:shadow-[0_0_25px_rgba(255,120,0,0.6)] focus:outline-none focus:ring-0" src={github_path} alt="github" /></a>
                <a href={linkedin_link}><img className="w-14 h-14 p-1 border-2 border-rose-300 hover:shadow-[0_0_25px_rgba(255,120,0,0.6)] focus:outline-none focus:ring-0" src={linkedin_path} alt="linkedin" /></a>
            </div>
        </>
    )
}


export function ToolsUsedBar( { toolsUsed, names } ) {
    return (
        <>
            <div>
                <h1 className="text-xl font-bold text-white">Tools Used</h1>
                <div className="inline-flex p-2 gap-4">
                    {toolsUsed.map((path, index) => (
                        <div key={index}>
                            <HoverImage path={path} name={names[index]}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}