import { MyAboutMe } from "../../../../../models/Generic";
import PrivContainer from "../../../../web-components/privacy/PrivContainer";

export interface BusinessAboutMeProps {
    data: MyAboutMe,
    children?: React.ReactNode | undefined
}
const BusinessAboutMe = (props: BusinessAboutMeProps) => {

    return (
        <>
            { props.children }
            <PrivContainer data={props.data.word}>
                <div>{ props.data.word.value }</div>
            </PrivContainer>
            <PrivContainer data={props.data.short}>
            <div>{ props.data.short?.value }</div>
            </PrivContainer>
            <PrivContainer data={props.data.medium}>
            <div>{ props.data.medium?.value }</div>
            </PrivContainer>
   

        </>
    )
}
export default BusinessAboutMe;