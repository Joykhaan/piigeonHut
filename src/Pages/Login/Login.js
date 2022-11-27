import {GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../ContextApi/Authprovider/Authprovider';

const Login = () => {

    const googleProvider = new GoogleAuthProvider()
    const{logIn,googleSignUp}=useContext(AuthContext)
    const { register,reset, formState:{errors}, handleSubmit } = useForm();
    // const [data, setData] = useState("");
    const handlelogin= data=>{
        console.log(data);
        logIn(data.email, data.password)
        .then(result => {
          const user = result.user;
          console.log(user);
        //   toast.success("Deleted Successfully",{
        //       position:"top-center"
        //   });
        reset();
        //   navigate(from, { replace: true });
        })
        .catch(error => {
          console.error(error)
        })
    }
    const handleGoogleSignUp=()=>{
        googleSignUp(googleProvider)
        .then(result =>{
            const user = result.user;
                console.log(user);
        })
        .catch(error =>console.error(error))
    }

    return (
        <form className='flex justify-center' onSubmit={handleSubmit(handlelogin)}>

            <div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="text" {...register("email",{required:'Email is required'})} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500' role='alert'>{errors.email?.message}</p> }
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" {...register("password",{required:'Password is required'})} className="input input-bordered w-full max-w-xs" />
                </div>
                {errors.password && <p className='text-red-500' role='alert'>{errors.password?.message}</p> }
                <button onClick={handleGoogleSignUp} className="btn btn-primary">Login with google</button>

                <p>Not registered? please <Link to='/signup'>Signup</Link> now</p>



                {/* <p>{data}</p> */}
                <input className="btn btn-secondary" type="submit" />
            </div>

        </form>
    );
};

export default Login;