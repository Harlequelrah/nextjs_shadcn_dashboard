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
            backgroundColor: "rgba(125,24,66,1)",
            role:"Admin"
        }
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
                    <Button>Remove</Button>
                </div>
                )
            }
        </div>
    </div>;
}
