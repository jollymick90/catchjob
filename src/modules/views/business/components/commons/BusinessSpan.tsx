export interface BusinessSpanProps {
    children?: React.ReactNode | undefined
}
const BusinessSpan = (props: BusinessSpanProps) => {

    return (
        <>
            <div className="m-4 border-blue-50 border-b-4">
                {props.children}
            </div>
        </>
    )
}
export default BusinessSpan;