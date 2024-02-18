import React, { useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom';
import "./login.css"
const Login = () => {
  const [mail, setMale]=useState<string>("user@mail")
  const [pass, setPass]=useState<string>("1212212")
  const navigate = useNavigate(); 
  function handleSubmit(e:Event){
    e.preventDefault();
    console.log("hi")
    navigate("/Movies");
    // return redirect('/movies');
  }
  return (
    <>
      <div className="login bg-black sm:bg-transparent bg-opacity-70 relative text-gray-100 z-10 flex flex-col gap-14">
        <header className='px-9 w-full pt-9'>
          <img className='w-28' src="/Netflix-Logo-removebg-preview.png" alt="" />
        </header>
        <main className='sm:max-w-[450px] p-9 sm:px-20 sm:py-14 sm:bg-black sm:bg-opacity-70 sm:m-auto rounded-lg'>
          <form action="" onSubmit={(e:any)=>handleSubmit(e)} className='flex flex-col gap-2'>
            <h2 className='text-3xl font-bold pb-7'>Sign In</h2>
            <div>
              <div className='relative input-con'>
                <input onChange={(e)=>setMale(e.target.value)} className="p-4 w-full block rounded" required type="email" placeholder="" id="email" value={mail}/>
                <span className='absolute transition-all p-4 top-0 text-base pointer-events-none'>Email</span>
              </div>
              <p className='text-xs py-1 opacity-0' id='emailValidation'></p>
            </div>
            <div>
              <div className='relative input-con'>
                <input onChange={(e)=>setPass(e.target.value)} placeholder="" required className="p-4 w-full block rounded " type="password" id="password" value={pass}/>
                <span className='absolute transition-all p-4 top-0 text-base pointer-events-none'>Password</span>
              </div>
              <p className='text-xs py-1 opacity-0' id='passwordValidation'></p>
            </div>
            <button type='submit' className='w-full p-2 btn'>Sign In</button>
            <p className='text-center  my-2 hover:underline cursor-pointer '>Forgot Email or Password?</p>
          </form>
          <div className='py-10 flex flex-col gap-3'>
            <div>
              <input type="checkbox" name="" id="rememberMe" />
              <label className='ps-1' htmlFor="rememberMe">Remember me</label>
            </div>
            <p className='text-gray-400'>New to Netflix? <span className='text-gray-100 hover:underline cursor-pointer'>Sign up now.</span></p>
            <p className='text-gray-400 text-xs'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className='whitespace-nowrap hover:underline  text-blue-600'>Learn more.</a></p>
          </div>
        </main>
        <footer className="sm:bg-black sm:bg-opacity-70 text-gray-300">
          <div className='footer px-9 w-full py-7 '>
            <p className="pb-4">Question? Contact us.</p>
            <ul className="items flex flex-wrap">
              <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">FAQ</a></li>
              <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Help Center</a></li>
              <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Terms of Use</a></li>
              <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Privacy</a></li>
              <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Cookie Preferences</a></li>
              <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Corporate Information</a></li>
            </ul>
            <button className="lang flex my-5 py-1 px-3 items-center h-full rounded">
              <i className="fa-solid fa-globe"></i>
              <span className="text-sm px-1">En</span>
              <i className="fa-solid fa-caret-down"></i>
            </button>
          </div>
        </footer>
      </div>
      <div className="bg-img hidden sm:block absolute w-full h-full top-0 left-0">
        <img className='object-cover w-full h-full' src="/netflix_login_bg.jpg" alt="" />
        <div className="shadow w-full absolute h-full bg-black left-0 top-0 bg-opacity-50"></div>
      </div>
    </>
  )
}

export default Login