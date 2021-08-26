
import { Resume } from "../models/Resume";
import resumeSample from "../static/sample";


export type Action = { type: 'UPDATE', payload: Resume }
export interface ResumeState {
    resume: Resume
}

const initState: ResumeState =  {
    resume: resumeSample
}
const resumeReducer = (state = initState, action: Action) => {
    switch(action.type) {
        case "UPDATE":
            debugger

            const result = {
                ...state,
                resume: { ...action.payload }
                
            }
            console.log(result)
            return result
        default:
            return state;
        
    }
}

export default resumeReducer;