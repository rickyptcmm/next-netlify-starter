import Head from 'next/head'

export default function Resume() {
  return (
    <div className="resume-container">
      <Head>
        <title>Ricky Putra F. - HR Professional</title>
        <meta name="description" content="HR Professional specializing in recruitment, employee administration, and organizational psychology." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="hero-section">
        <div className="hero-content">
          <h1 className="name">Ricky Putra F.</h1>
          <h2 className="title">HR Professional & Relationship Officer</h2>
          <p className="tagline">Specializing in recruitment, workforce management, and organizational psychology</p>
          <div className="contact-info">
            <a href="mailto:Rickyputraf@gmail.com" className="contact-link">Rickyputraf@gmail.com</a>
            <span className="separator">•</span>
            <a href="tel:+6285606668161" className="contact-link">+62 856-0666-8161</a>
            <span className="separator">•</span>
            <a href="https://linkedin.com/in/ricky-putra-febrianto/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
            <span className="separator">•</span>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="contact-link">Download Resume</a>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="section">
          <h3 className="section-title">About</h3>
          <p className="section-content">
            Bachelor of Psychology from Airlangga University with a specialization in Industrial and Organizational Psychology. 
            Experienced HR professional with expertise in workforce management, employee recruitment and selection, payroll administration, 
            and organizational behavior. Currently serving as a Relationship Officer at PT Shelter Indonesia, managing client relationships 
            and overseeing comprehensive HR operations for multiple companies.
          </p>
        </section>

        <section className="section">
          <h3 className="section-title">Experience</h3>
          <div className="experience-item">
            <div className="experience-header">
              <h4 className="job-title">Relationship Officer</h4>
              <span className="job-period">Jan 2025 - Present</span>
            </div>
            <p className="company">PT Shelter Indonesia</p>
            <ul className="achievements">
              <li>Managing workforce operations for client PT Bayer Indonesia with 80 manpower</li>
              <li>Responsible for recruitment, coaching, employee administration, and payroll</li>
              <li>Taking disciplinary actions and ensuring compliance with employment regulations</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h4 className="job-title">Project Officer Area</h4>
              <span className="job-period">Dec 2023 - Dec 2024</span>
            </div>
            <p className="company">PT FORDE INDONESIA</p>
            <ul className="achievements">
              <li>Managed workforce for PT Mengniu Dairy Indonesia (YOYIC) - 50 manpower</li>
              <li>Oversaw operations for PT Cosmo Technology Indonesia (REALME) - 580 manpower</li>
              <li>Handled comprehensive HR operations including recruitment, coaching, and payroll administration</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h4 className="job-title">Human Resources Area</h4>
              <span className="job-period">Oct 2022 - Dec 2023</span>
            </div>
            <p className="company">PT CATUR MULIA MANDIRI</p>
            <ul className="achievements">
              <li>Managed 225 manpower for PT Multi Spunindo Jaya (Non-Woven Manufacturing)</li>
              <li>Handled recruitment, coaching, shift scheduling, and BPJS administration</li>
              <li>Processed PKWT agreements and managed disciplinary actions</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h4 className="job-title">Human Resources Development Staff</h4>
              <span className="job-period">May 2022 - Sep 2022</span>
            </div>
            <p className="company">PT FIRST INDONESIA REFURBISH MANUFACTURING</p>
            <ul className="achievements">
              <li>Managed recruitment and selection processes for 60 manpower</li>
              <li>Created Standard Operating Procedures (SOP) for HR division</li>
              <li>Administered PKWT contracts, payroll, and health insurance (BPJS)</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h3 className="section-title">Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4 className="skill-title">HR Core Competencies</h4>
              <div className="skill-tags">
                <span className="skill-tag">HR Recruitment</span>
                <span className="skill-tag">HR Outsourcing</span>
                <span className="skill-tag">Payroll Administration</span>
                <span className="skill-tag">Contract Recruitment</span>
                <span className="skill-tag">Employee Relations</span>
                <span className="skill-tag">BPJS Administration</span>
              </div>
            </div>
            <div className="skill-category">
              <h4 className="skill-title">Organizational Psychology</h4>
              <div className="skill-tags">
                <span className="skill-tag">Industrial Psychology</span>
                <span className="skill-tag">Organizational Behavior</span>
                <span className="skill-tag">Employee Assessment</span>
                <span className="skill-tag">Performance Management</span>
                <span className="skill-tag">Competency-Based Interview</span>
                <span className="skill-tag">Workforce Management</span>
              </div>
            </div>
            <div className="skill-category">
              <h4 className="skill-title">Legal & Compliance</h4>
              <div className="skill-tags">
                <span className="skill-tag">Labor and Employment Law</span>
                <span className="skill-tag">PKWT Processing</span>
                <span className="skill-tag">Disciplinary Actions</span>
                <span className="skill-tag">SOP Development</span>
                <span className="skill-tag">Operational Support</span>
                <span className="skill-tag">Multigenerational Workforce</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h3 className="section-title">Education</h3>
          <div className="education-item">
            <div className="education-header">
              <h4 className="degree">Bachelor of Psychology - Industrial and Organizational Psychology</h4>
              <span className="education-period">2019 - 2023</span>
            </div>
            <p className="university">Airlangga University</p>
            <p className="education-details">
              Specialization in Industrial and Organizational Psychology, focusing on human behavior in organizational contexts 
              and the impact of behavior on companies with practical solution implementation.
            </p>
          </div>
        </section>

        <section className="section">
          <h3 className="section-title">Certifications</h3>
          <div className="certification-item">
            <h4 className="certification-title">HR Staff Certified BNSP</h4>
            <p className="certification-issuer">BNSP (Badan Nasional Sertifikasi Profesi)</p>
            <p className="certification-description">
              Professional certification in Human Resources management, validating competency in HR practices and standards.
            </p>
          </div>

          <div className="certification-item">
            <h4 className="certification-title">Teknik Competency-Based Interview dalam Proses Rekrutmen</h4>
            <p className="certification-issuer">Mekari University</p>
            <p className="certification-description">
              Specialized training in competency-based interviewing techniques for effective recruitment and selection processes.
            </p>
          </div>

          <div className="certification-item">
            <h4 className="certification-title">Managing a Multigenerational Workforce</h4>
            <p className="certification-issuer">LinkedIn Learning</p>
            <p className="certification-description">
              Professional development course focused on managing diverse generational groups in the workplace effectively.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Ricky Putra F. All rights reserved.</p>
      </footer>
    </div>
  )
}
