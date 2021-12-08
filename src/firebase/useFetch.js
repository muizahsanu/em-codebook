import { db } from "./config";
import { collection, getDocs } from "firebase/firestore"; 
import { useEffect, useState } from "react";

export const useFetch = (collectionName) =>{
    const [data, setData] = useState(null)

    useEffect(()=>{
        const fetchData = async () =>{
            let result = []
            if(collectionName){
                const querySnapshot = await getDocs(collection(db, collectionName));
                
                querySnapshot.forEach((doc)=>{
                    result.push({id: doc.id, ...doc.data()})
                })
    
                setData(result)
            }
        }

        fetchData()
    }, [collectionName])

    return {data}
}