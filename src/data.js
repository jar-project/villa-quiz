const MEMBERS = [
  { name: "Fajar",  photo: "photos/fajar.png"  },
  { name: "Aji",   photo: "photos/aji.png"    },
  { name: "Ayu",   photo: "photos/ayu.png"    },
  { name: "Dilah", photo: "photos/dilah.png"  },
  { name: "Fikri", photo: "photos/fikri.png"  },
  { name: "Jian",  photo: "photos/jian.png"   },
  { name: "Madi",  photo: "photos/madi.png"   },
  { name: "Okta",  photo: "photos/okta.png"   },
  { name: "Nadia", photo: "photos/nadia.png"  },
  { name: "Ojan",  photo: "photos/ojan.png"   },
  { name: "Pacil", photo: "photos/pacil.png"  },
  { name: "Rama",  photo: "photos/rama.png"   },
  { name: "Risya", photo: "photos/risya.png"  },
];

// 20 titles, tiap title punya beberapa questions
// Votes dari semua questions dalam satu title digabung
// Siapa nama yang paling banyak muncul = pemenang title itu
const TITLES = [
  {
    id: "loyalist",
    emoji: "🛡️",
    title: "The Loyalist",
    subtitle: "Sahabat Sejati",
    desc: "Orang yang selalu ada, apapun yang terjadi. Nggak perlu bilang dua kali — dia udah ngerti.",
    questions: [
      "Siapa yang paling rela bangunin tengah malem kalau lo butuh?",
      "Siapa yang paling inget hal-hal kecil tentang lo?",
      "Siapa yang paling lo percaya simpan rahasia?"
    ]
  },
  {
    id: "therapist",
    emoji: "🫂",
    title: "The Therapist",
    subtitle: "Tong Sampah Terbaik",
    desc: "Curhat ke dia rasanya aman banget. Dengerin dulu, baru kasih saran — dan sarannya selalu tepat.",
    questions: [
      "Siapa yang paling enak diajak curhat?",
      "Siapa yang paling bijak kasih saran kalau lo lagi ada masalah?"
    ]
  },
  {
    id: "hypeman",
    emoji: "📣",
    title: "The Hype Man",
    subtitle: "Supporter Nomor Satu",
    desc: "Fan terbesar lo di antara teman-teman. Pencapaian lo sekecil apapun, dia yang paling heboh.",
    questions: [
      "Siapa yang paling semangat kalau lo punya pencapaian?",
      "Siapa yang paling vokal bela lo di depan orang lain?"
    ]
  },
  {
    id: "planner",
    emoji: "📋",
    title: "The Planner",
    subtitle: "Ketua Panitia Dadakan",
    desc: "Kalau nggak ada dia, acara kalian nggak akan pernah jadi. Dari destinasi sampai budget — dia yang handle.",
    questions: [
      "Siapa yang paling sering jadi inisiator kalau mau ngadain acara?",
      "Siapa yang paling detail dan organized kalau planning sesuatu?"
    ]
  },
  {
    id: "foodie",
    emoji: "🍜",
    title: "The Foodie",
    subtitle: "Makan Dulu Baru Ngomong",
    desc: "GPS-nya selalu nunjuk ke arah makanan. Rekomendasinya nggak pernah salah — dan porsinya nggak pernah cukup.",
    questions: [
      "Siapa yang paling sering lapar dadakan di tengah acara?",
      "Siapa yang paling susah diajak diet?",
      "Siapa yang paling tau rekomen tempat makan enak?"
    ]
  },
  {
    id: "sleeper",
    emoji: "😴",
    title: "The Sleeper",
    subtitle: "Sultan Tidur",
    desc: "Bisa tidur di mana aja, kapan aja, dalam kondisi apapun. Skill langka yang tidak semua orang punya.",
    questions: [
      "Siapa yang paling bisa tidur di mana aja?",
      "Siapa yang paling susah dibangunin kalau udah ketiduran?"
    ]
  },
  {
    id: "lost",
    emoji: "🗺️",
    title: "The Lost One",
    subtitle: "GPS Rusak",
    desc: "Udah di-maps-in, udah dikasih petunjuk, tetep aja nyasar. Tapi somehow selalu nyampe juga.",
    questions: [
      "Siapa yang paling sering nyasar padahal udah pakai GPS?",
      "Siapa yang paling sering salah jalan waktu pergi bareng?"
    ]
  },
  {
    id: "lateone",
    emoji: "⏰",
    title: "The Late One",
    subtitle: "Jam Karet Certified",
    desc: "Kalau dia bilang '5 menit lagi', tandanya kalian harus duduk dulu, pesen minum, mungkin juga sempet tidur sebentar.",
    questions: [
      "Siapa yang paling sering telat dateng ke acara?",
      "Siapa yang bilang \"5 menit lagi\" tapi nyatanya 30 menit kemudian?"
    ]
  },
  {
    id: "drama",
    emoji: "🎭",
    title: "The Drama Royal",
    subtitle: "Oscar Worthy",
    desc: "Hidupnya penuh plot twist. Masalah kecil bisa jadi epic saga. Tapi justru itu yang bikin circle ini nggak boring.",
    questions: [
      "Siapa yang paling lebay kalau ada masalah kecil?",
      "Siapa yang paling sering bikin situasi jadi drama tanpa sengaja?"
    ]
  },
  {
    id: "ghoster",
    emoji: "👻",
    title: "The Ghoster",
    subtitle: "Now You See Me",
    desc: "Kadang ada, kadang nggak. Muncul tiba-tiba, menghilang tanpa jejak. Tapi waktu dia ada, seru banget.",
    questions: [
      "Siapa yang paling sering ghosting grup chat?",
      "Siapa yang paling susah dihubungi kalau lagi 'mode pesawat'?"
    ]
  },
  {
    id: "overthinker",
    emoji: "🌀",
    title: "The Overthinker",
    subtitle: "Baperan Profesional",
    desc: "Satu pesan bisa dianalisis dari 12 sudut pandang berbeda. Hatinya besar, pikirannya lebih besar lagi.",
    questions: [
      "Siapa yang paling baper kalau salah baca situasi?",
      "Siapa yang paling sering overthinking hal-hal sepele?"
    ]
  },
  {
    id: "cheapskate",
    emoji: "💸",
    title: "The Negotiator",
    subtitle: "Sultan Receh",
    desc: "Kreativitasnya paling tinggi waktu urusan patungan. Tapi entah kenapa, tetep aja disayang.",
    questions: [
      "Siapa yang paling kreatif kalau urusan patungan?",
      "Siapa yang paling sering 'lupa bawa dompet'?"
    ]
  },
  {
    id: "comedian",
    emoji: "😂",
    title: "The Comedian",
    subtitle: "Sumber Kebahagiaan",
    desc: "Jokes-nya receh, tapi entah kenapa selalu ngakak. Dia yang bikin suasana cair waktu semuanya awkward.",
    questions: [
      "Siapa yang paling sering bikin suasana cair waktu awkward?",
      "Siapa yang jokes-nya paling receh tapi tetep bikin ngakak?",
      "Siapa yang paling bisa bikin lo ketawa di situasi apapun?"
    ]
  },
  {
    id: "stalker",
    emoji: "🕵️",
    title: "The Stalker",
    subtitle: "FBI Agent Undercover",
    desc: "Tau urusan orang padahal nggak dikasih tau. Jeli, peka, dan selalu satu langkah lebih depan dari yang lain.",
    questions: [
      "Siapa yang paling tau urusan orang lain padahal nggak dikasih tau?",
      "Siapa yang paling jeli nangkep perubahan kecil pada orang lain?",
      "Siapa yang paling sering tau duluan kalau ada yang lagi ada masalah?"
    ]
  },
  {
    id: "peacemaker",
    emoji: "☮️",
    title: "The Peacemaker",
    subtitle: "Juru Damai",
    desc: "Kalau ada konflik, dia yang paling tenang. Bisa bikin semua pihak ngerasa didengar dan nggak ada yang menang-menangan.",
    questions: [
      "Siapa yang paling sering jadi penengah kalau ada konflik?",
      "Siapa yang paling bisa bikin semua pihak ngerasa didengar?"
    ]
  },
  {
    id: "wildcard",
    emoji: "🎲",
    title: "The Wildcard",
    subtitle: "Unpredictable Energy",
    desc: "Nggak ada yang tau dia bakal ngapain selanjutnya — termasuk dirinya sendiri. Tapi hasilnya selalu seru.",
    questions: [
      "Siapa yang paling sering bikin keputusan random tapi malah jadi seru?",
      "Siapa yang tingkahnya paling nggak bisa ditebak?"
    ]
  },
  {
    id: "influencer",
    emoji: "✨",
    title: "The Influencer",
    subtitle: "FYP Berjalan",
    desc: "Selalu tau tren terbaru sebelum orang lain. Rekomendasinya selalu diikutin — dan jarang salah.",
    questions: [
      "Siapa yang paling update sama tren terbaru?",
      "Siapa yang paling sering rekomen hal-hal baru ke circle?"
    ]
  },
  {
    id: "risktaker",
    emoji: "🚀",
    title: "The Risk Taker",
    subtitle: "YOLO Certified",
    desc: "Kalau ada yang nekat ngajak hal gila, dialah orangnya. Dan biasanya berakhir jadi kenangan terbaik.",
    questions: [
      "Siapa yang paling nekat kalau diajak hal baru?",
      "Siapa yang paling sering bilang 'yaudah coba aja dulu'?",
      "Siapa yang paling sering jadi alasan kenapa kalian ngelakuin hal gila?"
    ]
  },
  {
    id: "nostalgia",
    emoji: "📸",
    title: "The Nostalgia Kid",
    subtitle: "Penjaga Kenangan",
    desc: "Arsip hidup circle ini. Dia yang inget detail kejadian lama dan selalu bawa kalian balik ke momen-momen terbaik.",
    questions: [
      "Siapa yang paling sering ngeluarin foto atau video lama?",
      "Siapa yang paling inget detail kejadian yang udah lama banget?",
      "Siapa yang paling sering bilang 'eh inget nggak dulu waktu...'?"
    ]
  },
  {
    id: "og",
    emoji: "👑",
    title: "The OG",
    subtitle: "Jiwa Circle Ini",
    desc: "Nggak kebayang circle ini tanpa dia. Bukan karena dia yang paling berisik, tapi karena dia yang paling bikin semuanya utuh.",
    questions: [
      "Siapa yang paling nggak kebayang kalau nggak ada di circle ini?",
      "Siapa yang paling merepresentasiin vibes pertemanan kalian?"
    ]
  }
];
