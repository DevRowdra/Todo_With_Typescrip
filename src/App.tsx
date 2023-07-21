import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './component/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>TODO APP WITH REACT AND TYPESCRIPT</h1>
     <AddTodo></AddTodo>
    </>
  )
}

export default App
