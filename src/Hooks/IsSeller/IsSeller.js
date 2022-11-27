import { useEffect, useState } from "react";

const useSeller=email=>{
    const [isSeller, setisSeller] = useState(false);
    useEffect(() => {
        if(email){
            fetch(`http://localhost:5000/seller/${email}`)
            .then(res=>res.json())
            .then(data=>{
                setisSeller(data.isSeller)
            })
        }
    }, [email]);
    return[isSeller]
}
export default useSeller