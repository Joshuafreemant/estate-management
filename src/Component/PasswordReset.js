import React from 'react'
import userIcon from '../Images/usericon.png';
function PasswordReset() {
    return (
        <div className='w-full bg-white  flex justify-center items-center h-screen'>

            <div className="flex flex-col w-3/12 justify-center shad">
                <div className="p-6 bg-top relative">
                    <h4>Password Resetx</h4>
                    <p>Re-Password with Estate Management.</p>

                    <img src={userIcon} alt="" className=' w-12 h-12 absolute top-24' />
                </div>
                <div className="bg-white p-6">
                    <p className='p-bg-color text-xs font-medium text-center p-color p-2 mt-12 rounded-md'>
                        Enter the new password and confirm password
                    </p>

                    <form action="">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="Password" className='p-color font-semibold'>Password</label>
                            <input type="password" name="" id="" className='border border-gray-500 p-2 rounded-md' placeholder='Enter new password' />
                        </div>


                        <div className="mt-4 flex flex-col gap-1">
                            <label htmlFor="Password" className='p-color font-semibold'>Confirm Password</label>
                            <input type="password" name="" id="" className='border border-gray-500 p-2 rounded-md' placeholder='Confirm new password' />
                        </div>


                        <button type="submit" className='button-bg p-2 mt-4 w-full text-white rounded-md'>Reset Password</button>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default PasswordReset