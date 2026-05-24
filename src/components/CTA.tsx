export default function CTA() {
  return (
    <section style={{
      padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 60px)',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        <div style={{
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(245,224,49,0.07) 0%, rgba(255,61,90,0.05) 50%, rgba(46,255,213,0.06) 100%)',
          border: '1px solid rgba(245,224,49,0.15)',
          borderRadius: '28px',
          padding: 'clamp(48px, 6vw, 80px) clamp(32px, 5vw, 72px)',
          overflow: 'hidden',
          textAlign: 'center',
        }}>
          {/* Background decorations */}
          <div style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,224,49,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-40px',
            left: '-40px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,61,90,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Decorative question marks */}
          {['❓', '🎯', '⭐', '🏆'].map((icon, i) => (
            <div key={i} style={{
              position: 'absolute',
              fontSize: '28px',
              opacity: 0.12,
              pointerEvents: 'none',
              top: `${[15, 70, 20, 60][i]}%`,
              left: `${[5, 8, 88, 92][i]}%`,
              transform: `rotate(${[-15, 10, 20, -10][i]}deg)`,
              animation: `float-${['a','b','c','b'][i]} ${[6,5,7,5.5][i]}s ease-in-out ${[0,1.5,0.8,2][i]}s infinite`,
            }}>
              {icon}
            </div>
          ))}

          <div className="reveal">
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(46,255,213,0.06)',
              border: '1px solid rgba(46,255,213,0.2)',
              borderRadius: '100px',
              padding: '5px 14px',
              marginBottom: '24px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--mint)', display: 'inline-block', boxShadow: '0 0 8px var(--mint)' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 700, color: 'var(--mint)', letterSpacing: '0.5px' }}>
                Spill nå — ingen registrering nødvendig
              </span>
            </div>
          </div>

          <h2 className="reveal reveal-d1" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 60px)',
            fontWeight: 900,
            color: 'var(--text)',
            letterSpacing: '-1.5px',
            lineHeight: 1.0,
            marginBottom: '20px',
          }}>
            Klar for kamp?
          </h2>
          <p className="reveal reveal-d2" style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(16px, 1.8vw, 19px)',
            color: 'var(--text-mid)',
            maxWidth: '440px',
            margin: '0 auto 40px',
            lineHeight: 1.65,
          }}>
            Hopp rett inn — ingen konto, ingen ventetid. Bare quiz.
          </p>

          <div className="reveal reveal-d3" style={{
            display: 'flex',
            gap: '14px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <a href="#" style={{
              fontFamily: 'var(--font-display)',
              fontSize: '15px',
              fontWeight: 700,
              color: 'var(--bg)',
              background: 'var(--yellow)',
              padding: '16px 40px',
              borderRadius: '12px',
              textDecoration: 'none',
              letterSpacing: '0.2px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.01)'
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(245,224,49,0.4)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              🎮 Start quiz nå
            </a>
            <a href="#kategorier" style={{
              fontFamily: 'var(--font-display)',
              fontSize: '15px',
              fontWeight: 700,
              color: 'var(--text-mid)',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.12)',
              padding: '16px 32px',
              borderRadius: '12px',
              textDecoration: 'none',
              transition: 'color 0.2s, border-color 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--text)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-mid)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
              }}
            >
              Utforsk kategorier
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
