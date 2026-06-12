import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Refund from './pages/Refund'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <BrowserRouter basename="/VoucherLife">
      <ScrollToTop />
      <BackToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}