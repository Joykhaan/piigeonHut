import { useEffect, useState } from "react";

const useBuyer=email=>{
    const [isBuyer, setisBuyer] = useState(false);
    useEffect(() => {
        if(email){
            fetch(`http://localhost:5000/buyer/${email}`)
            .then(res=>res.json())
            .then(data=>{
                setisBuyer(data.isBuyer)
            })
        }
    }, [email]);
    return[isBuyer]
}
export default useBuyer