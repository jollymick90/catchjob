import { Resume } from "../../../models/Resume"
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
