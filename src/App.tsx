import './App.css'
import Header from './Header'
import Section from "./Section";

import styled from 'styled-components'

const StyledMain = styled.main`
  background-color: #0D158D;
  display: flex;
  flex-direction: row;
  min-height: 80vh;
`

function App() {
  return (
    <>
      <Header/>

      <StyledMain>
        <div style={{position: 'fixed'}}>
          left side
        </div>

        <div>
          <Section></Section>
          <Section></Section>
          <Section></Section>
          <Section></Section>
          <Section></Section>
          <Section></Section>
        </div>
      </StyledMain>
    </>
  )
}

export default App
