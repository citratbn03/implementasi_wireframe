document.addEventListener('DOMContentLoaded', function() {
    const roleRadios = document.querySelectorAll('input[name="role"]');
    const submitBtn = document.getElementById('submitBtn');
    const loginForm = document.getElementById('loginForm');

    // Mengubah teks tombol secara dinamis berdasarkan pilihan peran
    roleRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            submitBtn.textContent = Masuk sebagai ${this.value};
        });
    });

    // Aksi penanganan saat form disubmit
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const selectedRole = document.querySelector('input[name="role"]:checked').value;
        const username = document.getElementById('username').value;

        alert(Login berhasil!\nUsername: ${username}\nPeran: ${selectedRole});
        
        // Di sini Anda bisa mengarahkan pengguna ke halaman dashboard masing-masing peran
        // Contoh: 
        // if(selectedRole === 'Pemilik') { window.location.href = 'pemilik.html'; }
    });
});
