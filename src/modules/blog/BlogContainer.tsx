
export interface BlogContainerProps {
    children?: React.ReactNode | undefined
}
const BlogContainer = (props: BlogContainerProps) => {

    return (
        <>
            BlogContainer
            {props.children}
        </>
    )
}
export default BlogContainer;