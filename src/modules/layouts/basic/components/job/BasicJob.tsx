import { Job } from "../../../../../models/Skill";
import BasicSpan from "../commons/BasicSpan";

export interface BasicJobProps {
    children?: React.ReactNode | undefined,
    job: Job
}
const BasicJob = (props: BasicJobProps) => {

    return (
        <>                                
            <BasicSpan>
                {props.job.name}
            </BasicSpan>
        </>
    )
}
export default BasicJob;