import { Helmet } from "react-helmet-async"
import Hero from "./components/Hero";
import ResourcePost from "./components/ResourcePost";
import ResourceCta from "./components/ResourceCta";
import ResourceDesc from "./components/ResourceDesc";
const Resource = () => {
  return (
    <main>
      <Helmet>
        <title>Tools & Resources - Free Calculator and Acquisition Guides | BizScout</title>
      </Helmet>
      <Hero />
      <ResourceDesc />
      <ResourcePost />
      <ResourceCta />
    </main>
  )
}

export default Resource;