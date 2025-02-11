import Slider from './slides/Slide'
import VolunteerNeedsNow from './VolunteerNeedsNow/VolunteerNeedsNow'
import FAQs from './FAQs/FAQs'
import StatsSection from './StatesSection/StatesSection'
import VolunteerSectors from './VolunteerSectors/VolunteerSectors'
import Newsletter from "./Newsletter/Newsletter"
import { HR } from "flowbite-react";
import Reviews from "./Reviews/Reviews"
const Home = () => {
  return (
    <div className='bg-gray-200 dark:bg-sky-950 '>
      <Slider />
      <div className='md:px-32 px-5'>
      <VolunteerNeedsNow />
      <HR className='bg-slate-400 dark:bg-gray-200' />
      <VolunteerSectors />
      <StatsSection />
      <Newsletter />
      <FAQs />
      <Reviews />
      </div>
    </div>
  )
}

export default Home
