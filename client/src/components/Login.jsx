
"use client"
import React, { useState } from 'react'
import AuthService from '../services/authServices'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form';

const Login = () => {

  const router = useRouter();


  const [isLogin, setIsLogin] = useState(true);


  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    shouldFocusError: false
  });


  const handleLogin = (data, event) => {
    event.preventDefault();
    console.log(data, "i am data");
    const { email, password } = data
    AuthService.login(
      email, password
    ).then((response) => {
      console.log(response, "i am response");
      if (response.message === "Logged in successfully") {
        router.push('/myprofile')
      }

    }
    )
  }

  const handleSignup = (data, event) => {

    console.log(data, "i am data");
    const { name, email, password } = data
    AuthService.signup(
      name, email, password
    ).then((response) => {
      console.log(response, "i am response");
      if (response.message === "Signed in successfully") {
        setIsLogin(true)
      }

    }
    )
  }





  const LoginForm = () => {


    return (
      <form className="bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out" onSubmit={handleSubmit(handleLogin)}>
        <h2 className='p-3 text-3xl font-bold text-pink-400'>{"Mobilicis"}</h2>
        <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
        <h3 className='text-xl font-semibold text-blue-400 pt-2'>{"Log In!"}</h3>
        <div className='flex space-x-2 m-4 items-center justify-center'>
          
        </div>
        {/* Inputs */}
        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-col'>


            {/* Input1 */}
            <input type='emaill' name='email' className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0  mx-auto' autoComplete="off" placeholder='Email'
              {...register("email", {
                required: "Email is required",


              })}


            />

            {errors && errors.email && (

              <span className=" text-start text-red-600 ml-2">{errors.email.message}</span>
            )}



            {/* Input2 */}
            <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0  mx-auto' placeholder='Password' autoComplete="off" name="password"
              {...register("password", {
                required: "Password is Required",
              })} />
            {errors && errors.password && (
              <span className="  text-start text-red-600 ml-2">{errors.password.message}</span>
            )}
          </div>
          <button className='rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in' type="submit" >
            Login In
          </button>
        </div>
        <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
        <p className='text-blue-400 mt-4 text-sm'>{"Don't have an account?"}</p>
        <p className='text-blue-400 mb-4 text-sm font-medium cursor-pointer' onClick={() => setIsLogin(false)}>{"Create a New Account?"}</p>
      </form>
    )
  }

  const SignUpForm = () => {
    return (
      <form className="bg-blue-400  rounded-2xl shadow-2xl  flex flex-col w-full  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in" onSubmit={handleSubmit(handleSignup)} >
        <h2 className='p-3 text-3xl font-bold text-white'>Mobilicis</h2>
        <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
        <h3 className='text-xl font-semibold text-white pt-2'>{"Create Account!"}</h3>
  
        {/* Inputs */}
        <div className='flex flex-col items-center justify-center mt-2'>

          <div className='flex flex-col justify-center'>


            {/* Input1 */}
            <input type="name" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0 mx-auto' placeholder='Your Name' autoComplete="off" name="name"
              {...register("name", {
                required: "Name is Required",
              })} />
            {errors && errors.name && (
              <span className="  text-start text-red-600 ml-2">{errors.name.message}</span>
            )}


            {/* Input2 */}
            <input type='emaill' name='email' className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0  mx-auto' autoComplete="off" placeholder='Email'
              {...register("email", {
                required: "Email is required",

                // pattern: {
                //   value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                //   message: "Invalid Email "
                // }
              })}

            />

            {errors && errors.email && (

              <span className=" text-start text-red-600 ml-2">{errors.email.message}</span>
            )}



            {/* Input3 */}
            <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0  mx-auto' placeholder='Password' autoComplete="off" name="password"
              {...register("password", {
                required: "Password is Required",
              })} />
            {errors && errors.password && (
              <span className="  text-start text-red-600 ml-2">{errors.password.message}</span>
            )}
            <button className='rounded-2xl m-4 mx-auto text-blue-400 bg-white w-3/5 px-4 py-2 shadow-md hover:text-white hover:bg-blue-400 transition duration-200 ease-in' type="submit" >
              Sign Up
            </button>
          </div>

        </div>
        <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
        <p className='text-white mt-4 text-sm'>{"Already have an account?"}</p>
        <p className='text-white mb-4 text-sm font-medium cursor-pointer' onClick={() => setIsLogin(true)}>{"Login to your Account?"}</p>
      </form>
    )
  }

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen md:py-2">
      <main className="flex items-center w-full px-2 md:px-20">
        <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
          <p className='text-6xl text-blue-500 font-bold'>{"Mobilicis"}</p>
          <p className='font-medium text-lg leading-1 text-pink-400'>{"Global leader in Mobile Phone and Device Management solutions"}</p>
        </div>
        {
          isLogin ? (
            <LoginForm />
          ) : (
            <SignUpForm />
          )
        }
      </main>
    </div>
  )
}

export default Login