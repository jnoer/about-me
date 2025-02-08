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

function App() {
  const asicsRef = useRef(null); // rerenders page
  const entegralRef = useRef(null);
  const acquiaRef = useRef(null);
  const teamsoftRef = useRef(null);
  const asicsInView = useInView(asicsRef);
  const entegralInView = useInView(entegralRef);
  const acquiaInView = useInView(acquiaRef);
  const teamsoftInView = useInView(teamsoftRef);

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

  return (
    <>
      <GlobalStyles />

      <Header />

      <StyledMain style={{ background }}>
        <div style={{display: 'flex',  maxWidth: '1440px', margin: 'auto'}} >
          <div style={{color: 'white', fontSize: '1.4rem', padding: '150px 40px', flex: 1}}>
            A senior developer with years of full-stack experience. Skilled at designing and coding high-performance, high traffic web applications from back-end to front-end. Passionate about performance, security, search and UX.
          </div>

          <Monitor id="monitor" style={{ flex: 1 }}>
            <CompanyImage alt="Developer" style={{color: 'white', margin: 'auto', width: '400px'}} src={DeveloperIcon}/>
            <div style={{ height: '218px', overflow: 'clip', top: '-327px', position: 'relative'}}>
              <motion.img
                alt="jnoer"
                src={Jnoer}
                style={{opacity, translateY, position: 'relative', margin: 'auto', top: '30px'}}/>
            </div>
          </Monitor>
        </div>

        <div style={{display: 'flex'}}>
          <LeftSide id="left-side">
            <div id="sticky-div" style={{ position: 'sticky', top: '80px' }}>
              <YearDisplay id="year-display">
                <motion.div animate={{ y: -datePosition }}>
                  <h2>2022 - 2025</h2>
                  <h2>2021 - 2022</h2>
                  <h2>2012 - 2021</h2>
                  <h2>2007 - 2012</h2>
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

                <motion.div id="teamsoft-details" style={{ opacity: teamsoftInView ? 1 : 0, transition: ".5s" }}>
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
              <CompanyImage alt="Acquia" src={AcquiaLogo} ref={acquiaRef} />
            </Section>

            <Section id="teamsoft-section" showLine={false} ref={teamsoftRef}>
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
 //maxWidth: 1440px;
`

const StyledTeamsoftLogo = styled(CompanyImage)`
  background-color: white;
  border: 20px solid white;
`

const Monitor = styled.div`
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
