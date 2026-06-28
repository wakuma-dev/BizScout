import { Helmet } from "react-helmet-async"
import Hero from "./components/Hero"
import TermsDesc from "./components/TermsDesc"
const Terms = () => {
  return (
    <main>
      <Helmet>
        <title>Tools & Resources - Free Calculator and Acquisition Guides | BizScout</title>
      </Helmet>
      <Hero />
      <TermsDesc />
    </main>
  )
}

export default Terms