import AboutMe from "../Components/AboutMe"
import ContactSection from "../Components/ContactSection"
import Education from "../Components/Education"
import Footer from "../Components/Footer"
import HeroSection from "../Components/HeroSection"
import ProjectsSection from "../Components/ProjectsSection"
import SkillsSection from "../Components/SkillsSection"

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutMe></AboutMe>
      <SkillsSection></SkillsSection>
      <ProjectsSection></ProjectsSection>
      <Education></Education>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </div>
  )
}

export default Home