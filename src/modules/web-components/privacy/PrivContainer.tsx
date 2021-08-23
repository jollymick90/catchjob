import { SDArrayString, SDNumber, SDString } from "../../../models/Generic";
import WrapPrivacyData from "./WrapPrivacyData";
export interface PrivContainerProps {
    data?: SDString | SDNumber | SDArrayString | string | number,
    children?: React.ReactNode | undefined
}
const PrivContainer = (props: PrivContainerProps) => {
    const privacyData = (props.data && typeof props.data ==="object") ? (props.data as SDString | SDNumber) : null;
    return (
        privacyData ? 
            <WrapPrivacyData data={privacyData}>
                { props.children }
            </WrapPrivacyData> : 
            <>
                { props.children }
            </>
    )
}
export default PrivContainer;