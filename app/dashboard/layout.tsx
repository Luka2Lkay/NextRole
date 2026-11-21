import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import Navbar from "@/components/dashboard/Navbar";
import Footer from "@/components/dashboard/Footer";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in?redirect_url=/dashboard");
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />
            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">{children}</main>
            <Footer />
        </div>
    )
}