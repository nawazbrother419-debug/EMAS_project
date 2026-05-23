import { useEffect, useState } from "react";

export default function useFetch(fetchFunction){

    const [data, setData] = useState([]);

    const fetchData = async ()=>{

        const result = fetchFunction();
        setData(result || []);
    };

    useEffect(()=>{
        fetchData();
    },[]);

    return {data, fetchData, setData};
}

