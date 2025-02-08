import styled from "styled-components";
import * as React from "react";
import {ReactNode} from "react";

interface Props {
  children?: ReactNode,
  id?: string,
  ref?: React.Ref<any>,
  showLine?: boolean,
}

const StyledDiv = styled.div`
    color: black;
    height: 100vh;
    padding: 40px;
  `

const Section = ({ children, showLine = true, ...rest } : Props) => {
  return (
    <StyledDiv {...rest}>
      {children}
      {showLine && <VerticalLine/>}
    </StyledDiv>
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