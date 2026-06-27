import { Helmet } from 'react-helmet-async'
import  Hero from './components/Hero'
import BlogList from './components/BlogList'
const Blog = () => {
  return (
  <main>
    <Helmet>
      <title>BizScout FindBetter Off-Market SMB Deals</title>
    </Helmet>
    <Hero />
    <BlogList />
  </main>
  )
}

export default Blog