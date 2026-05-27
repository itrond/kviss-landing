import { useEffect, useRef, useState } from 'react'

const QUIZ_CARDS = [
  {
    q: 'Hva heter Norges høyeste fjell?',
    opts: ['Galdhøpiggen', 'Glittertind', 'Snetinden', 'Jotunheimen'],
    correct: 0,
    category: 'Geografi',
    rot: '-6deg',
    anim: 'float-a',
    delay: '0s',
    top: '12%',
    right: '-20px',
  },
  {
    q: 'Hvilken by arrangerte OL i 1952?',
    opts: ['Bergen', 'Tromsø', 'Oslo', 'Stavanger'],
    correct: 2,
    category: 'Sport & Historie',
    rot: '5deg',
    anim: 'float-b',
    delay: '1.2s',
    top: '48%',
    right: '-30px',
  },
  {
    q: 'Hva kalles Norges nasjonaldag?',
    opts: ['Frihetsdag', '17. mai', 'Grunnlovsdag', 'Frigjøringsdag'],
    correct: 2,
    category: 'Kultur',
    rot: '-3deg',
    anim: 'float-c',
    delay: '0.6s',
    bottom: '10%',
    right: '20px',
  },
]

function QuizCard({ card }: { card: typeof QUIZ_CARDS[0] }) {
  const [revealed, setRevealed] = useState(false)
  const posStyle: React.CSSProperties = {
    position: 'absolute',
    top: card.top,
    right: card.right,
    bottom: (card as any).bottom,
    '--r': card.rot,
    animation: `${card.anim} 5s ease-in-out ${card.delay} infinite`,
  } as React.CSSProperties

  return (
    <div
      style={posStyle}
      onClick={() => setRevealed(r => !r)}
    >
      <div style={{
        width: 'clamp(220px, 28vw, 290px)',
        background: 'var(--bg-card)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 'var(--radius-lg)',
        padding: '18px',
        cursor: 'pointer',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        transition: 'box-shadow 0.3s',
        userSelect: 'none',
      }}
        onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 24px 70px rgba(0,0,0,0.5), 0 0 0 1px rgba(245,224,49,0.12)')}
        onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)')}
      >
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: 'rgba(245,224,49,0.08)',
          border: '1px solid rgba(245,224,49,0.15)',
          borderRadius: '6px',
          padding: '3px 10px',
          marginBottom: '12px',
        }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, color: 'var(--yellow)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            {card.category}
          </span>
        </div>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          fontWeight: 500,
          color: 'var(--text)',
          lineHeight: 1.5,
          marginBottom: '14px',
        }}>
          {card.q}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {card.opts.slice(0, 4).map((opt, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '7px 10px',
              borderRadius: '8px',
              border: `1px solid ${revealed && i === card.correct ? 'rgba(46,255,213,0.4)' : 'rgba(255,255,255,0.06)'}`,
              background: revealed && i === card.correct ? 'rgba(46,255,213,0.06)' : 'transparent',
              transition: 'all 0.25s',
            }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '10px',
                fontWeight: 700,
                color: revealed && i === card.correct ? 'var(--mint)' : 'var(--text-dim)',
                minWidth: '16px',
              }}>
                {String.fromCharCode(65 + i)}
              </span>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                color: revealed && i === card.correct ? 'var(--mint)' : 'var(--text-mid)',
              }}>
                {opt}
              </span>
            </div>
          ))}
        </div>
        {!revealed && (
          <p style={{ fontSize: '11px', color: 'var(--text-dim)', marginTop: '10px', textAlign: 'center' }}>
            Trykk for svar
          </p>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!titleRef.current) return
    titleRef.current.style.animation = 'slide-up 0.8s cubic-bezier(0.16,1,0.3,1) both'
  }, [])

  return (
    <section id="spill" style={{
      position: 'relative',
      minHeight: '100svh',
      display: 'flex',
      alignItems: 'center',
      padding: 'clamp(80px, 10vw, 120px) clamp(20px, 5vw, 60px) 60px',
      overflow: 'hidden',
    }}>
      {/* Radial glow BG */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '30%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(245,224,49,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '25%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255,61,90,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Grid pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px', flex: 1 }}>
        {/* Live badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(46,255,213,0.06)',
          border: '1px solid rgba(46,255,213,0.2)',
          borderRadius: '100px',
          padding: '6px 14px',
          marginBottom: '32px',
          animation: 'slide-up 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s both',
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: 'var(--mint)',
            boxShadow: '0 0 8px var(--mint)',
            display: 'inline-block',
            animation: 'glow-pulse 2s ease-in-out infinite',
          }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600, color: 'var(--mint)' }}>
            Spilles nå — 1 248 aktive spillere
          </span>
        </div>

        <h1 ref={titleRef} style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(52px, 8vw, 100px)',
          fontWeight: 900,
          lineHeight: 0.95,
          letterSpacing: '-2px',
          marginBottom: '8px',
          animation: 'slide-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s both',
          opacity: 0,
        }}>
          <span style={{ color: 'var(--yellow)', display: 'block', animation: 'glow-pulse 4s ease-in-out 1s infinite' }}>
            Kviss.
          </span>
        </h1>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(24px, 4vw, 44px)',
          fontWeight: 700,
          color: 'var(--text)',
          lineHeight: 1.1,
          letterSpacing: '-1px',
          marginBottom: '24px',
          animation: 'slide-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.25s both',
          opacity: 0,
        }}>
          Quiz med venner.<br />
          <span style={{ color: 'var(--text-mid)' }}>Alltid morsomt.</span>
        </h2>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(16px, 1.8vw, 19px)',
          color: 'var(--text-mid)',
          maxWidth: '480px',
          lineHeight: 1.65,
          marginBottom: '40px',
          animation: 'slide-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s both',
          opacity: 0,
        }}>
          Hundrevis av norske triviaspørsmål i mange kategorier. Spill alene, mot venner eller i grupper — på mobil eller PC.
        </p>

        <div style={{
          display: 'flex',
          gap: '14px',
          flexWrap: 'wrap',
          animation: 'slide-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.45s both',
          opacity: 0,
        }}>
          <a href="#" style={{
            fontFamily: 'var(--font-display)',
            fontSize: '14px',
            fontWeight: 700,
            color: 'var(--bg)',
            background: 'var(--yellow)',
            padding: '14px 32px',
            borderRadius: '10px',
            textDecoration: 'none',
            letterSpacing: '0.3px',
            transition: 'transform 0.15s, box-shadow 0.15s',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(245,224,49,0.35)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            🎮 Spill nå — gratis
          </a>
          <a href="#kategorier" style={{
            fontFamily: 'var(--font-display)',
            fontSize: '14px',
            fontWeight: 700,
            color: 'var(--text)',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '14px 28px',
            borderRadius: '10px',
            textDecoration: 'none',
            transition: 'background 0.2s, border-color 0.2s',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
            }}
          >
            Se kategorier ↓
          </a>
        </div>

        {/* Social proof avatars */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginTop: '48px',
          animation: 'slide-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.55s both',
          opacity: 0,
        }}>
          <div style={{ display: 'flex', marginRight: '4px' }}>
            {['🧑‍💻', '👩‍🦰', '👨‍🦱', '👩', '🧔'].map((emoji, i) => (
              <div key={i} style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: ['#1A2540', '#1E2A40', '#1B2538', '#1C2845', '#1A2640'][i],
                border: '2px solid var(--bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                marginLeft: i > 0 ? '-8px' : '0',
              }}>
                {emoji}
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>
              Bli med 12 000+ spillere
            </div>
            <div style={{ display: 'flex', gap: '2px', marginTop: '2px' }}>
              {[1,2,3,4,5].map(i => (
                <span key={i} style={{ color: 'var(--yellow)', fontSize: '11px' }}>★</span>
              ))}
              <span style={{ fontSize: '11px', color: 'var(--text-dim)', marginLeft: '4px' }}>
                — anbefalt av norske lærere
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating cards (desktop only) */}
      <div style={{
        position: 'absolute',
        right: 'clamp(20px, 4vw, 60px)',
        top: 0,
        bottom: 0,
        width: 'clamp(260px, 30vw, 320px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <div style={{ position: 'relative', height: '600px' }}>
          {QUIZ_CARDS.map((card, i) => <QuizCard key={i} card={card} />)}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        animation: 'slide-up 0.7s cubic-bezier(0.16,1,0.3,1) 1s both',
        opacity: 0,
      }}>
        <span style={{ fontSize: '11px', color: 'var(--text-dim)', letterSpacing: '1.5px', textTransform: 'uppercase', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
          Scroll
        </span>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)',
        }} />
      </div>
    </section>
  )
}
