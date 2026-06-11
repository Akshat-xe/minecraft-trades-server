import { motion } from 'framer-motion'
import { TIERS } from '../data/trades'
import { getItem } from '../assets/itemIcons'

const TIER_BADGE_LABELS = ['', 'T1', 'T2', 'T3', 'T4']

function Block3D({ itemId, size = 52 }: { itemId: string; size?: number }) {
  const item = getItem(itemId)
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="block-3d-wrapper"
        style={{ width: size, height: size }}
        title={item.name}
      >
        <div className="block-3d-inner" style={{ width: size, height: size }}>
          {imgFailed ? (
            <div
              className="block-3d-face block-3d-front"
              style={{ background: item.color, width: size, height: size }}
            >
              <span className="font-grotesk font-bold text-white text-xs text-center px-1 leading-tight">
                {item.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
              </span>
            </div>
          ) : (
            <img
              src={item.url}
              alt={item.name}
              onError={() => setImgFailed(true)}
              className="block-3d-face"
              style={{
                width: size,
                height: size,
                imageRendering: 'pixelated',
                objectFit: 'contain',
              }}
              draggable={false}
            />
          )}
        </div>
      </div>
      <span
        className="font-grotesk font-semibold text-center leading-tight"
        style={{ color: '#1E463E', fontSize: 11, maxWidth: size + 16 }}
      >
        {item.name}
      </span>
    </div>
  )
}

function Block3DLight({ itemId, size = 44 }: { itemId: string; size?: number }) {
  const item = getItem(itemId)
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="block-3d-wrapper" style={{ width: size, height: size }} title={item.name}>
        <div className="block-3d-inner" style={{ width: size, height: size }}>
          {imgFailed ? (
            <div
              style={{ background: item.color, width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}
            >
              <span className="text-white font-bold" style={{ fontSize: 9 }}>
                {item.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
              </span>
            </div>
          ) : (
            <img
              src={item.url}
              alt={item.name}
              onError={() => setImgFailed(true)}
              className="block-3d-face"
              style={{ width: size, height: size, imageRendering: 'pixelated', objectFit: 'contain' }}
              draggable={false}
            />
          )}
        </div>
      </div>
      <span
        className="font-grotesk font-medium text-center leading-tight"
        style={{ color: 'rgba(255,255,255,0.7)', fontSize: 10, maxWidth: size + 16 }}
      >
        {item.name}
      </span>
    </div>
  )
}

import { useState } from 'react'

export default function TierDisplay() {
  return (
    <section id="tiers" className="px-4 md:px-8 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          className="text-center mb-12 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-pill text-xs font-grotesk font-bold uppercase tracking-widest"
            style={{ background: '#1E463E', color: '#17DD62' }}
          >
            Currency System
          </span>
          <h2
            className="font-grotesk font-bold uppercase"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: '#1E463E' }}
          >
            The Wealth Tiers
          </h2>
          <p className="font-body max-w-lg mx-auto" style={{ color: '#4A6B62' }}>
            Every item has a value tier. Higher tiers mean rarer items and better rewards.
          </p>
        </motion.div>

        {/* Two-card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

          {/* Card A – Tier overview (dark) */}
          <motion.div
            className="rounded-[32px] p-8 space-y-5"
            style={{ background: '#1E463E' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <span
                className="inline-block px-3 py-1 rounded-pill text-[11px] font-grotesk font-bold uppercase tracking-widest mb-3"
                style={{ background: 'rgba(23,221,98,0.15)', color: '#17DD62' }}
              >
                Overview
              </span>
              <h3 className="font-grotesk font-bold text-white text-2xl">Four Tiers of Power</h3>
            </div>

            <div className="space-y-2">
              {TIERS.map(t => (
                <div
                  key={t.tier}
                  className="flex items-start gap-3 py-3 px-4 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center font-pixel text-[9px] font-bold shrink-0 mt-0.5"
                    style={{ background: t.color + '22', color: t.color }}
                  >
                    {TIER_BADGE_LABELS[t.tier]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-grotesk font-semibold text-white text-sm">{t.label}</div>
                    <div className="text-[11px] font-body mt-0.5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      {t.items.join(' · ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Currency icons row per tier */}
            {TIERS.map(t => (
              <div key={`icons-${t.tier}`} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: t.color }} />
                  <span className="font-grotesk font-semibold text-sm" style={{ color: t.color }}>
                    Tier {t.tier}: {t.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 pl-4">
                  {t.itemIds.map(id => (
                    <Block3DLight key={id} itemId={id} size={40} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Card B – Tier details (white) */}
          <motion.div
            className="rounded-[32px] p-8 space-y-8"
            style={{ background: 'white', boxShadow: '0 10px 40px rgba(0,0,0,0.12)' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {TIERS.map(t => (
              <div key={t.tier} className="space-y-4">
                {/* Tier header */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-pixel text-[9px] font-bold shrink-0"
                    style={{ background: t.color + '22', color: t.color, border: `1.5px solid ${t.color}55` }}
                  >
                    {TIER_BADGE_LABELS[t.tier]}
                  </div>
                  <div>
                    <div className="font-grotesk font-bold text-base" style={{ color: '#1E463E' }}>
                      Tier {t.tier}: {t.label}
                    </div>
                    <div className="text-xs font-body" style={{ color: '#4A6B62' }}>
                      {t.items.length} currencies · {t.tier === 4 ? '4 exclusive trades' : `${t.itemIds.length} markets`}
                    </div>
                  </div>
                </div>

                {/* 3D block grid */}
                <div className="flex flex-wrap gap-5 pl-2">
                  {t.itemIds.map(id => (
                    <Block3D key={id} itemId={id} size={52} />
                  ))}
                </div>

                {t.tier < 4 && (
                  <div
                    className="h-px w-full"
                    style={{ background: 'rgba(30,70,62,0.08)' }}
                  />
                )}
              </div>
            ))}

            <motion.button
              className="pill-btn text-white text-sm w-full text-center"
              style={{ background: '#1E463E' }}
              whileHover={{ background: '#2B5C52' }}
              onClick={() => document.getElementById('markets')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Browse All Trades ↓
            </motion.button>
          </motion.div>
        </div>

        {/* Connector button */}
        <div className="flex justify-center">
          <motion.div
            className="px-6 py-3 rounded-pill font-grotesk font-semibold text-sm cursor-pointer flex items-center gap-2"
            style={{ background: '#1E463E', color: 'white', boxShadow: '0 8px 24px rgba(30,70,62,0.35)' }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('markets')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Explore All Markets</span>
            <span>→</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
