import { useState, useEffect } from "react";


function useFetch(url){

    const [data ,setdata] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        async function fetchData(){
                try{
                    setLoading(true);
                    const response = await fetch(url);

                    if(!response.ok){
                        throw new Error("Something went wrong");
                    }

                    const result = await response.json();
                    setdata(result);
                }
                catch(err){
                    setError(err.message);
                }
                finally{
                    setLoading(false);
                }
        }
        fetchData();
    }, [url]);

return { data, loading, error };


}

export  {useFetch}



/*

function usefetch (url) {
    
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const[error, setError] = useState(null);

    
   useEffect (() => {

    async function fetchdata(){
        try{
        setLoading(true)
        const response = await fetch (url);

        if(!response.ok){
        throw new Error("Response is not valid"); 
        }

        const result = await response.json();
        setData(result);
        }catch(err){
        setError(err.message)
        }finally{
        setLoading(false)
        }
    
    } fetchdata();
    },[url]);

    return { data, loading, error };

    }
*/