import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'

import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="acerca" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/portafolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
