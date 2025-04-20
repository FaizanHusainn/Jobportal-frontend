import { Carousel } from '@mantine/carousel';
import { Category } from '../Data/Data';

const JobCategory = () => {
  return (
    <div className="mt-5 pb-5">
      <div className="text-4xl text-center font-semibold text-[#f6f6f6]">
        Browse <span className="text-[#ffd149]">Job</span> Categories
      </div>
      <p className="text-lg text-[#d1d1d1] text-center mt-7">
        Explore diverse job opportunities tailored to your skills. Start your career journey today!
      </p>

      <Carousel
        slideSize="25%"
        slideGap="md"
        loop
        align="start"
        className="mt-8"
      >
        {Category.map((category, index) => (
          <Carousel.Slide key={index} className='px-15'>
            <div className="flex flex-col items-center w-60 border-1 rounded-xl p-4 border-[#ffd149] hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 shadow-[#f99b07]">
              <div className="p-2 bg-[#ffe588] rounded-full">
                <img className="h-8 w-8" src={category.image} alt={category.title} />
              </div>
              <div className="text-[#f6f6f6] text-xl font-semibold my-2">
                {category.title}
              </div>
              <div className="text-sm text-center text-[#d1d1d1]">
                {category.description}
              </div>
              <div className="text-[#ffe588] text-lg">
                {category.jobCount} New Jobs
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
