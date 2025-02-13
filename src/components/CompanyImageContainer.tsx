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

const StyledContainer = styled.div`
    height: 90vh;
`

const CompanyImageContainer = ({children, showLine = true, ...rest}: Props) => {
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
    top: 20px;
    width: 6px;

    @media ${device.mobile} {
        border-left: 3px dotted rgba(144, 238, 144, 0.44);
    }

    @media ${device.desktop} {
        border-left: 6px dotted rgba(144, 238, 144, 0.44);
    }
`

export default CompanyImageContainer;