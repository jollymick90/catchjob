
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
            const result = {
                ...state,
                resume: { ...action.payload }
                
            }
            return result
        default:
            return state;
        
    }
}

export default resumeReducer;