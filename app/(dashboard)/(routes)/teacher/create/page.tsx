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
        <h1 className="text-2xl">Teacher registration form</h1>
        <p className="text-sm text-slate-600">Fill in your personal data below..</p>
        <CreateTeacherForm action={handleCreateTeacher} />
      </div>
    </div>
  );
};

export default CreatePage;
