import React from "react";
import { Icons } from "./icons";

export default function AvailableCredits() {
  return (
    <div className="bg-[#363C53] rounded-md flex items-center gap-4 mx-5 p-2 mt-auto mb-5">
      <div className="bg-[#4A5064] flex items-center justify-center rounded-md p-2">
        <Icons.Payments className="text-white" />
      </div>
      <div className="flex flex-col">
        <p className="text-[#D7D8DD] text-sm 2xl:text-lg">Available Credits</p>
        <p className="text-white">222.10</p>
      </div>
    </div>
  );
}
