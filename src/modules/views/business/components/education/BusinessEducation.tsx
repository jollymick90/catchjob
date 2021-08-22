
import { Education } from "../../../../../models/Skill";

export interface BusinessEducationProps {
    data: Education,
    children?: React.ReactNode | undefined
}
const BusinessEducation = (props: BusinessEducationProps) => {

    return (
        <>
            { props.children }
        </>
    )
}
export default BusinessEducation;