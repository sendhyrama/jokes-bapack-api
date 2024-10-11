var express = require('express');
var router = express.Router();

// Data jokes bapak-bapak
const jokes = [
  "Antara besi 50 kg dengan kapas 50 kg pas kalu dijatuhkan di kaki, nanti sakitan mana?\n- Ya sakitan kakinya.",
  "Dia membuat karya, pas jadi hasil karya tersebut diinjak-injak tidak marah, siap coba?\n- Pembuat sandal.",
  "Hitam, putih, merah, apakah itu?\n- Zebra abis dikerokin.",
  "Telor apa yang sangar?\n- Telor asin, soalnya ada tatonya.",
  "Telor asin takut ama siapa?\n- Ama telor puyuh, sebab tatonya lebih banyak.",
  "Kenapa kalo lagi mikir orang suka megang jidatnya?\n- Ya iyalah, masa megang jidat orang lain!",
  "Kenapa kucing selalu menyembunyikan kotorannya dalam pasir?\n- Karena takut diambil kamu!",
  "Seekor kaki seribu mempunyai 1.000 kaki, suatu hari kakinya copot satu. Tinggal berapa kakinya?\n- Kan kayak di lagu Gugur bunga, ‘Gugur satu tumbuh seribu.’",
  "Sepeda apa yang tidak bisa dicat?\n- Sepeda hilang!",
  "Benda apa yang baru dibeli langsung dibuang?\n- Peti mati.",
  "Apa persamaan antara uang dan rahasia?\n- Sama-sama susah dipegang.",
  "Uang 100 ribu jika dilempar maka akan menjadi?\n- Jadi rebutan.",
  "Kenapa ketika naik taksi kita tidak boleh bayar uang dulu?\n- Karena uang dulu udah tidak laku.",
  "Selain uang benda apa yang sering dicari-cari orang?\n- Benda hilang.",
  "Hewan apa yang bersaudara?\n- Katak Beradik.",
  "Selain bunga desa, bunga apa yang cantik dan hobi masak?\n- Bungatimin dan Bungatemi.",
  "Nyopet apa yang tergolong paling nekat?\n- Nyopet gigi emas.",
  "Negara mana yang memiliki huruf dobel?\n- u ganda (Uganda).",
  "Sabun apa yang paling genit?\n- Sabun colek.",
  "Kuman apa yang paling bersih?\n- Kumandi pakai sabun.",
  "Kalau kamu pintar matematika, coba jawab pertanyaan ini 3 x + = …?\n- Kenyang. ya iyalah, 3 kali nambah ya kenyang!",
  "Kalau hitam dibilang bersih, kalau putih dibilang kotor?\n- Papan tulis!",
  "Selalu diam di pojok tapi bisa keliling dunia?\n- Perangko!",
  "Tentara apa yang paling kecil?\n- Tentara Sekutu.",
  "Bebek apa yang jalannya selalu muter ke kiri terus?\n- Bebek dikunci stang.",
  "Ada bebek 10 di kali 2 jadi berapa?\n- 8, soalnya yang 2 lagi maen di kali.",
  "Kecil, Ijo, kalau disentuh meledak. Apakah itu?\n- Ulet bulu bawa bom.",
  "Monyet apa yang gak makan pisang?\n- Monyet lagi puasa.",
  "Kalau ayam berkokok, berarti harimau?\n- Hari mau pagi.",
  "Pintu apa yang walaupun didorong sepuluh orang pun tidak terbuka?\n- Pintu yang ada tulisan 'TARIK.'",
  "Apa yang bulat, kecil, hitam, jika dipencet keluar orangnya?\n- Bel pintu.",
  "Apa yang 'Jauh di mata, dekat di hati?\n- Usus.",
  "Rambut putih namanya uban, rambut merah namanya pirang, kalau rambut hijau namanya apa?\n- Rambutan belum mateng.",
  "Jus apa yang turun dari langit?\n- Justru itu yang aku kagak tau.",
  "Apa bukti wortel baik untuk kesehatan mata?\n- Pernah lihat kelinci pakai kacamata?",
  "Apa bahasa Indianya bumbu dapur?\n- Tumbar miri jahe.",
  "Apa yang badannya hijau, kepalanya merah, jalannya mundur?\n- Obat nyamuk bakar.",
  "Siapa yang potong rambut tiap hari tetapi tidak botak?\n- Tukang pangkas!",
  "Nenek siapa yang jalannya meloncat-loncat?\n- Nenek si katak.",
  "Kenapa orang takut kehujanan?\n- Karena hujan beraninya keroyokan, coba kalau satu-satu, nggak ada yang takut.",
  "Kenapa baju Superman ada huruf 'S'?\n- Karena kalau 'M' atau 'L' kegedean.",
  "Kenapa di keyboard komputer ada tulisan 'ENTER'?\n- Karena kalau tulisannya 'ENTAR', programnya nggak jalan-jalan.",
  "Kenapa dokter jika akan mengoperasi mulutnya ditutup?\n- Karena jika matanya yang ditutup nggak bisa melihat dong.",
  "Kenapa air laut asin?\n- Karena ikannya pada berkeringat.",
  "Kenapa kambing berjenggot?\n- Karena jika berkumis nanti dikira Pak Raden.",
  "Mangga apa yang mengerikan?\n- Mangga-ruk-garuk pantat singa.",
  "Apa itu cemilan?\n- Cebelum cepuluh, cecudah celapan.",
  "Kopi apa yang bisa mencapit?\n- Kopi-ting.",
  "Lele apa yang di tepi jalan?\n- Lele-pon umum.",
  "Sayur-sayur apa yang cantik?\n- Lo dehh."
];

router.get('/', function(req, res, next) {
  res.json({
    name: "Welcome to the Jokes Bapack API! 🔥",
    version: "1.0.0",
    author: {
      name: "sendhyrama",
      email: "sendhyrama@gmail.com",
      socials: "https://sendhyrama.dev/links",
    },
    endpoints: {
      "/text": "get all text jokes",
      "/text/random": "get text jokes randomly"
    }
  });
});

/* GET all jokes. */
router.get('/text', function(req, res, next) {
  res.json({
    code: 200,
    status: 'success',
    count: jokes.length,
    data: jokes
  });
});

/* GET a random joke. */
router.get('/text/random', function(req, res, next) {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json({
    code: 200,
    status: 'success',
    data: jokes[randomIndex]
  });
});

module.exports = router;
