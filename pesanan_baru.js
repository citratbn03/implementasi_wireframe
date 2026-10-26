document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen input utama dari kolom formulir
    const beratInput = document.getElementById('beratCucian');
    const layananSelect = document.getElementById('layanan');
    const tarifInput = document.getElementById('tarifPerKg');
    const statusBayarSelect = document.getElementById('statusPembayaran');
    const nominalTerimaInput = document.getElementById('nominalDiterima');
    const metodeBayarSelect = document.getElementById('metodePembayaran');
    const orderForm = document.getElementById('orderForm');

    // Ambil elemen teks output di panel ringkasan pesanan sebelah kanan
    const ringkasanLayanan = document.getElementById('ringkasanLayanan');
    const ringkasanPerhitungan = document.getElementById('ringkasanPerhitungan');
    const ringkasanSubtotal = document.getElementById('ringkasanSubtotal');
    const ringkasanTotal = document.getElementById('ringkasanTotal');
    const ringkasanDibayar = document.getElementById('ringkasanDibayar');
    const ringkasanSisa = document.getElementById('ringkasanSisa');

    // Standar acuan tarif per layanan
    const tarifLayanan = {
        'Cuci reguler': 8000,
        'Cuci ekspres': 12000
    };

    // Fungsi inti kalkulasi transaksi
    function kalkulasiLaundry() {
        // 1. Ambil nilai berat dan ubah format koma ke titik agar bisa dibaca matematika komputer
        let beratTeks = beratInput.value.replace(',', '.');
        let berat = parseFloat(beratTeks) || 0;

        // 2. Pasang tarif berdasarkan jenis layanan yang dipilih petugas
        let layananDipilih = layananSelect.value;
        let tarif = tarifLayanan[layananDipilih] || 8000;
        tarifInput.value = `Rp${tarif.toLocaleString('id-ID')}`;

        // 3. Hitung total nominal biaya dasar
        let totalBiaya = berat * tarif;

        // 4. Logika kontrol status pembayaran
        let statusBayar = statusBayarSelect.value;
        let sudahDibayar = 0;

        if (statusBayar === 'Lunas') {
            // Jika status lunas, kunci nominal uang masuk ke harga total secara otomatis
            sudahDibayar = totalBiaya;
            nominalTerimaInput.value = `Rp${totalBiaya.toLocaleString('id-ID')}`;
            nominalTerimaInput.disabled = true;
            nominalTerimaInput.classList.add('bg-disabled');
            
            metodeBayarSelect.disabled = false;
            metodeBayarSelect.classList.remove('bg-disabled');
            if (metodeBayarSelect.value === 'Belum ada pembayaran') {
                metodeBayarSelect.value = 'Tunai';
            }
        } else {
            // Jika belum lunas, biarkan petugas mengetik besaran uang muka manual jika ada
            nominalTerimaInput.disabled = false;
            nominalTerimaInput.classList.remove('bg-disabled');
            
            let angkaMentah = nominalTerimaInput.value.replace(/[^0-9]/g, '');
            sudahDibayar = parseInt(angkaMentah) || 0;

            if (sudahDibayar > 0) {
                metodeBayarSelect.disabled = false;
                metodeBayarSelect.classList.remove('bg-disabled');
                if (metodeBayarSelect.value === 'Belum ada pembayaran') {
                    metodeBayarSelect.value = 'Tunai';
                }
            } else {
                metodeBayarSelect.disabled = true;
                metodeBayarSelect.classList.add('bg-disabled');
                metodeBayarSelect.value = 'Belum ada pembayaran';
            }
        }

        // 5. Hitung kalkulasi akhir tagihan sisa nominal
        let sisaTagihan = totalBiaya - sudahDibayar;
        if (sisaTagihan < 0) sisaTagihan = 0;

        // 6. Kirim data hasil kalkulasi ke kolom panel ringkasan kanan
        ringkasanLayanan.textContent = layananDipilih;
        ringkasanPerhitungan.textContent = `${beratTeks.replace('.', ',')} kg x Rp${tarif.toLocaleString('id-ID')}`;
        ringkasanSubtotal.textContent = `Rp${totalBiaya.toLocaleString('id-ID')}`;
        ringkasanTotal.textContent = `Rp${totalBiaya.toLocaleString('id-ID')}`;
        ringkasanDibayar.textContent = `Rp${sudahDibayar.toLocaleString('id-ID')}`;
        ringkasanSisa.textContent = `Rp${sisaTagihan.toLocaleString('id-ID')}`;
    }

    // Pasang Event Listener pemicu kalkulasi otomatis secara real-time
    beratInput.addEventListener('input', kalkulasiLaundry);
    layananSelect.addEventListener('change', kalkulasiLaundry);
    
    statusBayarSelect.addEventListener('change', function() {
        if (this.value === 'Lunas') {
            nominalTerimaInput.value = '';
        } else {
            nominalTerimaInput.value = 'Rp0';
        }
        kalkulasiLaundry();
    });
    
    nominalTerimaInput.addEventListener('focus', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    nominalTerimaInput.addEventListener('blur', function() {
        let angka = parseInt(this.value) || 0;
        this.value = `Rp${angka.toLocaleString('id-ID')}`;
        kalkulasiLaundry();
    });

    nominalTerimaInput.addEventListener('input', kalkulasiLaundry);

    // Mencegah reload halaman penuh saat form diklik simpan
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Data transaksi baru berhasil disimpan ke dalam sistem dashboard!');
    });

    // Jalankan satu kali di awal agar data draf otomatis terisi penuh
    kalkulasiLaundry();
});