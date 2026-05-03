export default function Products() {
  return (
    <section id="urunler" className="section-pad bg-white" aria-labelledby="urunler-baslik">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">
          <div className="badge inline-flex mb-4">
            <FoldIcon />
            Ürün Gamı
          </div>
          <h2 id="urunler-baslik" className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: '#404e5e' }}>
            <a href="/" title="Plise perde çeşitleri" className="hover:text-[#83bd81] transition-colors">
              Plise Perde
            </a>{' '}
            Ürün Ailemiz
          </h2>
          <div className="divider-green mx-auto" />
          <p className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: '#5a6878' }}>
            Her pencere tipine, her ışık ihtiyacına ve her dekorasyon anlayışına uygun bir model. Fabrika doğrudan satış fiyatlarıyla, özel ölçü üretimle sunuyoruz.
          </p>
        </div>

        {/* Ana ürünler */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {MAIN_PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="card-hover rounded-2xl p-6 border flex flex-col gap-3"
              style={{ background: '#fafdf9', borderColor: '#e8f0e8' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(131,189,129,0.12)' }}>
                {p.icon}
              </div>
              <h3 className="text-base font-bold" style={{ color: '#404e5e' }}>
                <a href="/" title={p.name} className="hover:text-[#83bd81] transition-colors">
                  {p.name}
                </a>
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5a6878' }}>{p.desc}</p>
              <ul className="mt-auto flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <li key={t} className="text-[11px] font-medium px-2.5 py-1 rounded-full" style={{ background: '#f0f8ef', color: '#6aa868', border: '1px solid rgba(131,189,129,0.3)' }}>
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Diğer ürünler */}
        <div className="rounded-2xl p-7" style={{ background: 'linear-gradient(135deg,#f4f7f4,#eef7ed)' }}>
          <h3 className="text-lg font-bold mb-5" style={{ color: '#404e5e' }}>Diğer Ürün Sistemlerimiz</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {OTHER_PRODUCTS.map((p) => (
              <div key={p.name} className="flex items-center gap-3 rounded-xl p-3.5 bg-white border" style={{ borderColor: '#e0ece0' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(131,189,129,0.15)' }}>
                  <SmallCheck />
                </div>
                <span className="text-sm font-semibold" style={{ color: '#404e5e' }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Kumaş tipleri tablosu */}
        <div className="mt-12 overflow-x-auto rounded-2xl border" style={{ borderColor: '#e8f0e8' }}>
          <table className="styled-table">
            <caption className="sr-only">Plise Perde Kumaş Türleri Karşılaştırma Tablosu</caption>
            <thead>
              <tr>
                <th>Kumaş Türü</th>
                <th>Işık Geçişi</th>
                <th>Mahremiyet</th>
                <th>Isı Yalıtımı</th>
                <th>Kullanım Alanı</th>
              </tr>
            </thead>
            <tbody>
              {FABRIC_TABLE.map((r) => (
                <tr key={r.type}>
                  <td><strong>{r.type}</strong></td>
                  <td>{r.light}</td>
                  <td>{r.privacy}</td>
                  <td>{r.heat}</td>
                  <td>{r.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

const MAIN_PRODUCTS = [
  {
    name: 'Yapıştırmalı Plise Perde',
    desc: 'Cam çerçeveye özel çift taraflı yapışkan bant ile sabitlenen profil sistemi. Matkap ve vida gerektirmez; kira evleri için biçilmiş kaftan.',
    tags: ['Delmeden', 'Hızlı Montaj', 'Tüm Cam Tipleri'],
    icon: <StickyIcon />,
  },
  {
    name: 'Tam Yapıştırmalı Plise Perde',
    desc: 'Her iki ray da yapışkan sistem ile tutturulur. Dört bir tarafı kapalı çerçeve; kenar boşluğu bırakmaz ve soğuk havalarda ısı kaybını azaltır.',
    tags: ['Maksimum Yalıtım', 'Çerçeve İçi Montaj', 'Kış Konforu'],
    icon: <FullStickyIcon />,
  },
  {
    name: 'Yarı Yapıştırmalı Plise Perde',
    desc: 'Üst ray yapışkan; alt ray vida ile sabitlenir. Kurulum esnekliği ön planda. Kalıcı mekânlar için sağlam, kiracılar için pratik orta yol.',
    tags: ['Esnek Montaj', 'Karma Sistem', 'Dayanıklı'],
    icon: <HalfStickyIcon />,
  },
  {
    name: 'Gece Gündüz Plise Perde',
    desc: 'Aynı çerçevede ince tül ve güneş kırıcı olmak üzere iki bağımsız perde. Işık yumuşatma ile tam mahremiyet; tek hamlede geçiş yapılır.',
    tags: ['Çift Katman', 'Tül + Güneşlik', 'Bütün Gün Konfor'],
    icon: <DayNightIcon />,
  },
  {
    name: 'Saten Plise Perde',
    desc: 'Parlak yüzeyli dokuma; ışığı zarif şekilde kırar ve mekana sofistike bir görünüm katar. Oturma odası ve ofis projelerinde tercih edilen premium seri.',
    tags: ['Premium Doku', 'Parlak Yüzey', 'Şık Görünüm'],
    icon: <SatinIcon />,
  },
  {
    name: 'Honeycomb Plise Perde',
    desc: 'Petek hücreli çift cidarlı yapı; hava cebi oluşturarak ısı ve ses yalıtımını artırır. Enerji tasarrufu odaklı binalarda zorunlu tercih.',
    tags: ['Isı Yalıtımı', 'Ses Engeli', 'Enerji Tasarrufu'],
    icon: <HoneycombIcon />,
  },
]

const OTHER_PRODUCTS = [
  { name: 'Sineklik' },
  { name: 'Plise Sineklik' },
  { name: 'Jaluzi Perde' },
  { name: 'Düet Perde' },
  { name: 'Zip Perde' },
  { name: 'Tül Plise Perde' },
  { name: 'Keten Plise Perde' },
  { name: 'Baskılı Plise Perde' },
]

const FABRIC_TABLE = [
  { type: 'Tül', light: 'Yüksek', privacy: 'Düşük', heat: 'Minimal', usage: 'Oturma odası, balkon' },
  { type: 'Saten', light: 'Orta', privacy: 'Orta', heat: 'Orta', usage: 'Salon, ofis' },
  { type: 'Keten', light: 'Orta', privacy: 'İyi', heat: 'Orta', usage: 'Yatak odası, mutfak' },
  { type: 'Blackout', light: 'Sıfır', privacy: 'Tam', heat: 'Yüksek', usage: 'Yatak odası, sinema odası' },
  { type: 'Honeycomb', light: 'Ayarlı', privacy: 'Yüksek', heat: 'Çok Yüksek', usage: 'Tüm mekanlar' },
  { type: 'Baskılı', light: 'Değişken', privacy: 'Orta', heat: 'Orta', usage: 'Çocuk odası, yaratıcı mekan' },
]

function StickyIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="3" y="3" width="18" height="3" rx="1.5" fill="#83bd81"/><rect x="3" y="18" width="18" height="3" rx="1.5" fill="#83bd81"/><rect x="4" y="6" width="2" height="12" rx="1" fill="#404e5e" opacity="0.4"/><rect x="8" y="6" width="2" height="12" rx="1" fill="#404e5e" opacity="0.5"/><rect x="12" y="6" width="2" height="12" rx="1" fill="#404e5e" opacity="0.6"/><rect x="16" y="6" width="2" height="12" rx="1" fill="#404e5e" opacity="0.7"/></svg>
}
function FullStickyIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="3" y="3" width="18" height="3" rx="1.5" fill="#83bd81"/><rect x="3" y="18" width="18" height="3" rx="1.5" fill="#83bd81"/><rect x="3" y="6" width="3" height="12" rx="1.5" fill="#83bd81" opacity="0.5"/><rect x="18" y="6" width="3" height="12" rx="1.5" fill="#83bd81" opacity="0.5"/><rect x="7" y="6" width="2" height="12" rx="1" fill="#404e5e" opacity="0.5"/><rect x="11" y="6" width="2" height="12" rx="1" fill="#404e5e" opacity="0.6"/><rect x="15" y="6" width="2" height="12" rx="1" fill="#404e5e" opacity="0.7"/></svg>
}
function HalfStickyIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="3" y="3" width="18" height="3" rx="1.5" fill="#83bd81"/><rect x="3" y="18" width="18" height="3" rx="1.5" fill="#404e5e"/><rect x="6" y="6" width="2" height="12" rx="1" fill="#83bd81" opacity="0.6"/><rect x="10" y="6" width="2" height="12" rx="1" fill="#404e5e" opacity="0.5"/><rect x="14" y="6" width="2" height="12" rx="1" fill="#404e5e" opacity="0.6"/></svg>
}
function DayNightIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="#f9ca24" opacity="0.8"/><rect x="3" y="3" width="18" height="3" rx="1.5" fill="#83bd81"/><rect x="3" y="18" width="18" height="3" rx="1.5" fill="#83bd81"/><rect x="6" y="6" width="1.5" height="12" rx="0.75" fill="#f9ca24" opacity="0.5"/><rect x="10" y="6" width="1.5" height="12" rx="0.75" fill="#404e5e" opacity="0.8"/><rect x="14" y="6" width="1.5" height="12" rx="0.75" fill="#404e5e" opacity="0.9"/></svg>
}
function SatinIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M3 6 Q12 2 21 6 L21 18 Q12 22 3 18 Z" fill="#83bd81" opacity="0.2"/><path d="M3 6 Q12 2 21 6" stroke="#83bd81" strokeWidth="1.5"/><path d="M3 18 Q12 22 21 18" stroke="#83bd81" strokeWidth="1.5"/><rect x="5" y="6" width="1.5" height="12" rx="0.75" fill="#83bd81" opacity="0.6"/><rect x="9" y="6" width="1.5" height="12" rx="0.75" fill="#83bd81" opacity="0.5"/><rect x="13" y="6" width="1.5" height="12" rx="0.75" fill="#83bd81" opacity="0.6"/><rect x="17" y="6" width="1.5" height="12" rx="0.75" fill="#83bd81" opacity="0.5"/></svg>
}
function HoneycombIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 4 L16 7 L16 13 L12 16 L8 13 L8 7 Z" stroke="#83bd81" strokeWidth="1.5" fill="rgba(131,189,129,0.15)"/><path d="M6 8 L4 10 L4 14 L6 16 L8 14 L8 10 Z" stroke="#83bd81" strokeWidth="1" fill="rgba(131,189,129,0.1)" opacity="0.7"/><path d="M18 8 L16 10 L16 14 L18 16 L20 14 L20 10 Z" stroke="#83bd81" strokeWidth="1" fill="rgba(131,189,129,0.1)" opacity="0.7"/></svg>
}
function SmallCheck() {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2.5 7l3 3 6-6" stroke="#83bd81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
function FoldIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M4 4h2v16H4zm4 0h2v16H8zm4 0h2v16h-2zm4 0h2v16h-2z"/></svg>
}
