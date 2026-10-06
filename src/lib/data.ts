// Site içerikleri — hizmetler, ürünler ve kurumsal metinler.
// Görseller şimdilik Unsplash'ten geliyor; kendi fotoğraflarınızı public/images
// klasörüne koyup `image` alanlarını "/images/dosya.jpg" şeklinde güncelleyebilirsiniz.

export function unsplash(id: string, width = 1600) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`;
}

export const images = {
  hero: unsplash("1622372738946-62e02505feb3", 2400),
  craftsman: unsplash("1601058268499-e52658b8bb88"),
  carving: unsplash("1611021061285-16c871740efa"),
  saw: unsplash("1513467535987-fd81bc7d62f8"),
  lathe: unsplash("1558618666-fcd25c85cd64"),
  drawing: unsplash("1503387762-592deb58ef4e"),
  livingWood: unsplash("1600607687939-ce8a6c25118c", 2400),
  aboutHero: unsplash("1611021061285-16c871740efa", 2400),
  servicesHero: unsplash("1601058268499-e52658b8bb88", 2400),
  productsHero: unsplash("1618221195710-dd6b41faaea6", 2400),
  contactHero: unsplash("1556912172-45b7abe8b7e1", 2400),
  cta: unsplash("1615876234886-fd9a39fda97f", 2400),
};

export type ServiceIcon = "kitchen" | "wardrobe" | "door" | "office" | "design" | "restore";

export type Service = {
  slug: string;
  title: string;
  icon: ServiceIcon;
  summary: string;
  description: string;
  features: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "mutfak-dolabi",
    title: "Mutfak Dolapları",
    icon: "kitchen",
    summary: "Mekânınıza birebir ölçülen, uzun ömürlü ve fonksiyonel mutfak çözümleri.",
    description:
      "Mutfağınızı yerinde ölçüyor, kullanım alışkanlıklarınıza göre planlıyor ve kendi atölyemizde üretiyoruz. Masif, lake, akrilik ve membran kapak seçenekleriyle; kaliteli menteşe ve ray sistemleriyle yıllarca sorunsuz kullanım sunuyoruz.",
    features: [
      "Yerinde ölçü ve 3D çizim",
      "Lake, akrilik, membran ve masif kapak",
      "Frenli menteşe ve ray sistemleri",
      "Tezgâh ve ankastre uyumlu yerleşim",
    ],
    image: unsplash("1622372738946-62e02505feb3"),
  },
  {
    slug: "gardirop-giyinme-odasi",
    title: "Gardırop & Giyinme Odası",
    icon: "wardrobe",
    summary: "Her santimetreyi değerlendiren, düzenli ve şık depolama alanları.",
    description:
      "Yatak odası gardıroplarından gömme dolaplara ve giyinme odalarına kadar, iç düzenini sizinle birlikte kurguladığımız depolama sistemleri üretiyoruz. Sürgülü ya da menteşeli kapak, aydınlatma ve aksesuar seçenekleri projeye göre şekilleniyor.",
    features: [
      "Gömme ve duvardan duvara dolaplar",
      "Kişiye özel iç bölmelendirme",
      "Sürgülü ve menteşeli kapak sistemleri",
      "LED aydınlatma ve aksesuar seçenekleri",
    ],
    image: unsplash("1616627561839-074385245ff6"),
  },
  {
    slug: "kapi-ic-mekan-dograma",
    title: "Kapı & İç Mekân Doğrama",
    icon: "door",
    summary: "Amerikan panel, laminoks ve masif iç kapılar; pervaz ve duvar panelleri.",
    description:
      "İç kapılar, pervazlar, süpürgelikler ve ahşap duvar panelleriyle mekânın bütün ahşap detaylarını tek elden çözüyoruz. Ölçüye özel üretim sayesinde eski binalarda da kusursuz oturan kapılar teslim ediyoruz.",
    features: [
      "Masif, Amerikan panel ve laminoks kapı",
      "Pervaz, süpürgelik ve kasa",
      "Ahşap duvar ve tavan kaplamaları",
      "Merdiven ve korkuluk uygulamaları",
    ],
    image: unsplash("1600607687939-ce8a6c25118c"),
  },
  {
    slug: "ofis-mobilyasi",
    title: "Ofis Mobilyası",
    icon: "office",
    summary: "Kurumsal kimliğinizi yansıtan çalışma alanları ve toplantı mobilyaları.",
    description:
      "Yönetici masalarından toplantı masalarına, resepsiyon bankolarından arşiv dolaplarına kadar ofisinizin tamamını projelendiriyoruz. İş akışınızı aksatmamak için üretim ve montajı planlı bir takvimle yürütüyoruz.",
    features: [
      "Yönetici ve çalışma masaları",
      "Toplantı masası ve resepsiyon bankosu",
      "Arşiv, kitaplık ve depolama üniteleri",
      "Mağaza ve ticari alan dekorasyonu",
    ],
    image: unsplash("1611269154421-4e27233ac5c7"),
  },
  {
    slug: "ozel-tasarim",
    title: "Özel Tasarım Mobilya",
    icon: "design",
    summary: "TV üniteleri, kitaplıklar, yemek masaları — hayal ettiğiniz parça, ölçüsünde.",
    description:
      "Hazır mobilyada bulamadığınız ölçü, renk ve detayı birlikte tasarlıyoruz. Eskiz ve çizim aşamasından malzeme seçimine kadar her adımda yanınızdayız; sonuç, yalnızca sizin evinize ait bir parça oluyor.",
    features: [
      "TV ünitesi ve duvar sistemleri",
      "Kitaplık ve çalışma köşeleri",
      "Masif yemek ve sehpa takımları",
      "Banyo dolapları ve lavabo altı üniteler",
    ],
    image: unsplash("1594026112284-02bb6f3352fe"),
  },
  {
    slug: "restorasyon-tamir",
    title: "Restorasyon & Tamir",
    icon: "restore",
    summary: "Değer verdiğiniz mobilyalara ikinci bir ömür kazandırıyoruz.",
    description:
      "Antika ve eski mobilyaların zımpara, cila ve boya işlemlerini; kırık parça, menteşe ve mekanizma onarımlarını özenle yapıyoruz. Mevcut mutfak ve dolaplarınızın kapak yenilemesiyle mekânınızı kısa sürede tazeliyoruz.",
    features: [
      "Antika ve masif mobilya restorasyonu",
      "Zımpara, cila, vernik ve boya",
      "Kapak yenileme ve yüzey değişimi",
      "Mekanizma, menteşe ve ray onarımı",
    ],
    image: unsplash("1611021061285-16c871740efa"),
  },
];

export const productCategories = [
  "Mutfak",
  "Yatak Odası",
  "Oturma Odası",
  "Ofis",
  "Banyo",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "antrasit-ahsap-mutfak",
    name: "Antrasit & Ceviz Mutfak",
    category: "Mutfak",
    description: "Mat antrasit gövde, ceviz kaplama kapaklar ve gizli kulp detayı.",
    image: unsplash("1622372738946-62e02505feb3", 900),
  },
  {
    id: "ada-tezgahli-mutfak",
    name: "Ada Tezgâhlı Beyaz Mutfak",
    category: "Mutfak",
    description: "Masif meşe ada, beyaz lake kapaklar ve geniş depolama.",
    image: unsplash("1556912172-45b7abe8b7e1", 900),
  },
  {
    id: "l-mutfak",
    name: "L Planlı Modern Mutfak",
    category: "Mutfak",
    description: "Füme kapaklar, açık raf düzeni ve kompakt yerleşim.",
    image: unsplash("1600489000022-c2086d79f9d4", 900),
  },
  {
    id: "koyu-mutfak",
    name: "Koyu Tonlu Mutfak",
    category: "Mutfak",
    description: "Mermer görünümlü tezgâh ve koyu lake kapakların uyumu.",
    image: unsplash("1588854337236-6889d631faa8", 900),
  },
  {
    id: "mese-yatak-odasi",
    name: "Meşe Yatak Odası",
    category: "Yatak Odası",
    description: "Masif meşe karyola, komodin ve sade çizgiler.",
    image: unsplash("1616627561839-074385245ff6", 900),
  },
  {
    id: "kapitone-yatak-odasi",
    name: "Kapitone Başlıklı Yatak Odası",
    category: "Yatak Odası",
    description: "Kumaş kapitone başlık ve özel ölçü komodinler.",
    image: unsplash("1505693416388-ac5ce068fe85", 900),
  },
  {
    id: "konsol-sifonyer",
    name: "Konsol & Şifonyer",
    category: "Yatak Odası",
    description: "Beyaz lake gövde, meşe tabla ve itme açılımlı çekmeceler.",
    image: unsplash("1556020685-ae41abfc9365", 900),
  },
  {
    id: "ahsap-tv-unitesi",
    name: "Asma TV Ünitesi",
    category: "Oturma Odası",
    description: "Duvara monte modüler raflar ve ahşap-beyaz kombinasyon.",
    image: unsplash("1594026112284-02bb6f3352fe", 900),
  },
  {
    id: "yemek-odasi",
    name: "Yemek Odası Takımı",
    category: "Oturma Odası",
    description: "Masif tablalı yemek masası ve uyumlu sandalyeler.",
    image: unsplash("1617806118233-18e1de247200", 900),
  },
  {
    id: "ceviz-sehpa",
    name: "Kitaplıklı Yan Sehpa",
    category: "Oturma Odası",
    description: "Ceviz masif, el işçiliği birleşimler ve dergi bölmesi.",
    image: unsplash("1611486212557-88be5ff6f941", 900),
  },
  {
    id: "yonetici-masasi",
    name: "Masif Çalışma Masası",
    category: "Ofis",
    description: "Ceviz tabla, ince metal ayak ve kablo kanalı.",
    image: unsplash("1611269154421-4e27233ac5c7", 900),
  },
  {
    id: "duvar-calisma-masasi",
    name: "Duvara Monte Çalışma Alanı",
    category: "Ofis",
    description: "Az yer kaplayan asma masa ve raf kombinasyonu.",
    image: unsplash("1597072689227-8882273e8f6a", 900),
  },
  {
    id: "banyo-dolabi",
    name: "Ahşap Lavabo Dolabı",
    category: "Banyo",
    description: "Neme dayanıklı gövde, açık raf ve tezgâh üstü lavabo.",
    image: unsplash("1595515106969-1ce29566ff1c", 900),
  },
];

export const featuredProductIds = [
  "antrasit-ahsap-mutfak",
  "mese-yatak-odasi",
  "ahsap-tv-unitesi",
  "yonetici-masasi",
];

export const processSteps = [
  {
    title: "Keşif & Ölçü",
    description: "Mekânınızı yerinde inceliyor, ihtiyaçlarınızı dinliyor ve hassas ölçü alıyoruz.",
  },
  {
    title: "Tasarım & Teklif",
    description: "Çizim ve malzeme önerilerini sunuyor, net bir fiyat ve teslim tarihi veriyoruz.",
  },
  {
    title: "Atölyede Üretim",
    description: "Onaylanan projeyi kendi atölyemizde, usta ellerde ve kalite kontrolle üretiyoruz.",
  },
  {
    title: "Teslim & Montaj",
    description: "Ekibimiz montajı temiz ve özenle tamamlıyor; sonrasında da yanınızda oluyoruz.",
  },
];

export const values = [
  {
    title: "Kaliteli Malzeme",
    description: "Seçtiğimiz her levha, masif ve donanım uzun ömür ve güvenlik ölçütüyle belirlenir.",
  },
  {
    title: "El İşçiliği",
    description: "Modern makinelerin hassasiyetini, ustalarımızın yılların birikimi olan el işçiliğiyle birleştiririz.",
  },
  {
    title: "Şeffaf Süreç",
    description: "Fiyat, malzeme ve takvim baştan nettir; sürpriz maliyetlerle karşılaşmazsınız.",
  },
  {
    title: "Zamanında Teslim",
    description: "Verdiğimiz tarihe sadık kalır, montajı söz verdiğimiz gün eksiksiz tamamlarız.",
  },
];

export const stats = [
  { value: 1200, suffix: "+", label: "Tamamlanan proje" },
  { value: 950, suffix: "+", label: "Memnun müşteri" },
  { value: 12, suffix: "", label: "Kişilik usta kadro" },
];

export const materials = [
  "Masif Ceviz",
  "Meşe",
  "Lake",
  "Akrilik",
  "Membran",
  "Doğal Kaplama",
  "Laminat",
  "Kayın",
];
