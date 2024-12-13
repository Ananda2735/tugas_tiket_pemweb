document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form default

    // Mengambil nilai dari input
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const jam = document.getElementById('jam').value;
    const tujuan = document.getElementById('tujuan').value;
    const jumlah = document.getElementById('jumlah').value;

    // Mengatur status validasi
    let isValid = true;

    // Menghapus pesan kesalahan sebelumnya
    clearErrors();

    // Validasi Nama Pelanggan
    if (nama.length === 0 || nama.length > 30) {
        showError('nama', 'Nama pelanggan harus diisi dan maksimum 30 karakter.');
        isValid = false;
    }

    // Validasi Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('email', 'Email tidak valid.');
        isValid = false;
    }

    // Validasi Jam Keberangkatan
    const jamPattern = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if