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
    title: "Si Paling Loyal",
    subtitle: "Bestie Sejati",
    desc: "Orang yang selalu ada, apapun yang terjadi (anjay). Nggak perlu bilang 2x dia udah ngerti.",
    questions: [
      "Siapa yang paling rela lu bangunin tengah malem kalo lu butuh?",
      "Siapa yang paling inget hal-hal kecil tentang lu?",
      "Siapa yang paling lu percaya buat bisa jaga rahasia?"
    ]
  },
  {
    id: "therapist",
    emoji: "🫂",
    title: "Si Paling Therapist",
    subtitle: "Tong Sampah Terbaik",
    desc: "Curhat ke beliau ini rasanya aman banget. Bisa jadi great listener, bisa jadi great supporter juga.",
    questions: [
      "Siapa yang paling enak diajak curhat?",
      "Siapa yang paling bijak kasih saran kalo lu lagi ada masalah?"
    ]
  },
  {
    id: "hypeman",
    emoji: "📣",
    title: "Si Paling Hype",
    subtitle: "Supporter Nomor Satu",
    desc: "Orang paling supportif sedunia. Pencapaian sekecil apapun, dianggep berharga.",
    questions: [
      "Siapa yang paling semangat kalo lu punya pencapaian?",
      "Siapa yang paling bisa bela lu di depan orang lain?"
    ]
  },
  {
    id: "planner",
    emoji: "📋",
    title: "Si Paling Planner",
    subtitle: "Ketua Panitia Dadakan",
    desc: "Kalo nggak ada orang ini, acara nggak akan jalan. Dari A sampe Z beliau ini yang handle.",
    questions: [
      "Siapa yang paling sering jadi inisiator kalo mau ngadain acara?",
      "Siapa yang paling detail dan organized kalo planning sesuatu?"
    ]
  },
  {
    id: "foodie",
    emoji: "🍜",
    title: "Si Paling Foodie",
    subtitle: "Makan Dulu Baru Ngomong",
    desc: "Intinya makan dulu, kemana-mana pokoknya harus makan.",
    questions: [
      "Siapa yang paling sering lapar dadakan di tengah acara?",
      "Siapa yang paling susah diajak diet?",
      "Siapa yang paling tau rekomen tempat makan enak?"
    ]
  },
  {
    id: "sleeper",
    emoji: "😴",
    title: "Si Paling Sleeper",
    subtitle: "Sultan Tidur",
    desc: "Ikut nongki cuma buat turu WKWKW. Keren tapi, nggak semua orang bisa.",
    questions: [
      "Siapa yang paling bisa tidur di mana aja?",
      "Siapa yang paling susah dibangunin kalo udah ketiduran?"
    ]
  },
  {
    id: "lost",
    emoji: "🗺️",
    title: "Si Paling Tersesat",
    subtitle: "GPS Rusak",
    desc: "Udah disharelok, udah dijelasin ini itu, masih nyasar. Tapi alhamdulillah masih bisa nyampe juga.",
    questions: [
      "Siapa yang paling sering nyasar padahal udah pake GPS?",
      "Siapa yang paling sering salah jalan waktu pergi bareng?"
    ]
  },
  {
    id: "lateone",
    emoji: "⏰",
    title: "Si Paling Ngaret",
    subtitle: "Jam Karet Certified",
    desc: "Kalo dia bilang 'otw', tandanya kita masih bisa mandi, masih bisa namatin kuliah, naik haji juga cukup.",
    questions: [
      "Siapa yang paling sering telat dateng ke acara?",
      "Siapa yang bilang \"5 menit lagi\" tapi nyatanya 30 menit baru sampe?"
    ]
  },
  {
    id: "drama",
    emoji: "🎭",
    title: "Si Paling Drama",
    subtitle: "Oscar Worthy",
    desc: "Hidupnya penuh plot twist. Masalah kecil bisa jadi drakor 26 episode. Tapi justru bikin jadi seru.",
    questions: [
      "Siapa yang paling lebay kalo ada masalah kecil?",
      "Siapa yang paling sering bikin situasi jadi drama tanpa sengaja?"
    ]
  },
  {
    id: "ghoster",
    emoji: "👻",
    title: "Si Paling Ninja",
    subtitle: "Now You See Me",
    desc: "Kadang nongol, kadang ngilang. Tapi kalo ada beliau ini, seru banget.",
    questions: [
      "Siapa yang paling sering ghosting grup chat?",
      "Siapa yang paling susah dihubungi kalo lagi 'mode pesawat'?"
    ]
  },
  {
    id: "overthinker",
    emoji: "🌀",
    title: "Si Paling Overthinking",
    subtitle: "Baperan Profesional",
    desc: "Sesuai title, kang overthinking. Hatinya besar, fikirannya lebih besar lagi.",
    questions: [
      "Siapa yang paling baper kalo salah baca situasi?",
      "Siapa yang paling sering overthinking hal-hal sepele?"
    ]
  },
  {
    id: "cheapskate",
    emoji: "💸",
    title: "Si Paling Nego",
    subtitle: "Sultan Receh",
    desc: "Kang nego, jago nego, apa-apa harus nego dulu. Calon CEO beliau ini kayaknya.",
    questions: [
      "Siapa yang paling kreatif kalo urusan patungan?",
      "Siapa yang jago banget 'itung-itungan'?"
    ]
  },
  {
    id: "comedian",
    emoji: "😂",
    title: "Si Paling Lawak",
    subtitle: "Sumber Kebahagiaan",
    desc: "Juaranya joke-joke receh, tapi selalu lucu. Lucu banget pokoknya orangnya.",
    questions: [
      "Siapa yang paling sering bikin suasana cair waktu awkward?",
      "Siapa yang jokes-nya paling receh tapi tetep bikin ngakak?",
      "Siapa yang paling bisa bikin lu ketawa di situasi apapun?"
    ]
  },
  {
    id: "stalker",
    emoji: "🕵️",
    title: "Si Paling Stalker",
    subtitle: "FBI Agent Undercover",
    desc: "Tau urusan orang padahal belom dikasih tau. Jeli, peka, the best pokoknya.",
    questions: [
      "Siapa yang paling tau urusan orang lain padahal nggak dikasih tau?",
      "Siapa yang paling jeli nangkep perubahan kecil orang lain?",
      "Siapa yang paling sering tau duluan kalo ada yang lagi ada masalah?"
    ]
  },
  {
    id: "peacemaker",
    emoji: "☮️",
    title: "Si Paling Peacemaker",
    subtitle: "Juru Damai",
    desc: "Kalo ada konflik, dia yang paling tenang. Bisa bikin semua pihak ngerasa didenger. Penengah pokoknya.",
    questions: [
      "Siapa yang paling sering jadi penengah kalo ada konflik?",
      "Siapa yang paling bisa bikin semua pihak ngerasa didenger?"
    ]
  },
  {
    id: "wildcard",
    emoji: "🎲",
    title: "Si Paling Random",
    subtitle: "Unpredictable Energy",
    desc: "Nggak ada yang tau dia bakal ngapain selanjutnya, agak random kayaknya orangnya. Tapi selalu out of the box.",
    questions: [
      "Siapa yang paling sering bikin keputusan random tapi malah jadi seru?",
      "Siapa yang tingkahnya paling nggak bisa ditebak?"
    ]
  },
  {
    id: "influencer",
    emoji: "✨",
    title: "Si Paling Influencer",
    subtitle: "FYP Berjalan",
    desc: "Selalu tau tren terbaru sebelum orang lain. Trendsetter abiez.",
    questions: [
      "Siapa yang paling update sama tren terbaru?",
      "Siapa yang paling sering rekomen hal-hal baru ke circle?"
    ]
  },
  {
    id: "risktaker",
    emoji: "🚀",
    title: "Si Paling Gokil",
    subtitle: "YOLO Certified",
    desc: "Kalo ada yang nekat ngajak hal-hal gila, ini orangnya nih. Coba tes aja japri.",
    questions: [
      "Siapa yang paling nekat kalo diajak hal baru?",
      "Siapa yang paling sering bilang 'yaudah coba aja dulu'?",
      "Siapa yang paling sering jadi alasan kenapa kalian ngelakuin hal gila?"
    ]
  },
  {
    id: "nostalgia",
    emoji: "📸",
    title: "Si Paling Nostalgia",
    subtitle: "Penjaga Kenangan",
    desc: "Arsip hidup circle ini. Dia yang inget detail kejadian lama dan selalu bawa kita balik ke momen terbaik kita.",
    questions: [
      "Siapa yang paling sering ngeluarin foto atau video lama?",
      "Siapa yang paling inget detail kejadian yang udah lama banget?",
      "Siapa yang paling sering bilang 'eh inget nggak dulu waktu...'?"
    ]
  },
  {
    id: "og",
    emoji: "👑",
    title: "Si Paling OG",
    subtitle: "Jiwa Circle Ini",
    desc: "Real OG! Nggak kebayang kalo gaada dia di circle ini. Paket lengkap pokoknya.",
    questions: [
      "Siapa yang paling nggak kebayang kalau nggak ada di circle ini?",
      "Siapa yang paling bikin circle ini terasa lengkap?"
    ]
  }
];
