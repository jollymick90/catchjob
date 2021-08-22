export interface BlogPost {
    
    title: string,
    subtitle?: string,
    images?: string[],
    paragraphList?: Paragraph[],
    idPost?: string,
    links?: string[]
}

export interface Paragraph {
    text: string,
    title?: string,
    subtitle?: string,
    note?: string,
    images?: string[]
}