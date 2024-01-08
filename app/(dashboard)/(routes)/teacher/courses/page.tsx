import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursesPage = () => {
    return (
        <div>
            <div className="flex h-full max-w-5xl pb-4 pt-4 mx-auto md:item-center md:justify-center ">
                <h1 className="text-2xl font-bold">Teacher registration</h1>
                
            </div>
            <div className="flex h-full max-w-5xl pb-4 mx-auto md:item-center md:justify-center ">
                <p>Want to join us? complete the registration by pressing the button below</p>
            </div>
            <div className="flex h-full max-w-5xl pt-0 mx-auto md:item-center md:justify-center ">
                <Link href="/teacher/create">
                    <Button>
                        Register
                    </Button>
                </Link>
            </div>

            
            
        </div>
    );
}

export default CoursesPage;