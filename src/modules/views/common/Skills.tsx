import { Skill } from "../../../models/Skill";

export interface SkillsProps {
    skills: Skill[]
}

const Skills = ({ skills }: SkillsProps) => {

    return (
        <>
            <div>
                Skills
            </div>
        </>
    )
}

export default Skills;
