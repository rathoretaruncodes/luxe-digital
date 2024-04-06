import Navbar from "@/components/navbar";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: {storeId: string}
}) {
    const {userId} = auth();

    if(!userId) {
        redirect('/sign-in');
    }
    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId,
            userId: userId
        }
    });

    //If store doesn't exist, user will be redirected to root/layout
    if(!store) {
        redirect('/');
    }

    return(
        <>
            <Navbar />
            {children}
        </>
    )
}