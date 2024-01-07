"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { LogOut} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const NavbarRoutes = () => {
    const pathname = usePathname();
    const router = useRouter();

    const isTeacherPage = pathname?.startsWith("/teacher")
    const isPlayerPage = pathname?.includes("/chapter")


    return (
        <div className="flex gap-x-3 ml-auto ">
            {isTeacherPage || isPlayerPage ? (
            <Link href="/dashboard">
                <Button className="">
                    <LogOut className=" h-4 w-4"/>
                        Exit
                </Button>
                </Link>
                
            ) : (
                <Link className="" href="/teacher/courses">
                    <Button>
                        Teacher Mode
                    </Button>
                </Link>
            )}

                <UserButton afterSignOutUrl="/" />
        </div>
    )
}