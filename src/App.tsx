import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import IFrame from './pages/IFrame'
import { Routes, Route, useLocation } from 'react-router-dom'

function App() {
  const { pathname } = useLocation()
  return (
    <section className="grid grid-rows-[60px,1fr] h-screen">
      <Navbar />
      <main className="grid grid-cols-[300px,1fr]">
        <Sidebar idPost={pathname.substring(1)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:idPost" element={<IFrame />} />
        </Routes>
      </main>
    </section>
  )
}

export default App
