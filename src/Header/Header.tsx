import React from 'react'
import { IconBriefcase } from '@tabler/icons-react';

const Header = () => {
  return (
    <div className='w-full bg-black h-20 px-6 text-white flex justify-between items-center'>
        <div className='flex gap-3 items-center'>
            <IconBriefcase stroke={1.25} className='h-8 w-8'/> 
            iJobs
        </div>
        <div> links</div>
        <div> profile</div>
    </div>
  )
}

export default Header