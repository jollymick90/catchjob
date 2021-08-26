import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResumeState } from "../../../reducers/resumeReducer";

import RInputText from "../../web-components/input/RInputText"

export interface EditGenericProps {
    children?: React.ReactNode | undefined
}
const EditGeneric = (props: EditGenericProps) => {

    const resumeState: ResumeState = useSelector((state: any) => state.resume);
    const dispatch = useDispatch();

    const [name, setName] = useState(resumeState.resume.generic.name);

    const updateName = (e: any) => {
        const value = e.target.value;
        setName(value);
        const resume = { ...resumeState.resume }
        resume.generic.name = value
        dispatch({
            type: "UPDATE",
            payload: { ...resume }
        })
    }
    return (
        <>
            <RInputText
                id="edit_name"
                value={name}
                onChange={e => updateName(e)}
            />

            {props.children}
        </>
    )
}
export default EditGeneric;