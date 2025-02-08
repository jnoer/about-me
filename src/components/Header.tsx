import styled from "styled-components";
import gitHubImage from "../assets/github-mark.svg";
import mailIcon from "../assets/mail-icon.svg";
import { motion } from "motion/react";
import * as React from "react";

const Header = () => {
  return (
    <StyledHeader>
      <TitleSection>
        <StyledH1
          initial={{x: 0, y: '100vh', scale: 3}}
          animate={{x: 0, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Jason Noer
        </StyledH1>

        <motion.div style={{display: 'flex', gap: '10px', paddingRight: '165px'}}>
          <a href="https://github.com/jnoer/about-me/" target="_blank">
            <motion.img
              alt="GitHub"
              src={gitHubImage}
              style={{height: '40px'}}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          </a>

          <a href="mailto:jason.noer@gmail.com" target="_blank">
            <motion.img
              alt="email"
              src={mailIcon}
              style={{width: '50px', marginTop: '-3px'}}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          </a>
        </motion.div>
      </TitleSection>

      <h2 >
        <span style={{color: 'green'}}>&#123;&#123;</span>
          Full-stack software developer
        <span style={{color: 'green'}}>&#125;&#125;</span>
      </h2>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: white;
  color: black;
  height: 20vh;
  margin: auto;
  max-width: 1440px; 
  padding: 20px 40px;
  position: 'static';
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