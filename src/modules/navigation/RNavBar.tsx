import { Link } from "react-router-dom"

export interface RNavBarProps {
    children?: React.ReactNode | undefined
}
const RNavBar = (props: RNavBarProps) => {

    return (
        <>
            <nav>
                <Link to="/">Reading</Link>
                <Link to="/edit">Edit</Link>
                <Link to="/Blog">Blog</Link>
            </nav>
            
        </>
    )
}
export default RNavBar;