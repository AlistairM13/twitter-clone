import { useRouter } from 'next/router';
import { BsHouseFill, BsBellFill, BsTwitter } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'
import { FaFeather, FaUser } from 'react-icons/fa'
import { IconType } from 'react-icons'

const Sidebar = () => {
     const items = [
          {
               label: "Home",
               href: "/",
               icon: BsHouseFill
          },
          {
               label: "Notifications",
               href: "/notifications",
               icon: BsBellFill
          },
          {
               label: "Profile",
               href: "/users/1",
               icon: FaUser
          },
     ]
     return (
          <div className='cols-span-1 h-full pr-4 md:pr-6'>
               <div className="flex flex-col items-end">
                    <div className="space-y-2 lg:w-[230px]">
                         <SidebarLogo />
                         {items.map(item => (
                              <SidebarItem
                                   key={item.href}
                                   href={item.href}
                                   label={item.label}
                                   icon={item.icon}
                              />
                         ))}
                         <SidebarItem onClick={() => { }} label="Logout" icon={BiLogOut} />
                         <SidebarTweetButton />
                    </div>
               </div>
          </div>
     );
}

export default Sidebar;

const SidebarLogo = () => {
     const router = useRouter()

     return (
          <div
               onClick={() => router.push("/")}
               className="rounded-full h-14  w-15 p-4 flex
                         items-center justify-center
                         lg:justify-start hover:bg-blue-300 
                         hover:bg-opacity-10 cursor-pointer transition"
          >
               <BsTwitter size={28} color="white" />
          </div>
     )
}

interface SidebarItemProps {
     label: String
     href?: string
     icon: IconType
     onClick?: () => void
}

const SidebarItem: React.FC<SidebarItemProps> = ({
     label, href, icon: Icon, onClick
}) => {
     return (
          <div className='flex items-center'>
               <div
                    className="relative rounded-full h-14 w-14 p-4 flex 
                              items-center justify-center hover:bg-slate-300 hover:bg-opacity-10 
                              cursor-pointer lg:hidden"
               >
                    <Icon size={28} color="white" />
               </div>
               <div
                    className="relative hidden items-center lg:flex gap-4 p-4 rounded-full
                              hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer"
               >
                    <Icon size={24} color="white" />
                    <p className="hidden lg:block text-white text-xl">{label}</p>
               </div>
          </div>
     )

}


const SidebarTweetButton = () => {
     const router = useRouter()

     return (
          <div onClick={() => router.push("/")}>
               <div className="mt-6 lg:hidden rounded-full h-14 w-14
                 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 
                 transition cursor-pointer"
               >
                    <FaFeather size={24} color="white" />
               </div>
               <div
                    className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-500
                              hover:bg-opacity-90 cursor-pointer transition"
               >
                    <p
                         className="hidden lg:block text-center font-semibold text-white text-[20px]"
                    >Tweet</p>

               </div>
          </div>
     )
}