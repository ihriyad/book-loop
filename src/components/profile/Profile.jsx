"use client";
import React from "react";
import Image from "next/image";
import user from "@/assets/user.jpg";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";
import ThemeToggle from "../theme/ThemeToggle";

const Profile = () => {
  return (
    <div>
      <Drawer>
        <Button
          isIconOnly
          variant="light"
          className="rounded-full p-0 min-w-fit w-fit h-fit"
        >
          <Image
            className="rounded-full"
            src={user}
            alt="user photo"
            height={40}
            width={40}
          ></Image>
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="right">
            <Drawer.Dialog>
              <Drawer.Header>
                <Drawer.Heading>
                  <div className="flex justify-center flex-col items-center mb-4">
                    <Image
                      className="rounded-full"
                      src={user}
                      alt="user photo"
                      height={60}
                      width={60}
                    ></Image>
                    <Link href={"/profile"}>Edit Profile</Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link href={"/sign-in"}>Login</Link>
                    <Link href={"/sign-up"}>Resister</Link>
                  </div>
                </Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>
                <div>
                  <ThemeToggle></ThemeToggle>
                </div>
                <div className=""></div>
              </Drawer.Body>
              <Drawer.Footer>
                <Button slot="close" variant="secondary">
                  Cancel
                </Button>
                <Button slot="close">Confirm</Button>
              </Drawer.Footer>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </div>
  );
};

export default Profile;
