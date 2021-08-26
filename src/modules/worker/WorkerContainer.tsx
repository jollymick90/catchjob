import EditGeneric from "./generic/EditGeneric"

export interface WorkerContainerProps {
    children?: React.ReactNode | undefined
}
const WorkerContainer = (props: WorkerContainerProps) => {

    return (
        <>
        <div className="h-screen">
            <EditGeneric></EditGeneric>
            {props.children}
        </div>

        </>
    )
}
export default WorkerContainer;