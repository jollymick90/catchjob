import { SDNumber, SDString } from "../../../../../models/Generic";
import PrivContainer from "../../../../web-components/privacy/PrivContainer";

export interface BusinessInfoDataProps {
    data: SDString | SDNumber | string | number,

    children?: React.ReactNode | undefined,
    customClass?: string,
    overwrite?: boolean
}

const BusinessInfoData = (props: BusinessInfoDataProps) => {

    const dataNoState = (props.data && typeof props.data === "object") ? props.data.value : props.data;
    
    let show = true;
    
    const isHide = () => {
        if ((props.data && typeof props.data === "object")) {
            const data = props.data as SDString | SDNumber
            show = data.hide !== true;
        } else {
            show = true;
        }
    }

    isHide();

    return (
        <>
            {
                show ? 
                <PrivContainer data={dataNoState}>
                    <div className="border-2 border-gray-200 ">
                        {
                            dataNoState
                        }
                    </div>
                </PrivContainer>
                : <></>
            }
        </>
    )
}

export default BusinessInfoData;