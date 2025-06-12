export default function UserItem() {
    return (
        <div className="flex items-center gap-4 justify-center  border rounded-[8px] p-2">
            <div className="avatar rounded-full min-w-10 min-h-10 bg-emerald-500 text-white font-[700] flex items-center justify-center
            ">
                <p>DM</p>

            </div>
            <div className="grow">
                <p className="text-[16px] font-bold">DEGBOVI Maxime</p>
                <p className="text-[12px] text-neutral-500">maximeatsoudegbovi@gmail.com</p>
            </div>
        </div>

    );
}
