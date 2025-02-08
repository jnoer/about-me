import ReactIcon from "../assets/react.png";
import EmotionIcon from "../assets/emotion.png";
import WorkDetails from "./WorkDetails.tsx";
import TechImage from "./TechImage.tsx";
import {device} from "../styles/styles.ts";
import styled from "styled-components";

const AsicsDetails = () => {
  return (
    <WorkDetails>
        <Title>ASICS Digital</Title>

        <p>As a Senior Front-end Developer, made significant improvements to the architecture and UX of id.asics.com. Fluent in a cutting edge tech stack employed to make users’ lives easier. Mentors junior developers via one-on-one discussions and code reviews</p>
        <p>TypeScript, Emotion, Redux Toolkit, react-hook-form, i18next, Storybook, Chromatic, Cypress, AWS</p>

        <div>
          <TechImage src={ReactIcon}/>
          <TechImage src={EmotionIcon}/>
        </div>
    </WorkDetails>
  )
}

const Title = styled.h1`
    @media ${device.mobile} {
        font-size: 26px;
    }
    
    @media ${device.desktop} {
        font-size: 32px;
    }
`

export default AsicsDetails;