<<<<<<< HEAD
"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter }  from "next/navigation";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { FileEdit } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const formSchema = z.object({
    title: z.string().min(1,{
        message: "Title is required",
    }),
});

const CreatePage = () =>{
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver:  zodResolver(formSchema),
        defaultValues: {
            title: ""
        },
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try{
            const response = await axios.post("/api/courses", values);
            router.push(`/teacher/courses/${response.data.id}`);
            toast.success("Course Created");
        } catch {
            toast.error("Something went wrong");
        }
    }

    return (
        <div className="max-w-5xl mx-auto flex md:item-center md:justify-center h-full p-6">
            <div>
                <h1 className="text-2xl">
                    Pendaftaran Mentor
                </h1>
                <p className="text-sm text-slate-600">
                    Isi data diri dibawah..
                </p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 mt-8"
                    >
                        <FormField control = {form.control} 
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Siapa nama anda?
                                            </FormLabel>
                                            
                                            <FormControl>
                                                <Input
                                                    disabled={isSubmitting}
                                                    placeholder="Contoh 'Adi'"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormLabel>
                                                Berapa umur anda?
                                            </FormLabel>
                                            
                                            <FormControl>
                                                <Input
                                                    disabled={isSubmitting}
                                                    placeholder="Contoh '5"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                What will you teach?
                                            </FormDescription>
                                            <FormMessage/>
                                        </FormItem>
                                        

                                    )}
                            />
                            <div className="flex items-center gap-x-2">
                                <Link href='/teacher/courses'>
                                        <Button type="button" variant="ghost">
                                            Cancel
                                        </Button>
                                </Link>
                                <Button type="submit" disabled>
                                    Continue
                                </Button>


                            </div>

                    </form>
                </Form>
            </div>
        </div>
    );
}

export default CreatePage;
=======
import db from "@/lib/db";
import CreateTeacherForm from "../../_component/create-teacher-form";
import { redirect } from "next/navigation";

const CreatePage = async () => {
  const handleCreateTeacher = async (data: any) => {
    "use server";

    await db.teacher.create({
      data: data,
    });

    redirect("/teacher/courses");
  };

  return (
    <div className="flex h-full max-w-5xl p-6 mx-auto md:item-center md:justify-center">
      <div>
        <h1 className="text-2xl">Pendaftaran Mentor</h1>
        <p className="text-sm text-slate-600">Isi data diri dibawah..</p>
        <CreateTeacherForm action={handleCreateTeacher} />
      </div>
    </div>
  );
};

export default CreatePage;
>>>>>>> d0974a5cc8e9aebf0812ee9bd49b54b5aaff0e36
