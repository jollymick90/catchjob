import { MyInfo } from "./Generic";
import { ResumeStyle } from "./ResumeStyle";
import { Education, Experience, Job, Skill } from "./Skill";

export interface Resume {
    style: ResumeStyle,
    generic: MyInfo,
    skills: Skill[],
    jobs: Job[],
    educations: Education[]
    experiences: Experience[]
}