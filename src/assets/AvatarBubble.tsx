import {motion} from "motion/react";
import SpeechBubble from "./speech-bubble.svg";

const AvatarBubble = ({ translateY, rotate }) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1}}
      style={{
        overflow: 'hidden',
        position: 'absolute',
        top: '20px',
        left: '-130px',
        width: '150px',
      }}
    >
      <div style={{
        fontFamily: 'Courier New',
        padding: 3,
        position: 'absolute',
        left: 10,
        top: 20}}
      >
        <span>translateY:</span>
        <motion.span>
          {translateY}
        </motion.span>
        <br />
        <span>rotate:</span>
        <motion.span>
          {rotate}
        </motion.span>
      </div>

      <img src={SpeechBubble} style={{transform: 'scale(-1, 1)'}}/>
    </motion.div>
)}

export default AvatarBubble;