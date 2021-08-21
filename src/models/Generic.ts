export interface PrivacyData {
    hide?: boolean
}

export interface SDString extends PrivacyData {
    value: string
}

export interface SDNumber extends PrivacyData {
    value: number    
}

export interface BDay extends PrivacyData {
    dateString: string,
    format: string
}

export interface RAddress extends PrivacyData {
    city: SDString,
    cap?: SDString,
    street?: SDString
}

export interface MyContact extends PrivacyData {
    phone: SDString,
    email: SDString    
}
export interface MySocial extends PrivacyData {
    twitter: SDString,
    linkedin: SDString        
}

export interface MyAboutMe extends PrivacyData {
    word: SDString,
    short?: SDString,
    medium?: SDString,
    long?: SDString
}

export interface MyInfo {
    name: string,
    lastname: SDString,
    surname: SDString,
    contact: MyContact,
    aboutMe: MyAboutMe,
    whoiam: string,

    nationality?: SDString,
    social?: MySocial,
    bday?: BDay,
    address?: RAddress,
    sex?: SDString,
}