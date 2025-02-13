import {motion} from "motion/react";

interface PropTypes {
  background: any;
  scrollYProgress: any;
  asicsInView: boolean;
  isScrolledToTop: boolean;
}

const CoolModeBar = ({background, scrollYProgress, asicsInView, isScrolledToTop}: PropTypes) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1}}
      style={{
        backgroundColor: 'white',
        fontFamily: 'Roboto Mono',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0
      }}
    >
      <div style={{
        background: 'linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)',
        height: '10px',
        width: '100%',
      }}
      />

      <div style={{padding: '5px'}}>
        <span>scrollYProgress:</span>
        <motion.span>
          {scrollYProgress}
        </motion.span>

        <div>asicsInView: {asicsInView ? 'true' : 'false'}</div>
        <div>isScrolledToTop: {isScrolledToTop ? 'true' : 'false'}</div>

        <span>background:</span>
        <motion.span>
          {background}
        </motion.span>
      </div>
    </motion.div>
  )
}

export default CoolModeBar;