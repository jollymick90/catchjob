import { useState } from "react";
import { SDNumber, SDString } from "../../../../../models/Generic";
import PrivContainer from "../../../../web-components/privacy/PrivContainer";

export interface InfoDataProps {
    data: SDString | SDNumber | string | number,

    children?: React.ReactNode | undefined,
    customClass?: string,
    overwrite?: boolean
}

const InfoData = (props: InfoDataProps) => {

    const [data] = useState((props.data && typeof props.data === "object") ? props.data.value : props.data);

    return (
        <>
            {
                <PrivContainer data={props.data}>
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