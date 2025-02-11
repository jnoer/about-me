import TechImage from "./TechImage.tsx";
import icons from "./icons.ts"
import ViteIcon from "../assets/vite.svg"
import StyledIcon from "../assets/styled.png"
import MotionIcon from "../assets/motion.svg"
import WebstormIcon from "../assets/webstorm.svg"
import styled from "styled-components";

const StyledFooter = styled.footer`
    height:100vh;
    background-color:var(--color-primary);
    color:white;
    display:grid;
    align-content:center;
    width:100%;
`

const Footer = () => {
  return (
    <StyledFooter>
      <div style={{alignSelf: 'center', justifySelf: 'center'}}>
      <h2>This site made with ☕️ and . . .</h2>
      <div>
        <TechImage src={icons.react.icon}></TechImage>
        <TechImage src={ViteIcon}></TechImage>
        <TechImage src={StyledIcon}></TechImage>
        <TechImage src={MotionIcon}></TechImage>
        <TechImage src={WebstormIcon}></TechImage>
      </div>
      </div>
    </StyledFooter>
  )
}

export default Footer;

