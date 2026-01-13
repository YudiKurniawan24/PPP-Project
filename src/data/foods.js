// src/data/foods.js

export const foodsData = [
  // --- PULAU SUMATERA (1-10) ---
  {
    id: 1,
    name: 'Mie Aceh',
    origin: 'Aceh',
    shortDesc: 'Mie kuning tebal dengan bumbu kari yang kaya rempah.',
    description: 'Mie Aceh adalah masakan mie pedas khas Aceh. Mie kuning tebal dengan irisan daging sapi, kambing, atau seafood disajikan dalam sup sejenis kari yang gurih dan pedas.',
    image: '/images/mie-aceh.jpg',
    ingredients: ['Mie kuning basah', 'Daging sapi/udang', 'Kol & Tauge', 'Kecap manis'],
    spices: ['Cabai merah', 'Bawang putih', 'Kapulaga', 'Jintan', 'Kunyit'],
    steps: ['Tumis bumbu halus sampai wangi.', 'Masukkan daging, aduk hingga berubah warna.', 'Tuang air kaldu, didihkan.', 'Masukkan mie dan sayuran.', 'Sajikan dengan emping dan acar.']
  },
  {
    id: 2,
    name: 'Bika Ambon',
    origin: 'Sumatera Utara',
    shortDesc: 'Kue pipih berlubang-lubang, kenyal, dan manis.',
    description: 'Bika Ambon adalah kue khas Medan. Ciri khasnya adalah tekstur berongga seperti sarang lebah yang terbentuk dari fermentasi nira/tuak atau ragi.',
    image: '/images/bika-ambon.jpg',
    ingredients: ['Tepung tapioka', 'Santan kental', 'Kuning telur', 'Gula pasir', 'Nira/Ragi'],
    spices: ['Daun jeruk', 'Serai', 'Kunyit bubuk'],
    steps: ['Rebus santan dengan rempah, dinginkan.', 'Campur bahan kering dan telur.', 'Tuang santan, diamkan 3 jam hingga bergelembung.', 'Panggang dengan api bawah, biarkan pintu oven sedikit terbuka.']
  },
  {
    id: 3,
    name: 'Rendang',
    origin: 'Sumatera Barat',
    shortDesc: 'Daging sapi yang dimasak lama dengan santan dan rempah.',
    description: 'Rendang adalah masakan daging asli Minangkabau. Dihasilkan dari proses memasak suhu rendah dalam waktu lama menggunakan aneka rempah-rempah dan santan.',
    image: '/images/rendang.jpeg',
    ingredients: ['Daging sapi', 'Santan kental', 'Kelapa parut sangrai'],
    spices: ['Lengkuas', 'Serai', 'Jahe', 'Cabai merah', 'Bawang merah & putih'],
    steps: ['Masak santan dan bumbu hingga berminyak.', 'Masukkan daging.', 'Aduk terus dengan api kecil sampai kuah kering dan berwarna cokelat gelap (sekitar 4 jam).']
  },
  {
    id: 4,
    name: 'Gulai Ikan Patin',
    origin: 'Riau',
    shortDesc: 'Gulai ikan berwarna kuning pekat khas Melayu.',
    description: 'Gulai Ikan Patin khas Riau memiliki kuah berwarna kuning pekat. Potongan ikan patin yang besar berpadu dengan kuah santan yang gurih dan sedikit asam segar dari kecombrang.',
    image: '/images/gulai-ikan-patin.jpeg',
    ingredients: ['Ikan patin', 'Santan encer & kental', 'Bunga kecombrang'],
    spices: ['Kunyit', 'Lengkuas', 'Cabai rawit', 'Asam kandis'],
    steps: ['Bersihkan ikan patin, lumuri jeruk nipis.', 'Tumis bumbu halus.', 'Masukkan santan dan kecombrang.', 'Masak ikan hingga matang dan kuah mengental.']
  },
  {
    id: 5,
    name: 'Otak-otak',
    origin: 'Kepulauan Riau',
    shortDesc: 'Olahan daging ikan tenggiri dibungkus daun kelapa.',
    description: 'Otak-otak khas Kepri biasanya berwarna kemerahan karena campuran cabai. Rasanya pedas dan gurih, dibakar di atas arang menggunakan daun kelapa.',
    image: '/images/otak-otak.jpeg',
    ingredients: ['Ikan tenggiri giling', 'Tepung sagu', 'Santan', 'Daun kelapa'],
    spices: ['Cabai merah', 'Bawang merah', 'Bawang putih', 'Terasi'],
    steps: ['Campur ikan, tepung, santan, dan bumbu halus.', 'Ambil selembar daun kelapa, isi dengan adonan.', 'Sematkan lidi di kedua ujung.', 'Bakar di atas bara api hingga wangi.']
  },
  {
    id: 6,
    name: 'Tempoyak Ikan Patin',
    origin: 'Jambi',
    shortDesc: 'Masakan ikan dengan fermentasi durian yang asam gurih.',
    description: 'Tempoyak adalah masakan yang berasal dari buah durian yang difermentasi. Di Jambi, tempoyak biasanya dicampur dengan ikan patin segar.',
    image: '/images/tempoyak.jpeg',
    ingredients: ['Ikan patin', 'Tempoyak (durian fermentasi)', 'Air', 'Gula'],
    spices: ['Kunyit', 'Cabai merah', 'Serai'],
    steps: ['Haluskan bumbu, campur dengan tempoyak.', 'Didihkan air, masukkan campuran bumbu.', 'Masukkan ikan patin.', 'Masak hingga ikan matang dan kuah mengental.']
  },
  {
    id: 7,
    name: 'Pendap',
    origin: 'Bengkulu',
    shortDesc: 'Ikan berbumbu dibungkus daun talas dan direbus lama.',
    description: 'Pendap atau Ikan Pais adalah makanan khas Bengkulu. Ikan dibumbui dengan rempah-rempah beragam, dibungkus daun talas berlapis-lapis, lalu direbus hingga 8 jam.',
    image: '/images/pendap.jpeg',
    ingredients: ['Ikan mas/kakap', 'Daun talas', 'Kelapa parut sangrai'],
    spices: ['Bawang putih', 'Kencur', 'Cabai', 'Jahe', 'Lengkuas'],
    steps: ['Campur bumbu halus dengan kelapa parut.', 'Lumuri ikan dengan bumbu.', 'Bungkus dengan daun talas, ikat tali rafia.', 'Rebus dalam waktu lama hingga daun talas tidak gatal.']
  },
  {
    id: 8,
    name: 'Pempek',
    origin: 'Sumatera Selatan',
    shortDesc: 'Olahan ikan dan sagu dengan kuah cuko pedas asam.',
    description: 'Pempek adalah makanan khas Palembang yang terbuat dari daging ikan yang digiling lembut dicampur tepung kanji, disajikan dengan kuah cuko yang pedas, asam, dan manis.',
    image: '/images/pempek.jpeg',
    ingredients: ['Ikan tenggiri giling', 'Tepung sagu/tapioka', 'Air es'],
    spices: ['Bawang putih', 'Garam', 'Gula merah (untuk cuko)', 'Cabai rawit (untuk cuko)', 'Ebi'],
    steps: ['Campur ikan dan air es, masukkan tepung bertahap.', 'Bentuk adonan (lenjer/kapal selam).', 'Rebus di air mendidih hingga mengapung.', 'Goreng sebelum disajikan dengan cuko.']
  },
  {
    id: 9,
    name: 'Lempah Kuning',
    origin: 'Bangka Belitung',
    shortDesc: 'Sup ikan kuah kuning dengan rasa asam segar nanas.',
    description: 'Lempah Kuning adalah masakan khas Bangka. Ciri khasnya adalah kuah berwarna kuning dari kunyit dan rasa asam segar yang berasal dari potongan nanas atau asam jawa.',
    image: '/images/lempah-kuning.jpeg',
    ingredients: ['Ikan tenggiri/kakap', 'Nanas', 'Air asam jawa'],
    spices: ['Kunyit', 'Lengkuas', 'Cabai rawit', 'Terasi', 'Bawang merah'],
    steps: ['Bersihkan ikan.', 'Rebus air dan bumbu halus.', 'Masukkan nanas dan air asam.', 'Masukkan ikan, masak sebentar agar daging tidak hancur.']
  },
  {
    id: 10,
    name: 'Seruit',
    origin: 'Lampung',
    shortDesc: 'Ikan bakar yang dicampur sambal terasi dan tempoyak.',
    description: 'Seruit adalah makanan kebanggaan masyarakat Lampung. Terdiri dari ikan bakar yang dicampur dengan sambal terasi, tempoyak (durian fermentasi) atau mangga, dan dimakan dengan lalapan.',
    image: '/images/seruit.jpeg',
    ingredients: ['Ikan sungai (baung/belida)', 'Sambal terasi', 'Tempoyak/Mangga kweni'],
    spices: ['Jeruk nipis', 'Garam', 'Bawang merah (untuk sambal)'],
    steps: ['Bakar ikan hingga matang.', 'Siapkan sambal terasi di cobek besar.', 'Campurkan daging ikan ke dalam sambal.', 'Tambahkan tempoyak, aduk rata dengan tangan.']
  },

  // --- PULAU JAWA (11-16) ---
  {
    id: 11,
    name: 'Sate Bandeng',
    origin: 'Banten',
    shortDesc: 'Ikan bandeng tanpa duri yang dibakar dengan bumbu.',
    description: 'Sate Bandeng khas Banten sangat unik karena duri ikan sudah dihilangkan. Daging ikan dikeluarkan, dibumbui, lalu dimasukkan kembali ke kulitnya sebelum dibakar.',
    image: '/images/sate-bandeng.jpeg',
    ingredients: ['Ikan bandeng', 'Santan kental', 'Telur ayam'],
    spices: ['Ketumbar', 'Bawang merah & putih', 'Gula merah', 'Asam jawa'],
    steps: ['Pukul ikan agar daging lepas, keluarkan daging lewat insang.', 'Pisahkan duri, haluskan daging dengan bumbu.', 'Masukkan kembali ke kulit ikan.', 'Jepit bambu, bakar di atas bara.']
  },
  {
    id: 12,
    name: 'Kerak Telor',
    origin: 'DKI Jakarta',
    shortDesc: 'Omelet beras ketan khas Betawi dengan serundeng.',
    description: 'Kerak telor adalah jajanan khas Betawi. Terbuat dari beras ketan, telur bebek, dan ebi yang dimasak di wajan kecil tanpa minyak hingga berkerak, lalu wajan dibalik menghadap api.',
    image: '/images/kerak-telor.jpeg',
    ingredients: ['Beras ketan (rendam semalam)', 'Telur bebek', 'Ebi sangrai', 'Serundeng kelapa'],
    spices: ['Bawang merah goreng', 'Cabai', 'Kencur', 'Merica'],
    steps: ['Panaskan wajan, masukkan ketan dan sedikit air.', 'Tambahkan telur dan bumbu, aduk rata.', 'Ratakan di pinggir wajan.', 'Balik wajan agar permukaan atas terbakar api.', 'Taburi serundeng.']
  },
  {
    id: 13,
    name: 'Karedok',
    origin: 'Jawa Barat',
    shortDesc: 'Salad sayuran mentah dengan saus kacang khas Sunda.',
    description: 'Karedok adalah makanan khas Sunda yang dibuat dengan sayuran mentah seperti mentimun, tauge, kol, kacang panjang, dan daun kemangi yang disiram bumbu kacang.',
    image: '/images/karedok.jpeg',
    ingredients: ['Kacang panjang', 'Kol', 'Tauge', 'Timun', 'Kemangi'],
    spices: ['Kacang tanah goreng', 'Kencur', 'Bawang putih', 'Gula merah', 'Cabai rawit'],
    steps: ['Potong semua sayuran (biarkan mentah).', 'Ulek bumbu kacang, kencur, gula merah, dan air asam.', 'Campurkan sayuran ke dalam cobek, aduk rata.', 'Sajikan dengan kerupuk.']
  },
  {
    id: 14,
    name: 'Lumpia Semarang',
    origin: 'Jawa Tengah',
    shortDesc: 'Gorengan kulit tepung berisi rebung dan ayam/udang.',
    description: 'Lumpia Semarang adalah perpaduan budaya Tionghoa dan Jawa. Isian utamanya adalah rebung (bambu muda) yang dimasak manis gurih, dibungkus kulit lumpia, lalu digoreng.',
    image: '/images/lumpia.jpeg',
    ingredients: ['Kulit lumpia', 'Rebung (iris korek api)', 'Daging ayam/udang', 'Telur'],
    spices: ['Bawang putih', 'Ebi', 'Kecap manis', 'Merica'],
    steps: ['Tumis bawang putih dan ebi.', 'Masukkan udang/ayam dan rebung.', 'Beri kecap manis, masak hingga kering.', 'Isikan ke kulit lumpia, gulung, rekatkan.', 'Goreng hingga keemasan.']
  },
  {
    id: 15,
    name: 'Gudeg',
    origin: 'DI Yogyakarta',
    shortDesc: 'Nangka muda yang dimasak manis dengan gula merah.',
    description: 'Gudeg terbuat dari nangka muda yang dimasak dengan santan dan gula merah selama berjam-jam. Rasanya manis legit dan biasanya disajikan dengan krecek pedas.',
    image: '/images/gudeg.jpeg',
    ingredients: ['Nangka muda', 'Santan', 'Telur rebus', 'Daun jati (pewarna)'],
    spices: ['Bawang merah', 'Bawang putih', 'Ketumbar', 'Kemiri', 'Gula merah'],
    steps: ['Rebus nangka muda sebentar.', 'Masak santan, bumbu halus, gula merah, dan nangka.', 'Masak dengan api kecil hingga kuah habis dan nangka empuk (bisa 5 jam lebih).']
  },
  {
    id: 16,
    name: 'Rawon',
    origin: 'Jawa Timur',
    shortDesc: 'Sup daging sapi berkuah hitam pekat dari kluwek.',
    description: 'Rawon dikenal dengan kuah hitamnya yang unik berasal dari buah kluwek. Sup daging sapi ini memiliki aroma rempah yang kuat dan rasa gurih yang khas.',
    image: '/images/rawon.jpeg',
    ingredients: ['Daging sapi (sandung lamur)', 'Tauge pendek', 'Telur asin'],
    spices: ['Kluwek (rendam air panas)', 'Bawang merah & putih', 'Serai', 'Lengkuas'],
    steps: ['Rebus daging sampai empuk.', 'Tumis bumbu halus (termasuk kluwek).', 'Masukkan bumbu ke rebusan daging.', 'Sajikan panas dengan tauge pendek dan telur asin.']
  },

  // --- BALI & NUSA TENGGARA (17-19) ---
  {
    id: 17,
    name: 'Ayam Betutu',
    origin: 'Bali',
    shortDesc: 'Ayam utuh kaya rempah yang dikukus atau dipanggang.',
    description: 'Ayam Betutu dimasak dengan bumbu "Base Genep" khas Bali yang sangat kaya rempah. Ayam biasanya dibungkus daun pisang atau pelepah pinang lalu dimasak perlahan agar bumbu meresap.',
    image: '/images/ayam-betutu.jpeg',
    ingredients: ['1 ekor ayam kampung', 'Daun singkong', 'Daun pisang'],
    spices: ['Kunyit', 'Jahe', 'Kencur', 'Lengkuas', 'Bawang merah', 'Cabai', 'Minyak kelapa'],
    steps: ['Tumis bumbu halus hingga wangi.', 'Lumuri ayam dengan bumbu luar dalam.', 'Masukkan daun singkong ke perut ayam.', 'Bungkus daun pisang, kukus 2 jam, lalu bakar sebentar.']
  },
  {
    id: 18,
    name: 'Ayam Taliwang',
    origin: 'Nusa Tenggara Barat',
    shortDesc: 'Ayam bakar pedas dengan aroma terasi dan kencur.',
    description: 'Ayam Taliwang menggunakan ayam kampung muda yang dibakar dengan bumbu pedas menyengat. Ciri khasnya ada pada aroma terasi bakar dan kencur yang kuat.',
    image: '/images/ayam-taliwang.jpeg',
    ingredients: ['Ayam kampung muda', 'Jeruk limau'],
    spices: ['Cabai merah keriting', 'Cabai rawit', 'Terasi bakar', 'Kencur', 'Bawang putih'],
    steps: ['Tumis bumbu halus.', 'Ungkep ayam dengan bumbu dan sedikit air hingga empuk.', 'Bakar ayam di atas bara sambil diolesi sisa bumbu ungkep.']
  },
  {
    id: 19,
    name: 'Se\'i Sapi',
    origin: 'Nusa Tenggara Timur',
    shortDesc: 'Daging sapi asap tradisional khas Kupang.',
    description: 'Se\'i adalah metode pengawetan daging dengan cara diasap. Daging sapi diiris memanjang, dibumbui, lalu diasapkan dengan kayu kusambi yang memberikan aroma khas.',
    image: '/images/sei-sapi.jpeg',
    ingredients: ['Daging sapi', 'Daun pepaya (untuk membungkus saat diamkan)'],
    spices: ['Bawang putih', 'Garam', 'Lada'],
    steps: ['Iris daging memanjang, lumuri bumbu.', 'Diamkan beberapa saat.', 'Asap daging menggunakan kayu (tradisionalnya kayu kusambi) hingga matang dan kering.', 'Sajikan dengan sambal luat.']
  },

  // --- PULAU KALIMANTAN (20-24) ---
  {
    id: 20,
    name: 'Bubur Pedas',
    origin: 'Kalimantan Barat',
    shortDesc: 'Bubur beras sangrai dengan aneka sayuran dan pakis.',
    description: 'Meski namanya Bubur Pedas, rasanya tidak selalu pedas. Khasnya adalah beras yang disangrai dengan kelapa sebelum dimasak, serta campuran sayuran seperti pakis dan daun kesum.',
    image: '/images/bubur-pedas.jpeg',
    ingredients: ['Beras sangrai tumbuk', 'Pakis', 'Kangkung', 'Jagung', 'Kacang tanah'],
    spices: ['Daun kesum (wajib)', 'Bawang merah', 'Bawang putih', 'Lada hitam'],
    steps: ['Sangrai beras dan kelapa parut, tumbuk kasar.', 'Masak beras hingga jadi bubur.', 'Masukkan bumbu tumis dan sayuran.', 'Sajikan dengan kacang goreng dan ikan teri.']
  },
  {
    id: 21,
    name: 'Juhu Singkah',
    origin: 'Kalimantan Tengah',
    shortDesc: 'Sayur rotan muda (umbut rotan) yang gurih pahit.',
    description: 'Juhu Singkah adalah masakan khas Dayak yang menggunakan umbut rotan (rotan muda). Rasanya unik, perpaduan gurih, sedikit pahit, dan manis dari daging ikan.',
    image: '/images/juhu-singkah.jpeg',
    ingredients: ['Umbut rotan (potong kecil)', 'Ikan baung/gabus', 'Santan (opsional)'],
    spices: ['Bawang merah', 'Bawang putih', 'Kunyit', 'Lengkuas'],
    steps: ['Bersihkan umbut rotan, buang kulit durinya.', 'Rebus air, masukkan bumbu halus.', 'Masukkan rotan dan ikan.', 'Masak hingga rotan empuk.']
  },
  {
    id: 22,
    name: 'Soto Banjar',
    origin: 'Kalimantan Selatan',
    shortDesc: 'Soto berkuah bening dengan aroma rempah kayu manis.',
    description: 'Soto Banjar memiliki kuah yang harum karena penggunaan rempah kering seperti kayu manis, cengkeh, dan pala. Biasanya disajikan dengan ketupat dan perkedel.',
    image: '/images/soto-banjar.jpeg',
    ingredients: ['Ayam kampung', 'Ketupat', 'Perkedel kentang', 'Telur rebus'],
    spices: ['Kayu manis', 'Cengkeh', 'Pala', 'Kapulaga', 'Bawang putih'],
    steps: ['Rebus ayam dengan rempah utuh (kayu manis dll).', 'Tumis bumbu halus, masukkan ke kuah.', 'Angkat ayam, suwir-suwir.', 'Sajikan kuah panas di atas ketupat dan ayam.']
  },
  {
    id: 23,
    name: 'Ayam Cincane',
    origin: 'Kalimantan Timur',
    shortDesc: 'Ayam bakar dengan bumbu merah yang meresap.',
    description: 'Ayam Cincane adalah hidangan khas Samarinda. Ayam dimasak dulu dengan bumbu merah berbahan dasar cabai dan terasi hingga santan mengering, baru kemudian dibakar.',
    image: '/images/ayam-cincane.jpeg',
    ingredients: ['Ayam kampung', 'Santan'],
    spices: ['Cabai merah', 'Kemiri', 'Bawang merah', 'Terasi', 'Jahe'],
    steps: ['Tumis bumbu halus hingga wangi.', 'Masukkan ayam dan santan.', 'Masak hingga santan menyusut dan bumbu berminyak.', 'Bakar ayam sebentar di atas bara api.']
  },
  {
    id: 24,
    name: 'Kepiting Soka',
    origin: 'Kalimantan Utara',
    shortDesc: 'Kepiting cangkang lunak yang digoreng krispi.',
    description: 'Tarakan terkenal dengan kepiting soka (kepiting lemburi/cangkang lunak). Kepiting ini bisa dimakan utuh dengan cangkangnya, biasanya dimasak saus tiram atau digoreng tepung.',
    image: '/images/kepiting-soka.jpeg',
    ingredients: ['Kepiting soka segar', 'Tepung bumbu', 'Minyak goreng'],
    spices: ['Bawang putih bubuk', 'Lada', 'Garam'],
    steps: ['Bersihkan kepiting, potong jadi dua.', 'Celupkan ke adonan tepung basah, lalu ke tepung kering.', 'Goreng dalam minyak panas banyak (deep fry) hingga krispi.']
  },

  // --- PULAU SULAWESI (25-30) ---
  {
    id: 25,
    name: 'Tinutuan',
    origin: 'Sulawesi Utara',
    shortDesc: 'Bubur Manado yang penuh dengan labu dan jagung.',
    description: 'Tinutuan atau Bubur Manado adalah sarapan sehat kaya serat. Bubur beras dimasak dengan labu kuning, jagung manis, dan berbagai sayuran hijau seperti bayam dan kangkung.',
    image: '/images/tinutuan.jpeg',
    ingredients: ['Beras', 'Labu kuning', 'Jagung manis', 'Bayam', 'Kangkung', 'Kemangi'],
    spices: ['Garam', 'Serai', 'Daun bawang'],
    steps: ['Masak beras bersama jagung pipil dan potongan labu kuning hingga hancur menyatu.', 'Masukkan sayuran hijau sebentar saja.', 'Sajikan dengan sambal roa dan ikan asin jambal.']
  },
  {
    id: 26,
    name: 'Binte Biluhuta',
    origin: 'Gorontalo',
    shortDesc: 'Sup jagung siram dengan parutan kelapa dan udang.',
    description: 'Dikenal juga sebagai Milu Siram. Makanan ini berbahan dasar jagung manis yang dipipil, dimasak dengan udang atau ikan cakalang, dan diberi parutan kelapa serta jeruk nipis.',
    image: '/images/binte-biluhuta.jpeg',
    ingredients: ['Jagung manis pipil', 'Udang kupas', 'Kelapa parut (sedikit tua)', 'Daun kemangi'],
    spices: ['Bawang merah', 'Cabai rawit', 'Jeruk nipis', 'Garam'],
    steps: ['Rebus jagung hingga matang.', 'Masukkan irisan bawang, cabai, dan udang.', 'Tambahkan kelapa parut dan kemangi.', 'Beri perasan jeruk nipis sebelum disajikan.']
  },
  {
    id: 27,
    name: 'Kaledo',
    origin: 'Sulawesi Tengah',
    shortDesc: 'Sup kaki sapi (kaki lembu donggala) dengan kuah asam.',
    description: 'Kaledo adalah singkatan dari Kaki Lembu Donggala. Tulang kaki sapi dimasak lama hingga sumsumnya keluar. Kuahnya bening namun rasanya asam pedas yang sangat segar dari asam jawa.',
    image: '/images/kaledo.jpeg',
    ingredients: ['Tulang kaki sapi (dengan sumsum)', 'Asam jawa mentah'],
    spices: ['Cabai rawit hijau (utuh)', 'Garam', 'Jeruk nipis'],
    steps: ['Rebus tulang kaki sapi hingga empuk (metode slow cook).', 'Masukkan asam jawa dan cabai rawit utuh.', 'Masak hingga kuah terasa asam pedas segar.', 'Sajikan dengan singkong rebus.']
  },
  {
    id: 28,
    name: 'Bau Peapi',
    origin: 'Sulawesi Barat',
    shortDesc: 'Ikan masak kuah kuning asam dengan minyak mandar.',
    description: 'Bau Peapi adalah olahan ikan tuna atau cakalang yang dimasak dengan kuah kuning kental. Kuncinya ada pada penggunaan minyak kelapa asli Mandar dan asam mangga.',
    image: '/images/bau-peapi.jpeg',
    ingredients: ['Ikan tuna/cakalang', 'Minyak kelapa Mandar', 'Asam mangga (paccuka)'],
    spices: ['Bawang merah', 'Kunyit', 'Cabai rawit', 'Daun bawang'],
    steps: ['Tumis bawang merah dengan minyak kelapa.', 'Masukkan air, kunyit, dan asam mangga.', 'Masukkan ikan, masak hingga matang.', 'Taburi daun bawang.']
  },
  {
    id: 29,
    name: 'Coto Makassar',
    origin: 'Sulawesi Selatan',
    shortDesc: 'Soto jeroan sapi dengan kuah kacang tanah.',
    description: 'Coto Makassar memiliki kuah kental yang gurih karena campuran kacang tanah sangrai yang dihaluskan. Biasanya berisi daging dan jeroan sapi, dimakan dengan ketupat atau buras.',
    image: '/images/coto-makassar.jpeg',
    ingredients: ['Daging & Jeroan sapi', 'Air cucian beras (tajin)', 'Kacang tanah sangrai (haluskan)'],
    spices: ['Tauco', 'Jintan', 'Ketumbar', 'Serai', 'Lengkuas', 'Bawang putih'],
    steps: ['Rebus daging dengan air tajin.', 'Tumis bumbu halus dan kacang tanah.', 'Masukkan ke rebusan daging.', 'Masak lama hingga bumbu meresap.']
  },
  {
    id: 30,
    name: 'Sinonggi',
    origin: 'Sulawesi Tenggara',
    shortDesc: 'Makanan pokok dari pati sagu, mirip Papeda.',
    description: 'Sinonggi adalah makanan khas suku Tolaki. Terbuat dari pati sagu yang disiram air panas hingga menjadi lem. Disajikan dengan kuah ikan palumara atau sayur bening.',
    image: '/images/sinonggi.jpeg',
    ingredients: ['Tepung sagu berkualitas', 'Air mendidih', 'Jeruk nipis'],
    spices: ['(Pelengkap): Ikan Kuah Palumara'],
    steps: ['Rendam sagu dengan air dingin, buang airnya.', 'Siram dengan air mendidih sambil diaduk cepat hingga bening dan lengket.', 'Gulung dengan sumpit kayu (onggok), celup ke kuah ikan.']
  },

  // --- MALUKU & PAPUA (31-38) ---
  {
    id: 31,
    name: 'Ikan Kuah Kuning',
    origin: 'Maluku',
    shortDesc: 'Sup ikan segar teman sejati Papeda.',
    description: 'Ikan Kuah Kuning dimasak dengan kunyit dan kemangi. Rasanya ringan, segar, dan tidak amis. Sangat cocok disantap dengan papeda yang tawar.',
    image: '/images/ikan-kuah-kuning.jpeg',
    ingredients: ['Ikan tongkol/mubara', 'Kemangi', 'Jeruk nipis'],
    spices: ['Kunyit', 'Bawang merah', 'Cabai rawit', 'Serai'],
    steps: ['Tumis bumbu halus (kunyit, bawang).', 'Tambahkan air dan serai.', 'Masukkan ikan, masak hingga matang.', 'Masukkan daun kemangi dan perasan jeruk nipis.']
  },
  {
    id: 32,
    name: 'Gohu Ikan',
    origin: 'Maluku Utara',
    shortDesc: 'Sashimi ala Ternate, ikan mentah dengan kemangi.',
    description: 'Gohu Ikan terbuat dari daging ikan tuna atau cakalang mentah yang dipotong dadu, lalu "dimasak" dengan siraman minyak panas, perasan lemon cui, dan kacang tanah.',
    image: '/images/gohu-ikan.jpeg',
    ingredients: ['Ikan tuna segar (mentah)', 'Kacang tanah goreng', 'Lemon cui (jeruk ikan)'],
    spices: ['Cabai rawit', 'Bawang merah iris', 'Minyak kelapa panas', 'Daun kemangi'],
    steps: ['Potong dadu ikan tuna, cuci bersih.', 'Campur dengan perasan lemon cui dan garam.', 'Taburi bawang merah, cabai, kemangi.', 'Siram dengan minyak kelapa panas, taburi kacang.']
  },
  {
    id: 33,
    name: 'Papeda',
    origin: 'Papua',
    shortDesc: 'Bubur sagu lengket yang ikonik.',
    description: 'Papeda adalah makanan pokok masyarakat Papua dan Maluku. Teksturnya lengket seperti lem dan rasanya tawar, sehingga wajib dimakan dengan lauk berkuah kuat seperti Ikan Kuah Kuning.',
    image: '/images/papeda.jpeg',
    ingredients: ['Tepung sagu murni', 'Air mendidih', 'Jeruk nipis'],
    spices: ['Garam secukupnya'],
    steps: ['Cairkan sagu dengan sedikit air dingin.', 'Tuang air benar-benar mendidih sambil diaduk kuat.', 'Aduk terus hingga warna berubah bening dan tekstur mengental.']
  },
  {
    id: 34,
    name: 'Ikan Bakar Manokwari',
    origin: 'Papua Barat',
    shortDesc: 'Ikan tongkol bakar dengan sambal mentah super pedas.',
    description: 'Khasnya Ikan Bakar Manokwari adalah bumbu siramnya yang berupa sambal mentah dari cabai rawit yang digiling kasar dan disiramkan di atas ikan bakar.',
    image: '/images/ikan-bakar-manokwari.jpeg',
    ingredients: ['Ikan tongkol', 'Jeruk nipis'],
    spices: ['Cabai rawit merah (banyak)', 'Bawang merah', 'Garam', 'Gula'],
    steps: ['Lumuri ikan dengan jeruk nipis dan garam.', 'Bakar ikan hingga matang.', 'Ulek kasar cabai rawit dan bawang merah.', 'Siram sambal mentah di atas ikan bakar.']
  },
  {
    id: 35,
    name: 'Sagu Sep',
    origin: 'Papua Selatan',
    shortDesc: 'Pizza sagu bakar berisi daging rusa atau kelapa.',
    description: 'Sagu Sep adalah makanan khas suku Marind di Merauke. Terbuat dari sagu yang dicampur kelapa dan daging (biasanya rusa/babi/sapi), lalu dibakar di atas batu panas (bakar batu).',
    image: '/images/sagu-sep.jpeg',
    ingredients: ['Tepung sagu', 'Kelapa parut', 'Daging cincang'],
    spices: ['Bawang merah', 'Bawang putih', 'Garam'],
    steps: ['Campur sagu, kelapa, daging, dan bumbu.', 'Bentuk pipih lebar di atas daun pisang.', 'Tutup dengan daun pisang dan batu panas/bara api.', 'Bakar hingga matang.']
  },
  {
    id: 36,
    name: 'Kue Lontar',
    origin: 'Papua Tengah',
    shortDesc: 'Pie susu tebal dan lembut khas Papua.',
    description: 'Kue Lontar konon dibawa oleh penjajah Belanda (Rontart). Bentuknya seperti Pie Susu Bali tapi ukurannya jauh lebih besar (seukuran piring makan) dan isiannya sangat lembut.',
    image: '/images/kue-lontar.jpeg',
    ingredients: ['Tepung terigu (kulit)', 'Margarin (kulit)', 'Telur ayam (isi)', 'Susu kental manis (isi)'],
    spices: ['Vanili', 'Air hangat'],
    steps: ['Buat kulit pie, cetak di piring lontar.', 'Kocok telur dan susu perlahan (jangan berbusa).', 'Tuang ke kulit pie.', 'Oven dengan api kecil hingga set.']
  },
  {
    id: 37,
    name: 'Udang Selingkuh',
    origin: 'Papua Pegunungan',
    shortDesc: 'Udang air tawar dengan capit besar seperti kepiting.',
    description: 'Dinamakan selingkuh karena tubuhnya udang tapi punya capit besar seperti kepiting. Biasa ditemukan di Wamena (Sungai Baliem). Tekstur dagingnya padat dan manis.',
    image: '/images/udang-selingkuh.jpeg',
    ingredients: ['Udang selingkuh segar', 'Minyak goreng'],
    spices: ['Saus tiram', 'Saus tomat', 'Bawang bombay', 'Bawang putih'],
    steps: ['Bersihkan udang.', 'Goreng sebentar.', 'Tumis bawang bombay dan bawang putih.', 'Masukkan saus dan udang, masak hingga bumbu meresap.']
  },
  {
    id: 38,
    name: 'Aunu Senebre',
    origin: 'Papua Barat Daya',
    shortDesc: 'Ikan teri nasi campur kelapa dan daun talas.',
    description: 'Aunu Senebre adalah makanan sederhana namun lezat. Ikan teri nasi digoreng, lalu dicampur dengan irisan daun talas dan parutan kelapa, kemudian dikukus.',
    image: '/images/aunu-senebre.jpeg',
    ingredients: ['Ikan teri nasi (goreng)', 'Daun talas (iris tipis)', 'Kelapa parut'],
    spices: ['Garam', 'Tepung sagu (sedikit untuk pengikat)'],
    steps: ['Rebus daun talas hingga lunak, tiriskan.', 'Campur daun talas, ikan teri goreng, dan kelapa parut.', 'Kukus selama 20-30 menit.', 'Sajikan dengan Papeda.']
  }
];