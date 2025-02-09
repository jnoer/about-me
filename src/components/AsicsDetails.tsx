import ReactIcon from "../assets/react.svg";
import EmotionIcon from "../assets/emotion.png";
import ReduxIcon from "../assets/redux.svg";
import RHFIcon from "../assets/rhf.svg";
import I18NextIcon from "../assets/i18next.png";
import TypeScriptIcon from "../assets/Typescript42.png";
import ChromaticIcon from "../assets/chromatic.svg";
import StorybookIcon from "../assets/sb.svg";
import WorkDetails from "./WorkDetails.tsx";
import TechImage from "./TechImage.tsx";

const AsicsDetails = () => {
  return (
    <WorkDetails title="ASICS Digital">
        <p>As a Senior Front-end Developer, made significant improvements to the architecture and UX of id.asics.com. Fluent in a cutting edge tech stack employed to make users’ lives easier. Mentors junior developers via one-on-one discussions and code reviews</p>
        <p>TypeScript, Emotion, Redux Toolkit, react-hook-form, i18next, Storybook, Chromatic, Cypress, AWS</p>

        {/*<div style={{display: 'flex', gap: '.5rem'}}>*/}
        <div style={{marginTop: '30px'}}>
          <TechImage src={ReactIcon}/>
          <TechImage src={EmotionIcon}/>
          <TechImage src={TypeScriptIcon}/>
          <TechImage src={ReduxIcon}/>
          <TechImage src={RHFIcon}/>
          <TechImage src={I18NextIcon}/>
          <TechImage src={StorybookIcon}/>
          <TechImage src={ChromaticIcon}/>
        </div>
    </WorkDetails>
  )
}

export default AsicsDetails;