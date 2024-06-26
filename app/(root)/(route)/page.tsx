"use client"
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

//SetupPage triggers the modal
const SetupPage = () => {
    const onOpen = useStoreModal((state) => state.onOpen);
    const isOpen = useStoreModal((state) => state.isOpen);

    useEffect(() => {
        if (!isOpen) {
            onOpen();
        }
    }, [isOpen, onOpen]);
  return null;
}

export default SetupPage;
