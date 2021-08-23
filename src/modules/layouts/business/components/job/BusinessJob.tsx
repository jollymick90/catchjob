import { Job, Skill } from "../../../../../models/Skill";
import BusinessSpan from "../commons/BusinessSpan";

export interface BusinessJobProps {
    children?: React.ReactNode | undefined,
    job: Job
}
const BusinessJob = (props: BusinessJobProps) => {

    const JobSkill = ({ jobSkill }: { jobSkill: Skill }) => {
        return (
            <> 
                
                <li className="text-left">
                    {
                        jobSkill.name
                    }
                </li>
                
            </>
        )
    }

    const JobSkills = () => {

        return (
            props.job.skills ?
                <ul className="list-disc">
                    {
                        props.job.skills.map(skill => <JobSkill jobSkill={skill} />)
                    }
                </ul>
                : <></>

        )
    }
    return (
        <>
            <BusinessSpan>
                <div className="text-left mb-2 font-medium">{props.job.name}</div>
                <JobSkills />
            </BusinessSpan>
        </>
    )
}
export default BusinessJob;