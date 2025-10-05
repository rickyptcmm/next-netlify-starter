import Head from 'next/head'

export default function Resume() {
  return (
    <div className="resume-container">
      <Head>
        <title>Ricky Putra F. - HR Professional | Talent & Compliance Specialist</title>
        <meta 
          name="description" 
          content="HR Professional with expertise in talent acquisition, workforce management, HR compliance, and industrial psychology. Proven track record managing 800+ employees across FMCG, tech, and manufacturing sectors." 
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Ricky Putra F. - HR Professional" />
        <meta property="og:description" content="Specializing in compliant, scalable, and human-centered HR solutions." />
        <meta property="og:image" content="/images/profile.jpg" />
      </Head>

      <header className="hero-section">
        <div className="hero-content-wrapper">
          <div className="profile-photo">
            <img 
              src="/images/profile.jpg" 
              alt="Ricky Putra F. - HR Professional specializing in talent acquisition and HR compliance"
              className="profile-img"
            />
          </div>

          <div className="hero-text">
            <h1 className="name">Ricky Putra F.</h1>
            <h2 className="title">HR Professional & Relationship Officer</h2>
            <p className="tagline">
              Membantu perusahaan membangun tim yang kompeten, compliant, dan berkinerja tinggi melalui pendekatan HR berbasis psikologi organisasi.
            </p>
            <div className="contact-info">
              <a 
                href="mailto:Rickyputraf@gmail.com" 
                className="contact-link"
                aria-label="Email Ricky Putra F."
              >
                Rickyputraf@gmail.com
              </a>
              <span className="separator">•</span>
              <a 
                href="https://linkedin.com/in/ricky-putra-febrianto/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
                aria-label="LinkedIn profile"
              >
                LinkedIn
              </a>
              <span className="separator">•</span>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
                aria-label="Download professional resume"
              >
                Download Resume
              </a>
            </div>
            <div className="cta-button">
              <a 
                href="mailto:Rickyputraf@gmail.com?subject=HR Collaboration Inquiry"
                className="primary-button"
              >
                Let’s Connect
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        
        {/* 🔑 KEY IMPACT SECTION */}
        <section className="section">
          <h3 className="section-title">Key Impact</h3>
          <div className="impact-grid">
            <div className="impact-card">
              <h4>800+ Employees Managed</h4>
              <p>Across FMCG, tech, and manufacturing clients with full HR compliance.</p>
            </div>
            <div className="impact-card">
              <h4>100% Regulatory Compliance</h4>
              <p>Zero labor disputes or BPJS penalties over 2+ years of operations.</p>
            </div>
            <div className="impact-card">
              <h4>30+ HR SOPs Developed</h4>
              <p>Standardizing recruitment, onboarding, payroll, and disciplinary processes.</p>
            </div>
          </div>
        </section>

        {/* 📝 ABOUT */}
        <section className="section">
          <h3 className="section-title">About</h3>
          <p className="section-content">
            Lulusan Psikologi dari Universitas Airlangga dengan spesialisasi Psikologi Industri dan Organisasi. 
            Berpengalaman sebagai praktisi HR dalam <strong>talent acquisition</strong>, <strong>manajemen siklus karyawan</strong>, 
            <strong>kepatuhan regulasi ketenagakerjaan</strong>, dan <strong>pengembangan organisasi</strong>. 
            Menggabungkan prinsip psikologi dengan praktik HR operasional untuk menciptakan lingkungan kerja yang produktif, compliant, dan berkelanjutan. 
            Saat ini menjabat sebagai Relationship Officer di PT Shelter Indonesia, mengelola operasional HR penuh untuk klien multinasional.
          </p>
        </section>

        {/* 💼 EXPERIENCE — DIPERKUAT DENGAN METRIK */}
        <section className="section">
          <h3 className="section-title">Professional Experience</h3>
          
          <div className="experience-item">
            <div className="experience-header">
              <h4 className="job-title">Relationship Officer</h4>
              <span className="job-period">Jan 2024 – Present</span>
            </div>
            <p className="company">PT Shelter Indonesia</p>
            <ul className="achievements">
              <li>Mengelola operasional HR untuk klien PT Bayer Indonesia (80 karyawan), mencapai 100% kepatuhan terhadap UU Ketenagakerjaan dan BPJS.</li>
              <li>Mengurangi waktu rekrutmen hingga 25% melalui alur kerja terstandar dan wawancara berbasis kompetensi.</li>
              <li>Menerapkan program coaching yang meningkatkan produktivitas tim sebesar 15% dalam 4 bulan.</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h4 className="job-title">Project Officer Area</h4>
              <span className="job-period">Dec 2023 – Dec 2024</span>
            </div>
            <p className="company">PT FORDE INDONESIA</p>
            <ul className="achievements">
              <li>Mengawasi HR untuk PT Cosmo Technology (REALME) dengan 580+ karyawan, menjaga akurasi payroll 99,5%.</li>
              <li>Mengelola HR penuh untuk PT Mengniu Dairy (YOYIC), memangkas waktu onboarding dari 14 menjadi 7 hari.</li>
              <li>Menjalankan 200+ wawancara berbasis kompetensi per tahun dengan tingkat kecocokan kandidat 90%.</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h4 className="job-title">Human Resources Area</h4>
              <span className="job-period">Oct 2022 – Dec 2023</span>
            </div>
            <p className="company">PT CATUR MULIA MANDIRI</p>
            <ul className="achievements">
              <li>Mengelola 225+ karyawan untuk PT Multi Spunindo Jaya, tanpa satu pun sengketa tenaga kerja selama 15 bulan.</li>
              <li>Mengotomatisasi proses pendaftaran BPJS, mengurangi waktu pemrosesan hingga 40%.</li>
              <li>Memproses 100% perjanjian PKWT tepat waktu dengan kepatuhan hukum penuh.</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h4 className="job-title">Human Resources Development Staff</h4>
              <span className="job-period">May 2022 – Sep 2022</span>
            </div>
            <p className="company">PT FIRST INDONESIA REFURBISH MANUFACTURING</p>
            <ul className="achievements">
              <li>Membangun divisi HR dari nol: membuat SOP, deskripsi pekerjaan, dan paket onboarding untuk 60+ karyawan.</li>
              <li>Mengelola payroll dan BPJS untuk seluruh staf tanpa kesalahan selama 5 bulan berturut-turut.</li>
              <li>Merancang kerangka wawancara terstruktur berbasis prinsip psikologi industri.</li>
            </ul>
          </div>
        </section>

        {/* 🛠️ SKILLS — OPTIMIZED FOR ATS */}
        <section className="section">
          <h3 className="section-title">Core Competencies</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4 className="skill-title">Talent & Workforce Management</h4>
              <div className="skill-tags">
                <span className="skill-tag">Talent Acquisition</span>
                <span className="skill-tag">Workforce Planning</span>
                <span className="skill-tag">Onboarding & Offboarding</span>
                <span className="skill-tag">Performance Management</span>
                <span className="skill-tag">Employee Engagement</span>
                <span className="skill-tag">Multigenerational Workforce</span>
              </div>
            </div>
            <div className="skill-category">
              <h4 className="skill-title">HR Compliance & Operations</h4>
              <div className="skill-tags">
                <span className="skill-tag">Labor & Employment Law</span>
                <span className="skill-tag">BPJS Ketenagakerjaan & Kesehatan</span>
                <span className="skill-tag">PKWT / PKWTT Processing</span>
                <span className="skill-tag">Payroll Administration</span>
                <span className="skill-tag">Disciplinary Actions</span>
                <span className="skill-tag">HR Outsourcing (HRO)</span>
              </div>
            </div>
            <div className="skill-category">
              <h4 className="skill-title">Organizational Psychology</h4>
              <div className="skill-tags">
                <span className="skill-tag">Industrial & Organizational Psychology</span>
                <span className="skill-tag">Competency-Based Interviewing</span>
                <span className="skill-tag">Employee Assessment</span>
                <span className="skill-tag">Organizational Behavior</span>
                <span className="skill-tag">Job Analysis</span>
                <span className="skill-tag">SOP Development</span>
              </div>
            </div>
          </div>
        </section>

        {/* 🎓 EDUCATION */}
        <section className="section">
          <h3 className="section-title">Education</h3>
          <div className="education-item">
            <div className="education-header">
              <h4 className="degree">Sarjana Psikologi – Psikologi Industri & Organisasi</h4>
            </div>
            <p className="university">Universitas Airlangga</p>
            <p className="education-details">
              Fokus pada perilaku manusia dalam konteks organisasi, motivasi kinerja, 
              dan intervensi HR berbasis bukti. Proyek akhir tentang pengurangan turnover di sektor manufaktur melalui kerangka psychological safety.
            </p>
          </div>
        </section>

        {/* 📜 CERTIFICATIONS */}
        <section className="section">
          <h3 className="section-title">Certifications</h3>
          <div className="certification-item">
            <h4 className="certification-title">HR Staff Certified (BNSP)</h4>
            <p className="certification-issuer">Badan Nasional Sertifikasi Profesi</p>
          </div>
          <div className="certification-item">
            <h4 className="certification-title">Teknik Competency-Based Interview dalam Proses Rekrutmen</h4>
            <p className="certification-issuer">Mekari University</p>
          </div>
          <div className="certification-item">
            <h4 className="certification-title">Managing a Multigenerational Workforce</h4>
            <p className="certification-issuer">LinkedIn Learning</p>
          </div>
        </section>
      </main>

      {/* 📬 FINAL CTA */}
      <footer className="footer">
        <div className="footer-cta">
          <p>Terbuka untuk peluang kepemimpinan HR, konsultasi, atau kolaborasi strategis.</p>
          <a 
            href="mailto:Rickyputraf@gmail.com?subject=HR Opportunity Discussion"
            className="footer-button"
          >
            Hubungi Saya
          </a>
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} Ricky Putra F. All rights reserved.</p>
      </footer>
    </div>
  )
}
