import usePosts from "@/hooks/usePosts"
import PostItem from "./PostItem"
import { PuffLoader } from "react-spinners"

interface PostFeedProps {
    userId?: string
}
const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
    const { data: posts = [], isLoading } = usePosts(userId)

    return (
        <>
            {isLoading && <div className="flex justify-center mt-10">
                <PuffLoader color="lightblue" size={80} />
            </div>
            }
            {posts.map((post: Record<string, any>) => (
                <PostItem
                    userId={userId}
                    key={post.id}
                    data={post}
                />
            ))}
        </>
    )
}

export default PostFeed