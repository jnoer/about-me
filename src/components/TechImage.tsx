import { motion, useAnimationControls } from "motion/react";
import styled from "styled-components";

const TechImage = ({ ...delegated }) => {
  const controls = useAnimationControls();

  const onMouseEnter = () => {
    console.log("hover");
    controls.start('show');
  };

  const onMouseLeave = () => {
    console.log("hover");
    controls.start('hide');
  };

//   return (
//     <div style={{height: 82, width:82, border: '1px solid black', display: 'inline-block'}}>
//       <StyledTechImage alt={delegated.name} whileHover={{scale: 1.3}} onMouseEnter={onHover} {...delegated} />
//       {/*<motion.span*/}
//       {/*  style={{opacity: 0, position: 'absolute'}}*/}
//       {/*  animate={controls}*/}
//       {/*  variants={{*/}
//       {/*    initial: {*/}
//       {/*      opacity: 0,*/}
//       {/*    },*/}
//       {/*    flip: {*/}
//       {/*      opacity: 1,*/}
//       {/*    },*/}
//       {/*  }}*/}
//       {/*>*/}
//       <div style={{border: '1px solid red'}}>
//         {delegated.name}
//       </div>
//       {/*</motion.span>*/}
//     </div>
//   );
// }

return (
  // <div style={{height: 82, width:82, border: '1px solid black', display: 'inline-block'}}>
  <motion.div
    style={{border: '1px solid black', display: 'inline-block', position: 'relative'}}
      animate={controls}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <StyledTechImage alt={delegated.name} whileHover={{scale: 1.3}} {...delegated} />
    {/*<motion.span*/}
    {/*  style={{opacity: 0, position: 'absolute'}}*/}
    {/*  animate={controls}*/}
    {/*  variants={{*/}
    {/*    initial: {*/}
    {/*      opacity: 0,*/}
    {/*    },*/}
    {/*    flip: {*/}
    {/*      opacity: 1,*/}
    {/*    },*/}
    {/*  }}*/}
    {/*>*/}
    <motion.div
      style={{border: '1px solid red', position: 'absolute', opacity: 0}}
        animate={controls}
        variants={{
          initial: {
            opacity: 0,
          },
          show: {
            opacity: 1,
          },
          hide: {
            opacity: 0,
          },
        }}
    >
      {delegated.name}
    </motion.div>
    {/*</motion.span>*/}
  </motion.div>
);
}

const StyledTechImage = styled(motion.img)`
  height: 42px;
  display: block;
  margin-right: 6px;
`

export default TechImage;