export default function BrandValue() {
  return (
    <section
      id="marka-degeri"
      className="section-pad"
      style={{ background: 'linear-gradient(160deg,#f4f7f4 0%,#eef7ed 100%)' }}
      aria-labelledby="marka-baslik"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>
            <div className="badge mb-4"><StarIcon /> Marka Değeri</div>
            <h2 id="marka-baslik" className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight" style={{ color: '#404e5e' }}>
              <strong>Fenetre Systems</strong> Farkı Nedir?
            </h2>
            <div className="divider-green" />
            <p className="text-base leading-relaxed mb-5" style={{ color: '#5a6878' }}>
              Gebze'deki üretim tesisimizde her perde, müşterinin pencere ölçülerine göre sıfırdan kesilir. Standart boy ürün yoktur; çünkü her pencere farklıdır. <strong>Fabrikadan kapıya</strong> zincir, aracı kârını ortadan kaldırır ve fiyatı kontrol altında tutar.
            </p>
            <p className="text-base leading-relaxed mb-7" style={{ color: '#5a6878' }}>
              Avrupa Birliği güvenlik ve malzeme standartlarına uygun bileşenler kullandığımız için <em>Almanya, Hollanda ve Belçika başta olmak üzere</em> Avrupalı müşteriler doğrudan sipariş verebilir. Kumaş antistatik işlem görmüş; profil alaşımı TS EN 12365 sınıfına uymaktadır.
            </p>

            <ul className="flex flex-col gap-3 mb-7">
              {BRAND_POINTS.map((p) => (
                <li key={p.title} className="flex gap-3 items-start">
                  <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'rgba(131,189,129,0.18)' }}>
                    <CheckGreen />
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: '#404e5e' }}>
                    <strong>{p.title}:</strong> {p.desc}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/905403363873?text=Merhaba%2C%20Fenetre%20Systems%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#83bd81,#6aa868)' }}
            >
              Üreticiyle Doğrudan Konuş
              <ArrowRight />
            </a>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-4">
            {BRAND_STATS.map((s) => (
              <div
                key={s.label}
                className="card-hover rounded-2xl p-6 flex flex-col gap-3 bg-white border"
                style={{ borderColor: '#e0ece0' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(131,189,129,0.12)' }}>
                  {s.icon}
                </div>
                <div className="text-3xl font-extrabold" style={{ color: '#404e5e' }}>{s.value}</div>
                <div className="text-sm font-medium" style={{ color: '#6aa868' }}>{s.label}</div>
                <p className="text-xs leading-relaxed" style={{ color: '#5a6878' }}>{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const BRAND_POINTS = [
  { title: 'Özel Ölçü Üretim', desc: 'Her sipariş müşteri ölçülerine göre fabrikada kesilir, hazır stok ürün gönderilmez.' },
  { title: 'Fabrikadan Kapıya', desc: 'Aracı depolarını atlayarak üretici fiyatıyla teslim; Türkiye\'de montaj ekibi kapınıza gelir.' },
  { title: 'AB Uyumlu Malzeme', desc: 'Kumaş ve profil bileşenleri Avrupa Birliği güvenlik yönetmeliklerine uygundur.' },
  { title: '2 Yıl Garanti', desc: 'Mekanizma ve profil için 2 yıl, kumaş solması için 3 yıl yazılı üretici garantisi sunulur.' },
  { title: 'Hızlı Kargo', desc: 'Türkiye\'de 1-3, Avrupa\'da 4-10 iş günü içinde adrese teslim; takip kodu anlık iletilir.' },
]

const BRAND_STATS = [
  { value: '12+', label: 'Yıllık Deneyim', note: 'Plise perde ve sineklik sistemlerinde köklü uzmanlık birikimi.', icon: <AwardIcon /> },
  { value: '38', label: 'İl Hizmet Kapsamı', note: 'Türkiye\'nin tüm illerine ekipli montaj ekiplerimizle ulaşıyoruz.', icon: <MapIcon /> },
  { value: '26+', label: 'Avrupa Ülkesi', note: 'AB üyesi ve diğer Avrupa ülkelerine sertifikalı kargo ile teslimat.', icon: <EuroIcon /> },
  { value: '500+', label: 'Renk & Desen', note: 'Fabrika kataloğumuzda 500\'ü aşkın kumaş, desen ve renk seçeneği.', icon: <PaletteIcon /> },
]

function CheckGreen() {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2 7l3.5 3.5 6-6" stroke="#83bd81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
function ArrowRight() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
function StarIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
}
function AwardIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="12" cy="9" r="7" stroke="#83bd81" strokeWidth="1.8"/><path d="M8.5 19.5l3.5-3 3.5 3M12 16v-3" stroke="#83bd81" strokeWidth="1.8" strokeLinecap="round"/></svg>
}
function MapIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#83bd81"/></svg>
}
function EuroIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18 6.24A7 7 0 0 0 6.07 11H5v2h1.07A7 7 0 0 0 18 17.76" stroke="#83bd81" strokeWidth="1.8" strokeLinecap="round"/><path d="M4 11h8M4 13h8" stroke="#83bd81" strokeWidth="1.8" strokeLinecap="round"/></svg>
}
function PaletteIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2v-.5c0-.55.45-1 1-1h2c3.31 0 6-2.69 6-6 0-5.52-4.48-10-11-10z" stroke="#83bd81" strokeWidth="1.8"/><circle cx="6.5" cy="11.5" r="1.5" fill="#83bd81"/><circle cx="9.5" cy="7.5" r="1.5" fill="#83bd81"/><circle cx="14.5" cy="7.5" r="1.5" fill="#83bd81"/><circle cx="17.5" cy="11.5" r="1.5" fill="#83bd81"/></svg>
}
