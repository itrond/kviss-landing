const ITEMS = [
  '🌍 Geografi', '🎬 Film & TV', '🔬 Vitenskap', '⚽ Sport', '🎵 Musikk',
  '📚 Historie', '🍕 Mat & Drikke', '🎮 Spill', '🐾 Natur', '🏛️ Kunst',
  '🚀 Teknologi', '🧮 Matte', '🌊 Hav & Natur', '📺 Kultur', '🎭 Teater',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div style={{
      overflow: 'hidden',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      background: 'rgba(245,224,49,0.03)',
      padding: '14px 0',
    }}>
      <div style={{
        display: 'flex',
        gap: '0',
        animation: 'marquee 30s linear infinite',
        width: 'max-content',
      }}>
        {doubled.map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '0 28px',
            whiteSpace: 'nowrap',
          }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '12px',
              fontWeight: 700,
              color: i % 4 === 0 ? 'var(--yellow)' : i % 4 === 1 ? 'var(--mint)' : i % 4 === 2 ? 'var(--coral)' : 'var(--text-mid)',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
            }}>
              {item}
            </span>
            {i < doubled.length - 1 && (
              <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: '18px', lineHeight: 1 }}>·</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
