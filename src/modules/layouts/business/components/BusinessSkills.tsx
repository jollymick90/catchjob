import { Skill } from "../../../../models/Skill";
import BusinessSkill from "./skill/BusinessSkill";


export interface BusinessSkillsProps {
    skills: Skill[]
}

const BusinessSkills = ({ skills }: BusinessSkillsProps) => {

    return (
        <>
            <div>
                <div className="flex w-full">
                    <span className="float-left text-right text-blue-500 text-xl">
                        Competenze principali / Main Skills
                    </span>
                </div>
                {
                    skills.map(skill => <BusinessSkill skill={skill}></BusinessSkill>)
                }
            </div>
        </>
    )
}

export default BusinessSkills;
