import AboutMe from "../Components/AboutMe"
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
    </div>
  )
}

export default Home