import Head from 'next/head'

export default function Resume() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <Head>
        <title>Ricky Putra F. - HR Professional</title>
        <meta name="description" content="HR Professional specializing in talent acquisition, compliance, and organizational psychology. Managed 800+ employees across FMCG, tech, and manufacturing sectors." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Ricky Putra F.</h1>
        <h2>HR Professional & Relationship Officer</h2>
        <p>
          <a href="mailto:Rickyputraf@gmail.com">Rickyputraf@gmail.com</a> • 
          <a href="https://linkedin.com/in/ricky-putra-febrianto/" target="_blank" rel="noopener noreferrer">LinkedIn</a> • 
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </p>
        <p>
          <a 
            href="mailto:Rickyputraf@gmail.com?subject=HR Collaboration Inquiry"
            style={{ display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1rem', background: '#0d6efd', color: 'white', textDecoration: 'none', borderRadius: '4px' }}
          >
            💼 Mari Kolaborasi — Saya Siap Membantu Tim Anda
          </a>
        </p>
      </header>

      <main>
        <section>
          <h3>Key Impact</h3>
          <ul>
            <li>Managed 800+ employees across FMCG, tech, and manufacturing clients</li>
            <li>100% regulatory compliance — zero labor disputes or BPJS penalties</li>
            <li>Developed 30+ HR SOPs for recruitment, onboarding, and payroll</li>
          </ul>
        </section>

        <section>
          <h3>About</h3>
          <p>
            Lulusan Psikologi dari Universitas Airlangga dengan spesialisasi Psikologi Industri dan Organisasi. 
            Berpengalaman dalam <strong>talent acquisition</strong>, <strong>HR compliance</strong>, 
            dan <strong>manajemen siklus karyawan</strong>. 
            Saat ini sebagai Relationship Officer di PT Shelter Indonesia.
          </p>
        </section>

        <section>
          <h3>Experience</h3>
          <div>
            <h4>Relationship Officer — PT Shelter Indonesia</h4>
            <p>Jan 2024 – Present</p>
            <ul>
              <li>Managed HR for PT Bayer Indonesia (80 employees), 100% compliant</li>
              <li>Reduced time-to-hire by 25% via standardized recruitment</li>
            </ul>
          </div>
        </section>

        <section>
          <h3>Education</h3>
          <p><strong>Sarjana Psikologi</strong> – Universitas Airlangga</p>
        </section>
      </main>

      <footer style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
        <p>&copy; {new Date().getFullYear()} Ricky Putra F. All rights reserved.</p>
      </footer>
    </div>
  )
}
