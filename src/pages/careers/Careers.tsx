import { Helmet } from 'react-helmet-async'
import CareersBenefits from './components/CareersBenefits'
import CareersDesc from './components/CareersDesc'
import Hero from './components/Hero'
import CareersCta from './components/CareersCta'
const Careers = () => {
  return (
    <main>
      <Helmet>
        <title>BizScout | Find Better Off-Market SMB Deals</title>
      </Helmet>
      <Hero />
      <CareersCta />
      <CareersDesc />
      <CareersBenefits />
    </main>
  )
}

export default Careers