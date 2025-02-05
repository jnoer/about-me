import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gitHubImage from './images/github-mark.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header style={{color: 'black', height: '20%', display: 'flex', flexDirection: 'row', padding: '20px'}}>
        <h1 style={{color: 'black'}}>Jason Noer</h1>
        <div>

          <a href="https://github.com/jnoer/runplanner"><img src={gitHubImage} style={{height: '40px'}}/></a>
        </div>
      </header>

      <main className="card" style={{backgroundColor: '#0D158D', minHeight: '80%'}}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        <p >
          Click on the Vite and React logos to learn more
        </p>
      </main>
    </>
  )
}

export default App
