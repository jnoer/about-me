import styled from "styled-components";
import gitHubImage from "../assets/github-mark.svg";
import mailIcon from "../assets/mail-icon.svg";
import { motion } from "motion/react";
import * as React from "react";

const Header = () => {
  return (
    <StyledHeader>
      <TitleSection>
        <StyledH1 initial={{y: '100vh', scale: 0}} animate={{y: 0, scale: 1}} transition={{ delay: 0.5, duration: 0.5, type: 'spring'}}>
          Jason Noer
        </StyledH1>

        <a href="https://github.com/jnoer/runplanner">
          <img alt="GitHub" src={gitHubImage} style={{height: '40px'}}/>
        </a>

        <a href="mailto:jason.noer@gmail.com" target="_blank">
          <img alt="email" src={mailIcon}/>
          jason.noer@gmail.com
        </a>
      </TitleSection>

      {/*<h2 style={{verticalAlign: 'baseline'}}>*/}
      <h2 >
        {/*<span style={{color: '#0D158D'}}>&#123;&#123;</span> Full-stack software developer <span style={{color: '#0D158D'}}>&#125;&#125;</span>*/}
        <span style={{color: 'green'}}>&#123;&#123;</span> Full-stack software developer <span style={{color: 'green'}}>&#125;&#125;</span>
      </h2>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  // background-color: #0D158D;
  background-color: white;
  color: black;
  height: 20vh;
  margin: auto;
  max-width: 1440px; 
  padding: 20px 40px;
`

const TitleSection = styled.div`
  display: flex;
  //flex-direction: row;
`

const StyledH1 = styled(motion.h1)`
  color: black;
  flex: 1 1 0;
  letter-spacing: 3px;
`

export default React.memo(Header);