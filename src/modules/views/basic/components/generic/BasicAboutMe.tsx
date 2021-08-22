import { MyAboutMe } from "../../../../../models/Generic";

export interface BasicAboutMeProps {
    data: MyAboutMe,
    children?: React.ReactNode | undefined
}
const BasicAboutMe = (props: BasicAboutMeProps) => {

    return (
        <>
            { props.children }
        </>
    )
}
export default BasicAboutMe;