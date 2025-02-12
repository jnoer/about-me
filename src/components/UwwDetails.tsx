import {Title, WorkDetails} from "./WorkDetails.tsx";
import styled from "styled-components";
import UwLogo from "../assets/UniversityofWisconsinWhitewaterSeal.webp";

const UwwDetails = () => {
  return (
    <WorkDetails title={<Title>UW - Whitewater</Title>}>
      <p>
        Bachelor of Science in Management Computer Systems
      </p>

      <StyledUwwImage src={UwLogo} />
    </WorkDetails>
  )
}

const StyledUwwImage = styled.img`
    filter: grayscale(1);
    opacity: .5;
    margin-bottom: 40px;
    margin-top: 20px;
    width: 30%;
`

export default UwwDetails;