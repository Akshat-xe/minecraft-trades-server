import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MARKETS, TIER_GROUPS } from '../data/trades'
import TradeCard from './TradeCard'
import ItemSlot from './ItemSlot'

const TYPE_FILTERS = [
  { label: 'All',          value: 'all' },
  { label: 'Upgrade',      value: 'upgrade' },
  { label: 'Conversion',   value: 'conversion' },
  { label: 'Gear',         value: 'gear' },
  { label: 'Fun',          value: 'fun' },
  { label: 'Grind',        value: 'grind' },
  { label: 'Luxury',       value: 'luxury' },
  { label: 'Builder',      value: 'builder' },
  { label: 'Thorough List',value: 'survivalist' },
  { label: 'Armoury',      value: 'armory' },
  { label: 'Exclusive',    value: 'exclusive' },
  { label: 'Challenge',    value: 'challenge' },
]

export default function MarketSection() {
  const [activeMarketId, setActiveMarketId] = useState('diamond')
  const [activeFilter, setActiveFilter] = useState('all')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const market = MARKETS.find(m => m.id === activeMarketId) ?? MARKETS[0]

  const filtered = activeFilter === 'all'
    ? market.trades
    : market.trades.filter(t => t.type === activeFilter)

  const handleMarketChange = (id: string) => {
    setActiveMarketId(id)
    setActiveFilter('all')
    setSidebarOpen(false)
  }

  return (
    <section id="markets" className="px-4 md:px-8 py-20">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Section header */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-pill text-xs font-grotesk font-bold uppercase tracking-widest"
            style={{ background: '#1E463E', color: '#17DD62' }}
          >
            All Tiers
          </span>
          <h2
            className="font-grotesk font-bold uppercase"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: '#1E463E' }}
          >
            Browse All Trades
          </h2>
        </motion.div>

        {/* Mobile market picker toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setSidebarOpen(v => !v)}
            className="w-full flex items-center justify-between px-5 py-3 rounded-2xl font-grotesk font-semibold text-sm text-white"
            style={{ background: '#1E463E' }}
          >
            <span className="flex items-center gap-3">
              <ItemSlot itemId={market.currencyItemId} size={24} />
              <span>{market.name}</span>
            </span>
            <span style={{ transform: sidebarOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▼</span>
          </button>

          {sidebarOpen && (
            <motion.div
              className="mt-2 rounded-2xl overflow-hidden"
              style={{ background: '#1E463E' }}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <MarketList
                activeMarketId={activeMarketId}
                onSelect={handleMarketChange}
              />
            </motion.div>
          )}
        </div>

        {/* 2-column layout */}
        <div className="flex gap-6 items-start">

          {/* LEFT: Market sidebar (desktop only) */}
          <motion.div
            className="hidden lg:block shrink-0 w-[260px] rounded-[28px] overflow-hidden sticky top-24"
            style={{ background: '#1E463E', maxHeight: 'calc(100vh - 120px)', overflowY: 'auto' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <MarketList activeMarketId={activeMarketId} onSelect={handleMarketChange} />
          </motion.div>

          {/* RIGHT: Trades panel */}
          <motion.div
            className="flex-1 min-w-0 rounded-[28px] overflow-hidden"
            style={{ background: '#1E463E' }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Market info bar */}
            <div className="px-6 pt-5 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <ItemSlot itemId={market.currencyItemId} size={32} />
                <div>
                  <div className="font-grotesk font-bold text-white text-lg leading-tight">{market.name}</div>
                  <div className="text-xs font-pixel" style={{ color: market.themeColor }}>{market.subtitle}</div>
                </div>
                <span
                  className="ml-auto px-3 py-1 rounded-pill text-xs font-grotesk font-bold shrink-0"
                  style={{ background: market.themeColor + '22', color: market.themeColor }}
                >
                  {filtered.length} / {market.trades.length} Trades
                </span>
              </div>
              <p className="text-xs font-body" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {market.description}
              </p>
            </div>

            {/* Filter tabs */}
            <div
              className="px-5 py-3 flex flex-wrap gap-1.5"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              {TYPE_FILTERS.map(f => {
                const isActive = activeFilter === f.value
                return (
                  <button
                    key={f.value}
                    onClick={() => setActiveFilter(f.value)}
                    className="px-3 py-1 rounded-pill text-[11px] font-grotesk font-semibold transition-all duration-200"
                    style={{
                      background: isActive ? market.themeColor : 'rgba(255,255,255,0.08)',
                      color:      isActive ? '#0A1F1A' : 'rgba(255,255,255,0.55)',
                    }}
                  >
                    {f.label}
                  </button>
                )
              })}
            </div>

            {/* Trade cards */}
            <div className="p-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeMarketId}-${activeFilter}`}
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {filtered.length === 0 ? (
                    <div className="col-span-full text-center py-16 font-grotesk" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      <div className="text-4xl mb-3">⚒</div>
                      <div className="font-semibold">No trades in this category.</div>
                    </div>
                  ) : (
                    filtered.map((trade, i) => (
                      <TradeCard
                        key={trade.id}
                        trade={trade}
                        themeColor={market.themeColor}
                        index={i}
                      />
                    ))
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MarketList({ activeMarketId, onSelect }: { activeMarketId: string; onSelect: (id: string) => void }) {
  return (
    <div className="py-3">
      {TIER_GROUPS.map((group, gi) => (
        <div key={group.tier} className={gi > 0 ? 'mt-2' : ''}>
          {/* Tier label */}
          <div
            className="px-4 py-2 text-[10px] font-pixel uppercase tracking-wider flex items-center gap-2"
            style={{ color: group.color }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full shrink-0"
              style={{ background: group.color }}
            />
            {group.label}
          </div>

          {/* Market buttons */}
          {group.markets.map(m => {
            const isActive = activeMarketId === m.id
            return (
              <button
                key={m.id}
                onClick={() => onSelect(m.id)}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all duration-150 relative"
                style={{
                  background: isActive ? m.themeColor + '18' : 'transparent',
                  borderLeft: isActive ? `3px solid ${m.themeColor}` : '3px solid transparent',
                }}
              >
                <ItemSlot itemId={m.currencyItemId} size={26} />
                <span
                  className="font-grotesk font-medium text-sm leading-tight"
                  style={{ color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.55)' }}
                >
                  {m.name}
                </span>
                {isActive && (
                  <span
                    className="ml-auto text-[10px] font-grotesk font-bold px-2 py-0.5 rounded-full shrink-0"
                    style={{ background: m.themeColor + '30', color: m.themeColor }}
                  >
                    {m.trades.length}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
}
