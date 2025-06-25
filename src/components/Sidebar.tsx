"use client";
import { Bell, Cookie, CreditCard, Inbox, MessageSquare, Settings, User } from "lucide-react";
import { Command, CommandGroup, CommandItem, CommandList, CommandSeparator } from "./ui/command";
import UserItem from "./UserItem";
// import  UserItem  from 'useritem';
import dynamic from "next/dynamic";
import Link from "next/link";


export default function Sidebar() {
    const MenuList: MenuGroup[] = [
        {
            group: "General",
            items: [
                {
                    link: "/",
                    text: "Profile",
                    icon:<User/>
                },
                {
                    link: "/",
                    text: "Inbox",
                    icon: <Inbox />
                },
                {
                    link: "/",
                    text: "Billing",
                    icon: <CreditCard />
                },
                {
                    link: "/",
                    text: "Notifications",
                    icon: <Bell />
                },
            ]
        },
        {
            group: "Settings",
            items: [
                {
                    link: "/",
                    text: "General Settings",
                    icon: <Settings />
                },
                {
                    link: "/",
                    text: "Privacy",
                    icon: <Cookie />
                },
                {
                    link: "/",
                    text: "Logs",
                    icon:< MessageSquare />
                },
            ]
        },
    ];
    return (
        <div className="fixed flex flex-col min-w-[300px] w-[300px] border-r min-h-screen p-4 ">
            {/* <UserItem
                name="Maxime DEGBOVI"
                description="maximeatsou@mail.com"
                avatarUrl="https://i.pinimg.com/736x/e3/40/32/e3403289f6294361b5d10b386836222f.jpg"
                onClick={(e) => console.log("User item clicked!", e)}
            /> */}
            <UserItem />
            <div className="grow">
                <Command>
                    <CommandList>
                        {MenuList.map((menu: MenuGroup, key: number)=>(
                            <CommandGroup key={key} heading={menu.group}>
                                {menu.items.map((option: MenuOption, optionKey: number) =>
                                    <CommandItem key={optionKey}>
                                        {option.icon}
                                        {option.text}
                                    </CommandItem>
                                )}
                        </CommandGroup>
                        ))}
                        <CommandSeparator />
                    </CommandList>
                </Command>
            </div>
            <Link href="/team" className="flex items-center gap-2">
                <Settings />
                <span></span>
                Team Settings
            </Link>
        </div>
    );
}
