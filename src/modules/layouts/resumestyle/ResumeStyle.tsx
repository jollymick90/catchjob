import { useState } from "react";
import resumeSample from "../../../static/sample";
import BasicContainer from "../basic/BasicContainer";
import BusinessContainer from "../business/BusinessContainer";


export interface ResumeStyleProps {
    children?: React.ReactNode | undefined,
}
const ResumeStyle = (props: ResumeStyleProps) => {

    const [ resume ] = useState(resumeSample);


    let container = <BasicContainer resume={resumeSample} />
     switch (resume.style.container) {
        case "business":
            container = <BusinessContainer resume={resumeSample} />    
            break;
    
        default:
            container = <BasicContainer resume={resumeSample} />
            break;
    }

    return (
        <>
    
        {
            container
        }
        
        
        
        </>
    )
}
export default ResumeStyle;