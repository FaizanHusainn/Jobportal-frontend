import Company from '../LandingPage/Company'
import DreamJob from '../LandingPage/DreamJob'
import JobCategory from '../LandingPage/JobCategory'
import Testinomial from '../LandingPage/Testinomial'
import Working from '../LandingPage/Working'

const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-[#2d2d2d] font-['poppins']">
      
      <DreamJob />
      <Company />
      <JobCategory />
      <Working />
      <Testinomial/>
      
    </div>
    
  )
}

export default HomePage