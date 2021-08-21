import { Resume } from "../../../models/Resume"
import Educations from "../common/Educations"
import Generic from "../common/Generic"
import Jobs from "../common/Jobs"
import Skills from "../common/Skills"

export interface BasicContainerProp {
    resume: Resume
}

const BasicContainer = ({ resume }: BasicContainerProp) => {

    return (
        <>
            <div>
                <Generic myInfo={resume.generic}></Generic>
                <Skills skills={resume.skills}></Skills>
                <Jobs jobs={resume.jobs}></Jobs>
                <Educations educations={resume.educations}></Educations>
            </div>
        </>
    )
}

export default BasicContainer;
