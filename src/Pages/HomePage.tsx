import Header from '../Header/Header'
import Company from '../LandingPage/Company'
import DreamJob from '../LandingPage/DreamJob'
import JobCategory from '../LandingPage/JobCategory'

const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-[#2d2d2d] font-['poppins']">
      <Header />
      <DreamJob />
      <Company />
      <JobCategory />
    </div>
    
  )
}

export default HomePage