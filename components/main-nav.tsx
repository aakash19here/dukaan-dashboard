"use client";

import Link from "next/link";
import { MainNavItem } from "@/types";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Input } from "./ui/input";

interface MainNavProps {
  items?: MainNavItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex justify-between items-center p-3 gap-6 md:gap-10 border-b">
      <div className="flex gap-5">
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <span className="hidden font-bold sm:inline-block">Payments</span>
        </Link>
        {items?.length && (
          <nav className="hidden gap-6 md:flex">
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        )}
      </div>
      <div className="relative w-1/2 flex items-center">
        <Input
          className="pl-10 bg-gray-100"
          placeholder="Search features, tutorials, etc."
        />
        <span className="absolute left-0 pl-2">
          <Icons.Search className="text-gray-400" />
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-gray-200 rounded-full p-2">
          <Icons.Mails className="rounded-md text-gray-700" size={20} />
        </div>
        <div className="bg-gray-200 rounded-full p-2">
          <Icons.Play
            className="rotate-90 rounded-md text-gray-700"
            size={20}
            fill="rgb(55 65 81)"
          />
        </div>
      </div>
    </div>
  );
}
