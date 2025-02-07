import Header from './Header'
import Section from "./Section";
import GlobalStyles from "./GlobalStyles.js";
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

// const intersectionObserverThreshold = .6;

function App() {
  // const [asicsRef, asicsIsInView] = useElementInView({ threshold: intersectionObserverThreshold });
  // const [entegralRef, entegralIsInView] = useElementInView({ threshold: intersectionObserverThreshold });
  // const [acquiaRef, acquiaIsInView] = useElementInView({ threshold: intersectionObserverThreshold });
  // const [teamsoftRef, teamsoftInView] = useElementInView({ threshold: intersectionObserverThreshold });
  // const anyCompaniesInView = asicsIsInView || acquiaIsInView || entegralIsInView || teamsoftInView;

  const asicsRef = useRef(null); // rerenders page
  const entegralRef = useRef(null);
  const acquiaRef = useRef(null);
  const teamsoftRef = useRef(null);
  const asicsInView = useInView(asicsRef);
  const entegralInView = useInView(entegralRef);
  const acquiaInView = useInView(acquiaRef);
  const teamsoftInView = useInView(teamsoftRef);

  useEffect(() => {
    console.log("Is in view -> ", asicsInView);
  }, [asicsInView]);

  const { scrollYProgress } = useScroll();

  const background = useTransform(
    scrollYProgress,
    [0, 0.2],
    ['#0D158D', '#FFFFFF']
  );

  // const opacity = useTransform(
  //   scrollYProgress,
  //   [0.2, 0.3],
  //   [0, 1]
  // )

  let datePosition = 0;

  if(entegralInView) {
    datePosition = 34;
  }
  if(acquiaInView) {
    datePosition = 68;
  }
  if(teamsoftInView) {
    datePosition = 102;
  }

  console.log('rendering App');

  return (
    <>
      <GlobalStyles />

      <motion.div style={{
        color: scrollYProgress > 0.20?'black':'red',
        position: "fixed",
        top: 20,
        left: 0,
        right: 0,
        height: 10,
        originX: 0,
      }}
      >{scrollYProgress}</motion.div>

      <Header/>

      <StyledMain style={{ background }}>
        <div style={{display: 'flex'}}>
          <div style={{color: 'white', fontSize: '1.4rem', padding: '150px 40px', flex: 1}}>
            A senior developer with years of full-stack experience. Skilled at designing and coding high-performance, high traffic web applications from back-end to front-end. Passionate about performance, security, search and UX.
          </div>

          <FirstSection id="first-section" style={{ background, flex: 1 }}>
            <CompanyImage alt="Developer" style={{color: 'white', margin: 'auto', width: '400px'}} src={DeveloperIcon}/>
            {/*<img alt="jnoer" src={Jnoer} style={{position: 'relative', top: '-316px', left: '356px'}}/>*/}
          </FirstSection>
        </div>

        <div style={{display: 'flex'}}>

          <LeftSide id="left-side">
            <div id="sticky-container" style={{ position: 'sticky', top: '80px' }}>

            <YearDisplay id="year-display">
              <motion.div animate={{ y: -datePosition }}>
                <h2>6/22 - 1/25</h2>
                <h2>11/21 - 6/22</h2>
                <h2>4/12 - 11/21</h2>
                <h2>9/07 - 3/12</h2>
              </motion.div>
            </YearDisplay>

            <motion.div >
              <motion.div
                id="asics-details"
                // layout
                style={{
                  opacity: asicsInView ? 1 : 0,
                  transition: ".5s",
                  position: asicsInView ? 'static' : 'fixed',
                }}>
                <AsicsDetails />
              </motion.div>

              <motion.div id="entegral-details" style={{ opacity: entegralInView ? 1 : 0, transition: ".5s" }}>
                <EntegralDetails/>
              </motion.div>

              <motion.div id="acquia-details" style={{ opacity: acquiaInView ? 1 : 0, transition: ".5s" }}>
                <AcquiaDetails/>
              </motion.div>

              <motion.div id="acquia-details" style={{ opacity: teamsoftInView ? 1 : 0, transition: ".5s" }}>
                <TeamsoftDetails/>
              </motion.div>
            </motion.div>

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
              <CompanyImage alt="Acquia" src={AcquiaLogo} />
            </Section>

            <Section id="teamsoft-section" showLine={false}>
              <StyledTeamsoftLogo alt="Teamsoft" src={TeamsoftLogo} style={{backgroundColor: 'white'}}/>
            </Section>
          </RightSide>
        </div>
      </StyledMain>
    </>
  )
}

const CompanyImage = styled.img`
    margin: auto;
    width: 60%;
`

const StyledMain = styled(motion.main)`
  background-color: white;
  display: flex;
  flex-direction: column;
  min-height: 80vh;
`

const StyledTeamsoftLogo = styled(CompanyImage)`
  background-color: white;
  border: 20px solid white;
`

const FirstSection = styled(motion.div)`
  background-color: var(--color-primary);
  color: white;
  height: 80vh;
  padding: 40px;
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
  height: 36px;
  overflow: hidden;
`

export default React.memo(App);
