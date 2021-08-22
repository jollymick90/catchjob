import { Skill } from "../../../../models/Skill";
import BusinessSkill from "./skill/BusinessSkill";


export interface BusinessSkillsProps {
    skills: Skill[]
}

const BusinessSkills = ({ skills }: BusinessSkillsProps) => {

    return (
        <>
            <div>
                {
                    skills.map(skill => <BusinessSkill skill={skill}></BusinessSkill>)
                }
            </div>
        </>
    )
}

export default BusinessSkills;
