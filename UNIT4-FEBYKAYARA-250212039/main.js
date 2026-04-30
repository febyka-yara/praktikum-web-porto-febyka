// Ambil elemen form dengan id 'form-kontak' dari HTML dan simpan ke variabel formKontak
// Perbaikan: ID disesuaikan dengan index.html
const formKontak = document.getElementById('form-kontak');

// Ambil elemen div dengan id 'inbox-listdata' dari HTML dan simpan ke variabel inboxList
const inboxList = document.getElementById('inbox-listdata');

// TANTANGAN 2: Ambil elemen input update nama dan target span nama di hero
const inputUpdateNama = document.getElementById('input-update-nama');
const displayNamaPemilik = document.getElementById('nama-pemilikkita');

// TANTANGAN 2: Event Listener 'input' untuk deteksi perubahan teks secara real-time
inputUpdateNama.addEventListener('input', function() {
    // Jika input kosong, kembalikan ke default "Mahasiswa TI", jika ada isi gunakan isi input
    displayNamaPemilik.textContent = inputUpdateNama.value || "Mahasiswa TI";
});

// Tambahkan event listener pada form - ketika user klik tombol submit, jalankan fungsi
formKontak.addEventListener('submit', function(e) {
    
    // Ambil nilai textarea pesan dari elemen dengan id 'message' dan simpan ke variabel pesan
    const pesan = document.getElementById('message').value;
    
    // TANTANGAN 1: Logika Validasi Karakter (Minimal 10)
    const errorMsg = document.getElementById('error-message');
    if (pesan.length < 10) {
        // e.preventDefault() mencegah halaman reload/submit jika validasi gagal
        e.preventDefault();
        // Tampilkan pesan error jika kurang dari 10 karakter
        errorMsg.style.display = 'block';
        return; // Hentikan eksekusi fungsi
    } else {
        // Sembunyikan error jika sudah memenuhi syarat
        errorMsg.style.display = 'none';
    }

    // e.preventDefault() mencegah halaman reload saat form di-submit (default behavior)
    e.preventDefault();

    // Ambil nilai input nama dari elemen dengan id 'sender-name'
    const namawarga = document.getElementById('sender-name').value;

    // Ambil nilai pilihan dropdown subject dari elemen dengan id 'subjectdata'
    const subjek = document.getElementById('subjectdata').value;

    // Cari elemen dengan class 'empty-msg' (teks "Belum ada pesan")
    const emptyMsg = document.querySelector('.empty-msg');

    // Jika emptyMsg ditemukan (true), hapus elemen tersebut dari halaman
    if (emptyMsg) emptyMsg.remove();

    // Buat elemen div kosong baru dan simpan ke variabel itemPesan
    const itemPesan = document.createElement('div');

    // Tambahkan class 'msg-item' ke elemen div yang baru dibuat (untuk styling CSS)
    itemPesan.classList.add('msg-item');

    // TANTANGAN 3: Berikan warna latar belakang berbeda berdasarkan subjek
    if (subjek === "Tawaran Proyek") {
        itemPesan.classList.add('bg-proyek'); // Warna Hijau Muda
    } else if (subjek === "Tanya-Jawab") {
        itemPesan.classList.add('bg-tanya');  // Warna Biru Muda
    } else if (subjek === "Kolaborasi") {
        itemPesan.classList.add('bg-kolaborasi'); // Warna Ungu Muda (Opsional)
    }

    // Isi konten HTML ke elemen itemPesan menggunakan template literal (backtick)
    itemPesan.innerHTML = `
        <h4>${namawarga}</h4>
        <small>Perihal: ${subjek}</small>
        <p>${pesan}</p>
    `;

    // Tambahkan itemPesan ke awal (paling atas) elemen inboxList menggunakan prepend()
    inboxList.prepend(itemPesan);

    // Hapus semua nilai dari semua input di dalam form
    formKontak.reset();

    // Tampilkan pop-up alert
    alert("Terima kasih! Pesan Anda telah masuk ke Inbox simulasi.");
});