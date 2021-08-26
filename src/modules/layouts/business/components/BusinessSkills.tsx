import { Skill } from "../../../../models/Skill";
import BusinessSkill from "./skill/BusinessSkill";


export interface BusinessSkillsProps {
    skills: Skill[]
}

const BusinessSkills = ({ skills }: BusinessSkillsProps) => {

    const businessList = skills.map((skill, i) => {
        const key = `${i}_bms`;
        const el = <BusinessSkill skill={skill} key={key} k={key}></BusinessSkill>
        return el
    });

    return (
        <>
            <div>
                <div className="flex w-full">
                    <span className="float-left text-right text-blue-500 text-xl">
                        Competenze principali / Main Skills
                    </span>
                </div>
                {
                    businessList
                }
            </div>
        </>
    )
}

export default BusinessSkills;
