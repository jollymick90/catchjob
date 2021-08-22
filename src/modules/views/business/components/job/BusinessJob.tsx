import { Job } from "../../../../../models/Skill";
import BusinessSpan from "../commons/BusinessSpan";

export interface BusinessJobProps {
    children?: React.ReactNode | undefined,
    job: Job
}
const BusinessJob = (props: BusinessJobProps) => {

    return (
        <>                                
            <BusinessSpan>
                {props.job.name}
            </BusinessSpan>
        </>
    )
}
export default BusinessJob;