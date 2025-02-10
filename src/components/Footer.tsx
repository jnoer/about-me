import TechImage from "./TechImage.tsx";
import icons from "./icons.ts"
import ViteIcon from "../assets/vite.svg"
import StyledIcon from "../assets/styled.png"
import MotionIcon from "../assets/motion.svg"

const Footer = () => {
  return (
    <footer style={{height: '100vh', backgroundColor: 'var(--color-primary)', color: 'white', display: 'grid', alignContent: 'center'}}>
      <div style={{alignSelf: 'center', justifySelf: 'center'}}>
      <h2>This site made with</h2>
      <div>
        <TechImage src={icons.ReactIcon}></TechImage>
        <TechImage src={ViteIcon}></TechImage>
        <TechImage src={StyledIcon}></TechImage>
        <TechImage src={MotionIcon}></TechImage>
      </div>
      </div>
    </footer>
  )
}

export default Footer;

