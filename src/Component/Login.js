import React from 'react'
import userIcon from '../Images/usericon.png';
import lock from '../Images/lock.png';
function Login() {
    return (
        <div className='w-full bg-white  flex justify-center items-center h-screen'>

            <div className="flex flex-col w-3/12 justify-center shad">
                <div className="p-6 bg-top relative">
                    <h4 className='color-theme'>Welcome Back !</h4>
                    <p className='color-theme'>Sign in to continue to dashboard</p>

                    <img src={userIcon} alt="" className=' w-12 h-12 absolute top-24' />
                </div>
                <div className="bg-white p-6">
                    <p className='p-bg-color text-xs font-medium text-center p-color p-2 mt-12 rounded-md'>
                        Enter the new password and confirm password
                    </p>

                    <form action="">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="Password" className='p-color font-semibold text-xs'>Email Address</label>
                            <input type="password" name="" id="" className='border border-gray-500 p-2 rounded-md placeholder:text-xs' placeholder='Enter Email Address' />
                        </div>


                        <div className="mt-4 flex flex-col gap-1">
                            <label htmlFor="Password" className='p-color font-semibold text-xs'> Password</label>
                            <input type="password" name="" id="" className='border border-gray-500 p-2 rounded-md placeholder:text-xs' placeholder='Enter password' />
                        </div>

                        <div className="flex items-center mt-4 gap-2">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="remember" className='text-xs p-color font-medium'>Remember Me</label>
                        </div>


                        <button type="submit" className='button-bg p-2 mt-4 w-full text-white rounded-md'>Sign In</button>

                        <div className="flex items-center justify-center gap-1 mt-4">
                            <img src={lock} alt="" className='h-6 w-6' /><p className='mt-3 text-xs p-color font-medium'> Forgot your password?</p>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Login