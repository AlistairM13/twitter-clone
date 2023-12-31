import Form from "@/components/Form"
import Header from "@/components/Header"
import CommentFeed from "@/components/posts/CommentFeed"
import PostItem from "@/components/posts/PostItem"
import Head from 'next/head'
import usePost from "@/hooks/usePost"
import { useRouter } from "next/router"
import { PuffLoader } from "react-spinners"

const PostPage = () => {
    const router = useRouter()
    const { postId } = router.query

    const { data: fetchedPost, isLoading } = usePost(postId as string)

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-full">
                <PuffLoader color="lightblue" size={80} />
            </div>
        )
    }
    if (!fetchedPost) {
        return (
            <div className="flex justify-center items-center h-full">
                <p className="text-neutral-400 text-sm">User not found</p>
            </div>
        )
    }


    return (
        <>
            <Head key="title">
                <title>{fetchedPost?.user?.username ? `@${fetchedPost?.user?.username}` : "Twitter"}</title>
            </Head>
            <Header showBackArrow label="Tweet" />
            <PostItem data={fetchedPost} />
            <Form postId={postId as string} isComment placeholder="Tweet your reply" />
            <CommentFeed comments={fetchedPost?.comments} />
        </>
    )
}

export default PostPage