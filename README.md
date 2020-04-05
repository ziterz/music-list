# music-list

Kalian diminta untuk membuat aplikasi menggunakan client-server model

https://github.com/ziterz/music-list.git

Fork repo ini, didalam repo ini buatlah folder client dan server. Setelah selesai mengerjakan, buat pull request dengan title (ex: Ziady Mubaraq), berikan comment environment variables (beserta value aslinya).

Summary:

- User dapat menambahkan musik baru,
- User harus login terlebih dahulu untuk dapat menambah musik dan melihat musik apa saja yang sudah dibuat (musik yang ditampilkan hanya milik user yang sedang login!).
- SPA (Single Page Application)
- Wajib menggunakan sequelize, postgre, HTML, CSS, JQuery

Notes:

- Kompetensi mini live code ini bukan MVC, kamu diperbolehkan untuk tidak membuat controller di server.
- Apabila kamu membuat routing nya di dalam 1 file routes/index.js juga diperbolehkan.
- File template HTML telah disediakan, boleh menggunakan template ini, boleh juga menggunakan template sendiri asalkan layout-nya sama.
- Tidak memenuhi requirement yang terdapat pada soal mengakibatkan pengurangan nilai.
- Nama database harus mini_livecode

Rules:

- Tidak SPA/website melakukan refresh, minus 10 poin
- Push ke github node_modules dan/atau .env, minus 10 poin
- Nama database bukan mini_livecode, minus 10 poin
- Tidak memberikan env, minus 5 poin
- menggunakan alert() di client, minus 10 poin
- Silahkan browsing, Namun, DILARANG membuka/melihat repository/code milik sendiri maupun orang lain. Ketahuan dianggap bentuk kecurangan.
- Segala bentuk indikasi kecurangan mengakibatkan mini live code tidak dinilai


RELEASE 0 - Creating Migration, Table and Seeding.

Lengkapi .gitignore dengan file/folder yang tidak ingin disertakan


RELEASE 1 - Authentication (Login & Register)

Server - Register
Buatlah endpoint untuk register sesuai dengan ketentuan sebagai berikut:

- route:
- POST /register
- request:
- body
- { email: 'ziady@hacktiv8.com', password: '12345' }
- response:
- 201: { id: 1, email: 'ziady@hacktiv8.com' }

Server - Login
Buatlah endpoint untuk login sesuai dengan ketentuan sebagai berikut:

- route:
- POST /login
- request:
- body
- { email: 'ziady@hacktiv8.com', password: '12345' }
- response:
- 200: { access_token: '...' }

Client - Login & Logout

- Buatlah fitur login & logout di client side.
- Kalau berhasil login, maka form untuk login harus hilang, lalu muncul link/button untuk logout. Semua fitur di aplikasi ini mengharuskan user untuk login terlebih dahulu.
- Pastikan jika user sudah login dan masuk ke halaman utamanya, jika page di refresh, aplikasi akan langsung masuk ke halaman utama tanpa harus login lagi.


RELEASE 2 - Add new Music

Server
Buatlah endpoint untuk menambahkan musik dengan ketentuan sebagai berikut:

- route:
- POST /musics
- request
- headers
- { access_token }
- body
- { "title": "Make You Mine", "artist": "Public", "genre": "pop" }
- response
- 201: { "id": 1, "title": "Make You Mine", "artist": "Public", "genre": "pop", "UserId": 1 }

Client
- Implementasikan form Add New Music sehingga ketika di submit bisa melakukan post ke server.
- Untuk menu select list field genre, berikan tiga pilihan berupa : pop, rock, indie


RELEASE 3 - Fetch Logged In User Music List

Client
- Tampilkan daftar musik milik user yang sedang login di client kalian.

Server
Buatlah endpoint untuk mendapatkan musik sesuai dengan ketentuan sebagai berikut:

- route:
- GET /musics
- request
- headers
- { access_token }
- response
- 200: [{ "id": 1, "title": "Make You Mine", "artist": "Public", "genre": "pop", "UserId": 1 }, ...]


RELEASE 4 - Delete Music

Server
Buatlah endpoint untuk menghapus musik dari user yang sedang login dengan ketentuan sebagai berikut:

- route:
- DELETE /musics/:id
- request
- headers
- { access_token }
- response:
- 200: { "message": "Successfully delete music from your list"  }

Client
- Implementasikan button Remove yang terdapat pada setiap musik.
- Pada saat tombol Remove di click, maka musik akan langsung terhapus baik dari sisi client maupun server