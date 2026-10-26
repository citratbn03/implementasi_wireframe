document.addEventListener('DOMContentLoaded', function() {
    // Penanganan tombol Keluar (Logout)
    const logoutBtn = document.querySelector('.btn-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('Apakah Anda yakin ingin keluar dari sistem?')) {
                // Di sini Anda bisa mengarahkan kembali ke halaman login utama (index.html)
                window.location.href = 'index.html';
            }
        });
    }

    // Penanganan tombol Detail pada tabel
    const detailButtons = document.querySelectorAll('.btn-detail');
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const noPesanan = row.cells[0].textContent;
            const namaPelanggan = row.cells[1].textContent;
            
            alert(Membuka berkas detail untuk:\nNomor: ${noPesanan}\nNama: ${namaPelanggan});
        });
    });
});