import { MainSkill } from "../../../../../models/Skill";
import BusinessSpan from "../commons/BusinessSpan";

export interface BusinessSkillProps {
    children?: React.ReactNode | undefined,
    skill: MainSkill,
    k?:string
}
const BusinessSkill = (props: BusinessSkillProps) => {

    return (
        <>
            <div key={props.k}>
                <BusinessSpan key={props.k}>
                    <div className="text-xl font-semibold">{props.skill.name}</div>
                </BusinessSpan>
            </div>
            {props.children}
        </>
    )
}
export default BusinessSkill;