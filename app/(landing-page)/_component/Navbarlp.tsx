import { NavbarRoutes } from "@/components/navbar-routes"
import { Button, buttonVariants } from "@/components/ui/button"
import { Logo } from "./Logo"
import Link from "next/link"
import { cn } from "@/lib/utils"

export const Navbarlp = () => {
    return(
        <nav className="fixed top-0 w-full h-20 z-10 px-4 md:px-8 lg:px-36 flex items-center justify-between border-b bg-white shadow-sm">
            <div className="flex items-center">
                <h1 className="text-brand">
                    <Logo/>
                </h1>
                <h1 className="text-xl font-bold">
                    <span className="text-brand">EduKomp</span>
                </h1>
            </div>
            <div className="lg:flex items-center gap-x-14 hidden">
                <ul className="flex items-center gap-x-6 font-medium">
                    <Link href="/">
                        <li className="px-4 py-2 rounded-full hover:underline">
                            Home
                        </li>
                    </Link>
                    <Link href="/pricing">
                         <li className="px-4 py-2 rounded-full hover:underline">
                            Pricing
                        </li>
                    </Link>
                    <Link href="/about-us">
                        <li className="px-5 py-2 rounded-full hover:underline">
                            About us
                        </li>
                    </Link>
                        
                        <li>
                        <Link href="/dashboard"
                        className={cn(
                            buttonVariants({ variant: "bluebutton" }),
                            "text-white rounded-full"
                        )}
                        >
                            Sign-in
                        </Link>
                        </li>
                </ul>
            </div>
        </nav>
        

    )

}