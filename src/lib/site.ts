// Firma bilgileri — tüm iletişim ve kurumsal bilgiler buradan yönetilir.
// Yer tutucu değerleri gerçek bilgilerle değiştirmeniz yeterlidir.

export const site = {
  name: "Mert Mobilya",
  tagline: "Ahşapta Ustalık",
  description:
    "Edirne'de ölçüye özel mutfak dolabı, gardırop, kapı, ofis ve yaşam alanı mobilyaları üreten marangozluk ve mobilya atölyesi.",
  url: "https://www.mertmobilya.com",
  foundedYear: 2005,
  phone: "+90 (284) 000 00 00",
  phoneHref: "tel:+902840000000",
  // Uluslararası formatta, başında + ve boşluk olmadan
  whatsapp: "905000000000",
  email: "info@mertmobilya.com",
  address: {
    street: "Örnek Mahallesi, Atölye Sokak No: 1",
    district: "Merkez",
    city: "Edirne",
    postalCode: "22000",
    country: "TR",
  },
  hours: [
    { days: "Pazartesi – Cuma", time: "08:30 – 19:00" },
    { days: "Cumartesi", time: "09:00 – 17:00" },
    { days: "Pazar", time: "Kapalı" },
  ],
  social: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
  mapEmbedUrl: "https://www.google.com/maps?q=Edirne%20Merkez&z=13&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Edirne",
} as const;

export const navigation = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda/", label: "Hakkımızda" },
  { href: "/hizmetlerimiz/", label: "Hizmetlerimiz" },
  { href: "/urunler/", label: "Ürünler" },
  { href: "/iletisim/", label: "İletişim" },
] as const;

export const fullAddress = `${site.address.street}, ${site.address.district} / ${site.address.city}`;

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function yearsOfExperience() {
  return new Date().getFullYear() - site.foundedYear;
}
