import { MainSkill } from "../../../../../models/Skill";
import BasicSpan from "../commons/BasicSpan";

export interface BasicSkillProps {
    children?: React.ReactNode | undefined,
    skill: MainSkill
}
const BasicSkill = (props: BasicSkillProps) => {

    return (
        <>
            <div>
                
                <BasicSpan>
                    {props.skill.name}
                </BasicSpan>
                
            </div>
            {props.children}
        </>
    )
}
export default BasicSkill;