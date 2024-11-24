import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6"
const Newsletter = () => {
  return (
    <div>
        <div>
        <h3 className='text-lg font-bold mb-2 flex item-center gap-2'>
            <FaEnvelopeOpenText/>
            Email me for Jobs</h3>
            <p className='text-primay/75 tex-base mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam molestiae nihil aperiam distinctio voluptas incidunt.</p>
            <div className='w-full space-y-4'>
            <input type="email" name="email" id="email" placeholder="name@email.com" className='w-full block py-2 pl-3 border focus:outline-none' />
            <input type='submit' value={"Subscribe"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
         </div>
         </div>
         <div className='mt-24'>
        <h3 className='text-lg font-bold mb-2 flex item-center gap-2'>
            <FaRocket/>
            get noticed faster</h3>
            <p className='text-primay/75 tex-base mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam molestiae nihil aperiam distinctio voluptas incidunt.</p>
            <div className='w-full space-y-4'>
            <input type='submit' value={"Upload your resume"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
         </div>
         </div>
         </div>
  )
}

export default Newsletter