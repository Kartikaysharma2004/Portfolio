import React, { useEffect } from 'react'
import './index.css'
import Header from './components/Header'
import FirstSection from './components/Home/FirstSection'
import Footer from './components/Footer'
import Contact from './components/Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SecondSection from './components/Home/SecondSection'
import Page1 from './components/Projects/Page1'
import AboutPage1 from './components/About/AboutSection'
import ThirdSection from './components/Home/ThirdSection'
import FourthSection from './components/Home/FourthSection'
import FifthSection from './components/Home/FifthSection'
import Skills from './components/Home/Skills'
import Experience from "./components/About/Experience"
import AboutPage2 from './components/About/AboutPage2'
import AboutPage3 from './components/About/AboutPage3'
import AboutPage4 from './components/About/AboutPage4'
import ScrollToTop from './components/ScrollToTop'
import NotFound from './components/NotFound'


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Header />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <Skills />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <ScrollToTop />
        <Header />
        <AboutPage1 />
        <Skills />
        <Experience/>
        <AboutPage2 />
        <AboutPage3 />
        <AboutPage4 />
        <Footer />
      </>
    ),
  },
  {
    path: "/projects",
    element: (
      <>
        <ScrollToTop />
        <Header />
        <Page1 />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <ScrollToTop />
        <Header />
        <Contact />
        <Footer />
      </>
    ),
  },
  // 404 Route Path
  {
    path: "*",
    element: (
      <NotFound />
    )
  }
])

const App = () => {


  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.5,
    });
  }, [])


  return <RouterProvider router={router} />;
}

export default App