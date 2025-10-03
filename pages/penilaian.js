import { useState } from 'react';

export default function PenilaianKinerja() {
  const [formData, setFormData] = useState({
    // Penilai
    nama_penilai: '',
    jabatan_penilai: '',
    departemen_penilai: '',
    
    // Karyawan
    nama_karyawan: '',
    jabatan_karyawan: '',
    departemen_karyawan: '',
    
    // Penilaian
    komunikasi: 3,
    kerja_sama: 3,
    inisiatif: 3,
    ketepatan_waktu: 3,
    kualitas_kerja: 3,
    
    // Catatan
    catatan: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (kriteria, value) => {
    setFormData(prev => ({ ...prev, [kriteria]: Number(value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simpan ke localStorage
    const data = {
      ...formData,
      tanggal: new Date().toLocaleDateString('id-ID'),
      timestamp: new Date().toISOString()
    };
    
    const existing = JSON.parse(localStorage.getItem('penilaian_kinerja') || '[]');
    localStorage.setItem('penilaian_kinerja', JSON.stringify([...existing, data]));
    
    setSubmitted(true);
    console.log('Penilaian disimpan:', data);
  };

  if (submitted) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>✅ Penilaian Berhasil!</h1>
          <p>Terima kasih telah mengisi form penilaian kinerja.</p>
          <button 
            onClick={() => {
              setSubmitted(false);
              setFormData({
                nama_penilai: '',
                jabatan_penilai: '',
                departemen_penilai: '',
                nama_karyawan: '',
                jabatan_karyawan: '',
                departemen_karyawan: '',
                komunikasi: 3,
                kerja_sama: 3,
                inisiatif: 3,
                ketepatan_waktu: 3,
                kualitas_kerja: 3,
                catatan: ''
              });
            }}
            style={styles.button}
          >
            Isi Penilaian Baru
          </button>
        </div>
      </div>
    );
  }

  const total = formData.komunikasi + formData.kerja_sama + formData.inisiatif + formData.ketepatan_waktu + formData.kualitas_kerja;
  const rataRata = (total / 5).toFixed(1);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>📊 Penilaian Kinerja</h1>
        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '1.5rem' }}>
          Formulir penilaian kinerja karyawan
        </p>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          {/* === Bagian Penilai === */}
          <h3 style={styles.sectionTitle}>👤 Identitas Penilai</h3>
          
          <div style={styles.row}>
            <div style={styles.half}>
              <label>Nama Anda</label>
              <input
                type="text"
                name="nama_penilai"
                value={formData.nama_penilai}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.half}>
              <label>Jabatan</label>
              <input
                type="text"
                name="jabatan_penilai"
                value={formData.jabatan_penilai}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
          </div>
          
          <div style={styles.formGroup}>
            <label>Departemen</label>
            <input
              type="text"
              name="departemen_penilai"
              value={formData.departemen_penilai}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          {/* === Bagian Karyawan === */}
          <h3 style={{ ...styles.sectionTitle, marginTop: '1.5rem' }}>👥 Karyawan yang Dinilai</h3>
          
          <div style={styles.row}>
            <div style={styles.half}>
              <label>Nama Karyawan</label>
              <input
                type="text"
                name="nama_karyawan"
                value={formData.nama_karyawan}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.half}>
              <label>Jabatan</label>
              <input
                type="text"
                name="jabatan_karyawan"
                value={formData.jabatan_karyawan}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
          </div>
          
          <div style={styles.formGroup}>
            <label>Departemen</label>
            <input
              type="text"
              name="departemen_karyawan"
              value={formData.departemen_karyawan}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          {/* === Penilaian === */}
          <h3 style={{ ...styles.sectionTitle, marginTop: '1.5rem' }}>⭐ Nilai Kinerja (1–5)</h3>
          
          {[
            { key: 'komunikasi', label: 'Komunikasi & Interpersonal', desc: 'Mampu berkomunikasi secara efektif' },
            { key: 'kerja_sama', label: 'Kerja Sama Tim', desc: 'Mampu bekerja sama dalam tim' },
            { key: 'inisiatif', label: 'Inisiatif & Proaktif', desc: 'Menunjukkan inisiatif dalam pekerjaan' },
            { key: 'ketepatan_waktu', label: 'Ketepatan Waktu', desc: 'Menyelesaikan tugas tepat waktu' },
            { key: 'kualitas_kerja', label: 'Kualitas Hasil Kerja', desc: 'Menghasilkan pekerjaan berkualitas' }
          ].map(item => (
            <div key={item.key} style={{ marginBottom: '1rem' }}>
              <label><strong>{item.label}</strong></label>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0' }}>
                {item.desc}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={formData[item.key]}
                  onChange={(e) => handleRatingChange(item.key, e.target.value)}
                  style={{ flex: 1 }}
                />
                <span style={{ width: '28px', textAlign: 'center', fontWeight: 'bold', fontSize: '1rem' }}>
                  {formData[item.key]}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                  ({['Sangat Kurang', 'Kurang', 'Cukup', 'Baik', 'Sangat Baik'][formData[item.key] - 1]})
                </span>
              </div>
            </div>
          ))}

          {/* Rata-rata */}
          <div style={{ textAlign: 'center', margin: '1.5rem 0', padding: '12px', backgroundColor: '#f0fdf4', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
            <strong>Rata-rata Nilai: {rataRata} / 5</strong>
          </div>

          {/* Catatan */}
          <div style={styles.formGroup}>
            <label>Catatan Tambahan (Opsional)</label>
            <textarea
              name="catatan"
              value={formData.catatan}
              onChange={handleChange}
              rows="3"
              style={{ ...styles.input, padding: '10px' }}
            />
          </div>

          <button type="submit" style={{ ...styles.button, width: '100%' }}>
            Simpan Penilaian
          </button>
        </form>
      </div>
    </div>
  );
}

// Styling profesional & responsif
const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    padding: '1rem'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    padding: '2rem',
    width: '100%',
    maxWidth: '650px'
  },
  title: {
    textAlign: 'center',
    color: '#0d9488',
    marginBottom: '0.5rem'
  },
  sectionTitle: {
    color: '#0f766e',
    fontSize: '1.1rem',
    marginBottom: '1rem',
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: '0.5rem'
  },
  formGroup: {
    marginBottom: '1.25rem'
  },
  row: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.25rem'
  },
  half: {
    flex: 1
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.2s'
  },
  button: {
    backgroundColor: '#0d9488',
    color: 'white',
    border: 'none',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.2s'
  }
};
