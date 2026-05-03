export default function MarketRegions() {
  return (
    <section id="bolgeler" className="section-pad bg-white" aria-labelledby="bolgeler-baslik">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">
          <div className="badge inline-flex mb-4"><GlobeIcon /> Hizmet Coğrafyası</div>
          <h2 id="bolgeler-baslik" className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: '#404e5e' }}>
            Türkiye'den Avrupa'ya — Kapıya Teslim
          </h2>
          <div className="divider-green mx-auto" />
          <p className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: '#5a6878' }}>
            <a href="/" title="Yapıştırmalı plise perde fiyatları" style={{ color: '#83bd81', fontWeight: 600 }}>Yapıştırmalı plise perde</a> ürünlerimiz Gebze'deki fabrikamızdan çıkarak hem Türkiye'nin her şehrine montajlı, hem de Avrupa'nın tüm ülkelerine sertifikalı kargo ile ulaşır.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-12">

          {/* Türkiye */}
          <div className="rounded-2xl p-7 border" style={{ background: '#fafdf9', borderColor: '#e0ece0' }}>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: '#404e5e' }}>
              <span role="img" aria-label="Türkiye">🇹🇷</span> Türkiye Geneli Hizmet
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#5a6878' }}>
              İstanbul, Ankara, İzmir başta olmak üzere 81 ilin tamamına <strong>montajlı teslimat</strong> yapıyoruz. Ekibimiz kapınıza gelir, ölçü kontrolü yapar ve kurulumu tamamlar; kilit teslim eder. Kargo+montaj paketi tek fiyata sunulur.
            </p>
            <div className="grid grid-cols-3 gap-2">
              {TR_CITIES.map((c) => (
                <div key={c} className="text-xs font-medium px-2.5 py-1.5 rounded-lg text-center" style={{ background: '#f0f8ef', color: '#404e5e', border: '1px solid rgba(131,189,129,0.25)' }}>
                  {c}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs font-medium" style={{ color: '#6aa868' }}>+ Türkiye'nin tüm illeri</p>
          </div>

          {/* Avrupa */}
          <div className="rounded-2xl p-7 border" style={{ background: '#fafdf9', borderColor: '#e0ece0' }}>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: '#404e5e' }}>
              <span role="img" aria-label="Avrupa">🇪🇺</span> Avrupa Teslimat Ağı
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#5a6878' }}>
              <em>Almanya, Hollanda, Belçika, Fransa, Avusturya ve İsviçre</em> öncelikli teslimat ülkelerimiz arasındadır. Ancak AB'nin tüm üye devletleri ve Norveç, İsviçre, İngiltere, Arnavutluk dahil <strong>26'yı aşkın ülkeye</strong> gönderim yapılmaktadır. DHL ve DPD iş birliği ile kargo takibi anlık paylaşılır.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {EU_COUNTRIES.map((c) => (
                <div key={c.name} className="flex items-center gap-2 text-sm rounded-xl px-3 py-2" style={{ background: '#f4f7f4', border: '1px solid rgba(64,78,94,0.1)' }}>
                  <span role="img" aria-label={c.name}>{c.flag}</span>
                  <span style={{ color: '#404e5e' }}>{c.name}</span>
                  <span className="ml-auto text-[11px] font-semibold" style={{ color: '#83bd81' }}>{c.days}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Market table */}
        <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: '#e0ece0' }}>
          <table className="styled-table">
            <caption className="sr-only">Avrupa Teslimat Bilgileri</caption>
            <thead>
              <tr>
                <th>Ülke Grubu</th>
                <th>Teslimat Süresi</th>
                <th>Kargo Partneri</th>
                <th>Takip Kodu</th>
                <th>Paketleme</th>
              </tr>
            </thead>
            <tbody>
              {DELIVERY_TABLE.map((r) => (
                <tr key={r.group}>
                  <td><strong>{r.group}</strong></td>
                  <td>{r.days}</td>
                  <td>{r.carrier}</td>
                  <td>{r.tracking}</td>
                  <td>{r.pack}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

const TR_CITIES = ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Kocaeli', 'Konya', 'Adana', 'Gaziantep', 'Mersin', 'Kayseri', 'Trabzon']

const EU_COUNTRIES = [
  { name: 'Almanya', flag: '🇩🇪', days: '5-7 gün' },
  { name: 'Hollanda', flag: '🇳🇱', days: '4-6 gün' },
  { name: 'Belçika', flag: '🇧🇪', days: '4-6 gün' },
  { name: 'Fransa', flag: '🇫🇷', days: '6-8 gün' },
  { name: 'Avusturya', flag: '🇦🇹', days: '5-7 gün' },
  { name: 'İsviçre', flag: '🇨🇭', days: '6-9 gün' },
  { name: 'İtalya', flag: '🇮🇹', days: '7-10 gün' },
  { name: 'İspanya', flag: '🇪🇸', days: '8-10 gün' },
]

const DELIVERY_TABLE = [
  { group: 'Türkiye', days: '1-3 iş günü', carrier: 'Yurtiçi Kargo', tracking: 'SMS + WhatsApp', pack: 'Köpük koruyucu' },
  { group: 'Almanya, Hollanda, Belçika', days: '4-7 iş günü', carrier: 'DHL Express', tracking: 'Anlık takip', pack: 'Darbeye dayanıklı' },
  { group: 'Fransa, Avusturya', days: '5-8 iş günü', carrier: 'DPD / DHL', tracking: 'E-posta link', pack: 'Çift katman naylon' },
  { group: 'İsviçre, İtalya', days: '6-10 iş günü', carrier: 'DHL International', tracking: 'E-posta link', pack: 'Özel köşe koruma' },
  { group: 'Diğer Avrupa', days: '7-12 iş günü', carrier: 'DHL / UPS', tracking: 'Takip kodu', pack: 'Standart koruma' },
]

function GlobeIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
}
