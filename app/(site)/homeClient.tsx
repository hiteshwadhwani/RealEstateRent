'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

const HomeClient = () => {
    const router = useRouter()
    useEffect(() => {
        router.push('/Rent')
    }, [router])
    return null
}

export default HomeClient