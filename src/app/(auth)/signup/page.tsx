"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authClient } from "@/lib/auth-client"; //import the auth client
import { useRouter } from "next/navigation";

const formSchema = z.object({
    name: z.string().min(1, "Required Name"),
    email: z.string().email("Invalid Email"),
    password: z.string().min(6, "Password must be atleast 6 characters"),
});

const Signup01Page = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
        name: "",
        email: "",
        password: "",
    },
    resolver: zodResolver(formSchema),
});

const onSubmit = async (form: z.infer<typeof formSchema>) => {
        await authClient.signUp.email({
            name: form.name,
            email: form.email, 
            password: form.password, 
            callbackURL: "/login"
        }, {
            onRequest: (ctx) => {
                //show loading
                console.log(ctx.body)
            },
            onSuccess: (ctx) => {
                //redirect to the dashboard or sign in page
                console.log(ctx.data)
                router.replace('/')
            },
            onError: (ctx) => {
                // display the error message
                alert(ctx.error.message);
            },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xs w-full flex flex-col items-center">
        
        <p className="mt-4 text-xl text-center font-bold tracking-tight">
          Sign Up
        </p>
        <p className="mt-2 text-xl text-center font-bold text-blue-600 tracking-tight">
          CodingwithPeepo
        </p>

        <div className="my-7 w-full flex items-center justify-center overflow-hidden">
          <Separator />
        </div>

        <Form {...form}>
          <form
            className="w-full space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Your name"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-4 w-full  bg-blue-700 hover:bg-blue-500">
              Register
            </Button>
          </form>
        </Form>

        <div className="mt-5 space-y-5">
          <p className="text-sm text-center">
            Already have an account?
            <Link href="/login" className="ml-1 underline text-muted-foreground">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};


export default Signup01Page;