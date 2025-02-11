import Slider from './slides/Slide'
import VolunteerNeedsNow from './VolunteerNeedsNow/VolunteerNeedsNow'
import FAQs from './FAQs/FAQs'
import StatsSection from './StatesSection/StatesSection'
import VolunteerSectors from './VolunteerSectors/VolunteerSectors'
import { HR } from "flowbite-react";
const Home = () => {
  return (
    <div className='bg-gray-200 dark:bg-sky-950 pb-10 '>
      <Slider />
      <div className='md:px-32 px-5'>
      <VolunteerNeedsNow />
      <HR className='bg-slate-400 dark:bg-gray-200' />
      <VolunteerSectors />
      <StatsSection />
      <FAQs />
      </div>
    </div>
  )
}

export default Home
