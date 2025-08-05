// script.js

// !!! PENTING: GANTI URL INI DENGAN URL WEB APP ANDA DARI GOOGLE APPS SCRIPT !!!
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzLYnSNMR62Youyyp-c-GRQQoQ7pc1IfDFb9n67-f71G49Ma_lti9NSTAxdFu6NBaPDDg/exec';

const kuisData = {
    pilihanGanda: [
        {
            pertanyaan: "Strategi pemasaran yang meliputi identifikasi segmen pasar, pemilihan target, dan perencanaan bauran pemasaran disebut...",
            pilihan: ["Strategi Harga", "Strategi Distribusi", "Strategi Marketing", "Strategi Produk", "Strategi Promosi"],
            jawaban: "Strategi Marketing"
        },
        {
            pertanyaan: "Berikut ini adalah komponen dari bauran pemasaran (Marketing Mix 4P), kecuali...",
            pilihan: ["Product", "Price", "Place", "Promotion", "People"],
            jawaban: "People"
        },
        {
            pertanyaan: "Upaya optimasi website agar muncul di peringkat atas hasil pencarian Google secara organik disebut...",
            pilihan: ["SEM", "SMM", "SEO", "E-WOM", "Email Marketing"],
            jawaban: "SEO"
        },
        {
            pertanyaan: "Platform seperti Facebook Ads dan Google Ads termasuk dalam jenis digital marketing apa?",
            pilihan: ["Content Marketing", "SEO", "Online Advertising", "Email Marketing", "Affiliate Marketing"],
            jawaban: "Online Advertising"
        },
        {
            pertanyaan: "Manakah yang BUKAN merupakan manfaat utama dari digital marketing dibandingkan tradisional marketing?",
            pilihan: ["Jangkauan lebih luas", "Biaya lebih murah", "Kemudahan evaluasi", "Interaksi hanya satu arah", "Kecepatan penyebaran"],
            jawaban: "Interaksi hanya satu arah"
        },
        {
            pertanyaan: "Model komunikasi pemasaran yang alurnya adalah Attention, Interest, Desire, Action dikenal dengan singkatan...",
            pilihan: ["AIDA", "AISAS", "RACE", "SOSTAC", "4P"],
            jawaban: "AIDA"
        },
        {
            pertanyaan: "Model AISAS menambahkan dua elemen setelah 'Interest', yaitu...",
            pilihan: ["Sell dan Service", "Search dan Share", "Send dan Subscribe", "Story dan Social", "Save dan Send"],
            jawaban: "Search dan Share"
        },
        {
            pertanyaan: "Teknik SEO yang berfokus pada optimasi di dalam halaman website itu sendiri, seperti kualitas konten dan penggunaan keyword, disebut...",
            pilihan: ["SEO Off-Page", "SEO Technical", "SEO On-Page", "Black Hat SEO", "White Hat SEO"],
            jawaban: "SEO On-Page"
        },
        {
            pertanyaan: "Pemasaran yang menggunakan email untuk mengirimkan promosi atau newsletter kepada pelanggan disebut...",
            pilihan: ["SMS Marketing", "Mobile Marketing", "Social Media Marketing", "Email Marketing", "Content Marketing"],
            jawaban: "Email Marketing"
        },
        {
            pertanyaan: "Ulasan produk (review) yang ditulis oleh konsumen di platform seperti Tokopedia atau Shopee adalah contoh dari...",
            pilihan: ["Iklan perusahaan", "Endorsement", "Electronic Word-of-Mouth (eWOM)", "Press Release", "Company Profile"],
            jawaban: "Electronic Word-of-Mouth (eWOM)"
        },
        {
            pertanyaan: "Platform media sosial yang paling banyak digunakan di Indonesia pada tahun 2022 menurut data di materi adalah...",
            pilihan: ["Twitter", "TikTok", "Instagram", "Facebook", "WhatsApp"],
            jawaban: "WhatsApp"
        },
        {
            pertanyaan: "Tujuan utama dari Search Engine Marketing (SEM) adalah...",
            pilihan: ["Membuat video viral", "Meningkatkan visibilitas website di halaman hasil mesin pencari", "Mengelola akun media sosial", "Mengirim email massal", "Desain grafis untuk iklan"],
            jawaban: "Meningkatkan visibilitas website di halaman hasil mesin pencari"
        },
        {
            pertanyaan: "Aplikasi seperti Canva dan Pixlr termasuk dalam kategori tools digital marketing untuk...",
            pilihan: ["Analisis Strategi", "Manajemen Media Sosial", "Keyword Konten", "Editing", "Manajemen Kinerja"],
            jawaban: "Editing"
        },
        {
            pertanyaan: "Pemasaran yang menargetkan pengguna perangkat bergerak seperti smartphone dan tablet disebut...",
            pilihan: ["Desktop Marketing", "Traditional Marketing", "Mobile Marketing", "Offline Marketing", "Radio Marketing"],
            jawaban: "Mobile Marketing"
        },
        {
            pertanyaan: "Google AdSense adalah program periklanan dari Google yang sistemnya berbasis...",
            pilihan: ["Pay-Per-View", "Subscription", "Pay-Per-Click (PPC)", "Donation", "Free Trial"],
            jawaban: "Pay-Per-Click (PPC)"
        },
        {
            pertanyaan: "Fitur pada WhatsApp Business yang memungkinkan pengiriman pesan ke banyak kontak sekaligus disebut...",
            pilihan: ["WhatsApp Story", "WhatsApp Group", "Video Call", "Broadcast Message", "WhatsApp Katalog"],
            jawaban: "Broadcast Message"
        },
        {
            pertanyaan: "Apa fungsi utama dari `backlink` dalam konteks SEO Off-Page?",
            pilihan: ["Mempercepat loading website", "Menjadi referensi dari website lain untuk meningkatkan otoritas", "Mempercantik tampilan website", "Mengamankan website dari virus", "Membuat konten artikel"],
            jawaban: "Menjadi referensi dari website lain untuk meningkatkan otoritas"
        },
        {
            pertanyaan: "Seorang `publisher` dalam ekosistem Google AdSense adalah...",
            pilihan: ["Perusahaan yang memasang iklan", "Orang yang mengklik iklan", "Google itu sendiri", "Pemilik website/blog yang menyediakan ruang iklan", "Agensi periklanan"],
            jawaban: "Pemilik website/blog yang menyediakan ruang iklan"
        },
        {
            pertanyaan: "Langkah pertama yang paling fundamental dalam menyusun strategi social media marketing adalah...",
            pilihan: ["Membuat konten viral", "Melakukan riset persona pembeli (target audiens)", "Memilih warna brand", "Membeli followers", "Membuat jadwal posting"],
            jawaban: "Melakukan riset persona pembeli (target audiens)"
        },
        {
            pertanyaan: "Platform yang memfasilitasi pembuatan konten secara bersama oleh para penggunanya (contoh: Wikipedia) disebut...",
            pilihan: ["Blog", "Microblog", "Media Berbagi", "Media konten bersama", "Jejaring Sosial"],
            jawaban: "Media konten bersama"
        }
    ],
    isianSingkat: [
        { pertanyaan: "Sebutkan 3 dari 4 komponen bauran pemasaran (Marketing Mix 4P)!", jawaban: ["produk", "harga", "tempat", "promosi"], poin: 3 },
        { pertanyaan: "Selain SEO, sebutkan satu jenis digital marketing lainnya!", jawaban: ["sem", "social media marketing", "email marketing", "online advertising", "mobile marketing"], poin: 1 },
        { pertanyaan: "Sebutkan 3 jenis SEO!", jawaban: ["on page", "off page", "technical"], poin: 3 },
        { pertanyaan: "Apa kepanjangan dari eWOM?", jawaban: ["electronic word of mouth"], poin: 1 },
        { pertanyaan: "Aplikasi manajemen proyek seperti Trello atau ClickUp termasuk tools untuk manajemen...", jawaban: ["kinerja"], poin: 1 },
        { pertanyaan: "Media sosial yang dikembangkan oleh Tencent di Tiongkok adalah...", jawaban: ["wechat"], poin: 1 },
        { pertanyaan: "Kode batang yang bisa dipindai kamera HP dan mengarahkan ke website disebut...", jawaban: ["qr code", "qr"], poin: 1 },
        { pertanyaan: "Apa kepanjangan dari SEM?", jawaban: ["search engine marketing"], poin: 1 },
        { pertanyaan: "Siapakah yang dimaksud dengan `advertiser` dalam Google AdSense?", jawaban: ["pemasang iklan", "perusahaan yang memasang iklan"], poin: 1 },
        { pertanyaan: "Sebutkan dua platform yang bisa digunakan untuk membuat blog gratis!", jawaban: ["blogger", "wordpress.com", "medium"], poin: 2 },
    ]
};


function mulaiKuis() {
    const namaSiswa = document.getElementById('namaSiswa').value;
    const kelasSiswa = document.getElementById('kelasSiswa').value;

    if (namaSiswa.trim() === '' || kelasSiswa.trim() === '') {
        alert('Nama dan Kelas wajib diisi!');
        return;
    }

    document.getElementById('identitas-section').style.display = 'none';
    const kuisSection = document.getElementById('kuis-section');
    kuisSection.style.display = 'block';
    
    const kuisForm = document.getElementById('kuis-form');
    let html = '';

    // Generate Pilihan Ganda
    html += '<h3>Bagian 1: Pilihan Ganda</h3>';
    kuisData.pilihanGanda.forEach((soal, index) => {
        html += `<div class="question-block">
            <p>${index + 1}. ${soal.pertanyaan}</p>`;
        soal.pilihan.forEach(p => {
            html += `<label><input type="radio" name="pg${index}" value="${p}"> ${p}</label>`;
        });
        html += `</div>`;
    });

    // Generate Isian Singkat
    html += '<h3>Bagian 2: Isian Singkat</h3>';
    kuisData.isianSingkat.forEach((soal, index) => {
        html += `<div class="question-block">
            <p>${index + 1}. ${soal.pertanyaan}</p>
            <input type="text" name="is${index}" class="isian-singkat">
        </div>`;
    });

    kuisForm.innerHTML = html;
}

async function submitKuis() {
    document.getElementById('submit-btn').disabled = true;
    document.getElementById('submit-btn').textContent = 'Memeriksa Jawaban...';

    // Perhitungan Skor
    let skor = 0;
    const bobotPG = 3; // 20 soal x 3 poin = 60
    const bobotIS = 4; // Total poin isian singkat adalah 13, dikalikan 4 agar mendekati 40

    // Cek Pilihan Ganda
    kuisData.pilihanGanda.forEach((soal, index) => {
        const pilihanUser = document.querySelector(`input[name="pg${index}"]:checked`);
        if (pilihanUser && pilihanUser.value === soal.jawaban) {
            skor += bobotPG;
        }
    });

    // Cek Isian Singkat (dengan toleransi jawaban)
    kuisData.isianSingkat.forEach((soal, index) => {
        const jawabanUser = document.querySelector(`input[name="is${index}"]`).value.trim().toLowerCase();
        // Cek jika jawaban user ada di dalam array kemungkinan jawaban
        if (soal.jawaban.some(j => jawabanUser.includes(j))) {
             skor += (soal.poin * bobotIS);
        }
    });
    
    // Konversi skor ke skala 100
    // Total skor maksimal adalah (20 * 3) + (13 * 4) = 60 + 52 = 112
    let skorAkhir = Math.round((skor / 112) * 100);
    if(skorAkhir > 100) skorAkhir = 100; // Batasi maksimal 100

    const namaSiswa = document.getElementById('namaSiswa').value;
    const kelasSiswa = document.getElementById('kelasSiswa').value;

    // Kirim data ke Google Sheet
    try {
        const response = await fetch(WEB_APP_URL, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ nama: namaSiswa, kelas: kelasSiswa, skor: skorAkhir })
        });
        
        const result = await response.json();

        // Tampilkan hasil
        tampilkanHasil(namaSiswa, skorAkhir, result.sertifikatId);

    } catch (error) {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat menyimpan data. Silakan coba lagi.');
        tampilkanHasil(namaSiswa, skorAkhir, null); // Tetap tampilkan hasil meski gagal simpan
    }
}


function tampilkanHasil(nama, skor, sertifikatId) {
    document.getElementById('kuis-section').style.display = 'none';
    const hasilSection = document.getElementById('hasil-section');
    hasilSection.style.display = 'block';

    document.getElementById('nama-hasil').textContent = `Nama: ${nama}`;
    document.getElementById('skor-hasil').textContent = `Skor Akhir Anda: ${skor}`;

    if (skor >= 80) {
        document.getElementById('keterangan-hasil').textContent = 'Keterangan: LULUS';
        document.getElementById('keterangan-hasil').style.color = 'green';
        if (sertifikatId) {
             document.getElementById('link-sertifikat').style.display = 'block';
             // Simpan nomor sertifikat untuk ditampilkan nanti
             document.getElementById('nomor-sertifikat').dataset.id = sertifikatId;
        }
    } else {
        document.getElementById('keterangan-hasil').textContent = 'Keterangan: BELUM LULUS';
        document.getElementById('keterangan-hasil').style.color = 'red';
    }
}

function tampilkanSertifikat() {
    const namaSiswa = document.getElementById('namaSiswa').value;
    const sertifikatId = document.getElementById('nomor-sertifikat').dataset.id;
    
    const nomorSertifikat = `Ass/PKWU/DigMarket/${sertifikatId}`;
    const tanggal = new Date().toLocaleDateString('id-ID', {
        day: 'numeric', month: 'long', year: 'numeric'
    });

    document.getElementById('nama-sertifikat').textContent = namaSiswa;
    document.getElementById('nomor-sertifikat').textContent = nomorSertifikat;
    document.getElementById('tanggal-sertifikat').textContent = tanggal;

    document.getElementById('hasil-section').style.display = 'none';
    document.getElementById('sertifikat-container').style.display = 'block';
}