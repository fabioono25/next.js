"use client";

import { useTransition } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createNewDocument } from "@/actions/actions";

function NewDocumentButton() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleCreateNewDocument = () => {
    startTransition(async () => {
      // Create new document
      const { docId } = await createNewDocument();
      router.push(`/doc/${docId}`);
    });
  };

  return (
    <Button onClick={handleCreateNewDocument}>
      {isPending ? "Creating..." : "New Document"}
    </Button>
  );
}

export default NewDocumentButton;
