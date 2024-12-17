"use client";
import InputField from "@/components/AuthComponents/InputField";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, Mail } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";

type Props = {};
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
type FormData = z.infer<typeof loginSchema>;

const InputForm = (props: Props) => {
  const form = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const session = useSession();
  console.log(`🚀 ~ file: form.tsx:30 ~ session:`, session);

  const { handleSubmit } = form;

  const onSubmit = async (data: FormData) => {
    console.log(data);
    // Handle form submission
    try {
      await signIn("credentials", {
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      console.log(`🚀 ~ file: form.tsx:41 ~ error:`, error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
          <p className="text-sm text-muted-foreground">
            Login to access your business account
          </p>
        </div>

        <div className="space-y-4">
          <InputField
            label="Email"
            type="email"
            placeholder="john@example.com"
            Icon={Mail}
            form={form}
            name="email"
            className="!min-w-full"
          />

          <InputField
            label="Password"
            type="password"
            Icon={Eye}
            placeholder="*******"
            form={form}
            name="password"
            className="!min-w-full"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>
          <Link
            href="/forgot-password"
            className="text-sm text-primary hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <Button type="submit" className="w-full">
          Login
        </Button>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/sign-up" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-muted-foreground">
              Or sign in with
            </span>
          </div>
        </div>

        <div className="flex justify-center">
          <Button variant="outline" className="w-full max-w-[200px]">
            <FcGoogle />
            Sign in with Google
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default InputForm;
