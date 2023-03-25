import { useEffect, useState } from "react";

const useSeller=email=>{
    const [isSeller, setisSeller] = useState(false);
    const [issellerLoading, setissellerLoading] = useState(true);
    useEffect(() => {
        if(email){
            fetch(`https://pigeon-haat-server.vercel.app/seller/${email}`)
            .then(res=>res.json())
            .then(data=>{
                setisSeller(data.isSeller)
                setissellerLoading(false)
            })
        }
    }, [email]);
    return[isSeller,issellerLoading]
}
export default useSeller