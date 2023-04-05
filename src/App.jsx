import { useState } from 'react'
import Header from './components/Header/Header'
import Contact from './components/Contact/Contact'
import LandingPage from './components/LandingPage/LandingPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <LandingPage />
    </div>
  )
}

export default App
