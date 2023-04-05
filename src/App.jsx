import { useState } from 'react'
import Header from './components/Header/Header'
import Contact from './components/Contact/Contact'
import LandingPage from './components/LandingPage/LandingPage'
import About from './components/About/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <LandingPage />
      <About />
    </div>
  )
}

export default App
