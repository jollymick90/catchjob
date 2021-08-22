import BlogContainer from "../blog/BlogContainer";
import ResumeStyle from "../layouts/resumestyle/ResumeStyle";
import { RouteComponent, SwitchRenderRoutes } from "../router/router";

export interface RNavigationProps {
    children?: React.ReactNode | undefined
}

const ROUTES: RouteComponent[] = [
    {
        path: "/",
        key: "root",
        exact: true,
        component: ResumeStyle
    },
    {
        path: "/blog",
        key: "blog",
        exact: true,
        component: BlogContainer
    }
]

const RNavigation = (props: RNavigationProps) => {

    return (
        <>
            <SwitchRenderRoutes routes={ROUTES} />
        </>
    )
}
export default RNavigation;