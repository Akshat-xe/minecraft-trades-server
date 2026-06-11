import { useState } from 'react'
import { getItem } from '../assets/itemIcons'

interface Props {
  itemId: string
  quantity?: number
  quantityLabel?: string
  enchanted?: boolean
  enchantments?: string[]
  note?: string
  isChest?: boolean
  size?: number
  showName?: boolean
}

export default function ItemSlot({
  itemId, quantity, quantityLabel, enchanted, enchantments,
  note, isChest, size = 56, showName = false,
}: Props) {
  const [imgFailed, setImgFailed] = useState(false)
  const item = getItem(itemId)

  const displayQty = quantityLabel ?? (quantity && quantity > 1 ? `${quantity}` : null)
  const showTooltip = enchanted && enchantments && enchantments.length > 0

  if (isChest) {
    return (
      <div className="flex flex-col items-center gap-1">
        <div
          className="mc-slot rounded-sm cursor-help flex flex-col items-center justify-center gap-0.5 px-1"
          style={{ width: size * 1.5, height: size, background: '#7A5230' }}
          title={`${quantityLabel ?? '1 Double Chest'} of ${item.name}${note ? ` (${note})` : ''}`}
        >
          <div className="font-pixel text-center leading-tight" style={{ fontSize: 8, color: '#FFD18C' }}>
            {quantityLabel ?? '1 DC'}
          </div>
          <div className="font-grotesk font-bold text-white/80 text-center leading-tight" style={{ fontSize: 9 }}>
            {item.name}
          </div>
          {note && (
            <div className="font-grotesk text-white/55 text-center leading-tight" style={{ fontSize: 8 }}>
              {note}
            </div>
          )}
        </div>
        {showName && (
          <span className="item-note-text" style={{ maxWidth: size * 1.5 }}>
            {item.name}
          </span>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="group relative">
        {/* Hover tooltip */}
        {showTooltip && (
          <div
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-xl
                       font-grotesk whitespace-nowrap pointer-events-none
                       opacity-0 group-hover:opacity-100 transition-opacity z-50"
            style={{ background: '#0A1F1A', border: '1px solid #2D1B5A', minWidth: 140 }}
          >
            <div className="font-bold text-white text-xs mb-1">{item.name}</div>
            {enchantments?.map(e => (
              <div key={e} className="item-enchant-label">✦ {e}</div>
            ))}
            {note && <div className="text-xs mt-0.5" style={{ color: '#5A9E92' }}>{note}</div>}
          </div>
        )}

        {/* Slot */}
        <div
          className="mc-slot rounded-sm relative"
          style={{ width: size, height: size }}
          title={`${item.name}${note ? ` (${note})` : ''}`}
        >
          {imgFailed ? (
            <div
              className="mc-slot-fallback"
              style={{ background: item.color }}
            >
              {item.name.split(' ').map(w => w[0]).join('').slice(0, 3)}
            </div>
          ) : (
            <img
              src={item.url}
              alt={item.name}
              onError={() => setImgFailed(true)}
              draggable={false}
            />
          )}

          {enchanted && <div className="enchanted-overlay" />}

          {displayQty && (
            <span className="mc-count">{displayQty}</span>
          )}
        </div>

        {/* Note text below slot (when no tooltip) */}
        {note && !showTooltip && (
          <div className="item-note-text mt-0.5" style={{ maxWidth: size + 8 }}>
            {note}
          </div>
        )}
      </div>

      {/* Item name below */}
      {showName && (
        <span
          className="font-grotesk font-semibold text-center leading-tight"
          style={{ color: 'rgba(255,255,255,0.65)', fontSize: 10, maxWidth: size + 12 }}
        >
          {item.name}
        </span>
      )}
    </div>
  )
}
