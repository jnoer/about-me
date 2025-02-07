import { motion } from "motion/react";
import ReactIcon from "../assets/react.png";
import EmotionIcon from "../assets/emotion.png";
import styled from "styled-components";

const TechImage = styled.img`
  width: 42px;
  display: inline-block;
`

const AsicsDetails = () => {
  return (
    <div style={{width: '50%'}}>     {/*TODO: width 50%*/}
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} >

        <h1>ASICS Digital</h1>

        <p>As a Senior Front-end Developer, made significant improvements to the architecture and UX of id.asics.com. Fluent in a cutting edge tech stack employed to make users’ lives easier. Mentors junior developers via one-on-one discussions and code reviews</p>
        <p>TypeScript, Emotion, Redux Toolkit, react-hook-form, i18next, Storybook, Chromatic, Cypress, AWS</p>

        <div>
          <TechImage src={ReactIcon}/>
          <TechImage src={EmotionIcon}/>
        </div>
      </motion.div>


    </div>
  )
}

export default AsicsDetails;