import { Education } from "../../../models/Skill";

export interface EducationsProps {
    educations: Education[]
}
const Educations = ({ educations }: EducationsProps) => {

    return (
        <>
            <div>
                Educations
            </div>
        </>
    )
}

export default Educations;
