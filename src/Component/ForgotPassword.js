import React from 'react'
import userIcon from '../Images/usericon.png';
import { NavLink } from "react-router-dom";

function ForgotPassword() {
    return (
        <div className='w-full bg-white  flex justify-center items-center h-screen'>

            <div className="flex flex-col w-3/12 justify-center shad">
                <div className="p-6 bg-top relative">
                    <h4>Reset Password</h4>
                    <p>Re-Password with Estate Management.</p>

                    <img src={userIcon} alt="" className=' w-12 h-12 absolute top-24' />
                </div>
                <div className="bg-white p-6">
                    <p className='p-bg-color text-xx font-medium text-center p-color p-2 mt-12 rounded-md'>
                    Enter your Email and instructions will be sent to you!
                    </p>

                    <form action="">
                        <div className="flex flex-col mt-6">
                            <label htmlFor="email" className='p-color text-xs font-semibold'>Email Address</label>
                            <input type="email" name="" id="" className='border border-gray-500 p-2 rounded-md mt-2' placeholder='Email Address' />
                        </div>


                      


                        <button type="submit" className='button-bg p-2 mt-6 w-full text-white rounded-md font-medium'>Reset Password</button>


                        <span className='flex justify-center item-center gap-1 mt-3'>
                            <p className='p-color text-xs font-normal'>Remember It ? </p>
                            <NavLink className="color-theme text-xs font-normal" exact to="/login"> Sign In here</NavLink>
                        </span>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default ForgotPassword