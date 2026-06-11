import { useState } from 'react'
import { motion } from 'framer-motion'
import SplashScreen from './components/SplashScreen'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TierDisplay from './components/TierDisplay'
import MarketSection from './components/MarketSection'

export default function App() {
  const [splashDone, setSplashDone] = useState(false)

  return (
    <>
      <SplashScreen onComplete={() => setSplashDone(true)} />

      {splashDone && (
        <motion.div
          className="min-h-screen"
          style={{ background: '#DCE4E0' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Navbar />
          <HeroSection />
          <TierDisplay />
          <MarketSection />

          {/* Footer */}
          <footer
            className="mt-20 py-12 px-8 text-center font-grotesk"
            style={{ background: '#1E463E', color: 'rgba(255,255,255,0.35)' }}
          >
            <div className="font-pixel text-xs mb-3" style={{ color: '#17DD62' }}>SHTAR'S EXCLUSIVE TRADE NETWORK</div>
            <p className="text-sm">All trades are final. No refunds. No exceptions.</p>
          </footer>
        </motion.div>
      )}
    </>
  )
}
