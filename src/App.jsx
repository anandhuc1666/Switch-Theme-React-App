import { useEffect, useRef, useState } from 'react'
import "./style.css"

function App() {
  const [color, setColor] = useState("white")
  const containerRef=useRef(null)
  const changeColor = () => {
    setColor(preColor => (preColor === "white" ? 'black' : 'white'))
  }
  useEffect(() => {
  if(containerRef.current){
       containerRef.current.style.backgroundColor=color
  }
  },[color])

  return (
    <div >
      <h1>Hello'click the button</h1>
      <div className='container' ref={containerRef}>
        <button onClick={changeColor}>click me</button>
      </div>

    </div>
  )
}

export default App
