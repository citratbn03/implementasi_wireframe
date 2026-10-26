document.addEventListener('DOMContentLoaded', function() {
    const filterForm = document.getElementById('filterForm');
    const btnCetak = document.getElementById('btnCetakLaporan');

    // Penanganan form filter pengelompokan laporan
    if (filterForm) {
        filterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Memproses data laporan transaksi untuk jangka waktu periode yang dipilih...');
        });
    }

    // Pemicu fungsi pencetakan dokumen laporan bulanan/harian
    if (btnCetak) {
        btnCetak.addEventListener('click', function() {
            window.print(); // Membuka fungsi pencetakan bawaan sistem browser
        });
    }
});