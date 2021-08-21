import { PrivacyData, RAddress, SDNumber, SDString } from "./Generic";

export interface Skill extends PrivacyData {
    name: string,
    value: number,
    maxValue: number,
    job?: number
}

export interface JobTime {
    dateFrom: string,
    dateTo: string,
    format?: string,
    yearMonthFrom?: string,
    yearMontTo?: string
}

export interface Job extends PrivacyData {
    titleCompany: SDString,
    titleMainJobDescription: SDString,
    skills: Skill[],    
    period: JobTime,
    order?: number,
    diary?: PostBlogJob[]
}

export interface PostBlogJob extends PrivacyData {
    description: string,
    text: string,
    title: string,
    date: string,
    dateFormat: string
}

export interface Education extends PrivacyData {
    schoolName: SDString,
    educationLevel: SDString,
    vote: SDString,
    skills?: Skill[],
    dateStart: SDString,
    dateEnd: SDString,
    formatDate?: string
}

export interface Experience extends PrivacyData {
    title: string,
    description?: string,
    skills?: Skill[],
    dateStart: SDString,
    dateEnd: SDString,
    formatDate?: string
}

