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
                    <div className="text-xl font-semibold">{props.skill.name}</div>
                </BusinessSpan>                
            </div>
            {props.children}
        </>
    )
}
export default BusinessSkill;