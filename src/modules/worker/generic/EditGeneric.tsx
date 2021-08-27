import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SDString } from "../../../models/Generic";
import { ResumeState } from "../../../reducers/resumeReducer";
import RDataPrivacyInputText from "../../web-components/input/RDataPrivacyInputText";

import RInputText from "../../web-components/input/RInputText"

export interface EditGenericProps {
    children?: React.ReactNode | undefined
}
const EditGeneric = (props: EditGenericProps) => {

    const resumeState: ResumeState = useSelector((state: any) => state.resume);
    const dispatch = useDispatch();

    const [name, setName] = useState(resumeState.resume.generic.name);
    const [lastname, setLastname] = useState(resumeState.resume.generic.lastname);

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


    const updateLastName = (e: SDString) => {
        const value = e;
        setLastname(value);
        const resume = { ...resumeState.resume }
        resume.generic.lastname = value
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

            <RDataPrivacyInputText
                id="edit_lastname"
                value={lastname}
                onChange={e => updateLastName(e)}
            />

            {props.children}
        </>
    )
}
export default EditGeneric;