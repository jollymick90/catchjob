
import { Education } from "../../../../../models/Skill";

export interface BasicEducationProps {
    data: Education,
    children?: React.ReactNode | undefined
}
const BasicEducation = (props: BasicEducationProps) => {

    return (
        <>
            { props.children }
        </>
    )
}
export default BasicEducation;