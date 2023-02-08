import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <div class="main">
          <h1>Projekt hét</h1>
          <div class="csapat">
            <h3>Csapattagok:</h3>
            <ul>
              <li>Magyar Tibor Dániel</li>
              <li>Papp Bence</li>
              <li>Szabó Dániel Márk</li>
              <li>Szabó Gergely</li>
            </ul>
          </div>
        </div>
        <div class="datamain">

        </div>
        <footer>
          <p>Minden jog fenttartva! &copy;</p>
        </footer>
      </div>

    



    </div>
  )
}

export default App
