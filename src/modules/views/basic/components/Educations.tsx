import { Education } from "../../../../models/Skill";
import BasicEducation from "./education/BasicEducation";

export interface EducationsProps {
    educations: Education[]
}
const Educations = ({ educations }: EducationsProps) => {

    return (
        <>
            <div>
                {
                    educations.map(ed => <BasicEducation data={ed}></BasicEducation>)
                }
            </div>
        </>
    )
}

export default Educations;
