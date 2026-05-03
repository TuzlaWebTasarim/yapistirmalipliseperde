export default function ProcessSection() {
  return (
    <section id="nasil-calisir" className="section-pad bg-white" aria-labelledby="surec-baslik">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">
          <div className="badge inline-flex mb-4"><GearIcon /> Sipariş Süreci</div>
          <h2 id="surec-baslik" className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: '#404e5e' }}>
            Siparişten Montaja — <span style={{ color: '#83bd81' }}>6 Kolay Adım</span>
          </h2>
          <div className="divider-green mx-auto" />
          <p className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: '#5a6878' }}>
            İlk ölçüden kurulum onayına kadar her aşamayı müşterimizle birlikte yürütürüz. Şeffaflık, hız ve sıfır sürpriz politikamızdır.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-2xl p-6 border flex flex-col gap-3"
              style={{ background: '#fafdf9', borderColor: '#e8f0e8' }}
            >
              <div className="flex items-center gap-3 mb-1">
                <span
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-extrabold"
                  style={{ background: i % 2 === 0 ? '#83bd81' : '#404e5e' }}
                >
                  {i + 1}
                </span>
                <h3 className="font-bold text-base" style={{ color: '#404e5e' }}>{s.title}</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#5a6878' }}>{s.desc}</p>
              <div className="mt-auto pt-3 text-xs font-semibold" style={{ color: '#83bd81' }}>
                ⏱ {s.time}
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M4 10h12M12 5l6 5-6 5" stroke="#83bd81" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Türkiye vs Avrupa */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-7 border" style={{ background: '#f4f7f4', borderColor: '#e0ece0' }}>
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2" style={{ color: '#404e5e' }}>
              <FlagTR /> Türkiye Teslimat Süreci
            </h3>
            <ol className="flex flex-col gap-2.5">
              {TR_PROCESS.map((p, i) => (
                <li key={i} className="flex gap-2.5 text-sm" style={{ color: '#5a6878' }}>
                  <span className="shrink-0 w-5 h-5 rounded-full text-[11px] font-bold flex items-center justify-center text-white" style={{ background: '#83bd81' }}>{i + 1}</span>
                  {p}
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl p-7 border" style={{ background: '#f4f7f4', borderColor: '#e0ece0' }}>
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2" style={{ color: '#404e5e' }}>
              <FlagEU /> Avrupa Teslimat Süreci
            </h3>
            <ol className="flex flex-col gap-2.5">
              {EU_PROCESS.map((p, i) => (
                <li key={i} className="flex gap-2.5 text-sm" style={{ color: '#5a6878' }}>
                  <span className="shrink-0 w-5 h-5 rounded-full text-[11px] font-bold flex items-center justify-center text-white" style={{ background: '#404e5e' }}>{i + 1}</span>
                  {p}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

const STEPS = [
  { title: 'Ölçü Alma', desc: 'WhatsApp veya telefon üzerinden pencere genişliği ve yüksekliği iletilir. Görüntülü ölçü desteği sunuyoruz.', time: '5 dakika' },
  { title: 'Model & Kumaş Seçimi', desc: 'Fiziksel kumaş kataloğumuz talep üzerine kargoya verilir. Online katalog anlık paylaşılır.', time: '1 gün' },
  { title: 'Teklif & Onay', desc: 'Ölçü, model ve kumaşa göre net fiyat yazılı olarak sunulur. Fiyat garantili; ek ücret yok.', time: '2 saat' },
  { title: 'Fabrika Üretimi', desc: 'Onaylı sipariş üretim bandına alınır. Her perde müşteri ölçüsüne göre 14 mm profil sistemde kesilir.', time: '1-3 iş günü' },
  { title: 'Paketleme & Kargo', desc: 'Profiller köpük koruyucularla, kumaşlar rulo ambalajla paketlenir. Kargo takip kodu SMS ile iletilir.', time: 'Aynı gün' },
  { title: 'Kurulum', desc: 'Türkiye\'de montaj ekibimiz kapınıza gelir. Avrupa\'da demonte teslim; kılavuz ve video destek sunulur.', time: '15-30 dakika' },
]

const TR_PROCESS = [
  'WhatsApp veya telefon ile ölçü iletilir.',
  'Kumaş seçimi yapılır; teklif yazılı gönderilir.',
  'Ödeme alındıktan sonra üretim başlar.',
  '1-3 iş gününde hazırlanır, kargo ile gönderilir.',
  'Montaj ekibi randevu alarak gelir ve kurar.',
]

const EU_PROCESS = [
  'WhatsApp veya e-posta ile iletişim kurulur.',
  'Kumaş kataloğu dijital olarak paylaşılır.',
  'Onay ve ödemenin ardından üretim başlar.',
  'DHL/DPD ile 4-10 iş günü içinde adrese teslim.',
  'Demonte paket; adım adım kılavuz ve video içerir.',
]

function GearIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.05 7.05 0 0 0-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87a.49.49 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.37 1.04.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
}
function FlagTR() {
  return <span className="text-lg" role="img" aria-label="Türkiye">🇹🇷</span>
}
function FlagEU() {
  return <span className="text-lg" role="img" aria-label="Avrupa Birliği">🇪🇺</span>
}
