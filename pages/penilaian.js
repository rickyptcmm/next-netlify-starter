import { useState } from 'react';

export default function PenilaianKinerja() {
  // Daftar lini untuk penilai
  const daftarLini = [
    "STAGING WP",
    "Cleaning Produksi WP",
    "V101",
    "V102",
    "V103",
    "PP1",
    "PP2",
    "PP3",
    "Gericke Lt. 2",
    "PP4",
    "PP5",
    "Shredding Line (Lt.1)",
    "Preparation BAG",
    "WRAPPING WP",
    "Labelling",
    "STAGING EC/SL",
    "Cleaning Produksi EC/SL",
    "FORMULASI EC/SL",
    "LF 1",
    "LF 2",
    "LF 3",
    "LF 4",
    "WRAPPING ECSL",
    "SUPPORT LINE ECSL"
  ];

  // Daftar karyawan (73 nama)
  const daftarKaryawan = [
    "A. Erzanandy Pradipta Putra Irawan",
    "Abdulloh Salim",
    "Ach Gozali",
    "Achmad Efendi",
    "Achmad Faris",
    "Achmad Reza Rizqi Muhammad",
    "Ade Tya Putra Mahendra",
    "Adi Apriyanto",
    "Affan Ariansyah",
    "Agus Mariyono",
    "Ahmad Hakim",
    "Ainur Rochim",
    "Alvin Rega",
    "Angger Sukmadi",
    "Anton Sophian Nari",
    "Arga Setiawan",
    "Arif Budianto",
    "Aris Wibowo Saputro",
    "Bagus Sayyidilhaq A.S",
    "Budi Yanto",
    "Daffa Abiyoga Putra Ramadhan",
    "Dani Soetrisno",
    "Danny Kurniawan",
    "Dannys Ardy Angkasa",
    "Didik Andriyanto",
    "Dwi Inggar Prakoso",
    "Elvin Chrisdiantama",
    "Fachtur Rachman",
    "Fariz Putra Harsono",
    "Fauzi Tri Romadhoni",
    "Fransisco Pariama",
    "Gunawan Winoto",
    "Hari Purwanto",
    "Heru",
    "Iis Setia Apriyadi",
    "Ilham Luthfi",
    "Imam Suhadak",
    "Imam Syamsuri",
    "Irvan Novianto",
    "Julius Adi Saputro",
    "Kelvin Mandala Diputra",
    "Khairul Anam",
    "M. Chamidullah",
    "M. Fairuz Zuhda",
    "Miftakhul Huda",
    "Moch Riyan Firdaus",
    "Moch. Aldi Zakaria Bowta",
    "Moch. Bagoes Jaya Wardhana",
    "Moch. Ismail",
    "Moch. Lukman",
    "Mochamad Faizal Adi Putra",
    "Mochamad Jainul",
    "Mochamad Muslik",
    "Mochamat Hillmy Nurfatih",
    "Mochammad Wahyudi",
    "Moh. Hilman Syahrul Falah",
    "Muchammad Sirojudin",
    "Muhammad Fahmi Syarif",
    "Muhammad Fahrial Raizan Romadhon",
    "Muhammad Muhibbuddin Wildani",
    "Muhammad Nabil Ali Hakim",
    "Muhammad Nur Auni",
    "Muhammad Sandy Akbar",
    "Muhammad Wahyu Mimbar",
    "Nanda Rahmawan",
    "Nasrullah",
    "Nova Angga Haryudha Amanu",
    "Nuryudah",
    "Putra Satria Sukajida",
    "Rachmat Setyawan",
    "Renal Dewo Saputro",
    "Reza Aji Satrio",
    "Ridwan Aminul Fallah",
    "Rizal Agung Utomo",
    "Roby Nurdiansyah",
    "Rudi Agus Setyawan",
    "Rusdianto",
    "Septian Maulana Akbar",
    "Shofwan Andreanto Kasuma",
    "Suliswanto",
    "Tauchid",
    "Taufiqur Rahman",
    "Uce Rahardjo Nyoto Wibowo",
    "Wemy Susandra",
    "Wenas Itto Adhesa",
    "Yulianto"
  ];

  const [formData, setFormData] = useState({
    nama_penilai: '',
    lini_penilai: ''
  });

  const [penilaianList, setPenilaianList] = useState(
    daftarKaryawan.map(nama => ({ nama, rating: '' }))
  );

  const [submitted, setSubmitted] = useState(false);

  const handlePenilaiChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (index, rating) => {
    const newPenilaian = [...penilaianList];
    newPenilaian[index].rating = rating;
    setPenilaianList(newPenilaian);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.nama_penilai || !formData.lini_penilai) {
      alert('Silakan isi nama dan lini penilai.');
      return;
    }
    
    // Cek minimal 1 karyawan dinilai
    const adaYangDinilai = penilaianList.some(p => p.rating);
    if (!adaYangDinilai) {
      alert('Silakan berikan penilaian untuk minimal 1 karyawan.');
      return;
    }
    
    const data = {
      penilai: {
        nama: formData.nama_penilai,
        lini: formData.lini_penilai
      },
      penilaian: penilaianList.filter(p => p.rating), // Hanya yang dinilai
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
              setFormData({ nama_penilai: '', lini_penilai: '' });
              setPenilaianList(daftarKaryawan.map(nama => ({ nama, rating: '' })));
            }}
            style={styles.button}
          >
            Isi Penilaian Baru
          </button>
        </div>
      </div>
    );
  }

  // Hitung jumlah yang sudah dinilai
  const jumlahDinilai = penilaianList.filter(p => p.rating).length;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>📊 Penilaian Kinerja</h1>
        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '1.5rem' }}>
          Isi data penilai, lalu berikan rating untuk karyawan yang dinilai.
        </p>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          {/* === Bagian Penilai === */}
          <h3 style={styles.sectionTitle}>👤 Identitas Penilai</h3>
          
          <div style={styles.formGroup}>
            <label>Nama Penilai</label>
            <input
              type="text"
              name="nama_penilai"
              value={formData.nama_penilai}
              onChange={handlePenilaiChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label>Lini</label>
            <select
              name="lini_penilai"
              value={formData.lini_penilai}
              onChange={handlePenilaiChange}
              required
              style={{ ...styles.input, appearance: 'auto' }}
            >
              <option value="">-- Pilih lini --</option>
              {daftarLini.map((lini, i) => (
                <option key={i} value={lini}>{lini}</option>
              ))}
            </select>
          </div>

          {/* === Ringkasan === */}
          <div style={{ textAlign: 'center', marginBottom: '1.5rem', padding: '12px', backgroundColor: '#f0fdf4', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
            <strong>Karyawan Dinilai: {jumlahDinilai} dari {daftarKaryawan.length}</strong>
          </div>

          {/* === Penilaian Semua Karyawan === */}
          <h3 style={{ ...styles.sectionTitle, marginTop: '1.5rem' }}>⭐ Berikan Rating (A/B/C/D)</h3>
          <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1rem', textAlign: 'center' }}>
            A = Sangat Baik | B = Baik | C = Cukup | D = Kurang
          </p>

          <div style={{ maxHeight: '400px', overflowY: 'auto', border: '1px solid #cbd5e1', borderRadius: '8px', marginBottom: '1.5rem' }}>
            {penilaianList.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: '12px',
                  borderBottom: index < penilaianList.length - 1 ? '1px solid #e2e8f0' : 'none',
                  backgroundColor: item.rating ? '#f8fafc' : 'white'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ flex: 1, marginRight: '1rem' }}>{item.nama}</span>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {['A', 'B', 'C', 'D'].map(rating => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => handleRatingChange(index, rating)}
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '6px',
                          border: '1px solid #cbd5e1',
                          backgroundColor: item.rating === rating ? '#0d9488' : 'white',
                          color: item.rating === rating ? 'white' : '#4b5563',
                          fontWeight: item.rating === rating ? 'bold' : 'normal',
                          cursor: 'pointer'
                        }}
                      >
                        {rating}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button type="submit" style={{ ...styles.button, width: '100%' }}>
            Simpan Penilaian ({jumlahDinilai} karyawan)
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
    maxWidth: '700px'
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
