"use client"

import { StoreModal } from "@/components/modals/store-modal";
import { useEffect, useState } from "react"

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    //to avoid hydration error
    if(!isMounted) {
        return null;
    }

    return (
        <>
        <StoreModal/>
        </>
    )
}

//used in layout.tsx