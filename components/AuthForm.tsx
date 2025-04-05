"use client";
import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

import FormField from "./FormField";

const authSchema =(type:FormType) => {
  return z.object({
    name:type==='sign-up'? z.string().min(1): z.string().optional(),
    email: z.string().email(),
    password: z.string().min(8)
}
  )}

const AuthForm = ({type}:{type:FormType}) => {
  const formSchema = authSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    try{
      if(type === "sign-in") {
        console.log("sign in", values);
      }
      else {
        console.log("sign up", values);
      }

    }
    catch (error) {
      console.log(error);
      toast.error(`There was an error:${error}`);
    }
  }

  const isSignIn = type === "sign-in";
  return (
    <div className="card-border lg:min-w-[570px] ">
      <div className="flex flex-col card gap-6 py-14 px-10 justify-center">
        <div className=" flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" width={38} height={32} alt="logo" />
          <h2 className="text-primary-100">IntPreps</h2>
        </div>
        <h3 >Practice for your Interview with AI</h3>
     
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full form mt-4 ">
         {isSignIn && (<FormField
          control={form.control}
          name="name"
          placeholder="Enter your name"
          label="Name"
         />
         )}
          <FormField
            control={form.control}
            name="email"
            placeholder="Enter your email"
            label="Email"
            type="email"
            />
         <FormField
          control={form.control}
          name="password"
          placeholder="Enter your password"
          label="Password"
          type="password"
          />

        
          <Button type="submit" className="btn">{isSignIn? 'Sign-in':'Create Account'}</Button>
        </form>
      </Form>
      <p className="text-center">{isSignIn?'No account yet':'Already have an account '}
      <Link href={isSignIn?'/sign-up':'/sign-in'} className="text-user-primaary ml-1 font-bold">
      {!isSignIn? 'Sign In':'Sign Up'}
      </Link>
      </p>

    </div>
    </div>
  );
};

export default AuthForm;
