import styled from "styled-components";
import gitHubImage from "./images/github-mark.svg";
import mailIcon from "./images/mail-icon.svg";

const Header = () => {
  return (
    <StyledHeader>
      <TitleSection>
        <StyledH1>Jason Noer</StyledH1>

        <a href="https://github.com/jnoer/runplanner">
          <img alt="GitHub" src={gitHubImage} style={{height: '40px'}}/>
        </a>

        <a href="mailto:jason.noer@gmail.com" target="_blank">
          <img src={mailIcon}/>
          jason.noer@gmail.com
        </a>
      </TitleSection>

      <h2>
        Full-stack software developer
      </h2>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: white;
  color: black;
  height: 20vh;
  margin: auto;
  maxWidth: 1440px; 
  padding: 20px 40px;
`

const TitleSection = styled.div`
  display: flex;
  flexDirection: row;
`

const StyledH1 = styled.h1`
  color: black;
  flex: 1 1 0;
`

export default Header;