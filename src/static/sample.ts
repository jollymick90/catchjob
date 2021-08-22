import { Resume } from "../models/Resume";

const resumeSample: Resume = {
    generic: {
        name: "Mihaela Oana",
        whoiam: "Best Employ who every Boss desire",
        lastname: { 
            value: "Dumitrache" 
        },
        surname: { 
            value: "Dumi Dumi" 
        },
        contact: {
            email: { 
                value: "mihaelaoana.dumitrache@yahoo.it" 
            },
            phone: { 
                value: "" 
            }
        },
        aboutMe: {
            word: {
                value: "Super Miky"
            }
        }

    }, 
    skills: [],
    jobs: [],
    educations: [],
    experiences:[]
}

export default resumeSample;