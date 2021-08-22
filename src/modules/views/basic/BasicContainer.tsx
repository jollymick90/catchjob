import { Resume } from "../../../models/Resume"
import BasicSection from "./components/commons/BasicSection"
import Educations from "./components/Educations"
import Generic from "./components/Generic"
import Jobs from "./components/Jobs"
import Skills from "./components/Skills"

export interface BasicContainerProp {
    resume: Resume
}

const BasicContainer = ({ resume }: BasicContainerProp) => {

    return (
        <>
            <div className="mt-4 mx-8">
                <BasicSection>
                    <Generic myInfo={resume.generic}></Generic>
                </BasicSection>
                <BasicSection>
                    <Skills skills={resume.skills}></Skills>
                </BasicSection>
                <BasicSection>
                    <Jobs jobs={resume.jobs}></Jobs>
                </BasicSection>
                <BasicSection>
                    <Educations educations={resume.educations}></Educations>
                </BasicSection>
            </div>
        </>
    )
}

export default BasicContainer;
