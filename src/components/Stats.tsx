import { useEffect, useRef, useState } from 'react'

function useCountUp(target: number, duration = 1800, start = false) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (ts: number) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])

  return value
}

function StatCard({ stat }: { stat: { value: number; suffix: string; label: string; sub: string; color: string } }) {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const count = useCountUp(stat.value, 1600, started)

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true) }, { threshold: 0.3 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: '36px 32px',
      textAlign: 'center',
      transition: 'transform 0.2s, border-color 0.2s',
    }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = 'translateY(-4px)'
        el.style.borderColor = `${stat.color}30`
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = 'translateY(0)'
        el.style.borderColor = 'var(--border)'
      }}
    >
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(36px, 4vw, 52px)',
        fontWeight: 900,
        color: stat.color,
        lineHeight: 1,
        letterSpacing: '-1px',
        marginBottom: '8px',
      }}>
        {count.toLocaleString('nb-NO')}{stat.suffix}
      </div>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '14px',
        fontWeight: 700,
        color: 'var(--text)',
        marginBottom: '6px',
        letterSpacing: '-0.3px',
      }}>
        {stat.label}
      </div>
      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: '13px',
        color: 'var(--text-dim)',
      }}>
        {stat.sub}
      </div>
    </div>
  )
}

const STATS = [
  { value: 2800, suffix: '+', label: 'Spørsmål', sub: 'og nye kommer daglig', color: 'var(--yellow)' },
  { value: 12000, suffix: '+', label: 'Aktive spillere', sub: 'og voksende', color: 'var(--coral)' },
  { value: 15, suffix: '', label: 'Kategorier', sub: 'fra sport til vitenskap', color: 'var(--mint)' },
  { value: 100, suffix: '%', label: 'Gratis', sub: 'alltid og for alle', color: 'var(--yellow)' },
]

export default function Stats() {
  return (
    <section style={{
      padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 60px)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 className="reveal" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 900,
            letterSpacing: '-1px',
            lineHeight: 1.05,
            color: 'var(--text)',
            marginBottom: '14px',
          }}>
            Tall som snakker for seg.
          </h2>
          <p className="reveal reveal-d1" style={{
            fontFamily: 'var(--font-body)',
            fontSize: '17px',
            color: 'var(--text-mid)',
            maxWidth: '420px',
            margin: '0 auto',
            lineHeight: 1.65,
          }}>
            Kviss vokser for hver dag. Se selv hva du er en del av.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
        }}>
          {STATS.map((stat, i) => (
            <div key={stat.label} className={`reveal reveal-d${i + 1}`}>
              <StatCard stat={stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
