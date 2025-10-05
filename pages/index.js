import Head from 'next/head'

export default function Resume() {
  return (
    <div className="resume-container">
      <Head>
        <title>Ricky Putra F. - HR Professional | Talent & Compliance Specialist</title>
        <meta 
          name="description" 
          content="HR Professional with expertise in talent acquisition, workforce management, HR compliance, and industrial psychology. Proven track record in managing 800+ employees across FMCG, tech, and manufacturing sectors." 
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph / Social Meta */}
        <meta property="og:title" content="Ricky Putra F. - HR Professional" />
        <meta property="og:description" content="Specializing in compliant, scalable, and human-centered HR solutions." />
        <meta property="og:image" content="/images/profile.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
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
                href="https://linkedin.com/in/ricky-
