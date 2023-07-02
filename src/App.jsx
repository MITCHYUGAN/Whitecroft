import { useState } from 'react'
import Header from './components/Header/Header'
import Contact from './components/Contact/Contact'
import LandingPage from './components/LandingPage/LandingPage'
import About from './components/About/About'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import ClientsFeeds from './components/ClientsFeedbacks/ClientsFeed'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <LandingPage />
      <About />
      <Services />
      <Portfolio />
      <ClientsFeeds />
    </div>
  )
}

export default App
