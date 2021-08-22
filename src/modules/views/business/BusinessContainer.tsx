import { Resume } from "../../../models/Resume"
import BusinessSection from "./components/commons/BusinessSection"
import BusinessEducations from "./components/BusinessEducations"
import BusinessGeneric from "./components/BusinessGeneric"
import BusinessJobs from "./components/BusinessJobs"
import BusinessSkills from "./components/BusinessSkills"

export interface BusinessContainerProp {
    resume: Resume
}

const BusinessContainer = ({ resume }: BusinessContainerProp) => {

    return (
        <>
            <div className="mt-4 mx-8">
                <BusinessSection>
                    <BusinessGeneric myInfo={resume.generic}></BusinessGeneric>
                </BusinessSection>
                <BusinessSection>
                    <BusinessSkills skills={resume.skills}></BusinessSkills>
                </BusinessSection>
                <BusinessSection>
                    <BusinessJobs jobs={resume.jobs}></BusinessJobs>
                </BusinessSection>
                <BusinessSection>
                    <BusinessEducations educations={resume.educations}></BusinessEducations>
                </BusinessSection>
            </div>
        </>
    )
}

export default BusinessContainer;
