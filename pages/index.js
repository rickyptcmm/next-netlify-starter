import Head from 'next/head'

export default function Resume() {
  return (
    <div className="resume-container">
      <Head>
        <title>Ricky Putra F. - HR Professional | Talent Acquisition & HR Compliance Specialist</title>
        <meta 
          name="description" 
          content="Certified HR Professional specializing in talent acquisition, employee lifecycle management, workforce compliance, and industrial-organizational psychology. Proven experience managing 800+ employees across FMCG, technology, and manufacturing sectors in Indonesia." 
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Ricky Putra F. - HR Professional" />
        <meta property="og:description" content="Expert in compliant, scalable, and human-centered HR operations." />
        <meta property="og:type" content="profile" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ricky Putra F." />
        {/* ATS-friendly keywords in meta (optional but helpful) */}
        <meta name="keywords" content="HR Professional, Talent Acquisition, HR Compliance, BPJS, PKWT, Industrial Psychology, Workforce Management, Employee Lifecycle, HR Outsourcing, Indonesia" />
      </Head>

      <header className="hero-section" data-aos="fade-up">
        <div className="hero-content-wrapper">
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
            <div className="cta-button" data-aos="zoom-in" data-aos-delay="200">
              <a 
                href="mailto:Rickyputraf@gmail.com?subject=HR Collaboration Inquiry"
                className="primary-button"
              >
                💼 Mari Kolaborasi — Saya Siap Membantu Tim Anda
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        
        {/* 🔑 KEY IMPACT */}
        <section className="section" data-aos="fade-up">
          <h3 className="section-title">Key Impact</h3>
          <div className="impact-grid">
            <div className="impact-card" data-aos="fade-up" data-aos-delay="100">
              <h4>800+ Employees Managed</h4>
              <p>Across FMCG, tech, and manufacturing clients with full HR compliance.</p>
            </div>
            <div className="impact-card" data-aos="fade-up" data-aos-delay="200">
              <h4>100% Regulatory Compliance</h4>
              <p>Zero labor disputes or BPJS penalties over 2+ years.</p>
            </div>
            <div className="impact-card" data-aos="fade-up" data-aos-delay="300">
              <h4>30+ HR SOPs Developed</h4>
              <p>Standardizing recruitment, onboarding, payroll, and disciplinary processes.</p>
            </div>
          </div>
        </section>

        {/* 📝 ABOUT */}
        <section className="section" data-aos="fade-up">
          <h3 className="section-title">Professional Summary</h3>
          <p className="section-content">
            Certified HR Professional with a Bachelor’s degree in Industrial and Organizational Psychology from Airlangga University. 
            Specialized in end-to-end <strong>employee lifecycle management</strong>, <strong>talent acquisition</strong>, 
            <strong>workforce compliance</strong> (BPJS, PKWT, Indonesian labor law), and <strong>HR process optimization</strong>. 
            Proven ability to scale HR operations for multinational clients in FMCG, technology, and manufacturing sectors. 
            Combines evidence-based psychological frameworks with operational HR excellence to drive retention, productivity, and regulatory adherence.
          </p>
        </section>

        {/* 💼 EXPERIENCE */}
        <section className="section" data-aos="fade-up">
          <h3 className="section-title">Professional Experience</h3>
          
          <div className="experience-item" data-aos="fade-left">
            <div className="experience-header">
              <h4 className="job-title">Relationship Officer</h4>
              <span className="job-period">Jan 2024 – Present</span>
            </div>
            <p className="company">PT Shelter Indonesia</p>
            <ul className="achievements">
              <li>Managed full-cycle HR operations for PT Bayer Indonesia (80 employees), achieving 100% compliance with Indonesian labor regulations and BPJS.</li>
              <li>Reduced time-to-hire by 25% through standardized recruitment workflows and competency-based interviews.</li>
              <li>Implemented coaching programs that improved team productivity by 15% within 4 months.</li>
            </ul>
          </div>

          <div className="experience-item" data-aos="fade-right">
            <div className="experience-header">
              <h4 className="job-title">Project Officer Area</h4>
              <span className="job-period">Dec 2023 – Dec 2024</span>
            </div>
            <p className="company">PT FORDE INDONESIA</p>
            <ul className="achievements">
              <li>Oversaw HR for PT Cosmo Technology (REALME) with 580+ employees; maintained 99.5% payroll accuracy.</li>
              <li>Reduced onboarding time from 14 to 7 days for PT Mengniu Dairy (YOYIC) via HR SOP standardization.</li>
              <li>Conducted 200+ competency-based interviews annually with 90% candidate-job fit accuracy.</li>
            </ul>
          </div>

          <div className="experience-item" data-aos="fade-left">
            <div className="experience-header">
              <h4 className="job-title">Human Resources Area</h4>
              <span className="job-period">Oct 2022 – Dec 2023</span>
            </div>
            <p className="company">PT CATUR MULIA MANDIRI</p>
            <ul className="achievements">
              <li>Managed 225+ employees for PT Multi Spunindo Jaya with zero labor disputes over 15 months.</li>
              <li>Automated BPJS registration, reducing processing time by 40%.</li>
              <li>Processed 100% PKWT agreements on schedule with full legal compliance.</li>
            </ul>
          </div>

          <div className="experience-item" data-aos="fade-right">
            <div className="experience-header">
              <h4 className="job-title">Human Resources Development Staff</h4>
              <span className="job-period">May 2022 – Sep 2022</span>
            </div>
            <p className="company">PT FIRST INDONESIA REFURBISH MANUFACTURING</p>
            <ul className="achievements">
              <li>Built HR function from scratch: created job descriptions, onboarding kits, and 10+ HR SOPs.</li>
              <li>Administered payroll and BPJS for 60+ employees with zero errors over 5 months.</li>
              <li>Designed structured interview framework based on industrial psychology principles.</li>
            </ul>
          </div>
        </section>

        {/* 🛠️ SKILLS — ATS OPTIMIZED */}
        <section className="section" data-aos="fade-up">
          <h3 className="section-title">Core Competencies</h3>
          <div className="skills-grid">
            <div className="skill-category" data-aos="fade-up">
              <h4 className="skill-title">Talent & Workforce Management</h4>
              <div className="skill-tags">
                <span className="skill-tag">Talent Acquisition</span>
                <span className="skill-tag">Employee Lifecycle Management</span>
                <span className="skill-tag">Onboarding & Offboarding</span>
                <span className="skill-tag">Performance Management</span>
                <span className="skill-tag">Employee Engagement</span>
                <span className="skill-tag">Workforce Scalability</span>
              </div>
            </div>
            <div className="skill-category" data-aos="fade-up" data-aos-delay="100">
              <h4 className="skill-title">HR Compliance & Operations</h4>
              <div className="skill-tags">
                <span className="skill-tag">Indonesian Labor & Employment Law</span>
                <span className="skill-tag">BPJS Ketenagakerjaan & Kesehatan</span>
                <span className="skill-tag">PKWT / PKWTT Processing</span>
                <span className="skill-tag">Payroll Administration</span>
                <span className="skill-tag">Disciplinary Actions</span>
                <span className="skill-tag">HR Outsourcing (HRO)</span>
              </div>
            </div>
            <div className="skill-category" data-aos="fade-up" data-aos-delay="200">
              <h4 className="skill-title">Organizational Psychology</h4>
              <div className="skill-tags">
                <span className="skill-tag">Industrial & Organizational Psychology</span>
                <span className="skill-tag">Competency-Based Interviewing</span>
                <span className="skill-tag">Employee Assessment</span>
                <span className="skill-tag">Organizational Behavior</span>
                <span className="skill-tag">Job Analysis</span>
                <span className="skill-tag">HR Process Standardization</span>
              </div>
            </div>
          </div>
        </section>

        {/* 🎓 EDUCATION */}
        <section className="section" data-aos="fade-up">
          <h3 className="section-title">Education</h3>
          <div className="education-item">
            <div className="education-header">
              <h4 className="degree">Bachelor of Psychology – Industrial & Organizational Psychology</h4>
            </div>
            <p className="university">Airlangga University</p>
            <p className="education-details">
              Focused on human behavior in organizational settings, performance motivation, and evidence-based HR interventions. 
              Capstone project on reducing turnover in manufacturing through psychological safety frameworks.
            </p>
          </div>
        </section>

        {/* 📜 CERTIFICATIONS */}
        <section className="section" data-aos="fade-up">
          <h3 className="section-title">Certifications</h3>
          <div className="certification-item">
            <h4 className="certification-title">HR Staff Certified (BNSP)</h4>
            <p className="certification-issuer">Badan Nasional Sertifikasi Profesi (BNSP)</p>
          </div>
          <div className="certification-item">
            <h4 className="certification-title">Competency-Based Interview Techniques in Recruitment</h4>
            <p className="certification-issuer">Mekari University</p>
          </div>
          <div className="certification-item">
            <h4 className="certification-title">Managing a Multigenerational Workforce</h4>
            <p className="certification-issuer">LinkedIn Learning</p>
          </div>
        </section>
      </main>

      {/* 📬 FINAL CTA */}
      <footer className="footer" data-aos="fade-up">
        <div className="footer-cta">
          <p>Open to HR leadership, strategic consulting, or partnership opportunities — ready to help your team scale with compliance and care.</p>
          <a 
            href="mailto:Rickyputraf@gmail.com?subject=HR Opportunity Discussion"
            className="footer-button"
          >
            📩 Message Me — I Respond Within 24 Hours
          </a>
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} Ricky Putra F. All rights reserved.</p>
      </footer>
    </div>
  )
}
