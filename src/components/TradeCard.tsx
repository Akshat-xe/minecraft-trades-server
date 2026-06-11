import { motion } from 'framer-motion'
import type { Trade } from '../data/trades'
import ItemSlot from './ItemSlot'

const TYPE_COLORS: Record<string, { bg: string; text: string; label: string }> = {
  upgrade:    { bg: '#5DE7EF22', text: '#5DE7EF', label: '⬆ Upgrade' },
  conversion: { bg: '#FADB5722', text: '#FADB57', label: '⇄ Conversion' },
  gear:       { bg: '#A78BFA22', text: '#A78BFA', label: '⚔ Gear' },
  luxury:     { bg: '#FF69B422', text: '#FF69B4', label: '★ Luxury' },
  fun:        { bg: '#34D39922', text: '#34D399', label: '✦ Fun Pack' },
  grind:      { bg: '#F9731622', text: '#F97316', label: '⛏ Grind' },
  builder:    { bg: '#FADB5722', text: '#FADB57', label: '🔧 Builder' },
  survivalist:{ bg: '#F9731622', text: '#F97316', label: '🛡 Thorough List' },
  armory:     { bg: '#5DE7EF22', text: '#5DE7EF', label: '🛡 Armoury' },
  exclusive:  { bg: '#FFD70022', text: '#FFD700', label: '👑 Exclusive' },
  challenge:  { bg: '#FF444422', text: '#FF8844', label: '🏆 Challenge' },
}

interface Props {
  trade: Trade
  themeColor: string
  index: number
}

export default function TradeCard({ trade, themeColor, index }: Props) {
  const tc = TYPE_COLORS[trade.type] ?? TYPE_COLORS.conversion

  const renderSlots = (items: typeof trade.gives) => {
    const compact = items.length > 4
    const size = compact ? 40 : 48
    return (
      <div className="flex flex-wrap gap-2 items-end justify-center">
        {items.map((item, i) => (
          <ItemSlot
            key={i}
            itemId={item.itemId}
            quantity={item.quantity}
            quantityLabel={item.quantityLabel}
            enchanted={item.enchanted}
            enchantments={item.enchantments}
            note={item.note}
            isChest={item.isChest}
            size={size}
            showName
          />
        ))}
      </div>
    )
  }

  const isChallenge = trade.type === 'challenge'

  return (
    <motion.div
      className="trade-card rounded-[24px] flex flex-col h-full"
      style={{ background: '#133830' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Card header */}
      <div className="flex items-start justify-between px-5 pt-5 pb-3">
        <div>
          <span
            className="inline-block px-3 py-1 rounded-pill text-[11px] font-grotesk font-bold uppercase tracking-wider mb-2"
            style={{ background: tc.bg, color: tc.text }}
          >
            {tc.label}
          </span>
          <h3 className="font-grotesk font-bold text-white text-base leading-tight">
            {trade.name}
          </h3>
        </div>
        <span
          className="font-pixel text-[9px] mt-1 shrink-0 ml-2 px-2 py-1 rounded-lg"
          style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.4)' }}
        >
          #{trade.optionNumber}
        </span>
      </div>

      {/* Trade visual */}
      <div className="flex-1 flex flex-col px-4 py-2 gap-3">

        {/* Condition banner (for challenge / exclusive trades) */}
        {trade.condition && (
          <div
            className="w-full px-3 py-2.5 rounded-xl text-xs font-grotesk leading-relaxed"
            style={{ background: tc.bg, color: tc.text, border: `1px solid ${tc.text}33` }}
          >
            <span className="font-bold uppercase tracking-wide text-[10px] block mb-1">Condition</span>
            {trade.condition}
          </div>
        )}

        <div
          className="w-full rounded-[16px] p-4 flex flex-col gap-4"
          style={{ background: 'rgba(0,0,0,0.25)' }}
        >
          {/* PLAYER GIVES */}
          {(trade.gives.length > 0 || !isChallenge) && (
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-pixel uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Player Brings
              </span>
              {trade.gives.length > 0
                ? renderSlots(trade.gives)
                : (
                  <span className="text-xs font-grotesk italic" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    No items — see condition above
                  </span>
                )
              }
            </div>
          )}

          {/* Arrow divider */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, transparent, ${themeColor}55)` }} />
            <div
              className="flex items-center justify-center w-8 h-8 rounded-full font-bold text-base"
              style={{ background: themeColor + '20', border: `2px solid ${themeColor}40`, color: themeColor }}
            >
              →
            </div>
            <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${themeColor}55, transparent)` }} />
          </div>

          {/* TRADER OFFERS */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-pixel uppercase tracking-widest" style={{ color: themeColor + 'AA' }}>
              Trader Offers
            </span>
            {renderSlots(trade.receives)}
          </div>
        </div>

        {/* Alternatives note */}
        {trade.alternatives && (
          <div
            className="w-full text-center text-[11px] font-grotesk px-3 py-2 rounded-xl leading-relaxed"
            style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.55)' }}
          >
            <span className="font-bold text-[10px] block mb-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>ALSO ACCEPTS</span>
            {trade.alternatives}
          </div>
        )}
      </div>

      {/* Footer — business logic only */}
      <div
        className="px-5 pb-5 pt-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 'auto' }}
      >
        <p className="text-[12px] font-body leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
          {trade.businessLogic}
        </p>
      </div>
    </motion.div>
  )
}
