import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextApi/Authprovider/Authprovider';
const Signup = () => {

    const{signUp}=useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleSignup=data=>{
        console.log(data);

        signUp(data.email,data.password)
        .then(result=>{
            const user =result.user;
            console.log(user)
            // form.reset()
            // navigate(from,{replace: true});
            // handleUpdateUser(name,photourl);
            
        })
        .catch(error=>{
            console.error(error)
          })
    }
    return (
        <form className='flex justify-center' onSubmit={handleSubmit(handleSignup)}>

            <div>
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