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
          initial={{x: 0, y: -100, scale: .5 }}
          animate={{x: 0, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5, type: 'spring'}}
        >
          Jason Noer
        </StyledH1>

        <LinkContainer>
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
        </LinkContainer>
      </TitleSection>

      <StyledH2>
        <span style={{ color: 'mediumaquamarine', marginRight: '6px' }}>&#123;&#123;</span>
          Full-stack software developer
        <span style={{color: 'mediumaquamarine', marginLeft: '6px'}}>&#125;&#125;</span>
      </StyledH2>
    </StyledHeader>
  )
}

const LinkContainer = styled.div`
    display:flex;
    gap:10px;
    flex:1 1 0;
    
    @media ${device.mobile} {
        justify-content:right;
    }

    @media ${device.desktop} {
        justify-content:center;
    }
`

const StyledHeader = styled.header`
  background-color: white;
  color: black;
  height: 20vh;
  margin: auto;
  max-width: 1440px; 
  padding: 30px 40px;
`

const TitleSection = styled.div`
  font-family: "Google Sans", Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  display: flex;
`

const StyledH1 = styled(motion.h1)`
  color: black;
  flex: 1 1 0;
  letter-spacing: 3px;
    
  @media ${device.mobile} {
      font-size: 24px;
  }

  @media ${device.desktop} {
      font-size: 26px;
  }
`

const StyledH2 = styled.h2`
    color: #444444;
    
    @media ${device.mobile} {
        font-size: 16px;
    }
    @media ${device.desktop} {
        font-size: 24px;
    }
`

export default React.memo(Header);