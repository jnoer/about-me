import {motion} from "motion/react";
import SpeechBubble from "../assets/speech-bubble.svg";
import styled from "styled-components";

interface PropTypes {
  translateY: any;
  rotate: any;
}

const AvatarBubble = ({translateY, rotate}: PropTypes) => {
  return (
    <Container
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1}}
    >
      <TextContainer>
        <span>translateY:</span>
        <motion.span>
          {translateY}
        </motion.span>
        <br/>
        <span>rotate:</span>
        <motion.span>
          {rotate}
        </motion.span>
      </TextContainer>

      <img src={SpeechBubble} style={{transform: 'scale(-1, 1)'}}/>
    </Container>
  )
}

const Container = styled(motion.div)`
  overflow: hidden;
  position: absolute;
  top: 0px;
  left: -165px;
  width: 150px;
`

const TextContainer = styled.div`
  font-family: 'Roboto Mono';
  font-size: 14px;
  position: absolute;
  left: 8px;
  top: 20px;
  backdrop-filter:blur(5px);
  padding: 16px 4px;
  width: 133px;
`

export default AvatarBubble;