
export interface WorkerContainerProps {
    children?: React.ReactNode | undefined
}
const WorkerContainer = (props: WorkerContainerProps) => {

    return (
        <>
        <div className="h-screen">
        Ciao ciao ciao ciao
            {props.children}
        </div>

        </>
    )
}
export default WorkerContainer;