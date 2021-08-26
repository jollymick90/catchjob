import { useState } from "react";
import { SDNumber, SDString } from "../../../../../models/Generic";
import PrivContainer from "../../../../web-components/privacy/PrivContainer";

export interface BusinessInfoDataProps {
    data: SDString | SDNumber | string | number,

    children?: React.ReactNode | undefined,
    customClass?: string,
    overwrite?: boolean
}

const BusinessInfoData = (props: BusinessInfoDataProps) => {

    const [data] = useState((props.data && typeof props.data === "object") ? props.data.value : props.data);
    
    const dataNoState = (props.data && typeof props.data === "object") ? props.data.value : props.data;
    console.log("BusinessInfoData", data, dataNoState)

    return (
        <>
            {
                <PrivContainer data={dataNoState}>
                    <div className="border-2 border-gray-200 ">
                        {
                            dataNoState
                        }
                    </div>
                </PrivContainer>
            }
        </>
    )
}

export default BusinessInfoData;