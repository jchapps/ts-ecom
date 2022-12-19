import { collection, DocumentData, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { Movie } from '../typings'

function useList(uid: string | undefined) {
  const [list, setList] = useState<DocumentData[] | Movie[]>([])

  useEffect(() => {
    if (!uid) return

    return onSnapshot(
      collection(db, 'customers', uid, 'myList'),
      (snapshot) => { //snapshot cotains the list of documents inside mylist
        setList(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(), //making a single object with the id and data
          }))
        )
      }
    )
  }, [db, uid])

  return list
}

export default useList
