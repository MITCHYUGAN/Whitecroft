import { useState } from 'react'
import Header from './components/Header/Header'
import Contact from './components/Contact/Contact'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Contact />
    </div>
  )
}

export default App
