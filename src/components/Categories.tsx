const CATEGORIES = [
  { emoji: '🌍', name: 'Geografi', count: 340, color: 'rgba(46,255,213,0.08)', accent: 'var(--mint)' },
  { emoji: '🎬', name: 'Film & TV', count: 280, color: 'rgba(255,61,90,0.08)', accent: 'var(--coral)' },
  { emoji: '🔬', name: 'Vitenskap', count: 190, color: 'rgba(245,224,49,0.08)', accent: 'var(--yellow)' },
  { emoji: '⚽', name: 'Sport', count: 310, color: 'rgba(46,255,213,0.08)', accent: 'var(--mint)' },
  { emoji: '🎵', name: 'Musikk', count: 220, color: 'rgba(255,61,90,0.08)', accent: 'var(--coral)' },
  { emoji: '📚', name: 'Historie', count: 250, color: 'rgba(245,224,49,0.08)', accent: 'var(--yellow)' },
  { emoji: '🍕', name: 'Mat & Drikke', count: 150, color: 'rgba(46,255,213,0.08)', accent: 'var(--mint)' },
  { emoji: '🎮', name: 'Spill & Pop', count: 180, color: 'rgba(255,61,90,0.08)', accent: 'var(--coral)' },
  { emoji: '🐾', name: 'Natur & Dyr', count: 170, color: 'rgba(245,224,49,0.08)', accent: 'var(--yellow)' },
  { emoji: '🚀', name: 'Teknologi', count: 130, color: 'rgba(46,255,213,0.08)', accent: 'var(--mint)' },
  { emoji: '🏛️', name: 'Kunst', count: 120, color: 'rgba(255,61,90,0.08)', accent: 'var(--coral)' },
  { emoji: '🧩', name: 'Blanding', count: 400, color: 'rgba(245,224,49,0.08)', accent: 'var(--yellow)' },
]

export default function Categories() {
  return (
    <section id="kategorier" style={{
      padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 60px)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '56px' }}>
          <div className="reveal" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(245,224,49,0.06)',
            border: '1px solid rgba(245,224,49,0.15)',
            borderRadius: '100px',
            padding: '5px 14px',
            marginBottom: '20px',
          }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 700, color: 'var(--yellow)', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Kategorier
            </span>
          </div>
          <h2 className="reveal reveal-d1" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 900,
            letterSpacing: '-1px',
            lineHeight: 1.05,
            color: 'var(--text)',
            marginBottom: '16px',
          }}>
            Noe for enhver smak.
          </h2>
          <p className="reveal reveal-d2" style={{
            fontFamily: 'var(--font-body)',
            fontSize: '17px',
            color: 'var(--text-mid)',
            maxWidth: '500px',
            lineHeight: 1.65,
          }}>
            Fra geografi til gaming — vi har spørsmål som utfordrer både genier og quizdebutanter.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '14px',
        }}>
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.name}
              className={`reveal reveal-d${Math.min(i % 5 + 1, 5)}`}
              style={{
                background: cat.color,
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 'var(--radius)',
                padding: '22px 20px',
                cursor: 'pointer',
                transition: 'transform 0.2s, border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(-4px)'
                el.style.borderColor = 'rgba(255,255,255,0.14)'
                el.style.background = cat.color.replace('0.08)', '0.13)')
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(0)'
                el.style.borderColor = 'rgba(255,255,255,0.06)'
                el.style.background = cat.color
              }}
            >
              <div style={{ fontSize: '30px', marginBottom: '12px', display: 'block' }}>
                {cat.emoji}
              </div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: '6px',
                letterSpacing: '-0.3px',
              }}>
                {cat.name}
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                color: 'var(--text-dim)',
              }}>
                {cat.count}+ spørsmål
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
