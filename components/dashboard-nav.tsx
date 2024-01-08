"use client";

import Link from "next/link";

import { SidebarNavItem } from "@/types";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { buttonVariants } from "./ui/button";

interface DashboardNavProps {
  items: SidebarNavItem[];
}

export function DashboardNav({ items }: DashboardNavProps) {
  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start md:gap-1 2xl:gap-2 2xl:mt-5">
      {items.map((item, index) => {
        const Icon = Icons[item.icon || "arrowRight"];
        return (
          item.href && (
            <Link key={index} href={item.disabled ? "/" : item.href}>
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium",
                  item.disabled && "cursor-not-allowed opacity-80",
                  buttonVariants({
                    variant: "link",
                    className: "text-white",
                  })
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
