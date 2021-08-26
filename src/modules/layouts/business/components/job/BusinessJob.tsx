import { Job, Skill } from "../../../../../models/Skill";
import BusinessSpan from "../commons/BusinessSpan";

export interface BusinessJobProps {
    children?: React.ReactNode | undefined,
    job: Job,
    k?: string
}
const BusinessJob = (props: BusinessJobProps) => {

    const JobSkill = ({ jobSkill, k: key }: { jobSkill: Skill, k: string }) => {
        return (
            <>

                <li key={key} className="text-left">
                    {
                        jobSkill.name
                    }
                </li>

            </>
        )
    }

    const JobSkills = () => {

        const jobs = props.job.skills ? props.job.skills.map((skill, i) => {
            const key = `${i.toString()}`;
            <JobSkill key={key} k={key} jobSkill={skill} />
        }) : <></>

        return (
            props.job.skills ?
                <ul key={`${props.k}_ul`} className="list-disc">
                    {
                        jobs
                    }
                </ul>
                : <></>

        )
    }
    return (
        <>
            <BusinessSpan key={`${props.k}_bs`}>
                <div className="text-left mb-2 font-medium">{props.job.name}</div>
                <JobSkills />
            </BusinessSpan>
        </>
    )
}
export default BusinessJob;