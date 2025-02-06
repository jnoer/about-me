import './App.css'
import Header from './Header'
import Section from "./Section";
import GlobalStyles from "./GlobalStyles.js";
import TeamsoftLogo from "../../public/assets/teamsoft.png";
import AcquiaLogo from "../../public/assets/acquia-dam.webp";
import EntegralLogo from "../../public/assets/entegral.png";
import AsicsLogo from "../../public/assets/Asics.png";
import DeveloperIcon from "../../public/assets/developer.svg";
import useElementInView from "../hooks/use-element-in-view.js";


import styled from 'styled-components'
import AsicsDetails from "./AsicsDetails";
import EntegralDetails from "./EntegralDetails";
import AcquiaDetails from "./AcquiaDetails";
import TeamsoftDetails from "./TeamsoftDetails";

const intersectionObserverThreshold = .6
;

const StyledMain = styled.main`
  background-color: white;
  display: flex;
  flex-direction: row;
  min-height: 80vh;
`

const StyledTeamsoftLogo = styled.img`
  background-color: white;
  border: 20px solid white;
`

const FirstSection = styled.div`
  background-color: var(--color-primary);
  color: white;
  height: 80vh;
  padding: 40px;
`

const LeftSide = styled.div`
  padding: 40px;
  background-color: var(--color-primary);
  color: white;
  flex: 1;
`

const RightSide = styled.div`
  flex: 1;
`

function App() {
  const [asicsRef, asicsIsInView] = useElementInView({ threshold: intersectionObserverThreshold });
  const [entegralRef, entegralIsInView] = useElementInView({ threshold: intersectionObserverThreshold });
  const [acquiaRef, acquiaIsInView] = useElementInView({ threshold: intersectionObserverThreshold });
  const [teamsoftRef, teamsoftInView] = useElementInView({ threshold: intersectionObserverThreshold });
  const anyCompaniesInView = asicsIsInView || acquiaIsInView || entegralIsInView || teamsoftInView;

  return (
    <>
      <GlobalStyles />

      <Header/>

      <StyledMain>
        {/*<div style={{flex: '1', position: 'fixed'}}>*/}
        <LeftSide>
          {/*TODO: width 50%*/}
          <div style={{position: anyCompaniesInView?'fixed':'relative'}}>
            {!anyCompaniesInView &&
              (
                <div style={{fontSize: '1.4rem', paddingTop: '20%'}}>
                  A senior developer with years of full-stack experience. Skilled at designing and coding high-performance, high traffic web applications from back-end to front-end. Passionate about performance, security, search and UX.
                </div>
              )}

            {asicsIsInView && (
              <AsicsDetails/>
            )}

            {entegralIsInView && (
              <EntegralDetails/>
            )}

            {acquiaIsInView && (
              <AcquiaDetails/>
            )}

            {teamsoftInView && (
              <TeamsoftDetails/>
            )}
          </div>
        </LeftSide>

        <RightSide>
          <FirstSection>
            <img alt="Developer" style={{color: 'white', margin: 'auto', width: '400px'}} src={DeveloperIcon}/>
          </FirstSection>

          <Section ref={asicsRef}>
            <img alt="Asics" style={{margin: 'auto'}} src={AsicsLogo} />
          </Section>

          {/*<Section />*/}

          <Section ref={entegralRef}>
            <img alt="Entegral" src={EntegralLogo} />
          </Section>

          {/*<Section />*/}

          <Section ref={acquiaRef}>
            <img alt="Acquia" src={AcquiaLogo} />
          </Section>

          {/*<Section />*/}

          <Section ref={teamsoftRef}>
            <StyledTeamsoftLogo alt="Teamsoft" src={TeamsoftLogo} style={{backgroundColor: 'white'}}/>
          </Section>

        </RightSide>
      </StyledMain>
    </>
  )
}

export default App
