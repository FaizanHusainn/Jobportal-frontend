import { IconBriefcase } from "@tabler/icons-react";

const Footer = () => {
  return (
    <div>
      <div className="flex h-60 py-5">
        {/* left section */}
        <div className="w-[40%] p-10">
          <IconBriefcase stroke={1.25} className="h-12 w-12" color="white" />
          <p className="text-2xl py-2 font-medium text-[#ffbd20]">iJobs</p>
          <p className="text-[#B0B0B0]">
            Job portal with user profiles, skill updates, certifications, work
            experience and admin job postings.
          </p>
        </div>
        {/* Right section */}
        <div className="w-[60%] flex gap-30 p-10 justify-center">
          <div>
            <h4 className="text-2xl font-medium text-[#ffbd20]">Product</h4>
            <ul className="text-[#B0B0B0] py-2 text-m">
              <li className="hover:text-amber-50 cursor-pointer">Find Jobs</li>
              <li className="hover:text-amber-50 cursor-pointer">Find Company</li>
              <li className="hover:text-amber-50 cursor-pointer">Find Employee</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-medium text-[#ffbd20]">Company</h4>
            <ul className="text-[#B0B0B0] py-2 text-m">
              <li className="hover:text-amber-50 cursor-pointer">About Us</li>
              <li className="hover:text-amber-50 cursor-pointer">Contact Us</li>
              <li className="hover:text-amber-50 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-amber-50 cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-medium text-[#ffbd20]">Support</h4>
            <ul className="text-[#B0B0B0] py-2 text-m">
              <li className="hover:text-amber-50 cursor-pointer">Help & Support</li>
              <li className="hover:text-amber-50 cursor-pointer">Feedback</li>
              <li className="hover:text-amber-50 cursor-pointer">FAQs</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-6 text-center border-t border-[#424242]">
        <p className="text-amber-50 text-sm">
          Designed & Developed By <span className="text-[#ffbd20]">Faizan Husain</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
