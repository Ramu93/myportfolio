import React, { FC } from 'react'
import { About, Header, Footer, Skills, Testimonials, Work } from './containers'
import { Navbar } from './components'

const App: FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
