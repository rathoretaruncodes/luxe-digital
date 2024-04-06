//if user exist, they will be re-directed to dashboard
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation";

export default async function SetupLayout({
    children
}: {
    children: React.ReactNode
}) {
    const {userId} = auth();

    if(!userId) {
        redirect('/sign-in');
    }

    const store = await prismadb.store.findFirst({
        where: {
            userId: userId
        }
    });

    if(store) {
        //[storeId] route inside dashboard
        redirect(`/${store.id}`);
    }
    //otherwise
    return (
        <>
        {children}
        </>
    )
}