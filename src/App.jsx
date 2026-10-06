import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'

function Home() {
  return <h1 className="text-2xl font-bold mb-4">Home</h1>
}

function About() {
  return <h1 className="text-2xl font-bold mb-4">About</h1>
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-black p-6">
        <nav className="flex gap-4 mb-6">
          <Link to="/" className="text-blue-600">Home</Link>
          <Link to="/about" className="text-blue-600">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
