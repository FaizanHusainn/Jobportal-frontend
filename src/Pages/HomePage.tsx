import Header from '../Header/Header'
import Company from '../LandingPage/Company'
import DreamJob from '../LandingPage/DreamJob'
import Footer from '../LandingPage/Footer'
import JobCategory from '../LandingPage/JobCategory'
import Testinomial from '../LandingPage/Testinomial'
import Working from '../LandingPage/Working'

const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-[#2d2d2d] font-['poppins']">
      <Header />
      <DreamJob />
      <Company />
      <JobCategory />
      <Working />
      <Testinomial/>
      <Footer />
    </div>
    
  )
}

export default HomePage