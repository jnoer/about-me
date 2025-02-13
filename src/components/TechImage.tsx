import { motion, useAnimationControls } from "motion/react";
import styled from "styled-components";
import {device} from "../styles/styles.ts";

export const containerVariants = {
  out: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      delayChildren: .5,
      staggerChildren: 0.05,
    },
  },
};

const linkVariants = {
  out: {
    scale: 0,
  },
  in: {
    scale: 1,
  },
};

const TechImage = ({ ...delegated }) => {
  const controls = useAnimationControls();

  const onMouseEnter = () => {
    controls.start('show');
  };

  const onMouseLeave = () => {
    controls.start('hide');
  };

  return (
    <motion.div
      style={{ display: 'inline-block', position: 'relative' }}
      variants={linkVariants}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <StyledTechImage alt={delegated.name} whileHover={{scale: 1.3}} {...delegated} />

      <StyledText
          animate={controls}
          initial={'initial'}
          variants={{
            initial: {
              scale: 0,
            },
            show: {
              scale: 1,
              zIndex: 2,
            },
            hide: {
              scale: 0,
              zIndex: 'auto',
            },
          }}
      >
        {delegated.name}
      </StyledText>
    </motion.div>
  );
}

const StyledText = styled(motion.div)`
  background-color: white;
  font-family: 'Roboto Mono';
  font-weight: bold;
  font-size: 16px;
  position: absolute;
  margin-top: 8px;

    @media ${device.mobile} {
        display: none;
    }

    @media ${device.desktop} {
        display: block;
    }
`

const StyledTechImage = styled(motion.img)`
  height: 42px;
  display: block;
  margin-right: 6px;
`

export default TechImage;