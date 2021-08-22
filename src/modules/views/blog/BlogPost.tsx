
export interface BlogPostProps {
    children?: React.ReactNode | undefined
}
const BlogPost = (props: BlogPostProps) => {

    return (
        <>
            {props.children}
        </>
    )
}
export default BlogPost;