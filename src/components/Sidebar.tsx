import UserItem from "./UserItem";

export default function Sidebar() {
    return (
    <div className="flex flex-col min-w-[300px] w-[300px] border-r min-h-screen p-4">
        <UserItem/>
        <div className="grow">Menu</div>
        <div>Settings / Notification </div>
    </div>
    );
}
