import Navbar from '../components/Navbar'

const s = {
  page: {
    maxWidth: '720px',
    margin: '0 auto',
    padding: 'clamp(100px, 12vw, 140px) clamp(20px, 5vw, 48px) 80px',
  } as React.CSSProperties,
  eyebrow: {
    fontFamily: 'var(--font-display)',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '2px',
    color: 'var(--mint)',
    textTransform: 'uppercase' as const,
    marginBottom: '16px',
  },
  h1: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(28px, 5vw, 42px)',
    fontWeight: 900,
    color: 'var(--text)',
    letterSpacing: '-0.8px',
    lineHeight: 1.15,
    marginBottom: '12px',
  },
  updated: {
    fontFamily: 'var(--font-body)',
    fontSize: '13px',
    color: 'var(--text-dim)',
    marginBottom: '56px',
  },
  section: {
    marginBottom: '48px',
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontSize: '15px',
    fontWeight: 800,
    color: 'var(--yellow)',
    letterSpacing: '0.2px',
    marginBottom: '12px',
  },
  p: {
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    color: 'var(--text-mid)',
    lineHeight: 1.75,
    marginBottom: '12px',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid var(--border)',
    margin: '0 0 48px',
  },
  contactBox: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    padding: '24px 28px',
    marginTop: '8px',
  },
  contactLabel: {
    fontFamily: 'var(--font-body)',
    fontSize: '13px',
    color: 'var(--text-dim)',
    marginBottom: '4px',
  },
  contactValue: {
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    color: 'var(--text)',
    fontWeight: 600,
  },
  link: {
    color: 'var(--mint)',
    textDecoration: 'none',
  },
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={s.section}>
      <h2 style={s.h2}>{title}</h2>
      {children}
    </div>
  )
}

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main style={s.page}>
        <p style={s.eyebrow}>Personvern</p>
        <h1 style={s.h1}>Personvernerklæring</h1>
        <p style={s.updated}>Sist oppdatert: 30. mai 2026</p>

        <hr style={s.divider} />

        <Section title="Behandlingsansvarlig">
          <p style={s.p}>
            Kviss er utviklet og driftet av Agitera AS. Har du spørsmål om
            personvern, ta kontakt på{' '}
            <a href="mailto:firma@agitera.no" style={s.link}>firma@agitera.no</a>.
          </p>
          <div style={s.contactBox}>
            <p style={s.contactLabel}>Selskap</p>
            <p style={s.contactValue}>Agitera AS</p>
            <p style={{ ...s.contactLabel, marginTop: '16px' }}>E-post</p>
            <a href="mailto:firma@agitera.no" style={{ ...s.contactValue, ...s.link }}>
              firma@agitera.no
            </a>
          </div>
        </Section>

        <Section title="Hvilke opplysninger samler vi inn?">
          <p style={s.p}>
            Kviss samler inn et minimum av opplysninger for at appen skal fungere:
          </p>
          <p style={s.p}>
            <strong style={{ color: 'var(--text)' }}>Brukerprofil.</strong>{' '}
            Når du starter appen, opprettes det en anonym brukerkonto via Supabase.
            Du velger selv et kallenavn som lagres i denne kontoen. Vi samler ikke
            inn navn, e-postadresse eller telefonnummer med mindre du oppgir det
            frivillig.
          </p>
          <p style={s.p}>
            <strong style={{ color: 'var(--text)' }}>Poengsummer og streak.</strong>{' '}
            Resultatene dine lagres i vår database slik at du kan se historikk og
            konkurransestilling. Daglige scores lagres også lokalt på enheten.
          </p>
          <p style={s.p}>
            <strong style={{ color: 'var(--text)' }}>Posisjon.</strong>{' '}
            Kviss ber aldri om tilgang til enhetens posisjon og samler ikke inn GPS-data.
          </p>
        </Section>

        <Section title="Push-varsler">
          <p style={s.p}>
            Hvis du godtar push-varsler, lagres en unik enhetstoken i vår database.
            Tokenet brukes utelukkende til å sende deg daglige påminnelser om kvissen
            og informasjon om nye innhold. Du kan når som helst trekke tilbake
            tillatelsen i enhetens innstillinger, og tokenet slettes da automatisk.
          </p>
        </Section>

        <Section title="Abonnement og kjøp">
          <p style={s.p}>
            Betalingsinformasjon håndteres av Apple App Store eller Google Play og
            deles aldri med oss. Vi bruker RevenueCat til å verifisere abonnementsstatus.
            RevenueCat mottar en anonym kjøper-ID og abonnementstype — ingen
            kortdetaljer eller personlig identifikasjon.
          </p>
        </Section>

        <Section title="Deling av opplysninger">
          <p style={s.p}>
            Vi selger ikke og deler ikke personopplysningene dine med tredjeparter,
            med unntak av de underleverandørene som er nødvendige for å drive
            tjenesten:
          </p>
          <p style={s.p}>
            <strong style={{ color: 'var(--text)' }}>Supabase</strong> — database og
            autentisering (EU-infrastruktur).{' '}
            <strong style={{ color: 'var(--text)' }}>RevenueCat</strong> — håndtering
            av abonnementsstatus.
          </p>
          <p style={s.p}>
            Alle nettverkskall skjer over kryptert forbindelse (HTTPS).
          </p>
        </Section>

        <Section title="Annonsering og sporing">
          <p style={s.p}>
            Kviss inneholder ingen reklame og bruker ikke analyse- eller
            reklamenettverksverktøy som følger deg på tvers av apper eller nettsteder.
          </p>
        </Section>

        <Section title="Lagring og sletting">
          <p style={s.p}>
            Opplysningene lagres så lenge du har en aktiv konto. Avinstallerer du
            appen, slettes lokalt lagrede data. Ønsker du å slette kontoen og alle
            tilknyttede data, send en e-post til{' '}
            <a href="mailto:firma@agitera.no" style={s.link}>firma@agitera.no</a> så
            behandler vi forespørselen innen 30 dager.
          </p>
        </Section>

        <Section title="Dine rettigheter (GDPR)">
          <p style={s.p}>
            Som registrert har du rett til innsyn i, korrigering av og sletting av
            opplysningene vi har om deg. Du kan også protestere mot behandlingen eller
            be om dataportabilitet. Ta kontakt på{' '}
            <a href="mailto:firma@agitera.no" style={s.link}>firma@agitera.no</a> for
            å benytte deg av disse rettighetene.
          </p>
          <p style={s.p}>
            Du har også rett til å klage til{' '}
            <a
              href="https://www.datatilsynet.no"
              target="_blank"
              rel="noopener noreferrer"
              style={s.link}
            >
              Datatilsynet
            </a>
            {' '}dersom du mener behandlingen av dine personopplysninger er i strid
            med personvernregelverket.
          </p>
        </Section>

        <Section title="Endringer i denne erklæringen">
          <p style={s.p}>
            Vi kan oppdatere denne erklæringen ved behov. Vesentlige endringer varsles
            i appen. Datoen øverst på siden viser når erklæringen sist ble revidert.
          </p>
        </Section>

        <div style={{ marginTop: '16px', textAlign: 'center' as const }}>
          <a href="/" style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            color: 'var(--text-dim)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-mid)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}
          >
            ← Tilbake til forsiden
          </a>
        </div>
      </main>
    </>
  )
}
