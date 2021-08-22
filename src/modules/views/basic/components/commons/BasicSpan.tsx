export interface BasicSpanProps {
    children?: React.ReactNode | undefined
}
const BasicSpan = (props: BasicSpanProps) => {

    return (
        <>
            <div className="m-4 border-blue-50 border-b-4">
                {props.children}
            </div>
        </>
    )
}
export default BasicSpan;