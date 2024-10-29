"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signIn, signOut, useSession } from "next-auth/react";

import { Button } from "../ui/button";
import Link from "next/link";

const UserSession = () => {
  const { data: session } = useSession();
  console.log("Session Data:", session);
  return (
    <>
      {session?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Avatar>
              <AvatarImage src={session.user.image || "https://github.com/person.png"} />
              <AvatarFallback>💀</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button onClick={() => signOut()}>Logout</Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex">
          <Button className="rounded-r-none rounded-l-2xl" onClick={() => signIn()}>
            Signup
          </Button>
          <Button
            variant="outline"
            className="rounded-l-none bg-transparent border-2 rounded-r-2xl"
            onClick={() => signIn()}
          >
            Signin
          </Button>
        </div>
      )}
    </>
  );
};

export default UserSession;
