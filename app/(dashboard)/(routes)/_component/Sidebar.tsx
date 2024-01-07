import { Logo } from "./Logo"
import { SidebarRoutes } from "./SidebarRoutes"

export const Sidebar = () => {
    return(
        <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
            <div className="p-6">
                <h1 className="">
                <Logo/>
                </h1>
                <p className="text-center">EduKomp</p>
            </div>
            <div className="flex flex-col w-full">
                <SidebarRoutes />
            </div>
        </div>
    )
}