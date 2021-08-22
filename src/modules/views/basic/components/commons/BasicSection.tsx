export interface BasicSectionProps {
    children?: React.ReactNode | undefined
}
const BasicSection = (props: BasicSectionProps) => {

    return (
        <>
            <div className="mt-4 p-3 border-green-50 border-l-4">
                {props.children}
            </div>
        </>
    )
}
export default BasicSection;