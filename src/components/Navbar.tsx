import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'Markets',  href: '#markets' },
  { label: 'Tiers',    href: '#tiers' },
]

function scrollTo(href: string) {
  if (href === '#home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const id = href.replace('#', '')
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(30,70,62,0.92)' : 'rgba(30,70,62,0.15)',
          backdropFilter: scrolled ? 'blur(18px)' : 'blur(6px)',
          borderBottom: scrolled ? '1px solid rgba(93,231,239,0.10)' : 'none',
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-5 py-3.5 flex items-center gap-4">

          {/* Logo / brand */}
          <button
            onClick={() => scrollTo('#home')}
            className="font-pixel text-[11px] whitespace-nowrap shrink-0"
            style={{ color: '#17DD62' }}
          >
            ⚒ SHTAR
          </button>

          {/* Nav links — desktop */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {LINKS.map(link => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="px-5 py-2 rounded-pill text-sm font-grotesk font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right — search */}
          <div
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-pill flex-1 max-w-xs ml-auto"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            <svg className="w-4 h-4 opacity-60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search trades..."
              className="bg-transparent text-white placeholder-white/40 text-sm font-body outline-none w-full"
            />
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-auto w-9 h-9 rounded-xl flex flex-col items-center justify-center gap-1.5"
            style={{ background: 'rgba(255,255,255,0.1)' }}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Menu"
          >
            <span
              className="block h-0.5 w-5 rounded-full bg-white transition-all duration-200"
              style={{ transform: mobileOpen ? 'rotate(45deg) translateY(8px)' : 'none' }}
            />
            <span
              className="block h-0.5 w-5 rounded-full bg-white transition-all duration-200"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block h-0.5 w-5 rounded-full bg-white transition-all duration-200"
              style={{ transform: mobileOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed top-[60px] left-0 right-0 z-40 md:hidden"
            style={{ background: 'rgba(18,50,44,0.97)', backdropFilter: 'blur(20px)' }}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-5 py-4 space-y-1">
              {LINKS.map(link => (
                <button
                  key={link.label}
                  onClick={() => { scrollTo(link.href); setMobileOpen(false) }}
                  className="w-full text-left px-4 py-3 rounded-2xl font-grotesk font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 text-base"
                >
                  {link.label}
                </button>
              ))}
              {/* Search in mobile */}
              <div
                className="flex items-center gap-2 px-4 py-3 rounded-2xl mt-2"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.10)' }}
              >
                <svg className="w-4 h-4 opacity-50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  placeholder="Search trades..."
                  className="bg-transparent text-white placeholder-white/40 text-sm font-body outline-none w-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
