import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface Props { onComplete: () => void }

const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  dur: 5 + Math.random() * 6,
  delay: Math.random() * 4,
  size: 10 + Math.random() * 16,
  sym: ['◆', '●', '★', '▲', '◉', '✦'][i % 6],
  col: ['#5DE7EF', '#17DD62', '#FADB57', '#FF69B4', '#A78BFA', '#34D399'][i % 6],
}))

const DiamondSVG = () => (
  <svg viewBox="0 0 80 80" className="w-32 h-32 drop-shadow-2xl" fill="none">
    <polygon points="40,4 74,28 40,76 6,28" fill="#5DE7EF" />
    <polygon points="40,4 74,28 40,36" fill="#A0F4FA" opacity="0.6" />
    <polygon points="40,4 6,28 40,36"  fill="#2AAAB2" opacity="0.4" />
    <polygon points="6,28 40,36 40,76"  fill="#1E8A93" />
    <polygon points="74,28 40,36 40,76" fill="#126E75" />
    <polygon points="40,4 74,28 40,36" fill="white" opacity="0.12" />
    {/* sparkles */}
    <line x1="40" y1="0"  x2="40" y2="6"  stroke="#5DE7EF" strokeWidth="2" opacity="0.7" />
    <line x1="40" y1="74" x2="40" y2="80" stroke="#5DE7EF" strokeWidth="2" opacity="0.7" />
    <line x1="0"  y1="28" x2="6"  y2="28" stroke="#5DE7EF" strokeWidth="2" opacity="0.7" />
    <line x1="74" y1="28" x2="80" y2="28" stroke="#5DE7EF" strokeWidth="2" opacity="0.7" />
  </svg>
)

export default function SplashScreen({ onComplete }: Props) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    let val = 0
    const id = setInterval(() => {
      val += Math.random() * 2.5 + 0.8
      setProgress(Math.min(val, 100))
      if (val >= 100) {
        clearInterval(id)
        setTimeout(() => setVisible(false), 500)
      }
    }, 40)
    return () => clearInterval(id)
  }, [])

  return (
    <AnimatePresence onExitComplete={() => onCompleteRef.current()}>
      {visible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
          style={{ background: '#060F0C' }}
          initial={{ opacity: 1 }}
          exit={{ y: '-100vh', transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Pixel grid bg */}
          <div className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: 'linear-gradient(#17DD62 1px, transparent 1px), linear-gradient(90deg, #17DD62 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          {/* Radial spotlight */}
          <div className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(23,221,98,0.07) 0%, transparent 70%)',
            }}
          />

          {/* Falling particles */}
          {PARTICLES.map(p => (
            <motion.span
              key={p.id}
              className="absolute pointer-events-none font-bold"
              style={{ left: `${p.x}%`, top: -30, fontSize: p.size, color: p.col, opacity: 0.6 }}
              animate={{ y: '110vh', rotate: 720 }}
              transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'linear' }}
            >
              {p.sym}
            </motion.span>
          ))}

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center gap-8 px-8 text-center">

            {/* Diamond icon floating */}
            <motion.div
              animate={{ y: [0, -14, 0], rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <DiamondSVG />
            </motion.div>

            {/* Title */}
            <div className="space-y-3">
              <motion.div
                className="font-pixel leading-tight"
                style={{
                  fontSize: 'clamp(24px, 6vw, 52px)',
                  color: '#17DD62',
                  textShadow: '0 0 30px rgba(23,221,98,0.9), 0 0 60px rgba(23,221,98,0.5)',
                }}
                animate={{
                  textShadow: [
                    '0 0 20px rgba(23,221,98,0.7),0 0 40px rgba(23,221,98,0.4)',
                    '0 0 50px rgba(23,221,98,1),0 0 100px rgba(23,221,98,0.6),0 0 150px rgba(23,221,98,0.3)',
                    '0 0 20px rgba(23,221,98,0.7),0 0 40px rgba(23,221,98,0.4)',
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                SHTAR
              </motion.div>

              <motion.div
                className="font-pixel tracking-[0.25em]"
                style={{ fontSize: 'clamp(10px, 2vw, 18px)', color: '#5DE7EF' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                EXCLUSIVE TRADES
              </motion.div>
            </div>

            {/* Divider */}
            <motion.div
              className="flex items-center gap-3 w-72"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, #17DD62)' }} />
              <span className="font-pixel text-[8px]" style={{ color: '#17DD62' }}>✦</span>
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #17DD62, transparent)' }} />
            </motion.div>

            {/* Loading label */}
            <motion.p
              className="font-pixel text-[9px] tracking-widest"
              style={{ color: '#3D7A6F' }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              initial={{ opacity: 0 }}
            >
              LOADING TRADE DATA...
            </motion.p>

            {/* XP progress bar */}
            <div className="w-80 space-y-2">
              <div
                className="w-full h-[14px] rounded-sm overflow-hidden"
                style={{ background: '#0D2E26', border: '1px solid #1E463E' }}
              >
                <motion.div
                  className="h-full"
                  style={{
                    background: 'linear-gradient(90deg, #17DD62 0%, #5DE7EF 100%)',
                    boxShadow: '0 0 10px rgba(23,221,98,0.7)',
                  }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.12 }}
                />
              </div>
              <div className="flex justify-between font-pixel text-[8px]" style={{ color: '#3D7A6F' }}>
                <span>INITIALIZING</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </div>

            {/* Server tag */}
            <motion.div
              className="font-pixel text-[8px] tracking-wide px-4 py-2 rounded-pill"
              style={{ border: '1px solid #1E463E', color: '#3D7A6F', background: 'rgba(30,70,62,0.2)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              ⚒ MINECRAFT EXCLUSIVE TRADES ⚒
            </motion.div>
          </div>

          {/* Corner decorations */}
          {[
            'top-6 left-6',
            'top-6 right-6',
            'bottom-6 left-6',
            'bottom-6 right-6',
          ].map((pos) => (
            <div
              key={pos}
              className={`absolute ${pos} w-12 h-12 opacity-20`}
              style={{
                background: 'conic-gradient(#17DD62 25%, transparent 25%)',
                mask: 'radial-gradient(farthest-corner, transparent 60%, black 60%)',
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
