import { useState, useRef, useEffect } from 'react'
import './App.css'
import SearchButton from "./component/SearchButton"
import PasswordGenerator from "./component/PasswordGenerator"

function App() {
  const [activeComponent, setActiveComponent] = useState("")
  const handleClick = (name) => {
    setActiveComponent(name)
  }

  return (
    <div className='app-continer'>
      <div className='button-container' ><button onClick={() => handleClick("SearchButton")}>1. Search Button</button>
        <button onClick={() => handleClick("PasswordGenerator")}>2. Password Generator</button>
      </div>

      <div>
        {activeComponent === "SearchButton" && <SearchButton />}
      {activeComponent === "PasswordGenerator" && <PasswordGenerator />}
      
      </div>

    </div>
  )
}

export default App
