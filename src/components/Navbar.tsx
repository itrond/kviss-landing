import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 clamp(20px, 5vw, 60px)',
      height: '64px',
      background: scrolled ? 'rgba(6, 8, 15, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      transition: 'background 0.3s, backdrop-filter 0.3s, border-color 0.3s',
    }}>
      <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <span style={{ fontSize: '22px' }}>🎯</span>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: '18px',
          color: 'var(--yellow)',
          letterSpacing: '-0.5px',
        }}>
          Kviss
        </span>
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <a href="#kategorier" style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          color: 'var(--text-mid)',
          textDecoration: 'none',
          fontWeight: 500,
          transition: 'color 0.2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-mid)')}
        >
          Kategorier
        </a>
        <a href="#hvordan" style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          color: 'var(--text-mid)',
          textDecoration: 'none',
          fontWeight: 500,
          transition: 'color 0.2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-mid)')}
        >
          Hvordan det fungerer
        </a>
        <a href="#spill" style={{
          fontFamily: 'var(--font-display)',
          fontSize: '13px',
          fontWeight: 700,
          color: 'var(--bg)',
          background: 'var(--yellow)',
          padding: '9px 20px',
          borderRadius: '8px',
          textDecoration: 'none',
          letterSpacing: '0.3px',
          transition: 'transform 0.15s, box-shadow 0.15s',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-1px)'
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(245, 224, 49, 0.3)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Spill nå
        </a>
      </div>
    </nav>
  )
}
