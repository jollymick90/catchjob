import { Education } from "../../../../models/Skill";
import BusinessEducation from "./education/BusinessEducation";

export interface BusinessEducationsProps {
    educations: Education[]
}
const BusinessEducations = ({ educations }: BusinessEducationsProps) => {

    return (
        <>
            <div>
                {
                    educations.map(ed => <BusinessEducation data={ed}></BusinessEducation>)
                }
            </div>
        </>
    )
}

export default BusinessEducations;
