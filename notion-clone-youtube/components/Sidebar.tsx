"use client";

import { MenuIcon } from "lucide-react";
import NewDocumentButton from "./NewDocumentButton";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useUser } from "@clerk/nextjs";
import { db } from "@/firebase";
import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  collectionGroup,
  doc,
  getDoc,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

function useUserRooms(userEmail?: string) {
  const [rooms, setRooms] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    async function fetchRooms() {
      try {
        // Query the 'users' collection for a specific user email
        if (!userEmail) {
          throw new Error("User email is undefined");
        }
        const userRef = doc(db, "users", userEmail);
        const userSnapshot = await getDoc(userRef);

        if (!userSnapshot.exists()) {
          throw new Error("Userr not found");
        }else
        {
          console.log("user found");
        }

        // const userQuery = query(
        //   collection(db, "users"),
        //   where("email", "==", userEmail)
        // );
        // const userSnapshot = await getDocs(userQuery);

        // if (userSnapshot.empty) {
        //   throw new Error("User not found");
        // }

        // const userRef = userSnapshot.docs[0].ref; // Get the user's document reference
        // console.log("userRef", userRef);
        // // Fetch the 'rooms' sub-collection for this user
        // const roomsQuery = collection(userRef, "rooms");
        // const roomsSnapshot = await getDocs(roomsQuery);

        // console.log("roomsSnapshot", roomsSnapshot.docs);

        // const roomsData = roomsSnapshot.docs.map((doc) => ({
        //   id: doc.id,
        //   ...doc.data(),
        // }));

        // setRooms(roomsData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    if (userEmail) {
      console.log("fetching rooms", userEmail);
      fetchRooms();
    }
  }, [userEmail]);

  return { rooms, loading, error };
}

function Sidebar() {
  const { user } = useUser();
  // const userQuery = useCollection(
  //   user &&
  //     query(
  //       collection(db, "users"),
  //       where("userId", "==", user?.emailAddresses?.[0].toString())
  //     )
  // );

  // get the list of rooms, based on the user's email
  // const test = query(collection(db, "rooms"));
  // console.log(`test`, test);

  console.log("user", user);

  const { rooms, loading, error } = useUserRooms(
    user?.emailAddresses?.[0].emailAddress
  );
  console.log("error", error);
  console.log("rooms", rooms);

  const menuOptions = (
    <>
      <NewDocumentButton />

      {/* My Documents */}

      {/* List */}

      {/* Shared with me */}

      {/* Trash */}
    </>
  );

  return (
    <div className="p-2 md:p-5 bg-gray-200 relative">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="p-2 hover:opacity-30 rounded-lg" size={40} />
          </SheetTrigger>
          <div>{/* options */}</div>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <div>{menuOptions}</div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:inline">{menuOptions}</div>
    </div>
  );
}

export default Sidebar;
