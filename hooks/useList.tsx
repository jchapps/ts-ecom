import { collection, DocumentData, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { Movie } from "../typings";

function useList(uid: string | undefined) {
  const [list, setList] = useState<Movie[] | DocumentData>([]);

  useEffect(() => {
    if (!uid) return;

    return onSnapshot(
      collection(db, "customers", uid, "myList"),
      (snapshot) => {
        setList(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(), //making a single object with the id and data
          }))
        );
      }
    ); //snapshot cotains the list of documents inside mylist
  }, [db, uid]);
  return <div></div>;
}

export default useList;
