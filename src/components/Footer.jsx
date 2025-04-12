import React from 'react'

const Footer = () => {
    return (
        <div className='text-white flex flex-col justify-center items-center w-full mt-124 '>
            <div className="logo font-bold text-white text-2xl">
                <span className='text-green-500'> &lt;</span>
                <span>Secure</span><span className='text-green-500'>Z/&gt;</span>
            </div>

            <div className='flex justify-center items-center'> Created with <img className='w-7 mx-2' src="icons/heart.png" alt="" /><span className='text-green-500 font-bold'>by Vaibhav Gupta</span></div>
        </div>
    )
}

export default Footer