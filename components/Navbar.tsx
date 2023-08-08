'use client'

import Image from "next/image"
import NavItem from "./ui/NavItem"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

const Navbar = () => {
    return (
        <>
        <header className="flex flex-row items-center justify-between px-6 py-4">
            <div className="flex flex-row items-center gap-x-6">
                <div className="relative h-12 w-32">
                    <Image src={'/images/logo.svg'} alt="logo" fill className='object-cover'/>
                </div>
                <NavItem label="Rent" />
                <NavItem label="Buy" />
                <NavItem label="Sell" />
                <NavItem label="Manage Property" />
                <NavItem label="Resources" />
            </div>
            <div className="flex flex-row items-center gap-x-6">
                <Button className="" variant={'outline'}>Login</Button>
                <Button className="bg-purple-600 hover:bg-purple-600 hover:opacity-75 transition">Sign up</Button>
            </div>
        </header>
        <Separator />
        </>

    )
}
export default Navbar