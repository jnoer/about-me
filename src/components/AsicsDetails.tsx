import WorkDetails from "./WorkDetails.tsx";
import TechImage from "./TechImage.tsx";
import icons from "./icons.ts";

const AsicsDetails = () => {
  return (
    <WorkDetails title="ASICS Digital">
      <p>As a Senior Front-end Developer, made significant improvements to the architecture and UX of <a href="https://id.asics.com" style={{color: 'black', textDecoration: 'underline'}} target="_blank">id.asics.com</a>. Fluent in a cutting edge tech stack employed to make users’ lives easier. Mentors junior developers via one-on-one discussions and code reviews</p>

        <div style={{marginTop: '30px'}}>
          <TechImage src={icons.TypeScriptIcon}/>
          <TechImage src={icons.ReactIcon}/>
          <TechImage src={icons.EmotionIcon}/>
          <TechImage src={icons.ReduxIcon}/>
          <TechImage src={icons.RHFIcon}/>
          <TechImage src={icons.I18NextIcon}/>
          <TechImage src={icons.JestIcon}/>
          <TechImage src={icons.FigmaIcon}/>
          <TechImage src={icons.StorybookIcon}/>
          <TechImage src={icons.ChromaticIcon}/>
          <TechImage src={icons.CypressIcon}/>
          <TechImage src={icons.AWSIcon}/>
        </div>
    </WorkDetails>
  )
}

export default AsicsDetails;