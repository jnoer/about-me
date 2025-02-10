import WorkDetails from "./WorkDetails.tsx";
import TechImage from "./TechImage.tsx";
import icons from "./icons.ts";
import { motion } from "motion/react";

const AsicsDetails = () => {
  return (
    <WorkDetails title="ASICS Digital">
      <p>As a Senior Front-end Developer, made significant improvements to the architecture and UX of <a href="https://id.asics.com" style={{color: 'black', textDecoration: 'underline'}} target="_blank">id.asics.com</a>. Fluent in a cutting edge tech stack employed to make users’ lives easier. Mentors junior developers via one-on-one discussions and code reviews</p>
      <br />
      <p>Reworked the UI, UX, and structure of  id.asics.com. Upgraded the UI component library and consuming applications to React 18. Transitioned component library and consuming applications from Stitches JSS library to Emotion. Implemented front end features of a Single Sign On solution including app-to-web and web-to-web. Implemented dynamic styling feature. Transitioned from Circle CI to Github Actions.</p>

      <motion.div
        style={{marginTop: '30px'}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, delay: .75}}
      >
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
      </motion.div>
    </WorkDetails>
  )
}

export default AsicsDetails;