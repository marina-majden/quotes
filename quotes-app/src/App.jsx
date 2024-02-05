import { useState } from 'react'
import './App.css'
import Quote from './components/Quote'

function App() {
  const [title, setTitle] = useState("Quotes Generator");

  const handleMouseOver = (e) =>{
    setTitle("Get motivated");
  }
  

  return (
    <>
      <h1 onMouseOver={handleMouseOver} className='title'>{title}</h1>
      <Quote />
    </>
  )
}

export default App
