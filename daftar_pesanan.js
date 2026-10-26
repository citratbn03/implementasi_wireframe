document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchKeyword');
    const paymentSelect = document.getElementById('filterPayment');
    const statusButtons = document.querySelectorAll('.btn-status-filter');
    const tableRows = document.querySelectorAll('#tableBody tr');

    let activeStatusFilter = 'Semua';

    // Fungsi pencarian dan filter multi-kondisi (Status, Ketikan, & Pembayaran)
    function filterTable() {
        const keyword = searchInput.value.toLowerCase().trim();
        const paymentFilter = paymentSelect.value;

        tableRows.forEach(row => {
            const rowStatus = row.getAttribute('data-status');
            const rowPayment = row.getAttribute('data-payment');
            
            // Mengambil semua teks data dalam baris untuk pencarian global (No. Pesanan / Nama)
            const rowText = row.textContent.toLowerCase();

            // Cek kondisi filter status
            const matchStatus = (activeStatusFilter === 'Semua' || rowStatus === activeStatusFilter);
            // Cek kondisi filter kata kunci ketikan
            const matchKeyword = (keyword === '' || rowText.includes(keyword));
            // Cek kondisi filter pembayaran
            const matchPayment = (paymentFilter === 'Semua' || rowPayment === paymentFilter);

            if (matchStatus && matchKeyword && matchPayment) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    // Event input untuk kolom kata kunci pencarian
    searchInput.addEventListener('input', filterTable);

    // Event ganti opsi filter jenis pembayaran
    paymentSelect.addEventListener('change', filterTable);

    // Event klik deretan tombol filter status kecil
    statusButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Hapus kelas aktif dari tombol sebelumnya
            statusButtons.forEach(btn => btn.classList.remove('active'));
            // Tambahkan kelas aktif pada tombol yang sedang diklik
            this.classList.add('active');

            activeStatusFilter = this.getAttribute('data-status');
            filterTable();
        });
    });

    // Simulasi klik aksi tautan detail
    const detailLinks = document.querySelectorAll('.link-detail');
    detailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const orderNo = this.closest('tr').cells[0].textContent;
            alert(`Membuka panel berkas detail pemeriksaan pesanan: ${orderNo}`);
        });
    });
});