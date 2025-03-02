import HeroImage from "../assets/Boy.png";
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const DreamJob = () => {
  return (
    // Main Container (full width + vertical centering)
    <div className="flex p-10 w-full items-center">
      {/* Left Section (vertical centering) */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="max-w-2xl mx-auto"> {/* Add max-width if needed */}
          <h1 className="text-6xl font-bold mb-4 text-[#f6f6f6] leading-tight">Find your <span className="text-[#ffd149]">dream job </span>with us</h1>
          <p className="text-2xl mb-8 text-[#e7e7e7]">
            Good life began with a good company. Start explore thousands of jobs in one place.
          </p>
          {/* Add buttons or other content here */}
          <div className="flex gap-3">
            <TextInput className="bg-[#4f4f4f] rounded-lg py-1 px-2 text-[#ffd149] [&_input]:!text-[#f6f6f6]"
            label="Job Title"
            placeholder="Software Engineer"
            variant="unstyled"
            />
            <TextInput className="bg-[#4f4f4f] rounded-lg py-1 px-2 text-[#ffd149] [&_input]:!text-[#f6f6f6]"
            label="Job Type"
            placeholder="Fulltime"
            variant="unstyled"
            />
            <div className="flex items-center justify-center h-full w-20 bg-[#ffbd20] text-[#f6f6f6] rounded-lg p-2 hover:bg-[#f99b07] cursor-pointer">
            <IconSearch stroke={2} className="h-[80%] w-[80%]"/>
            </div> 
          </div>
        </div>
      </div>

      {/* Right Section (horizontal centering) */}
      <div className="flex-1 flex justify-center">
        {/* Image Container */}
        <div className="w-[30rem]">
          <img 
            src={HeroImage} 
            alt="Career illustration" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default DreamJob;