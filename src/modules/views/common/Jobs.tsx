import { Job } from "../../../models/Skill";

export interface JobsProps {
    jobs: Job[]
}

const Jobs = ({ jobs }: JobsProps) => {

    return (
        <>
            <div>
                Jobs
            </div>
        </>
    )
}

export default Jobs;
