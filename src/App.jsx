import { useState, useRef, useEffect } from 'react'
import './App.css'
import SearchButton from "./component/SearchButton"
import PasswordGenerator from "./component/PasswordGenerator"
import Button from './component/Button'
import Counter from './component/Counter'
import GetData from './component/GetData'
import { useTheme } from "./utlility/ThemeProvider";
import AdvanceCounter from './component/AdvanceCounter'

function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeComponent, setActiveComponent] = useState("")
  const handleClick = (name) => {
    setActiveComponent(name)
  }

  const buttonLabel  = [{label:"1. Search Button", component:<SearchButton />, searchTerm:"SearchButton"},
    {label:"2. Password Generator", component:<PasswordGenerator />, searchTerm:"PasswordGenerator"},
    {label:"3. Counter", component:<Counter />, searchTerm:"Counter"},
    {label:"4. Get Data", component:<GetData />, searchTerm:"GetData"},
    {label:"5. Advance Counter", component:<AdvanceCounter />, searchTerm:"AdvCounter"},
  ]

  return (
    <div className={theme}>
    <div className='app-continer'>
      <div>
        {buttonLabel.map((text,id)=><div className='button-container' key={id}><Button onClick={()=>handleClick(text.searchTerm)}>{text.label}</Button></div>)}
      </div>

      <div>
        {buttonLabel.map(text=>activeComponent===text.searchTerm && text.component)}
      </div>

      
         <button className='theme-button' onClick={toggleTheme}>
         {theme === "light" ? "Dark" : "Light"} background ?
      </button>
    </div>

    </div>
  )
}

export default App
