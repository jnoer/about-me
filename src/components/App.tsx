import Header from './Header'
import CompanyImageContainer from "./CompanyImageContainer.tsx";
import GlobalStyles from "./GlobalStyles.ts";
import TeamsoftLogo from "../assets/teamsoft.png";
import AcquiaLogo from "../assets/acquia-dam.webp";
import EntegralLogo from "../assets/entegral.png";
import AsicsLogo from "../assets/Asics.png";
import DeveloperIcon from "../assets/developer.svg";
import Jnoer from "../assets/jnoer.png";

import styled from 'styled-components'
import AsicsDetails from "./AsicsDetails";
import EntegralDetails from "./EntegralDetails";
import AcquiaDetails from "./AcquiaDetails";
import TeamsoftDetails from "./TeamsoftDetails";
import { motion, useInView, useMotionValueEvent, useScroll, useTransform } from 'motion/react';
import {useRef, useState} from 'react';
import {device} from "../styles/styles.ts";

const datePositions = [0, 36, 72, 108]

function App() {
  const asicsRef = useRef(null); // rerenders page
  const entegralRef = useRef(null);
  const acquiaRef = useRef(null);
  const teamsoftRef = useRef(null);
  const asicsInView = useInView(asicsRef, { margin: "-50px"});
  // const asicsInView = useInView(asicsRef);
  const entegralInView = useInView(entegralRef, { margin: "-50px"});
  // const entegralInView = useInView(entegralRef);
  const acquiaInView = useInView(acquiaRef, { margin: "-50px"});
  // const acquiaInView = useInView(acquiaRef);
  const teamsoftInView = useInView(teamsoftRef, { margin: "-50px"});
  // const teamsoftInView = useInView(teamsoftRef);

  const [datePosition, setDatePosition] = useState(0);
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);
  const { scrollYProgress } = useScroll();

  const background = useTransform(
    scrollYProgress,
    [0, 0.2],
    ['#0D158D', '#FFFFFF']
  );

  // const opacity = useTransform(
  //   scrollYProgress,
  //   [0, 0.2],
  //   [1, 0]
  // );

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

  // let datePosition = 0;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
    if(isScrolledToTop && latest > 0.001) {
      setIsScrolledToTop(false);
    }
    else if (!isScrolledToTop  && latest < 0.001) {
      setIsScrolledToTop(true);
    }
  });

  const isAsicsInView = () => {
    return asicsInView && !acquiaInView && !teamsoftInView && !entegralInView;
  }

  const isEntegralInView = () => {
    return entegralInView && !asicsInView && !acquiaInView && !teamsoftInView;
  }

  const isAcquiaInView = () => {
    return acquiaInView && !asicsInView && !entegralInView && !teamsoftInView;
  }

  const isTeamSoftInView = () => {
    return teamsoftInView && !asicsInView && !acquiaInView && !entegralInView;
  }

  if(isAsicsInView() && datePosition !== datePositions[0]) {
    setDatePosition(datePositions[0]);
  }
  if(isEntegralInView() && datePosition !== datePositions[1]) {
    setDatePosition(datePositions[1]);
  }
  else if(isAcquiaInView() && datePosition !== datePositions[2]) {
    setDatePosition(datePositions[2]);
  }
  else if(isTeamSoftInView() && datePosition !== datePositions[3]) {
    setDatePosition(datePositions[3]);
  }

  return (
    <>
      <GlobalStyles />

      {/*<motion.div style={{*/}
      {/*  position: "fixed",*/}
      {/*  top: 20,*/}
      {/*  left: 0,*/}
      {/*  right: 0,*/}
      {/*  height: 10,*/}
      {/*  originX: 0,*/}
      {/*}}*/}
      {/*>{scrollYProgress}</motion.div>*/}

      <Header />

      <StyledMain style={{ background }}>
        isScrolledToTop: {isScrolledToTop?'true':'false'};
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
                initial={{y: 186}} animate={{y: 0}} transition={{duration: 1, delay: 1}}
                style={{ rotate, translateY, position: 'relative', margin: 'auto', top: '-1px', transformOrigin: '100% 100%'}}
                // whileHover={isScrolledToTop ? { rotate: '-2.5deg', transformOrigin: '100% 100%', scale: 1.05 } : {}}
                // whileTap={isScrolledToTop ? { rotate: '-2.5deg', transformOrigin: '100% 100%', scale: 1.05 } : {}}
              />
            </ClipContainer>
            </AvatarImagesContainer>
          </SubHeaderRight>
        </SubHeader>

        <div style={{display: 'flex'}}>
          <LeftSide id="left-side">
            <div id="sticky-div" style={{ position: 'sticky', top: '80px' }}>
              {/*<DateBracket style={{ color: '#444444', right: '6px' }}>[</DateBracket>*/}
              <DateBracket style={{ color: 'mediumaquamarine', right: '8px' }}>[</DateBracket>
              <YearDisplay id="year-display">
                <motion.div animate={{ y: -datePosition }} transition={{ duration: 0.5 }}>
                  <h2>2022 - 2025</h2>
                  <h2>2021 - 2022</h2>
                  <h2>2012 - 2021</h2>
                  <h2>2007 - 2012</h2>
                </motion.div>
              </YearDisplay>
              <DateBracket style={{ color: 'mediumaquamarine', left: '5px' }}>]</DateBracket>

              <div>
                {isAsicsInView() && <AsicsDetails/>}
                {isEntegralInView() && <EntegralDetails/>}
                {isAcquiaInView() && <AcquiaDetails/>}
                {isTeamSoftInView() && <TeamsoftDetails/>}
              </div>
            </div>
          </LeftSide>

          <RightSide>
            <CompanyImageContainer id="asics-section">
              <CompanyImage alt="Asics" src={AsicsLogo} ref={asicsRef} style={{ margin: '0 auto 20px auto' }} />
            </CompanyImageContainer>

            <CompanyImageContainer id="entegral-section">
              <CompanyImage alt="Entegral" src={EntegralLogo} ref={entegralRef}/>
            </CompanyImageContainer>

            <CompanyImageContainer id="acquia-section">
              <CompanyImage alt="Acquia" src={AcquiaLogo} ref={acquiaRef} style={{ margin: '0 auto 20px auto' }} />
            </CompanyImageContainer>

            <CompanyImageContainer id="teamsoft-section" showLine={false} >
              <StyledTeamsoftLogo alt="Teamsoft" src={TeamsoftLogo} ref={teamsoftRef} style={{backgroundColor: 'white'}}/>
            </CompanyImageContainer>
          </RightSide>
        </div>
      </StyledMain>
    </>
  )
}

const SubHeader = styled.div`
    @media ${device.mobile} {
        flex-direction: column-reverse;
    }
    @media ${device.desktop} {
        flex-direction: row;
    }
    display: flex;
    max-width: 1440px;
  `
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
    margin: auto;
    
    @media ${device.mobile} {
        width: 90%;
    }
    
    @media ${device.desktop} {
        width: 60%;
    }
    
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

const SubHeaderLeft = styled.div`
    color: white;
    font-size: 1.5rem;
    font-weight: 500;

    @media ${device.mobile} {
        padding: 10px 30px 60px 30px;
        width: 100%;
    }
  
    @media ${device.desktop} {
        padding: 8% 80px;
        width: 50%;
    }
  `

const SubHeaderRight = styled.div`
  color: white;
    
  @media ${device.mobile} {
      //height: 60vh;
      width: 100%;
  }
    
  @media ${device.desktop} {
      height: 80vh;
      width: 50%;
      padding: 40px;
  }
`

const LeftSide = styled.div`
  color: black;
  //flex: 1;

    
    @media ${device.mobile} {
        padding: 0 20px;
        width: 100%;
    }

    @media ${device.desktop} {
        padding: 0 40px 0 80px;
        width: 60%;
    }
`


const RightSide = styled.div`
    @media ${device.mobile} {
    visibility: hidden;
        width: 0;
  }

    @media ${device.mobile} {
        visibility: visible;
        width: 40%;
    }
`

const YearDisplay = styled.div`
    color: var(--color-primary);
    display: inline-block;
  height: 36px;
  overflow: hidden;
`

export default App;
