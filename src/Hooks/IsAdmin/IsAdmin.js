import { useEffect, useState } from "react";

const useAdmin=email=>{
    const [isAdmin, setisAdmin] = useState(false);
    useEffect(() => {
        if(email){
            fetch(`http://localhost:5000/admin/${email}`)
            .then(res=>res.json())
            .then(data=>{
                setisAdmin(data.isAdmin)
            })
        }
    }, [email]);
    return[isAdmin]
}
export default useAdmin