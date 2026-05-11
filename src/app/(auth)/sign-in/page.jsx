"use client";

import {
  Button,
  Card,
  Form,
  Input,
  Label,
  Link,
  TextField,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const { email, password } = data;
    // console.log(email, password);

    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      // callbackURL: "/",
    });
    console.log(res, error);
    if (res) {
      toast.success("Login successful!");
      setTimeout(() => {
        router.push("/");
      }, 1500);
    }
    if (error) {
      toast.error("Login failed. Check your credentials.");
    }
  };
  const signIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    console.log(data, "from google sign in");
  };

  return (
    <Card className="w-full max-w-md mx-auto my-12 space-y-3 p-8">
      <Card.Header>
        <Card.Title className="text-xl md:text-3xl mb-4">Login</Card.Title>
        <Card.Description>
          Enter your credentials to access your account
        </Card.Description>
      </Card.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Card.Content>
          <div className="flex flex-col gap-4">
            <TextField name="email" type="email">
              <Label>Email</Label>
              <Input
                placeholder="Enter Your Email"
                variant="secondary"
                {...register("email", { required: "Email field is required" })}
              />
            </TextField>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <TextField name="password" type="password">
              <Label>Password</Label>
              <Input
                placeholder="Enter Your Password"
                variant="secondary"
                {...register("password", {
                  required: "Password field is required",
                })}
              />
            </TextField>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
        </Card.Content>
        <Card.Footer className="mt-6 flex flex-col gap-2">
          <Button className="w-full" type="submit">
            Sign In
          </Button>

          <p>or</p>
          <Button className={"w-full"} variant="secondary" onClick={signIn}>
            <FcGoogle size={22} />
            Continue with Google
          </Button>
        </Card.Footer>
      </Form>
    </Card>
  );
}
