import {Title, WorkDetails} from "./WorkDetails.tsx";
import TechImage, {containerVariants} from "./TechImage.tsx";
import Icons from "./icons.ts";
import {motion} from "motion/react";

const AsicsDetails = () => {
  return (
    <WorkDetails title={<Title>ASICS Digital</Title>}>
      <p>As a Senior Front-end Developer, made significant improvements to the architecture and UX of <a
        href="https://id.asics.com" style={{color: 'black', textDecoration: 'underline'}}
        target="_blank">id.asics.com</a>. Fluent in a cutting edge tech stack employed to make users’ lives easier.</p>
      <br/>
      <p>Reworked the UI, UX, and structure of id.asics.com. Upgraded the UI component library and consuming
        applications to React 18. Transitioned component library and consuming applications from Stitches JSS library to
        Emotion. Implemented front end features of a Single Sign On solution including app-to-web and web-to-web.
        Implemented dynamic styling feature. Transitioned from Circle CI to Github Actions.</p>

      <motion.div
        style={{marginTop: '30px'}}
        variants={containerVariants}
        initial="out"
        animate="in"
      >
        <TechImage src={Icons.typescript.icon} name={Icons.typescript.name}/>
        <TechImage src={Icons.react.icon} name={Icons.react.name}/>
        <TechImage src={Icons.emotion.icon} name={Icons.emotion.name}/>
        <TechImage src={Icons.redux.icon} name={Icons.redux.name}/>
        <TechImage src={Icons.rhf.icon} name={Icons.rhf.name}/>
        <TechImage src={Icons.i18next.icon} name={Icons.i18next.name}/>
        <TechImage src={Icons.jest.icon} name={Icons.jest.name}/>
        <TechImage src={Icons.figma.icon} name={Icons.figma.name}/>
        <TechImage src={Icons.storybook.icon} name={Icons.storybook.name}/>
        <TechImage src={Icons.chromatic.icon} name={Icons.chromatic.name}/>
        <TechImage src={Icons.cypress.icon} name={Icons.cypress.name}/>
        <TechImage src={Icons.aws.icon} name={Icons.aws.name}/>
      </motion.div>
    </WorkDetails>
  )
}

export default AsicsDetails;