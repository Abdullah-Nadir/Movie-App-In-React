import { useEffect, useState } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);
    
    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error("could not fetch data :(")
                }
                return res.json();
            }).then(data => {
                setData(data.results);
                setIsLoading(false);
                setErr(null);
            }).catch(err => {
                setErr(err.message);
                setIsLoading(false);
                setData(null);
            });
    }, [url]);

    return {data, isLoading, err};
}

export default UseFetch;