'use client';
import UserItemCard from '../../components/Cards/UserItemCard';
import { Button } from '../../components/ui/button';
import { Member } from '../../types/member';
import { useState } from 'react';


export default function TeamSettings() {

    const [members, setMembers] = useState<Member[]>([
        {
            email: "maximeatsoudegbovi@gmail.com",
            full_name: "DEGBOVI Maxime",
            backgroundColor: "rgba(100,24,66,1)",
            role:"Admin"
        },
        {
            email: "elrahmorningstar@gmail.com",
            full_name: "MORNINGSTAR elrah",
            backgroundColor: "rgba(100,100,66,60)",
            role: "Manager"
        },
        {
            email: "jordantomegah@gmail.com",
            full_name: "TOMEGAH",
            backgroundColor: "rgba(255,255,60,1)",
            role: "Manager"
        },

    ]);
    return <div>
        <header>
            <h2 className="text-[36px] font-[700]">
                Team Settings
            </h2>
        </header>
        <div className="border rounded">
            {
                members.map((member: Member, key: number) => <div className='border-b last:border-b-0 flex items-center justify-between pr-2 '  key={key}>
                    <UserItemCard member={member} />
                    <Button variant="secondary">Remove</Button>
                </div>
                )
            }
        </div>
    </div>;
}
