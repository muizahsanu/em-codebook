import { collection, doc, setDoc } from "@firebase/firestore"
import { useEffect } from "react"
import { db } from "./config"

export const addData = (newData)=>{
    useEffect(()=>{
        const addNewData = async ()=>{
            await setDoc(doc(db, "codebooks" ), newData)
        }
    },[newData])
}