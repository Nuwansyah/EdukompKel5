"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  age: z.string().min(1, { message: "Age is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  position: z.string().min(1, { message: "Position is required" }),
});

interface CreateTeacherFormProps {
  action: (data: z.infer<typeof formSchema>) => Promise<void>;
}

const CreateTeacherForm = ({ action }: CreateTeacherFormProps) => {
  const [isPending, setTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: "",
      address: "",
      position: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setTransition(async () => {
      toast.promise(action(data), {
        loading: "Loading...",
        success: "Thank you for signing up! wait for further information.",
        error: "Registration failed!",
      },
      {
        
        success: {
          duration: 5000,
        },
        error: {
          duration: 5000,
        },
      }
      );
    });
  };

  return (
    <Form {...form}>
      <form className="mt-8 space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is your name?</FormLabel>
              <FormControl>
                <Input
                  disabled={isSubmitting}
                  placeholder="e.g 'Adi'"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How old are you?</FormLabel>
              <FormControl>
                <Input
                  disabled={isSubmitting}
                  placeholder=" e.g 26"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fill in your address</FormLabel>
              <FormControl>
                <Input
                  disabled={isSubmitting}
                  placeholder="e.g 'Jl. Kebon jeruk'"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What position are you applying for?</FormLabel>
              <FormControl>
                <Input
                  disabled={isSubmitting}
                  placeholder="UI/UX Designer"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between w-full">
          <Link href="/teacher/courses">
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </Link>
          <Button type="submit" disabled={isSubmitting}>
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateTeacherForm;
