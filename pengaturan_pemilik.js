document.addEventListener('DOMContentLoaded', function() {
    const serviceForm = document.getElementById('serviceForm');
    const accountForm = document.getElementById('accountForm');

    // Listener interaktif untuk form modifikasi tarif layanan
    if (serviceForm) {
        serviceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Sukses! Perubahan data kriteria layanan dan besaran tarif berhasil diperbarui Pemilik.');
        });
    }

    // Listener interaktif untuk form modifikasi otoritas akun petugas
    if (accountForm) {
        accountForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Sukses! Perubahan kredensial data akun operasional petugas berhasil disimpan.');
        });
    }
});