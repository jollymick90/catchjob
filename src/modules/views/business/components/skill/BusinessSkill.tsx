import { MainSkill } from "../../../../../models/Skill";
import BusinessSpan from "../commons/BusinessSpan";

export interface BusinessSkillProps {
    children?: React.ReactNode | undefined,
    skill: MainSkill
}
const BusinessSkill = (props: BusinessSkillProps) => {

    return (
        <>
            <div>
                
                <BusinessSpan>
                    {props.skill.name}
                </BusinessSpan>
                
            </div>
            {props.children}
        </>
    )
}
export default BusinessSkill;