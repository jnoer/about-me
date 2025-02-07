import styled from "styled-components";
import * as React from "react";

const StyledDiv = styled.div`
    // border: 2px dashed red;
    color: black;
    height: 100vh;
    padding: 40px;
  `

const Section = ({children, showLine = true, ...rest}) => {
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
`

export default React.memo(Section);