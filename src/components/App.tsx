import Header from './Header'
import Section from "./Section";
import GlobalStyles from "./GlobalStyles.js";
import TeamsoftLogo from "../assets/teamsoft.png";
import AcquiaLogo from "../assets/acquia-dam.webp";
import EntegralLogo from "../assets/entegral.png";
import AsicsLogo from "../assets/Asics.png";
import DeveloperIcon from "../assets/developer.svg";
import useElementInView from "../hooks/use-element-in-view.js";


import styled from 'styled-components'
import AsicsDetails from "./AsicsDetails";
import EntegralDetails from "./EntegralDetails";
import AcquiaDetails from "./AcquiaDetails";
import TeamsoftDetails from "./TeamsoftDetails";

const intersectionObserverThreshold = .6;

function App() {
  const [asicsRef, asicsIsInView] = useElementInView({ threshold: intersectionObserverThreshold });
  const [entegralRef, entegralIsInView] = useElementInView({ threshold: intersectionObserverThreshold });
  const [acquiaRef, acquiaIsInView] = useElementInView({ threshold: intersectionObserverThreshold });
  const [teamsoftRef, teamsoftInView] = useElementInView({ threshold: intersectionObserverThreshold });
  const anyCompaniesInView = asicsIsInView || acquiaIsInView || entegralIsInView || teamsoftInView;

  let datePosition = 0;
  if(entegralIsInView) {
    datePosition = 1;
  }
  if(acquiaIsInView) {
    datePosition = 2;
  }
  if(teamsoftInView) {
    datePosition = 3;
  }


  return (
    <>
      <GlobalStyles />

      <Header/>

      <StyledMain>
        {/*<div style={{flex: '1', position: 'fixed'}}>*/}
        <LeftSide>
          <div style={{position: 'fixed'}}>
            datePosition: {datePosition}
          </div>
          {/*TODO: use scroll position instead of anyCompaniesInView*/}

            <YearDisplay>
              <div style={{
                position: 'relative',
                transition: 'transform',
                transitionDuration: '500ms',
                transform: `translateY(${-(datePosition * 20)}%`
              }}>
                <h2>6/22 - 1/25</h2>
                <h2>11/21 - 6/22</h2>
                <h2>4/12 - 11/21</h2>
                <h2>9/07 - 3/12</h2>
              </div>
            </YearDisplay>

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

          <Section ref={entegralRef}>
            <img alt="Entegral" src={EntegralLogo} />
          </Section>

          <Section ref={acquiaRef}>
            <img alt="Acquia" src={AcquiaLogo} />
          </Section>

          <Section ref={teamsoftRef} showLine={false}>
            <StyledTeamsoftLogo alt="Teamsoft" src={TeamsoftLogo} style={{backgroundColor: 'white'}}/>
          </Section>
        </RightSide>
      </StyledMain>
    </>
  )
}

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
  padding: 0px 40px;
  background-color: var(--color-primary);
  color: white;
  flex: 1;
`

const RightSide = styled.div`
  flex: 1;
`

const YearDisplay = styled.div`
  height: 36px;
  position: fixed;
  overflow: hidden;
  top: 105px;
`

export default App
