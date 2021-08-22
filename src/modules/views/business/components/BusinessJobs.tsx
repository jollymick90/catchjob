import { Job } from "../../../../models/Skill";
import BusinessJob from "./job/BusinessJob";

export interface BusinessJobsProps {
    jobs: Job[]
}

const BusinessJobs = ({ jobs }: BusinessJobsProps) => {

    return (
        <>
            <div>
                {
                    jobs.map(job => <BusinessJob job={job}></BusinessJob>)
                }
            </div>
        </>
    )
}

export default BusinessJobs;
