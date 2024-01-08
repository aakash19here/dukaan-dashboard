import { Filter, FilterArray } from "@/components/filter";
import { SummaryCard } from "@/components/summary-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dynamic from "next/dynamic";

const TransactionTable = dynamic(
  () => import("@/components/transaction-table"),
  {
    ssr: false,
  }
);

const filterArray: FilterArray[] = [
  {
    name: "Last Month",
    value: "last_month",
  },
  {
    name: "Last Week",
    value: "last_week",
  },
  {
    name: "Yesterday",
    value: "yesterday",
  },
  {
    name: "Last Year",
    value: "last_year",
  },
];

export default async function DashboardPage() {
  return (
    <div className="p-3 ">
      <div className="flex justify-between items-center">
        <p className="text-lg">Overview</p>
        <Filter filters={filterArray} defaultValue="last_month" />
      </div>
      <Tabs defaultValue="razorpay" className="w-full my-3">
        <TabsList className="flex border-b items-center gap-5 justify-start w-full ">
          <TabsTrigger value="razorpay">Razorpay</TabsTrigger>
          <TabsTrigger value="cashfree">Cashfree</TabsTrigger>
        </TabsList>
        <TabsContent value="razorpay" className="w-full">
          <div className="flex gap-2 my-4">
            <SummaryCard title="Total Orders" content="231" />
            <SummaryCard title="Amount Received" content="21,32,911.90" />
          </div>
          <p className="my-5">Transactions this month</p>
          <TransactionTable />
        </TabsContent>
        <TabsContent value="cashfree">Cashfree table goes here</TabsContent>
      </Tabs>
    </div>
  );
}
