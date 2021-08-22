import { useState } from "react";
import { SDNumber, SDString } from "../../../../../models/Generic";
import WrapPrivacyData from "../../../../web-components/privacy/WrapPrivacyData";

export interface InfoDataProps {
    data: SDString | SDNumber | string | number,
    // value?: string | number,
    children?: React.ReactNode | undefined,
    customClass?: string,
    overwrite?: boolean
}

const InfoData = (props: InfoDataProps) => {

    const [ data ] = useState((props.data && typeof props.data ==="object") ? props.data.value : props.data);
    

    const PrivContainer = (privProp: any) => {
        const privacyData = (props.data && typeof props.data ==="object") ? (props.data as SDString | SDNumber) : null;
        return (
            privacyData ? 
                <WrapPrivacyData data={privacyData}>
                    { privProp.children }
                </WrapPrivacyData> : 
                <>
                    { privProp.children }
                </>
        )
    }

    return (
        <>
            {
                <PrivContainer>
                    <div className="border-2 border-gray-200 ">
                        {
                            data
                        }
                    </div>
                </PrivContainer>

            }
        </>
    )
}

export default InfoData;