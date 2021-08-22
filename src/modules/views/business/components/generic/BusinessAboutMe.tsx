import { MyAboutMe } from "../../../../../models/Generic";

export interface BusinessAboutMeProps {
    data: MyAboutMe,
    children?: React.ReactNode | undefined
}
const BusinessAboutMe = (props: BusinessAboutMeProps) => {

    return (
        <>
            { props.children }
        </>
    )
}
export default BusinessAboutMe;