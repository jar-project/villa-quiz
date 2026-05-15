# Villa Quiz Night 🏖️

Website quiz real-time buat villa night bareng circle.

---

## Struktur File

```
villa-quiz/
├── index.html              ← Halaman quiz (untuk semua peserta)
├── hall-of-fame/
│   └── index.html          ← Halaman hasil (khusus lo)
├── public/
│   └── photos/             ← Foto tiap orang (ganti dengan foto asli)
│       ├── fajar.png
│       ├── aji.png
│       └── ... (13 orang)
└── src/
    └── data.js             ← Semua data: nama, pertanyaan, title
```

---

## Setup Firebase (10 menit)

### Step 1 — Buat Firebase Project
1. Buka [console.firebase.google.com](https://console.firebase.google.com)
2. Klik **Add project** → kasih nama (misal: `villa-quiz-night`)
3. Disable Google Analytics kalau mau → **Create project**

### Step 2 — Aktifkan Realtime Database
1. Di sidebar kiri, klik **Build > Realtime Database**
2. Klik **Create Database**
3. Pilih region terdekat (Singapore recommended)
4. Pilih **Start in test mode** → **Enable**

### Step 3 — Dapetin Config
1. Klik ikon ⚙️ (Settings) di sidebar → **Project settings**
2. Scroll ke bawah ke bagian **Your apps**
3. Klik ikon **</>** (Web)
4. Kasih nama app → **Register app**
5. Copy bagian `firebaseConfig` yang muncul

### Step 4 — Paste Config
Ganti bagian `YOUR_API_KEY` dll di **dua file** ini:
- `index.html` (baris ~130)
- `hall-of-fame/index.html` (baris ~130)

Contoh:
```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "villa-quiz.firebaseapp.com",
  databaseURL: "https://villa-quiz-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "villa-quiz",
  storageBucket: "villa-quiz.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

---

## Ganti Foto

Ganti file di folder `public/photos/` dengan foto asli tiap orang.
Nama file **harus sesuai** (huruf kecil semua):
```
fajar.png, aji.png, ayu.png, dilah.png, fikri.png,
jian.png, madi.png, okta.png, nadia.png, ojan.png,
pacil.png, rama.png, risya.png
```
Ukuran recommended: **200x200px**, format PNG/JPG.

---

## Deploy ke Vercel (Gratis)

### Cara 1 — Via Website (paling gampang)
1. Buka [vercel.com](https://vercel.com) → login/daftar
2. Klik **Add New > Project**
3. Upload folder `villa-quiz` langsung
4. Klik **Deploy**
5. Lo dapet URL kayak: `villa-quiz.vercel.app`

### Cara 2 — Via GitHub
1. Upload folder ke GitHub repo (private kalau mau)
2. Connect repo ke Vercel
3. Auto-deploy tiap ada perubahan

---

## Cara Pakai di Villa

1. **Lo** buka `[url-lo]/hall-of-fame` di laptop/TV
2. **Semua orang** buka `[url-lo]` di HP masing-masing
3. Tiap orang pilih nama sendiri → mulai voting
4. Setelah semua selesai → lo refresh hall-of-fame
5. **Reveal bareng-bareng!** 🎉

---

## Reset Voting (Buat Main Ulang)

Di Firebase Console → Realtime Database → klik titik tiga di `votes` → **Delete**

---

## Ubah Pertanyaan / Title

Edit file `src/data.js` — semua data ada di sana.
