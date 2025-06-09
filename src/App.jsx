import { useState, useRef, useEffect } from 'react'
import './App.css'
import SearchButton from "./component/SearchButton"
import PasswordGenerator from "./component/PasswordGenerator"
import Button from './component/Button'
import Counter from './component/Counter'
import GetData from './component/GetData'

function App() {
  const [activeComponent, setActiveComponent] = useState("")
  const handleClick = (name) => {
    setActiveComponent(name)
  }

  return (
    <div className='app-continer'>
      <div className='button-container' >
       <Button onClick={() => handleClick("SearchButton")}>1. Search Button</Button>
        <Button onClick={() => handleClick("PasswordGenerator")}>2. Password Generator</Button>
        <Button onClick={() => handleClick("Counter")}>3. Counter</Button>
        <Button onClick={() => handleClick("GetData")}>4. Get Data</Button>
      </div>

      <div>
        {activeComponent === "SearchButton" && <SearchButton />}
      {activeComponent === "PasswordGenerator" && <PasswordGenerator />}
      {activeComponent === "Counter" && <Counter />}
      {activeComponent === "GetData" && <GetData />}
      
      
      </div>

    </div>
  )
}

export default App
