import useUsers from "@/hooks/useUsers";
import Avatar from "../Avatar";

const FollowBar = () => {
    const { data: users = [], isLoading } = useUsers()

    if (users.length === 0) return null
    return (
        <div className="px-6 py-4 hidden lg:block">
            <div className="bg-neutral-800 rounded-xl p-4">
                <h2 className="text-white text-xl font-bold">You might like</h2>
                <div className="flex flex-col gap-6 mt-4">
                    {isLoading && <FollowPlaceholder count={5} />}
                    {users.map((user: Record<string, any>) =>
                        <div key={user.id} className="flex gap-4">
                            <Avatar userId={user.id} />
                            <div className="flex flex-col cursor-default">
                                <p className="text-white font-semibold text-sm">{user.name}</p>
                                <p className="text-neutral-400 text-sm">@{user.username}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}

const FollowPlaceholder = ({ count }: { count: number }) => {
    const placeholders = Array.from(Array(count), (_, i) => i + 1)
    return (
        <div role="status" className="max-w-sm animate-pulse">
            <span className="sr-only">Loading...</span>
            {placeholders.map(item => <FollowSkeleton key={item} isLast={item == count} />)}
        </div>
    )
}

const FollowSkeleton = ({ isLast }: { isLast: boolean }) => {
    return (
        <div className={`flex gap-2 ${isLast ? "mb-2" : "mb-4"} items-center`}>
            <div className="h-12 w-12 bg-gray-200 rounded-full dark:bg-neutral-700" />
            <div className="flex grow flex-col gap-2">
                <div className="h-4 w-1/2 bg-gray-200 rounded-sm  dark:bg-neutral-700" />
                <div className="h-4 w-3/4 bg-gray-200 rounded-sm  dark:bg-neutral-700" />
            </div>
        </div>
    )
}

export default FollowBar;
