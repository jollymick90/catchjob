
export interface BaseProps {
    children?: React.ReactNode | undefined
}
const Base = (props: BaseProps) => {

    return (
        <>
            {props.children}
        </>
    )
}
export default Base;