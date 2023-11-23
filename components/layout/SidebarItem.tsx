import { IconType } from 'react-icons'

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

export default SidebarItem