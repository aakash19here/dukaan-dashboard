import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DashboardNav } from "@/components/dashboard-nav";
import { dashboardConfig } from "@/config/dashboard";
import { MainNav } from "@/components/main-nav";
import { Account } from "@/components/account";
import AvailableCredits from "@/components/available-credits";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Payments | Dukaan Dashboard",
  description: "Payment details",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <div className="flex h-screen overflow-hidden">
          <aside
            className={`z-50 flex h-screen md:w-[250px] 2xl:w-[300px] flex-col overflow-y-hidden bg-[#1E2640] static`}
          >
            <Account />
            <DashboardNav items={dashboardConfig.sidebarNav} />
            <AvailableCredits />
          </aside>
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <header>
              <MainNav items={dashboardConfig.mainNav} />
            </header>
            <main>
              <div className="mx-auto bg-[#fafafa] p-4 md:p-4 2xl:p-10">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
