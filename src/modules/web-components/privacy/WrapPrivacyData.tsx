import { PrivacyData } from "../../../models/Generic";

export interface WrapPrivacyDataProps {
    data: PrivacyData,
    children?: React.ReactNode | undefined
}

const WrapPrivacyData = ({ data, children }: WrapPrivacyDataProps) => {
    const hide = data.hide === true;
    return (
        <>
            {
                 hide ? <></> : 
                     <>
                        {children}
                     </>
                 

            } 
        </>
    )
}

export default WrapPrivacyData;