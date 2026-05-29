export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: 'clamp(32px, 4vw, 48px) clamp(20px, 5vw, 60px)',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '20px' }}>🎯</span>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: '16px',
            color: 'var(--yellow)',
            letterSpacing: '-0.4px',
          }}>
            Kviss
          </span>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            color: 'var(--text-dim)',
          }}>
            — norsk trivia for alle
          </span>
        </div>

        <nav style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
          {[
            { label: 'Kategorier', href: '/#kategorier' },
            { label: 'Kontakt', href: 'mailto:trond@itrond.net' },
            { label: 'Personvern', href: '/privacy' },
          ].map(({ label, href }) => (
            <a key={label} href={href} style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              color: 'var(--text-dim)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-mid)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}
            >
              {label}
            </a>
          ))}
        </nav>

        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          color: 'var(--text-dim)',
        }}>
          © {new Date().getFullYear()} Kviss. Laget med ❤️ i Norge.
        </div>
      </div>
    </footer>
  )
}
