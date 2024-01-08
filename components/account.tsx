import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Icons } from "./icons";

export function Account() {
  return (
    <div className="flex gap-5 items-center p-4">
      <div className="flex-1 flex gap-3">
        <Avatar className="rounded-md">
          <AvatarFallback className="rounded-md">NS</AvatarFallback>
          <AvatarImage
            className="rounded-md overflow-hidden"
            src="/logo.jpeg"
            alt="logo"
          />
        </Avatar>
        <div className="flex flex-col gap-1 text-white">
          <p>Nishyan</p>
          <Link href={"/"} className={"text-xs text-gray-500 hover:underline"}>
            Visit Store
          </Link>
        </div>
      </div>
      <Icons.ArrowDown className="text-white " />
    </div>
  );
}
