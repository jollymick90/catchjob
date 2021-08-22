import { Resume } from "../models/Resume";

const resumeSample: Resume = {
    style: {
        container: "business"
    },
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
    skills: [
        {
            name: "Communication",
            value: 90,
            maxValue: 100,
        },
        {
            name: "Time Managment",
            value: 90,
            maxValue: 100,
        },
        {
            name: "Resource Managment",
            value: 70,
            maxValue: 100,
        }
    ],
    jobs: [
        {
            name: "Barista/Banconista/Addetta alle colazioni",
            titleCompany: {
                value: "Luogo"
            },
            period: {
                yearMonthFrom: "2017/02"
            },
            skills: [
                {
                    name: "Carico e Scarico magazzino",
                    value: 90,
                    maxValue: 100
                },
                {
                    name: "Pulizia e riordino dei tavoli"
                }
            ]
        }
    ],
    educations: [],
    experiences: []
}

export default resumeSample;