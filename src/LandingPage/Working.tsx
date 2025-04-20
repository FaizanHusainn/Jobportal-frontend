import girl from "../assets/girl.png";
import resume from "../assets/resume.png";
import job from "../assets/Job.png";
import hire from "../assets/candidate.png";

const Working = () => {
  return (
    // Main div
    <div className="flex h-120">
        {/* left section */}
        <div className="w-[50%] flex items-center justify-center">
            <div>
                <img className="h-100" src={girl} alt="" />
            </div>
        </div>

        {/* Right section */}
        <div className=" w-[50%] flex flex-col justify-center">
            {/* li container */}
            <div>
                {/* li main div  */}
                <div className="flex justify-center items-center p-8 ">
                    <div className="bg-amber-300 rounded-full h-16 w-16 mx-8 flex items-center justify-center">
                        <img className="h-8 w-8" src={resume} alt="" />
                    </div>
                    <div className=" w-[70%] text-white">
                        <span className="text-2xl">Build Your Resume</span>
                         <br></br>Create a standout resume with you skills
                    </div>
                </div>
            </div>
 
            <div>
                {/* li main div  */}
                <div className="flex justify-center items-center p-8 ">
                    <div className="bg-amber-300 rounded-full h-16 w-16 mx-8 flex items-center justify-center">
                        <img className="h-8 w-8"  src={job} alt="" />
                    </div>
                    <div className=" w-[70%] text-white">
                        <span className="text-2xl">Apply for Job</span>
                         <br></br>Find and apply for jobs that match your skills.
                    </div>
                </div>
            </div>

            <div>
                {/* li main div  */}
                <div className="flex justify-center items-center p-8 ">
                    <div className="bg-amber-300 rounded-full h-16 w-16 mx-8  flex items-center justify-center">
                        <img className="h-8 w-8" src={hire} alt="" />
                    </div>
                    <div className=" w-[70%] text-white">
                        <span className="text-2xl">Get Hired</span>
                         <br></br>Connect with employers and start your new job.
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Working