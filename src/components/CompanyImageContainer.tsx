import styled from "styled-components";
import * as React from "react";
import {ReactNode} from "react";

interface Props {
  children?: ReactNode,
  id?: string,
  ref?: React.Ref<any>,
  showLine?: boolean,
}

const StyledContainer = styled.div`
    height: 90vh;
`

const CompanyImageContainer = ({ children, showLine = true, ...rest } : Props) => {
  return (
    <StyledContainer {...rest}>
      {children}
      {showLine && <VerticalLine/>}
    </StyledContainer>
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

export default CompanyImageContainer;