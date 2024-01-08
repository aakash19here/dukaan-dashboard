"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Input } from "./ui/input";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { formatIndianCurrency } from "@/lib/utils";
import { Order } from "@/types";

export default function TransactionTable({ orders }: { orders: Order }) {
  const [id, setId] = useState("");
  const searchArray = orders.filter((order) =>
    id ? order.orderID.toString().startsWith(id) : order
  );

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center ">
        <div className="relative flex items-center py-5 ">
          <Input
            onChange={(e) => setId(e.target.value)}
            value={id}
            className="rounded-md border pl-10 border-input bg-background focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Search by orderID..."
          />
          <span className="absolute left-0 pl-2">
            <Icons.Search className="text-gray-400" />
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Button className="gap-2" variant={"outline"} size={"sm"}>
            <Icons.Sort />
            Sort
          </Button>
          <Button variant={"outline"} size={"icon"}>
            <Icons.Download />
          </Button>
        </div>
      </div>
      <div className="">
        <Table className="">
          <TableHeader className="bg-[#f2f2f2]">
            <TableRow className="border-none rounded-full overflow-hidden">
              <TableHead>Order ID</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead>Order Amount</TableHead>
              <TableHead>Transaction Fees</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {searchArray.map((order) => (
              <TableRow key={order.orderID}>
                <TableCell className="font-medium text-blue-500">
                  #{order.orderID}
                </TableCell>
                <TableCell>{order.orderDate.toDateString()}</TableCell>
                <TableCell>₹{formatIndianCurrency(order.orderAmt)}</TableCell>
                <TableCell>₹{order.transactionFee}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableCaption>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </TableCaption>
        </Table>
      </div>
    </div>
  );
}
