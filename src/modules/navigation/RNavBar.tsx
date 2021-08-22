
export interface RNavBarProps {
    children?: React.ReactNode | undefined
}
const RNavBar = (props: RNavBarProps) => {

    return (
        <>
            {props.children}
        </>
    )
}
export default RNavBar;