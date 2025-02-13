import TechImage from "./TechImage.tsx";
import icons from "./icons.ts"
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 100vh;
  background-color: var(--color-primary);
  color: white;
  display: grid;
  align-content: center;
  width: 100%;
`

interface PropsType {
  ref: React.RefObject<null>;
}

const Footer = ({ref}: PropsType) => {
  return (
    <StyledFooter ref={ref}>
      <div style={{alignSelf: 'center', justifySelf: 'center'}}>
        <h2>This site made with ☕️ and . . .</h2>
        <div style={{marginTop: 10}}>
          <TechImage src={icons.react.icon} name={icons.react.name} style={{backgroundColor: 'unset'}}/>
          <TechImage src={icons.vite.icon} name={icons.vite.name} style={{backgroundColor: 'unset'}}/>
          <TechImage src={icons.styled.icon} name={icons.styled.name} style={{backgroundColor: 'unset'}}/>
          <TechImage src={icons.motion.icon} name={icons.motion.name} style={{backgroundColor: 'unset'}}/>
          <TechImage src={icons.webstorm.icon} name={icons.webstorm.name} style={{backgroundColor: 'unset'}}/>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer;

