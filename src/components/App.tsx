import Header from './Header'
import Section from "./Section";
import GlobalStyles from "./GlobalStyles.ts";
import TeamsoftLogo from "../assets/teamsoft.png";
import AcquiaLogo from "../assets/acquia-dam.webp";
import EntegralLogo from "../assets/entegral.png";
import AsicsLogo from "../assets/Asics.png";
import DeveloperIcon from "../assets/developer.svg";
import Jnoer from "../assets/Noer.png";

import styled from 'styled-components'
import AsicsDetails from "./AsicsDetails";
import EntegralDetails from "./EntegralDetails";
import AcquiaDetails from "./AcquiaDetails";
import TeamsoftDetails from "./TeamsoftDetails";
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import {useEffect, useRef} from 'react';
import * as React from "react";
import {device} from "../styles/styles.ts";

function App() {
  const asicsRef = useRef(null); // rerenders page
  const entegralRef = useRef(null);
  const acquiaRef = useRef(null);
  const teamsoftRef = useRef(null);
  const asicsInView = useInView(asicsRef, { margin: "-100px"});
  const entegralInView = useInView(entegralRef, { margin: "-100px"});
  const acquiaInView = useInView(acquiaRef, { margin: "-100px"});
  const teamsoftInView = useInView(teamsoftRef, { margin: "-100px"});

  useEffect(() => {
    console.log("asics is in view -> ", asicsInView);
  }, [asicsInView]);

  const { scrollYProgress } = useScroll();

  const background = useTransform(
    scrollYProgress,
    [0, 0.2],
    ['#0D158D', '#FFFFFF']
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2],
    [1, 0]
  );

  const translateY = useTransform(
    scrollYProgress,
    [0, 0.2],
    [0, 200]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.2],
    [0, -15],
  )

  let datePosition = 0;

  if(entegralInView) {
    datePosition = 36;
  }
  if(acquiaInView) {
    datePosition = 72;
  }
  if(teamsoftInView) {
    datePosition = 108;
  }

  console.log('rendering App');

  const SubHeader = styled.div`
    @media ${device.mobile} {
        flex-direction: column;
    }
    @media ${device.desktop} {
        flex-direction: row;
    }
    display: flex;
    max-width: 1440px;
    //margin: auto;
  `

  return (
    <>
      <GlobalStyles />

      <Header />

      <StyledMain style={{ background }}>
        <SubHeader>
          {/*<div style={{color: 'white', fontSize: '1.4rem', padding: '150px 40px', flex: 1}}>*/}
          <SubHeaderLeft>
            A senior developer with years of full-stack experience. Skilled at designing and coding high-performance, high traffic web applications from back-end to front-end. Passionate about performance, security, search and UX.
          </SubHeaderLeft>

          {/*<Monitor id="monitor" style={{ flex: 1 }}>*/}
          <SubHeaderRight id="monitor">
            <AvatarImagesContainer  id="avatar-images-container">
            <CompanyImage alt="Developer" style={{color: 'white', margin: 'auto', width: '400px', minWidth: '400px'}} src={DeveloperIcon}/>
            <ClipContainer id="clip-container">
              <motion.img
                alt="jnoer"
                src={Jnoer}
                style={{opacity, rotate, translateY, position: 'relative', margin: 'auto', transformOrigin: '100% 100%'}}
                whileHover={{ rotate: '-2.5deg', transformOrigin: '100% 100%', scale: 1.05 }}
              />
            </ClipContainer>
            </AvatarImagesContainer>
          </SubHeaderRight>
        </SubHeader>

        <div style={{display: 'flex'}}>
          <LeftSide id="left-side">
            <div id="sticky-div" style={{ position: 'sticky', top: '80px' }}>
              <DateBracket style={{ right: 'px' }}>[</DateBracket>
              <YearDisplay id="year-display">
                <motion.div animate={{ y: -datePosition }} transition={{ delay: 0.5, duration: 0.5 }}>
                  <h2>2022 - 2025</h2>
                  <h2>2021 - 2022</h2>
                  <h2>2012 - 2021</h2>
                  <h2>2007 - 2012</h2>
                </motion.div>
              </YearDisplay>
              <DateBracket style={{ left: '5px' }}>]</DateBracket>

              <div>
                {asicsInView && (
                // <motion.div initial={{opacity: 0}} animate={{opacity: 1}}
                //   id="asics-details"
                  // layout
                  // style={{
                  //   opacity: asicsInView ? 1 : 0,
                  //   transition: ".5s",
                  //   position: asicsInView ? 'static' : 'fixed',
                  // }}
                // >
                  <AsicsDetails />
                // </motion.div>
                )}

                {/*<motion.div id="entegral-details" style={{ opacity: entegralInView ? 1 : 0, transition: ".5s" }}>*/}
                {/*  <EntegralDetails/>*/}
                {/*</motion.div>*/}

                {entegralInView && (
                <motion.div id="entegral-details">
                  <EntegralDetails/>
                </motion.div>
                  )}

                {acquiaInView && (
                // <motion.div id="acquia-details" style={{ opacity: acquiaInView ? 1 : 0, transition: ".5s" }}>
                <motion.div id="acquia-details">
                  <AcquiaDetails/>
                </motion.div>
                  )}

                {teamsoftInView && (
                // <motion.div id="teamsoft-details" style={{ opacity: teamsoftInView ? 1 : 0, transition: ".5s" }}>
                <motion.div id="teamsoft-details">
                  <TeamsoftDetails/>
                </motion.div>
                  )}
              </div>
            </div>
          </LeftSide>

          <RightSide>
            <Section id="asics-section">
              <CompanyImage alt="Asics" src={AsicsLogo} ref={asicsRef} style={{ margin: 'auto' }} />
            </Section>

            <Section id="entegral-section">
              <CompanyImage alt="Entegral" src={EntegralLogo} ref={entegralRef}/>
            </Section>

            <Section id="acquia-section">
              <CompanyImage alt="Acquia" src={AcquiaLogo} ref={acquiaRef} />
            </Section>

            <Section id="teamsoft-section" showLine={false} >
              <StyledTeamsoftLogo alt="Teamsoft" src={TeamsoftLogo} ref={teamsoftRef} style={{backgroundColor: 'white'}}/>
            </Section>
          </RightSide>
        </div>
      </StyledMain>
    </>
  )
}

const AvatarImagesContainer = styled.div`
    position:relative;
    width:400px;
    margin:auto;
    display:flex;
    justify-content:center;
    align-items:center;
`

const ClipContainer = styled.div`
    overflow: clip;
    position: absolute;
    transform: translateY(-2px);
`

const DateBracket = styled.span`
    color: var(--color-primary);
    font-size: 32px;
    position: relative;
    top: -8px;
`

const CompanyImage = styled.img`
    //position: relative;
    margin: auto;
    width: 60%;
`

const StyledMain = styled(motion.main)`
  background-color: white;
  display: flex;
  flex-direction: column;
  min-height: 80vh;
 //max-width: 1440px;
`

const StyledTeamsoftLogo = styled(CompanyImage)`
  background-color: white;
  border: 20px solid white;
`

const SubHeaderLeft = styled.div`
      color: white;
      font-size: 1.4rem;

      @media ${device.mobile} {
          padding: 50px 30px;
          width: 100%;
      }
      @media ${device.desktop} {
          padding: 150px 40px;
          width: 50%;
      }
  `

const SubHeaderRight = styled.div`
  color: white;
    
  @media ${device.mobile} {
      height: 60vh;
      width: 100%;
  }
  @media ${device.desktop} {
      height: 80vh;
      width: 50%;
      padding: 40px;
  }
`

const LeftSide = styled.div`
  padding: 0 40px;
  color: black;
  flex: 1;
`

const RightSide = styled.div`
  flex: 1;
`

const YearDisplay = styled.div`
    color: var(--color-primary);
    display: inline-block;
  height: 36px;
  overflow: hidden;
`

export default React.memo(App);
