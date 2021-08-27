
import { useState } from "react";
import { useSelector } from "react-redux";
import { ResumeState } from "../../../reducers/resumeReducer";

import BasicContainer from "../basic/BasicContainer";
import BusinessContainer from "../business/BusinessContainer";


export interface ResumeStyleProps {
    children?: React.ReactNode | undefined,
}
const ResumeStyle = (props: ResumeStyleProps) => {
    const resState: ResumeState = useSelector((state: any) => state.resume);

    const [ resume ] = useState(resState.resume);

    let container = <BasicContainer resume={resume} />
    
    switch (resState.resume.style.container) {

        case "business":
            container = <BusinessContainer />
            break;

        default:
            container = <BasicContainer resume={resume} />
            break;
    }

    return (
        <>
            <div className="h-screen">
                {
                    container
                }
            </div>

        </>
    )
}
export default ResumeStyle;