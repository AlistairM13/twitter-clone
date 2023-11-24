import { useRouter } from 'next/router'

import Header from "@/components/Header";
import useUser from "@/hooks/useUser";
import { PuffLoader } from "react-spinners";
import UserHero from "@/components/users/UserHero";
import UserBio from "@/components/users/UserBio";

const UserPage = () => {
    const router = useRouter()
    const { userId } = router.query

    const { data: fetchedUser, isLoading } = useUser(userId as string)

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-full">
                <PuffLoader color="lightblue" size={80} />
            </div>
        )
    }
    if (!fetchedUser) {
        return (
            <div className="flex justify-center items-center h-full">
                <p className="text-neutral-400 text-sm">User not found</p>
            </div>
        )
    }

    return (
        <>
            <Header label={fetchedUser.name} showBackArrow />
            <UserHero userId={userId as string} />
            <UserBio userId={userId as string} />
        </>
    );
}

export default UserPage;