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
                value: "3450727649"
            }
        },
        bday: {
            dateString: "29/12/1991",
            format: "dd/MM/yyyy"
        },
        address: {
            country: {
                value: "Italy"
            },
            city: {
                value: "Mira",
            },
            cap: {
                value: "30034"
            },
            street: {
                value: "Via Malcanton, 65"
            }

        },
        aboutMe: {
            word: {
                value: "Super Miky"
            },
            short: {
                value: "Ciao, sono Miky e sono brava."
            },
            medium: {
                value: "Il mio nome è Mihaela Dumitrache e sono originaria dalla Romania. Vivo in Italia da 18 anni e padroneggio l'idioma italiano a livello C2.Sono attualmente studente di Giurisprudenza presso l'Università degli Studi di Padova, come d'altronde si evince dal mio CV.",
                hide: true
            },
            long: {
                value: [
                    "Cari Elettori, l'avvio dell'azione generale di informazione delle attitudini assolve dei doveri importanti nella determinazione delle condizioni finanziarie e amministrative esistenti.",
                    "La pratica della vita quotidiana dimostra che, la complessità e la collocazione degli studi degli organici assolve dei doveri importanti nella determinazione delle appropriate condizioni di attività.",
                    "La pratica della vita quotidiana dimostra che, la consultazione con i numerosi militanti contribuisce alla preparazione e alla realizzazione delle direzioni di sviluppo per l'avvenire.",
                    "Non è indispensabile argomentare molto il peso e il significato di questi problemi, giacché la consultazione con i numerosi militanti ostacola l'apprezzamento dell'importanza delle nuove proposizioni."
                ],
                hide: true
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
            name: "Receptionist Hotel",
            titleCompany: {
                value: "Villa Patriarca Mirano",
            },
            period: {
                yearMontTo: "2021/06",
                yearMonthFrom: "2021/08"
            },
            skills: [
                {
                    name: "Check In/Checkout",
                    value: 90,
                    maxValue: 100
                },
                {
                    name: "Gestione dei cazzo di problemi dei clienti",
                    value: 90,
                    maxValue: 100
                },
                {
                    name: "Gestione dei cazzo di problemi del capo",
                    value: 90,
                    maxValue: 100
                },
                {
                    name: "Gestione dei cazzo di problemi di quella stronza della moglie del capo",
                    value: 90,
                    maxValue: 100
                }
            ]

        },
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