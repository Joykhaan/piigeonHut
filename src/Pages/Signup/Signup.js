import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextApi/Authprovider/Authprovider';
const Signup = () => {

    const{signUp,updateUserProfile}=useContext(AuthContext);
    const { register,reset, formState: { errors }, handleSubmit } = useForm();


    const handleSignup=data=>{
        console.log('signup',data);

        signUp(data.email,data.password)
        .then(result=>{
            const user =result.user;
            console.log(user)
            reset()
            // navigate(from,{replace: true});
            // updateUserProfile(data.name,data.role)
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
        //   console.log(userInfo)
        fetch('http://localhost:5000/userinfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                
                // if(data.acknowledged){
                //     toast.success("service added!!",{
                //         position:"top-center"
                //     });
                //     form.reset();
                // }
                
            })
            .catch(error => console.error(error));
    }
    const handleUpdateUser =(name)=>{
        const profile={
            displayName: name,
        }
        // console.log('phone',phone)
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error=>console.error(error))
    }
   
    return (
        <form className='flex justify-center' onSubmit={handleSubmit(handleSignup)}>

            <div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" {...register("name", { required: 'Name is required' })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500' role='alert'>{errors.name?.message}</p>}
                </div>
                {/* <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Number</span>
                    </label>
                    <input type="text" {...register("phone", { required: 'Phone number is required' })} className="input input-bordered w-full max-w-xs" />
                    {errors.phone && <p className='text-red-500' role='alert'>{errors.phone?.message}</p>}
                </div> */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="text" {...register("email", { required: 'Email is required' })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500' role='alert'>{errors.email?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" {...register("password", { required: 'Password is required' })} className="input input-bordered w-full max-w-xs" />
                </div>
                {errors.password && <p className='text-red-500' role='alert'>{errors.password?.message}</p>}

                <div>
                    <label className="label">
                        <span className="label-text">Are you a buyer or seller?</span>
                    </label>
                    <select  {...register("role", { required: true })} className="select select-bordered w-full max-w-xs">
                        <option>Buyer</option>
                        <option>Seller</option>
                        <option>Admin</option>
                    </select>
                </div>
                <p>Already have an Account? please <Link to='/login'>Login</Link></p>


                {/* <p>{data}</p> */}
                <input className="btn btn-secondary" type="submit" />
            </div>

        </form>
    );
};

export default Signup;