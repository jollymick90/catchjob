import { Skill } from "../../../../models/Skill";
import BasicSkill from "./skill/BasicSkill";


export interface SkillsProps {
    skills: Skill[]
}

const Skills = ({ skills }: SkillsProps) => {

    return (
        <>
            <div>
                {
                    skills.map(skill => <BasicSkill skill={skill}></BasicSkill>)
                }
            </div>
        </>
    )
}

export default Skills;
