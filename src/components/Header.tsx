import styled from "styled-components";
import gitHubImage from "../assets/github-mark.svg";
import mailIcon from "../assets/mail-icon.svg";
import { motion } from "motion/react";
import * as React from "react";
import {device} from "../styles/styles.ts";

const Header = () => {
  return (
    <StyledHeader>
      <TitleSection>
        <StyledH1
          initial={{x: 0, y: '100vh', scale: 3}}
          animate={{x: 0, y: '0vh', scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Jason Noer
        </StyledH1>

        <motion.div style={{display: 'flex', gap: '10px', flex: '1 1 0', justifyContent: 'center'}}>
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

      <StyledH2 style={{marginTop: '15px'}}>
        <span style={{ color: 'green', marginRight: '6px' }}>&#123;&#123;</span>
          Full-stack software developer
        <span style={{color: 'green', marginLeft: '6px'}}>&#125;&#125;</span>
      </StyledH2>
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
`

const TitleSection = styled.div`
  display: flex;
`

const StyledH1 = styled(motion.h1)`
  color: black;
  flex: 1 1 0;
  letter-spacing: 3px;
    
  // @media ${device.mobile} {
  //     font-size: 20px;
  // }
`

const StyledH2 = styled.h2`
    @media ${device.mobile} {
        font-size: 16px;
    }
    @media ${device.desktop} {
        font-size: 24px;
    }
`

export default React.memo(Header);