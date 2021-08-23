import ResumeStyle from "../layouts/resumestyle/ResumeStyle";
import WorkerContainer from "./WorkerContainer"

export interface EditContainerProps {
    children?: React.ReactNode | undefined
}
const EditContainer = (props: EditContainerProps) => {

    return (
        <>
            <div className="grid grid-cols-2">
                <WorkerContainer />
                <ResumeStyle />
            </div>
        </>
    )
}
export default EditContainer;