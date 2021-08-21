import { MyInfo } from "./Generic";
import { Education, Experience, Job, Skill } from "./Skill";

export interface Resume {
    generic: MyInfo,
    skills: Skill[],
    jobs: Job[],
    educations: Education[]
    experiences: Experience[]
}