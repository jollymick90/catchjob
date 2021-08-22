
export interface BlogPageProps {
    children?: React.ReactNode | undefined
}
const BlogPage = (props: BlogPageProps) => {

    return (
        <>
            {props.children}
        </>
    )
}
export default BlogPage;