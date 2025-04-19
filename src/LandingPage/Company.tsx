import Marquee from "react-fast-marquee";
import { companies } from "../Data/Data";
const Company = () => {
  return (
    <div className="mt-10 pb-5">
      <div className="text-4xl text-center font-semibold text-[#f6f6f6] my-8">
        Trusted By <span className="text-[#ffd149]">1000+</span> Companies
      </div>
      <Marquee pauseOnHover={true}>
        {companies.map((company, index) => (
          <div key={index}>
            <img className="h-16 mx-8 my-10 hover:bg-[#3d3d3d] rounded-xl cursor-pointer" src={`/Companies/${company}.png`} alt={company} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Company;
