import { useCallback } from 'react'
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link'

interface HeaderProps {
    label: string
    showBackArrow?: boolean
}

const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
    const router = useRouter()

    const handleBack = useCallback(() => {
        router.back()
    }, [router])

    return (
        <div className="border-b-[1px] flex justify-between items-center border-neutral-800 p-5">
            <div className="flex items-center gap-2">
                {showBackArrow && (
                    <BiArrowBack
                        onClick={handleBack}
                        color="white"
                        size={20}
                        className="cursor-pointer hover:opacity-70 transition"
                    />
                )}
                <h1 className="text-white text-xl font-bold">{label}</h1>
            </div>
            {label == "Home" && <Link target="_github" href="https://github.com/AlistairM13/twitter-clone">
                <FaGithub size={30} />
            </Link>}
        </div>
    );
}

export default Header;