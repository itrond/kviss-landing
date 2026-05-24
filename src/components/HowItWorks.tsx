const STEPS = [
  {
    num: '01',
    title: 'Velg kategori',
    desc: 'Bla gjennom dusinvis av kategorier og finn det som passer deg — eller ta en tilfeldig runde.',
    icon: '🎯',
    color: 'var(--yellow)',
  },
  {
    num: '02',
    title: 'Svar på spørsmål',
    desc: 'Tenk raskt, velg riktig. Hvert spørsmål har fire svaralternativer og tidsbegrensning.',
    icon: '⚡',
    color: 'var(--coral)',
  },
  {
    num: '03',
    title: 'Sammenlign resultater',
    desc: 'Se hvem som er kvisskongen blant vennene dine. Del poengsummen og utfordre andre.',
    icon: '🏆',
    color: 'var(--mint)',
  },
]

export default function HowItWorks() {
  return (
    <section id="hvordan" style={{
      padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 60px)',
      background: 'linear-gradient(to bottom, transparent, rgba(13,18,32,0.4), transparent)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '56px' }}>
          <div className="reveal" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,61,90,0.06)',
            border: '1px solid rgba(255,61,90,0.18)',
            borderRadius: '100px',
            padding: '5px 14px',
            marginBottom: '20px',
          }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 700, color: 'var(--coral)', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Slik fungerer det
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
            Fra null til quiz<br />på tre sekunder.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`reveal reveal-d${i + 1}`}
              style={{
                position: 'relative',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '36px 32px',
                overflow: 'hidden',
                transition: 'transform 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(-4px)'
                el.style.borderColor = 'rgba(255,255,255,0.1)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(0)'
                el.style.borderColor = 'var(--border)'
              }}
            >
              {/* Big number bg */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                right: '20px',
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: '120px',
                color: step.color,
                opacity: 0.05,
                lineHeight: 1,
                pointerEvents: 'none',
                userSelect: 'none',
              }}>
                {step.num}
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '24px',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: `${step.color}15`,
                  border: `1px solid ${step.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                }}>
                  {step.icon}
                </div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: step.color,
                  letterSpacing: '1px',
                }}>
                  STEG {step.num}
                </div>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20px',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: '12px',
                letterSpacing: '-0.5px',
              }}>
                {step.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--text-mid)',
                lineHeight: 1.65,
              }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
