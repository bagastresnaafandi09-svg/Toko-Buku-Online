const loginForm=document.getElementById("loginForm");
const modal=document.getElementById("authModal");
const title=document.getElementById("modalTitle");
const content=document.getElementById("modalContent");
function bukaModal(judul,isi){title.textContent=judul;content.innerHTML=isi;modal.classList.remove("hidden")}
document.getElementById("closeModal").addEventListener("click",()=>modal.classList.add("hidden"));
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.add("hidden")});
loginForm.addEventListener("submit",e=>{e.preventDefault();const email=document.getElementById("email").value.trim();const password=document.getElementById("password").value;if(email===akunDemo.email&&password===akunDemo.password){alert("Login berhasil!");location.href="dashboard.html"}else{alert("email/password yang anda masukkan salah")}});
document.getElementById("forgotBtn").addEventListener("click",()=>bukaModal("Lupa Password",'<p>Masukkan email untuk menerima petunjuk reset password.</p><input type="email" placeholder="Email Anda"><button class="btn primary full" onclick="alert(\'Fitur demo: instruksi reset dikirim.\');document.getElementById(\'authModal\').classList.add(\'hidden\')">Kirim</button>'));
document.getElementById("registerBtn").addEventListener("click",()=>bukaModal("Daftar Akun",'<label>Nama</label><input placeholder="Nama lengkap"><label>Email</label><input type="email" placeholder="Email aktif"><label>Password</label><input type="password" placeholder="Buat password"><button class="btn primary full" onclick="alert(\'Pendaftaran demo berhasil.\');document.getElementById(\'authModal\').classList.add(\'hidden\')">Daftar</button>'));
