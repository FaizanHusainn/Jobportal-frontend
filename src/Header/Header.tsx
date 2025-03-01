import { IconBriefcase } from '@tabler/icons-react';
import { IconBellRinging } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import { Avatar, NavLink } from '@mantine/core';
import { Indicator } from '@mantine/core';
import NavLinks from './NavLinks';
import avatar from "../assets/avatar.png";

const Header = () => {
  return (
    <div className='w-full bg-black h-20 px-6 text-white flex justify-between items-center'>
        <div className='flex gap-3 items-center text-[#ffbd20] text-3xl'>
            <IconBriefcase stroke={1.25} className='h-8 w-8'/> 
            iJobs
        </div>
        {/* Calling the naving method from the NavLinks file */}
        {NavLinks()}
        <div className='flex items-center gap-4'>
        <div className='flex items-center gap-2'>
            <div>Marshall</div>
            <Avatar src={avatar} alt="it's me"  />
        </div>
        <div className='bg-[#3d3d3d] p-1.5 rounded-full'>
          <IconSettings stroke={1.5} />
        </div>
        <div className='bg-[#3d3d3d] p-1.5 rounded-full'>

           {/* Mantine indicator to show notification on bell icon */}
          <Indicator processing color='brightSun.4' offset={6} size={8}>
            <IconBellRinging stroke={1.5} />
          </Indicator>
        </div>
        </div>
    </div>
  )
}

export default Header