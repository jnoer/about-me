import Header from './Header'
import CompanyImageContainer from "./CompanyImageContainer.tsx";
import GlobalStyles from "./GlobalStyles.ts";
import TeamsoftLogo from "../assets/teamsoft.png";
import AcquiaLogo from "../assets/acquia-dam.webp";
import EntegralLogo from "../assets/entegral.png";
import AsicsLogo from "../assets/Asics.png";
import UWWLogo from "../assets/uww-logo.png";
import MonitorIcon from "../assets/developer.svg";
import Jnoer from "../assets/jnoer.png";

import styled from 'styled-components'
import AsicsDetails from "./AsicsDetails";
import EntegralDetails from "./EntegralDetails";
import AcquiaDetails from "./AcquiaDetails";
import TeamsoftDetails from "./TeamsoftDetails";
import {motion, useInView, useMotionValueEvent, useScroll, useTransform} from 'motion/react';
import {useRef, useState} from 'react';
import {device, maxWidth} from "../styles/styles.ts";
import Footer from "./Footer.tsx";
import AvatarBubble from "../AvatarBubble.tsx";
import DatesBubble from "../DatesBubble.tsx";
import CoolModeBar from "./CoolModeBar.tsx";
import UwwDetails from "./UwwDetails.tsx";

const datePositions = [0, 36, 72, 108]

function App() {
  const asicsRef = useRef(null); // rerenders page
  const entegralRef = useRef(null);
  const acquiaRef = useRef(null);
  const teamsoftRef = useRef(null);
  const uwwRef = useRef(null);
  const footerRef = useRef(null);
  const asicsInView = useInView(asicsRef, { margin: "-50px"});
  const entegralInView = useInView(entegralRef, { margin: "-50px"});
  const acquiaInView = useInView(acquiaRef, { margin: "-50px"});
  const teamsoftInView = useInView(teamsoftRef, { margin: "-50px"});
  const uwwInView = useInView(uwwRef, { margin: "-50px"});
  const footerInView = useInView(footerRef, { margin: "-50px"});

  const [datePosition, setDatePosition] = useState(0);
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);
  const [isCoolMode, setCoolMode] = useState(false);
  const { scrollYProgress } = useScroll();

  const background = useTransform(
    scrollYProgress,
    [0, 0.2],
    ['#0D158D', '#FFFFFF']
  );

  const translateY = useTransform(
    scrollYProgress,
    [0, 0.2],
    [0, 200]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.2],
    [0, -20],
  )

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
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

  const isUwwInView = () => {
    return  !isScrolledToTop && !teamsoftInView && !asicsInView && !acquiaInView && !entegralInView;
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

      <Header isCoolMode={isCoolMode} setCoolMode={setCoolMode} />

      <StyledMain style={{ background }}>
        <SubHeader>
          <SubHeaderLeft>
            A senior developer with years of full-stack experience. Skilled at designing and coding high-performance, high traffic web applications from back-end to front-end. Passionate about performance, security, search and UX.
          </SubHeaderLeft>

          <SubHeaderRight id="monitor">
            <AvatarImagesContainer  id="avatar-images-container">
              { isCoolMode && <AvatarBubble translateY={translateY} rotate={rotate} /> }

              <CompanyImage alt="Monitor" style={{color: 'white', margin: 'auto', width: '390px', minWidth: '390px'}} src={MonitorIcon}/>

              <ClipContainer id="clip-container">
                <motion.img
                  alt="jnoer"
                  src={Jnoer}
                  initial={{y: 186}}
                  animate={{y: 0}}
                  transition={{duration: .75, delay: 1, }}
                  style={{ rotate, translateY, position: 'relative', margin: 'auto', transformOrigin: '100% 100%'}}
                />
              </ClipContainer>
            </AvatarImagesContainer>
          </SubHeaderRight>
        </SubHeader>

        <div style={{display: 'flex', maxWidth}}>
          <LeftSide id="left-side">
            <div id="sticky-div" style={{ position: 'sticky', top: '25px' }}>
              <DateContainer style={{visibility: isScrolledToTop || footerInView || uwwInView ? 'hidden' : 'visible'}}>
                <DateBracket style={{ right: '6px' }}>[</DateBracket>
                <YearDisplay id="year-display">
                  <motion.div animate={{ y: -datePosition }} transition={{ duration: 0.5 }}>
                    <h2>2022 - 2025</h2>
                    <h2>2021 - 2022</h2>
                    <h2>2012 - 2021</h2>
                    <h2>2007 - 2012</h2>
                  </motion.div>
                </YearDisplay>
                <DateBracket style={{ left: '5px' }}>]</DateBracket>
              </DateContainer>

              { isCoolMode && <DatesBubble datePosition={datePosition} /> }

              <div>
                {isAsicsInView() && <AsicsDetails/>}
                {isEntegralInView() && <EntegralDetails/>}
                {isAcquiaInView() && <AcquiaDetails/>}
                {isTeamSoftInView() && <TeamsoftDetails/>}
                {isUwwInView() && <UwwDetails/>}
              </div>
            </div>
          </LeftSide>

          <RightSide id="right-side">
            <div style={{height: '180px'}}/>

            <CompanyImageContainer id="asics-section">
              <CompanyImage alt="Asics" src={AsicsLogo} ref={asicsRef} style={{ margin: '0 auto 20px auto' }} />
            </CompanyImageContainer>

            <CompanyImageContainer id="entegral-section">
              <CompanyImage alt="Entegral" src={EntegralLogo} ref={entegralRef}/>
            </CompanyImageContainer>

            <CompanyImageContainer id="acquia-section">
              <CompanyImage alt="Acquia" src={AcquiaLogo} ref={acquiaRef} style={{ margin: '0 auto 20px auto' }} />
            </CompanyImageContainer>

            <CompanyImageContainer id="teamsoft-section" >
              <StyledTeamsoftLogo alt="Teamsoft" src={TeamsoftLogo} ref={teamsoftRef} style={{backgroundColor: 'white'}}/>
            </CompanyImageContainer>

            <CompanyImageContainer id="uww-section" showLine={false} >
              <CompanyImage alt="UW Whitewater" src={UWWLogo} ref={uwwRef}/>
            </CompanyImageContainer>
          </RightSide>
        </div>

        <Footer ref={footerRef}/>

        { isCoolMode && (
          <CoolModeBar
            scrollYProgress={scrollYProgress}
            background={background}
            asicsInView={asicsInView}
            isScrolledToTop={isScrolledToTop}
          />
        )}

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
  width: 100%;
  max-width: ${maxWidth};
`

const AvatarImagesContainer = styled.div`
  position:relative;
  margin:auto;
  display:flex;
  justify-content:center;
  align-items:center;
  width: 100%;
`

const ClipContainer = styled.div`
  overflow: clip;
  position: absolute;
  transform: translateY(-5px);
`

const DateBracket = styled(motion.h2)`
  font-family: SansSerif, 'Roboto Thin';
  font-size: 34px;
  font-weight: 700;
  color: dodgerblue;
  display: inline-block;
  position: relative;
  top: -9px;
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
  align-items: center;
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
      width: 100%;
  }
    
  @media ${device.desktop} {
      padding: 40px;
      width: 390px;
  }
`

const LeftSide = styled.div`
  color: black;
    
  @media ${device.mobile} {
      padding: 0 20px 40px 20px;
      width: 70%;
  }

  @media ${device.desktop} {
      padding: 0 40px 40px 80px;
      width: 70%;
  }
`


const RightSide = styled.div`
  @media ${device.mobile} {
      width: 30%;
  }

  @media ${device.desktop} {
      width: 30%;
  }
`

const YearDisplay = styled.div`
  color: royalblue;
  display: inline-block;
  height: 36px;
  overflow: hidden;
`

const DateContainer = styled.div`
    font-family: 'Helvetica';

    @media ${device.desktop} {
        margin-bottom: 30px
    }
    
`

export default App;
