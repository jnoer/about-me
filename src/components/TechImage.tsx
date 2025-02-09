import { motion } from "motion/react";
import styled from "styled-components";

const TechImage = ({ ...delegated }) => {
  return (
    // <StyledTechImage {...delegated} initial={{scale: 1}} animate={{scale: 1.2}} transition={{duration: 1}} />
    <StyledTechImage {...delegated} whileHover={{scale: 1.3}} />
  );
}

const StyledTechImage = styled(motion.img)`
  height: 42px;
  width: 42px;
  display: inline-block;
  margin-right: 6px;
`

export default TechImage;