"use client";
import React, { useState } from "react";
import Image from "next/image";
import avatar from "@/assets/user.jpg";
import { Avatar, Button, Drawer } from "@heroui/react";
import Link from "next/link";
import ThemeToggle from "../theme/ThemeToggle";
import { authClient } from "@/lib/auth-client";

const Profile = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut();
    setIsOpen(false);
  };

  const handleEditProfile = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button
        isIconOnly
        variant="light"
        className="rounded-full p-0 min-w-fit w-fit h-fit"
        onClick={() => setIsOpen(true)}
      >
        <Avatar>
          <Avatar.Image alt="User Image" src={user.image || avatar} />
        </Avatar>
      </Button>

      <Drawer isOpen={isOpen} onOpenChange={setIsOpen}>
        <Drawer.Backdrop>
          <Drawer.Content placement="right">
            <Drawer.Dialog>
              <Drawer.Header>
                <Drawer.Heading>
                  <div className="flex justify-center flex-col items-center mb-4 md:mb-8 space-y-3">
                    <Avatar className="w-14 h-14">
                      <Avatar.Image
                        alt="User Image"
                        src={user.image || avatar}
                      />
                    </Avatar>
                    <Link href="/profile" onClick={handleEditProfile}>
                      Edit Profile
                    </Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div
                      onClick={handleLogout}
                      className="hover:bg-cyan-600 p-3 cursor-pointer rounded-lg"
                    >
                      Logout
                    </div>
                  </div>
                </Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>
                <ThemeToggle />
              </Drawer.Body>
              <Drawer.Footer>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
              </Drawer.Footer>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </div>
  );
};

export default Profile;
