import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextApi/Authprovider/Authprovider';
const Signup = () => {

    const{signUp,updateUserProfile}=useContext(AuthContext);
    const { register,reset, formState: { errors }, handleSubmit } = useForm();


    const handleSignup=data=>{
    

        signUp(data.email,data.password)
        .then(result=>{
            const user =result.user;
            console.log(user)
            reset()
            
            handleUpdateUser(data.name)
            
            
        })
        .catch(error=>{
            console.error(error)
          })

          const name = data.name;
          const email = data.email
          const role = data.role
          const userInfo={
            name,
            email,
            role

          }
      
        fetch('http://localhost:5000/userinfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                
                console.log(data)
                
            })
            .catch(error => console.error(error));
    }
    const handleUpdateUser =(name)=>{
        const profile={
            displayName: name,
        }
        
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error=>console.error(error))
    }
   
    return (
        <div className='flex justify-center mt-16'>
          <form className='flex justify-center shadow-xl mx-4 mt-16 mb-16 w-96' onSubmit={handleSubmit(handleSignup)}>

            <div className='my-10 mx-4 md:mx-0'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-2xl mt-2">Your Name</span>
                    </label>
                    <input type="text" {...register("name", { required: 'Name is required' })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500' role='alert'>{errors.name?.message}</p>}
                </div>
               
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-2xl mt-2">Your Email</span>
                    </label>
                    <input type="text" {...register("email", { required: 'Email is required' })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500' role='alert'>{errors.email?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-2xl mt-2">Password</span>
                    </label>
                    <input type="password" {...register("password", { required: 'Password is required' })} className="input input-bordered w-full max-w-xs" />
                </div>
                {errors.password && <p className='text-red-500' role='alert'>{errors.password?.message}</p>}

                <div>
                    <label className="label">
                        <span className="label-text text-2xl mt-2">Are you a buyer or seller?</span>
                    </label>
                    <select  {...register("role", { required: true })} className="select select-bordered w-full max-w-xs">
                        <option>Buyer</option>
                        <option>Seller</option>
                        
                    </select>
                </div>
                <p className='mt-6 mb-4 text-xl'>Already have an Account? <br/> please <Link className='text-primary font-bold' to='/login'>Login</Link></p>


             
                <input className="btn btn-primary text-white" type="submit" />
            </div>

        </form>  
        </div>
        
    );
};

export default Signup;