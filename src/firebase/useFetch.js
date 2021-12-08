import { db } from "./config";
import { collection, getDocs } from "firebase/firestore"; 
import { useEffect, useState } from "react";

export const useFetch = () =>{
    const [data, setData] = useState(null)

    useEffect(()=>{
        const fetchData = async () =>{
            let result = []
            const querySnapshot = await getDocs(collection(db, "tests"));
            
            querySnapshot.forEach((doc)=>{
                result.push({id: doc.id, ...doc.data()})
            })

            setData(result)
        }

        fetchData()
    }, [])

    return {data}
}