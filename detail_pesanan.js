document.addEventListener('DOMContentLoaded', function() {
    const updateForm = document.getElementById('updateStatusForm');
    const nextStatusSelect = document.getElementById('nextStatusSelect');
    const btnPrint = document.getElementById('btnPrintNota');

    // Pemicu aksi tombol pembaruan alur proses status laundry
    if (updateForm) {
        updateForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const statusTerpilih = nextStatusSelect.value;
            alert(`Sukses! Status pengerjaan pesanan LD-025 berhasil diperbarui ke: ${statusTerpilih}`);
        });
    }

    // Pemicu simulasi cetak nota printer struk kertas fisik
    if (btnPrint) {
        btnPrint.addEventListener('click', function() {
            alert('Menghubungkan ke mesin pencetak thermal printer... Mencetak Nota Pesanan LD-025.');
        });
    }
});