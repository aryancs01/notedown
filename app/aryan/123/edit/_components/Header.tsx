import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header(){
    return (
        <div className="flex justify-between">
            <div className="flex gap-4 items-center">
                <h1 className="text-3xl font-bold">NoteDown</h1>
                <div className="flex gap-x-5 text-sm">
                    <p>Draft in Aryan Saxena</p>
                    <p>Saved</p>
                </div>
            </div>

            <div className="flex gap-x-5 items-center">
                <Button className="rounded-xl" size={"sm"}>Publish</Button>
                <DropdownMenu>
                    <DropdownMenuTrigger><Menu/></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}