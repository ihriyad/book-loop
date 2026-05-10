"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Form,
  Input,
  Label,
  Link,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const { name, email, password, photo } = data;
    console.log(name, photo);

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
    });
    console.log(res, error);
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("SignUp success");
      redirect("/");
    }
  };
  const signUp = async () => {
    const data = await authClient.signUp.social({
      provider: "google",
    });

    console.log(data, "from google sign up");
  };

  return (
    <Card className="w-full max-w-md mx-auto my-8 space-y-3 p-8">
      <Card.Header>
        <Card.Title className="text-xl md:text-3xl mb-4">
          Create An Account
        </Card.Title>
        <Card.Description>
          Enter your credentials to create your account
        </Card.Description>
      </Card.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Card.Content>
          <div className="flex flex-col gap-4">
            <TextField name="name" type="text">
              <Label>Name</Label>
              <Input
                placeholder="Enter Your Name"
                variant="secondary"
                {...register("name", { required: "Name field is required" })}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </TextField>
            <TextField name="name" type="text">
              <Label>Image URL</Label>
              <Input
                placeholder="Enter Your Image URL"
                variant="secondary"
                {...register("photo", { required: "Photo url is required" })}
              />
            </TextField>

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
            Sign Up
          </Button>
          <div className="flex justify-center items-center gap-3 mt-3">
            <p>Already Have an account?</p>
            <Link className="font-bold text-cyan-400" href="/sign-in">
              Login
            </Link>
          </div>
          <p>or</p>
          <Link onClick={signUp} href="/">
            <FcGoogle className="mr-2" size={22} />
            Continue with Google
          </Link>
        </Card.Footer>
      </Form>
    </Card>
  );
}
