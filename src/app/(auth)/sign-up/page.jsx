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

export default function SignUpPage() {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    alert("Form submitted successfully!");
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
      <Form onSubmit={onSubmit}>
        <Card.Content>
          <div className="flex flex-col gap-4">
            <TextField name="name" type="text">
              <Label>Name</Label>
              <Input placeholder="Enter Your Name" variant="secondary" />
            </TextField>
            <TextField name="name" type="text">
              <Label>Image URL</Label>
              <Input placeholder="Enter Your Image URL" variant="secondary" />
            </TextField>

            <TextField name="email" type="email">
              <Label>Email</Label>
              <Input placeholder="Enter Your Email" variant="secondary" />
            </TextField>
            <TextField name="password" type="password">
              <Label>Password</Label>
              <Input placeholder="Enter Your Password" variant="secondary" />
            </TextField>
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
          <Link href="/">
            <FcGoogle className={"mr-2"} size={22} />
            Continue with Google
          </Link>
        </Card.Footer>
      </Form>
    </Card>
  );
}
