import {motion} from "motion/react";
import {ReactNode} from "react";
import styled from "styled-components";
import {device} from "../styles/styles.ts";

interface WorkDetailsProps {
  children?: ReactNode,
  title: ReactNode,
}

interface TitleProps {
  children?: ReactNode,
  [x: string]: any;
}

const delayContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: .5
    }
  }
}

const delayChild = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const WorkDetails = ({ children, title } : WorkDetailsProps) => {
  return (
    <motion.div variants={delayContainer} initial="hidden" animate="show">
      {title}
      <Description variants={delayChild}>
        {children}
      </Description>
    </motion.div>
  )
}

const Title: React.FC<TitleProps> = ({ children, ...rest }: TitleProps) => {
  return (
    <StyledTitle {...rest} >
      {children}
    </StyledTitle>
  )
}

const StyledTitle = styled(motion.h1)`
    color: #444444;
    
    @media ${device.mobile} {
        font-size: 26px;
    }
    
    @media ${device.desktop} {
        font-size: 32px;
    }
`

const Description = styled(motion.div)`
    @media ${device.mobile} {
        font-size: 16px;
        width: 120%;
    }

    @media ${device.desktop} {
        font-size: 22px;
    }
`

export { Title, WorkDetails };