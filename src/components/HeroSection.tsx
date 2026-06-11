import { motion } from 'framer-motion'
import { MARKETS, TIERS } from '../data/trades'

const totalTrades = MARKETS.reduce((s, m) => s + m.trades.length, 0)

const STATS = [
  { value: `${MARKETS.length}`, label: 'Markets' },
  { value: `${totalTrades}`,   label: 'Trades' },
  { value: '4',                label: 'Tiers' },
]

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-28 pb-0 px-4 md:px-8 bg-dot-grid min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(23,221,98,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(93,231,239,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="max-w-7xl mx-auto w-full relative">

        {/* Main hero card */}
        <motion.div
          className="relative rounded-[40px] overflow-visible"
          style={{ background: '#1E463E' }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Pixel noise overlay */}
          <div className="absolute inset-0 rounded-[40px] opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")',
              backgroundSize: '256px 256px',
            }}
          />

          <div className="relative p-10 md:p-16 pb-24 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-0">

            {/* Left — title block */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-pill text-sm font-grotesk font-semibold"
                style={{ background: 'rgba(23,221,98,0.15)', color: '#17DD62', border: '1px solid rgba(23,221,98,0.25)' }}
              >
                <span>⚒</span>
                <span>Shtar's Private Shop</span>
              </motion.div>

              <motion.h1
                className="font-grotesk font-bold leading-none uppercase"
                style={{ fontSize: 'clamp(52px, 9vw, 128px)', color: 'white' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <span style={{ display: 'block' }}>MINECRAFT</span>
                <span
                  style={{
                    display: 'block',
                    background: 'linear-gradient(135deg, #17DD62 0%, #5DE7EF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  EXCLUSIVE
                </span>
                <span style={{ display: 'block' }}>TRADES</span>
              </motion.h1>

              <motion.p
                className="text-lg font-body max-w-md leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.55)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Premium item exchanges for every player archetype — from brave cave miners
                to dedicated grinders. Fair prices, exotic rewards.
              </motion.p>

              {/* Stats row */}
              <motion.div
                className="flex gap-8 pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {STATS.map(s => (
                  <div key={s.label}>
                    <div className="font-grotesk font-bold text-3xl text-white">{s.value}</div>
                    <div className="text-xs font-body uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="hidden lg:block" />
          </div>

          {/* Bottom pill button — single Browse Markets */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-start px-10 md:px-16 translate-y-1/2">
            <motion.button
              className="pill-btn text-white flex items-center gap-2"
              style={{ background: '#2B5C52', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
              whileHover={{ scale: 1.04, background: '#3D7A6F' }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              onClick={() => document.getElementById('markets')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>◆</span> BROWSE MARKETS
            </motion.button>
          </div>
        </motion.div>

        {/* Floating overlay card (white) */}
        <motion.div
          className="hidden lg:flex flex-col gap-5 absolute top-1/2 right-10 w-[310px] p-8 rounded-[28px] bg-white"
          style={{
            transform: 'translateY(-50%)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.22)',
            zIndex: 20,
          }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span
              className="inline-block px-3 py-1 rounded-pill text-xs font-grotesk font-bold uppercase tracking-wider mb-3"
              style={{ background: '#DCE4E0', color: '#1E463E' }}
            >
              Exclusive Trade System
            </span>
            <h3 className="font-grotesk font-bold text-xl leading-snug" style={{ color: '#1E463E' }}>
              Shtar's Private<br />Trade Network
            </h3>
          </div>

          <p className="text-sm font-body leading-relaxed" style={{ color: '#4A6B62' }}>
            A curated shop with fair trade rates designed for every type of player —
            skilled miners, industrialists, Nether explorers, and dedicated grinders.
          </p>

          {/* Tier pills */}
          <div className="space-y-2">
            {TIERS.map(t => (
              <div
                key={t.tier}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                style={{ background: '#F0F5F3' }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center font-pixel text-[8px] font-bold shrink-0"
                  style={{ background: t.color + '25', color: t.color }}
                >
                  T{t.tier}
                </div>
                <div className="min-w-0">
                  <div className="font-grotesk font-semibold text-xs" style={{ color: '#1E463E' }}>{t.label}</div>
                  <div className="text-[10px] font-body truncate" style={{ color: '#4A6B62' }}>
                    {t.items.slice(0, 3).join(', ')}{t.items.length > 3 ? '...' : ''}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <motion.button
            className="pill-btn flex items-center justify-center gap-2 text-white text-sm"
            style={{ background: '#1E463E', width: '100%' }}
            whileHover={{ background: '#2B5C52' }}
            onClick={() => document.getElementById('markets')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View All Trades ↓
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="flex justify-center mt-28 pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <motion.div
          className="flex items-center gap-2 px-6 py-3 rounded-pill font-grotesk font-semibold text-sm cursor-pointer"
          style={{ background: '#1E463E', color: 'white', boxShadow: '0 8px 24px rgba(30,70,62,0.4)' }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          onClick={() => document.getElementById('tiers')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
        >
          <span>Scroll to explore</span>
          <span>↓</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
