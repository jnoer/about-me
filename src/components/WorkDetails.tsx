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

const WorkDetails = ({children, title}: WorkDetailsProps) => {
  return (
    <section>
      {title}
      <Description initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: .3}}>
        {children}
      </Description>
    </section>
  )
}

const Title: React.FC<TitleProps> = ({children, ...rest}: TitleProps) => {
  return (
    <StyledTitle initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} {...rest} >
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

export {Title, WorkDetails};