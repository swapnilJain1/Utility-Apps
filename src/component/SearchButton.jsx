import { useState, useRef } from 'react'
import '../App.css'

function App() {
  const [isSearch, setIsSearch] = useState(false)

  const inputRef = useRef()

  const handleClick = () => {
    setIsSearch(prev => !prev)
    inputRef?.current?.focus()
  }

  return (
    <>
      {<input placeholder='search...' ref={inputRef} style={{
        width: isSearch ? '200px' : '0px',
        opacity: isSearch ? 1 : 0,
        transition: 'width 0.8s ease, opacity 0.5s ease',
        overflow: 'hidden',
        border: isSearch ? '1px solid black' : 'none',
        padding: isSearch ? '5px' : '0px',
      }} />}
      <button onClick={handleClick}>🔍</button>
    </>
  )
}

export default App
