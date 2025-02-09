import styled from "styled-components";
import * as React from "react";
import {ReactNode} from "react";
import {device} from "../styles/styles.ts";

interface Props {
  children?: ReactNode,
  id?: string,
  ref?: React.Ref<any>,
  showLine?: boolean,
}

const StyledSection = styled.div`
    height: 100vh;
    
    @media ${device.desktop} {  
        padding: 40px;
    }
  `

const Section = ({ children, showLine = true, ...rest } : Props) => {
  return (
    <StyledSection {...rest}>
      {children}
      {showLine && <VerticalLine/>}
    </StyledSection>
  )
}

const VerticalLine = styled.div`
    height: 70%;
    left: 50%;
    position: relative;
    border-left: 6px dotted grey;
    top: 20px;
    width: 6px;
`

export default React.memo(Section);