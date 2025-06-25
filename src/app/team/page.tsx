'use client';
import {
    Command,
    CommandInput,
} from "@/components/ui/command"
import UserItemCard from '../../components/Cards/UserItemCard';
import { Button } from '../../components/ui/button';
import { Member } from '../../types/member';
import { useState } from 'react';
import { Badge } from "@/components/ui/badge"

export default function TeamSettings() {

    const [members, setMembers] = useState<Member[]>([
        {
            email: "maximeatsoudegbovi@gmail.com",
            full_name: "DEGBOVI Maxime",
            backgroundColor: "rgba(100,24,66,1)",
            role: "admin"
        },
        {
            email: "elrahmorningstar@gmail.com",
            full_name: "MORNINGSTAR elrah",
            backgroundColor: "rgba(100,100,66,60)",
            role: "assistant"
        },
        {
            email: "jordantomegah@gmail.com",
            full_name: "TOMEGAH jordan",
            backgroundColor: "rgba(0,255,60,1)",
            role: "manager"
        },
        {
            email: "lyonluxusking@gmail.com",
            full_name: "LYON luxus",
            backgroundColor: "rgba(255,100,255,50)",
            role: "viewer",
            status: "pending"
        },
    ]);
    return <div className="grid gap-4">
        <header>
            <h2 className="text-[36px] font-[700]">
                Team Settings
            </h2>
        </header>
        <div className="grid gap-4">
            <div>
                <div className="flex items-center justify-between gap-2">
                    <Command className="rounded-lg border md:min-w-[450px]">
                        <CommandInput placeholder="Type an email to invite ..." />
                    </Command>
                </div>
                <Button variant="secondary">Add a new member</Button>
            </div>
        </div>
        <div className="border rounded">
            {members.length === 0 && <div className="p-4">There are no members yet</div>}
            {

                members.map((member: Member, key: number) => <div className='grid grid-cols-6 border-b last:border-b-0 items-center justify-between pr-2 ' key={key}>
                    <div className="col-span-2">
                        <UserItemCard member={member} />
                    </div>
                    <div className="col-span-3 flex gap-2">
                        <Badge className={`tag ${member.role}`}>{member.role}</Badge>
                        {
                            member.status &&
                            <Badge className={`tag ${member.status}`}>{member.status}
                            </Badge>}
                    </div>
                    <div className="col-span-1 flex justify-end">
                        <Button variant="ghost">Remove</Button>
                    </div>
                </div>
                )
            }
        </div>
    </div>;
}
