import { Job } from "../../../../models/Skill";
import BasicJob from "./job/BasicJob";

export interface JobsProps {
    jobs: Job[]
}

const Jobs = ({ jobs }: JobsProps) => {

    return (
        <>
            <div>
                {
                    jobs.map(job => <BasicJob job={job}></BasicJob>)
                }
            </div>
        </>
    )
}

export default Jobs;
