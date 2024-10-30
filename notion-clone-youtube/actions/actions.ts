"use server";

import { adminDb } from "@/firebase-admin";
// here we have our server actions:

import { auth } from "@clerk/nextjs/server";

export async function createNewDocument() {
  const { sessionClaims } = await auth.protect();

  const docCollectionRef = adminDb.collection("documents");
  const newDocRef = await docCollectionRef.add({
    title: "New Document",
  });

  await adminDb
    .collection("users")
    .doc(sessionClaims?.email!)
    .collection("rooms")
    .doc(newDocRef.id)
    .set({
      userId: sessionClaims?.email,
      role: "owner",
      createdAt: new Date().toISOString(),
      roomId: newDocRef.id,
    });

  return { docId: newDocRef.id };
}
