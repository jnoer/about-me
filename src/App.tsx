import { useState } from 'react'
import './App.css'
import Header from './Header'
import Section from "./Section";

import styled from 'styled-components'

const StyledMain = styled.main`
  backgroundColor: #0D158D;
  display: flex;
  flex-direction: row;
  minHeight: 80vh;
`

function App() {
  return (
    <>
      <Header/>

      <StyledMain>
        <div>
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
