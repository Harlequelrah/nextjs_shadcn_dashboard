import { Member } from "@/types/member";

type UserItemCardProps = {
    member: Member;
};

export default function UserItemCard({ member }: UserItemCardProps) {
    // Initiales à partir du nom complet
    const initials = member.full_name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase();

    return (
        <div className="flex items-center gap-4 justify-center border rounded-[8px] p-2">
            <div
                className="avatar rounded-full min-w-10 min-h-10 text-white font-[700] flex items-center justify-center"
                style={{ backgroundColor: member.backgroundColor }}
            >
                <p>{initials}</p>
            </div>
            <div className="grow">
                <p className="text-[16px] font-bold">{member.full_name}</p>
                <p className="text-[12px] text-neutral-500">{member.email}</p>
            </div>
        </div>
    );
}
