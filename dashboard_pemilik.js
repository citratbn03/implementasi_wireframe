document.addEventListener('DOMContentLoaded', function() {
    // Interaktivitas tombol klik atas "Lihat laporan"
    const btnHeader = document.querySelector('.btn-black-header');
    if (btnHeader) {
        btnHeader.addEventListener('click', function() {
            alert('Membuka halaman Rekapitulasi Laporan Bulanan Pemilik Usaha...');
        });
    }

    // Interaktivitas tombol klik bawah "Buka laporan lengkap"
    const btnFooterTable = document.querySelector('.btn-outline-bottom');
    if (btnFooterTable) {
        btnFooterTable.addEventListener('click', function() {
            alert('Mengarahkan ke rincian Laporan Transaksi Lengkap per Layanan...');
        });
    }
});