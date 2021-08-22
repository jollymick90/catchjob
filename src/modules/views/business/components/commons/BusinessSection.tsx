export interface BusinessSectionProps {
    children?: React.ReactNode | undefined
}
const BusinessSection = (props: BusinessSectionProps) => {

    return (
        <>
            <div className="mt-4 p-3 border-green-600 border-r-2">
                {props.children}
            </div>
        </>
    )
}
export default BusinessSection;