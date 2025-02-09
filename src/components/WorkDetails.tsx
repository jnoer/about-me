import {motion} from "motion/react";
import {ReactNode} from "react";
import styled from "styled-components";
import {device} from "../styles/styles.ts";

interface Props {
  children?: ReactNode,
  title: string,
}

const WorkDetails = ({ children, title } : Props) => {
  return (
    <>
    <Title>{title}</Title>
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} style={{fontSize: '24px'}}>
      {children}
    </motion.div>
    </>
  )
}

const Title = styled.h1`
    color: #444444;
    
    @media ${device.mobile} {
        font-size: 26px;
    }
    
    @media ${device.desktop} {
        font-size: 32px;
    }
`

export default WorkDetails;