export default function MaterialQuality() {
  return (
    <section
      id="kalite"
      className="section-pad"
      style={{ background: 'linear-gradient(160deg,#f4f7f4 0%,#eef7ed 100%)' }}
      aria-labelledby="kalite-baslik"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">
          <div className="badge inline-flex mb-4"><LayersIcon /> Malzeme & Kalite</div>
          <h2 id="kalite-baslik" className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: '#404e5e' }}>
            Neyi, Nasıl Üretiyoruz?
          </h2>
          <div className="divider-green mx-auto" />
          <p className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: '#5a6878' }}>
            <a href="/" title="Pliseli perde kalite standartları" style={{ color: '#83bd81', fontWeight: 600 }}>Pliseli perde</a> kalitesi iki unsura bağlıdır: profil alaşımı ve kumaş özellikleri. Her ikisinde de Avrupa Birliği direktiflerine uygun malzeme kullanıyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">

          {/* Profil */}
          <div className="rounded-2xl p-7 bg-white border" style={{ borderColor: '#e0ece0' }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: '#404e5e' }}>
              Alüminyum Profil Sistemi
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#5a6878' }}>
              <strong>14 mm genişliğindeki alüminyum profil</strong>, cam çerçeveye özel üretim çift taraflı bant ile sabitlenir. Profil alaşımı EN AW-6063 T5 standardında olup <em>korozyon direnci yüksek</em> ve boyasız işlem görmüştür. Yapışkan bant ise 3M sanayi tipi bant kalitesini benimser; ısı ve nem değişimlerine karşı <u>5 yıl boyunca</u> tutma gücünü korur.
            </p>
            <ul className="flex flex-col gap-2">
              {PROFILE_FEATURES.map((f) => (
                <li key={f} className="flex gap-2 text-sm" style={{ color: '#5a6878' }}>
                  <CheckG /> {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Kumaş */}
          <div className="rounded-2xl p-7 bg-white border" style={{ borderColor: '#e0ece0' }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: '#404e5e' }}>
              Kumaş Teknolojileri
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#5a6878' }}>
              Kumaş koleksiyonumuz beş farklı teknik kategoriye ayrılır. Tül ve saten grupları <strong>gün ışığı filtresiyle</strong> yumuşak atmosfer sunarken, blackout ve honeycomb serileri <em>güneş ışığını sıfırlar</em> ve ses yalıtımını artırır. Tüm kumaşlar antistatik apre görmüş; toz ve ince leke tutmaz.
            </p>
            <ul className="flex flex-col gap-2">
              {FABRIC_FEATURES.map((f) => (
                <li key={f} className="flex gap-2 text-sm" style={{ color: '#5a6878' }}>
                  <CheckG /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Teknik tablo */}
        <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: '#e0ece0' }}>
          <table className="styled-table">
            <caption className="sr-only">Yapıştırmalı Plise Perde Teknik Özellikler Tablosu</caption>
            <thead>
              <tr>
                <th>Bileşen</th>
                <th>Standart / Özellik</th>
                <th>Değer / Sınıf</th>
                <th>Avantaj</th>
              </tr>
            </thead>
            <tbody>
              {TECH_SPECS.map((r) => (
                <tr key={r.component}>
                  <td><strong>{r.component}</strong></td>
                  <td>{r.standard}</td>
                  <td><em>{r.value}</em></td>
                  <td>{r.benefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Applications */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {APPLICATIONS.map((a) => (
            <div
              key={a.title}
              className="card-hover rounded-2xl p-5 bg-white border flex flex-col gap-2"
              style={{ borderColor: '#e0ece0' }}
            >
              <div className="text-2xl" role="img" aria-label={a.title}>{a.emoji}</div>
              <h4 className="font-bold text-sm" style={{ color: '#404e5e' }}>{a.title}</h4>
              <p className="text-xs leading-relaxed" style={{ color: '#5a6878' }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const PROFILE_FEATURES = [
  '14 mm slim profil — cam yüzeyinde görünmez',
  'EN AW-6063 T5 alüminyum alaşımı',
  '3M çift taraflı endüstriyel yapışkan bant',
  'Mat ve parlak renk seçeneği (beyaz, antrasit, gümüş)',
  'Işıcam ve tek cam yüzeylere uyumlu',
  'Bant çekme kuvveti: 35 kg/m²',
]

const FABRIC_FEATURES = [
  'Antistatik apre — toz tutmaz',
  'Solmaz pigment boyama (EN ISO 105-B02)',
  'Blackout seri: %100 ışık engeli',
  'Honeycomb: hava cebi ısı yalıtımı',
  'Tül: %80 ışık filtresi, mahremiyet korunur',
  'Makine yıkama uyumlu (30°C, nazik program)',
]

const TECH_SPECS = [
  { component: 'Profil alaşımı', standard: 'EN AW-6063 T5', value: '0.8 mm et kalınlığı', benefit: 'Çarpma direnci yüksek' },
  { component: 'Yapışkan bant', standard: '3M VHB 4941', value: '35 kg/m² çekme', benefit: '5 yıl tutuş garantisi' },
  { component: 'Blackout kumaş', standard: 'EN 14501 Sınıf 5', benefit: '%100 ışık engeli', value: '250–280 g/m²' },
  { component: 'Honeycomb yapı', standard: 'ISO 10140-3', value: 'R=0.18 m²K/W', benefit: 'Enerji tasarrufu' },
  { component: 'Tül kumaş', standard: 'EN 13561', value: '%80 ışık filtresi', benefit: 'Yumuşak görünüm' },
  { component: 'Kılavuz ray', standard: 'EN 13120', value: 'Alüminyum, anodize', benefit: 'Korozyon dirençli' },
]

const APPLICATIONS = [
  { emoji: '🏠', title: 'Konut Balkonları', desc: 'Cam balkon ve ısıcam sistemlerde delmeden montaj. Kiralık evler için ideal.' },
  { emoji: '🏢', title: 'Ofis & Ticari', desc: 'Konferans odası, bölme sistemleri ve şeffaf cephelerde profesyonel görünüm.' },
  { emoji: '🏨', title: 'Otel & Konaklama', desc: 'Blackout oda perdesi; misafir konforu ve enerji tasarrufu bir arada.' },
  { emoji: '🪟', title: 'Çatı Katı & Tavan', desc: 'Eğimli ve trapez pencerelere özel kesim; standart boy ürün kullanılmaz.' },
]

function CheckG() {
  return <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0" aria-hidden="true"><circle cx="7.5" cy="7.5" r="7" fill="rgba(131,189,129,0.15)"/><path d="M4.5 7.5l2 2 4-4" stroke="#83bd81" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
function LayersIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
}
