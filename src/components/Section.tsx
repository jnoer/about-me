import styled from "styled-components";

const StyledDiv = styled.div`
    // border: 2px dashed red;
    color: black;
    height: 100vh;
    padding: 40px;
  `

const Section = ({children, ...rest}) => {
  return (
    <StyledDiv {...rest}>
      {children}
    </StyledDiv>
  )
}

export default Section;