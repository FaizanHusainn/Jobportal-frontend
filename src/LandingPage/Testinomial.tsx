import { Avatar, Rating } from "@mantine/core";
import { TestinomialDetails } from "../Data/Data";

const Testinomial = () => {
  return (
    <div className="mt-5 pb-5">
      <div className="text-4xl text-center font-semibold text-[#f6f6f6]">
        What <span className="text-[#ffd149]">User</span> Says About Us
      </div>

      {/* Testinomail Parent container */}
      <div className="px-10 py-10 flex gap-5 ">
        {TestinomialDetails.map((currTesti, index) => (
          <div key={index} className="border-2 border-amber-300 p-3 rounded-xl">
            <div className="flex gap-3 items-center">
              {/* Testinomail left section */}
              <Avatar className="!h-14 !w-14" src={currTesti.photo}></Avatar>

              {/* Testinomail right section */}
              <div className="flex flex-col gap-y-1">
                <div className="text-xl text-amber-50">{currTesti.name}</div>
                <Rating value={3.5} fractions={2} readOnly />
              </div>
            </div>
            <p className="text-[#B0B0B0] py-0.5 text-sm">{currTesti.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testinomial;
