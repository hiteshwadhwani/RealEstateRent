'use client'

import { usePathname } from "next/navigation"

interface NavItemProps{
    label: string
}
const NavItem: React.FC<NavItemProps> = ({label}) => {
    const path = usePathname()

    const active = path === `/${label}`
    return (
        <div className={`hover:bg-purple-100 p-2 hover:cursor-pointer hover:text-purple-500 transition ${active && 'bg-purple-100'} ${active && 'text-purple-500'}`}>
            {label}
        </div>
    )
}
export default NavItem