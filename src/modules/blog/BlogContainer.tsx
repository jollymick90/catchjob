
export interface BlogContainerProps {
    children?: React.ReactNode | undefined
}
const BlogContainer = (props: BlogContainerProps) => {

    return (
        <>
            {props.children}
        </>
    )
}
export default BlogContainer;