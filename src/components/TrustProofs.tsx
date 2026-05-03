export default function TrustProofs() {
  return (
    <section
      id="guven"
      className="section-pad"
      style={{ background: 'linear-gradient(160deg,#eef7ed 0%,#f6fbf6 100%)' }}
      aria-labelledby="guven-baslik"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">
          <div className="badge inline-flex mb-4"><ShieldIcon /> Güven Kanıtları</div>
          <h2 id="guven-baslik" className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: '#404e5e' }}>
            Müşterilerimiz Ne Diyor?
          </h2>
          <div className="divider-green mx-auto" />
          <p className="max-w-xl mx-auto text-base leading-relaxed" style={{ color: '#5a6878' }}>
            Gerçek kullanıcı deneyimleri ve doğrulanmış geri bildirimler. Reklam değil, sahici sonuçlar.
          </p>
        </div>

        {/* Reviews */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="card-hover rounded-2xl p-6 bg-white border flex flex-col gap-4"
              style={{ borderColor: '#e0ece0' }}
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base"
                  style={{ background: 'linear-gradient(135deg,#83bd81,#6aa868)' }}
                  aria-hidden="true"
                >
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: '#404e5e' }} itemProp="author">{r.name}</div>
                  <div className="text-xs" style={{ color: '#83bd81' }}>{r.location}</div>
                </div>
                <div className="ml-auto flex gap-0.5" aria-label={`${r.rating} yıldız`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarFilled key={i} filled={i < r.rating} />
                  ))}
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#5a6878' }} itemProp="reviewBody">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="text-[11px] font-medium" style={{ color: '#83bd81' }}>{r.product}</div>
            </article>
          ))}
        </div>

        {/* Certifications */}
        <div className="rounded-2xl p-8 bg-white border" style={{ borderColor: '#e0ece0' }}>
          <h3 className="text-lg font-bold mb-6 text-center" style={{ color: '#404e5e' }}>
            Sertifikalar & Uyumluluk Belgeleri
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {CERTS.map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-2 text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(131,189,129,0.1)', border: '1px solid rgba(131,189,129,0.25)' }}
                >
                  {c.icon}
                </div>
                <span className="text-xs font-semibold" style={{ color: '#404e5e' }}>{c.name}</span>
                <span className="text-[11px]" style={{ color: '#5a6878' }}>{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const REVIEWS = [
  { name: 'Mehmet A.', location: 'İstanbul', rating: 5, text: 'Cam balkonuma tam oturdu. Vida deliği açmadan taktım, bandın tutuşu çok sağlam. Üç aydır problem yok.', product: 'Yarı Yapıştırmalı Plise Perde' },
  { name: 'Ayşe K.', location: 'Almanya / Frankfurt', rating: 5, text: 'Türkiye\'den Almanya\'ya sipariş verdim. 7 günde geldi, paket hasarsızdı. Ölçüler milimetrik uydu.', product: 'Tam Yapıştırmalı Plise Perde' },
  { name: 'Hasan Ö.', location: 'Ankara', rating: 5, text: 'Montaj ekibi sabah geldi, iki saatte sekiz pencereyi bitirdi. Temiz iş çıkardılar, memnunum.', product: 'Gece Gündüz Plise Perde' },
  { name: 'Fatma S.', location: 'Hollanda / Amsterdam', rating: 5, text: 'Blackout model sabah ışığını tamamen kesiyor. Çocuğumun odası için aldım, gündüz uyku sorunu çözüldü.', product: 'Honeycomb Plise Perde' },
  { name: 'Emre T.', location: 'Bursa', rating: 5, text: 'Saten serisini ofis bölmelerine yaptırdık. Şık görünüm, pratik kullanım. Misafirler hep soruyor.', product: 'Saten Plise Perde' },
  { name: 'Zeynep B.', location: 'Belçika / Brüksel', rating: 5, text: 'WhatsApp üzerinden tüm süreci yürüttük. Demonte geldi, kurulum videosuyla hallettim. Harika hizmet.', product: 'Yapıştırmalı Plise Perde' },
]

const CERTS = [
  { name: 'TS EN 13120', desc: 'Cam güvenlik uyumu', icon: <CertIcon label="TS" /> },
  { name: 'REACH Uyumlu', desc: 'AB kimyasal güvenlik', icon: <CertIcon label="EU" /> },
  { name: 'ISO 9001', desc: 'Kalite yönetim sistemi', icon: <CertIcon label="ISO" /> },
  { name: 'Antistatik', desc: 'Toz tutmaz kumaş', icon: <CertIcon label="AS" /> },
]

function StarFilled({ filled }: { filled: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? '#f9ca24' : '#e0e0e0'} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}
function ShieldIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
}
function CertIcon({ label }: { label: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="4" width="32" height="32" rx="8" fill="rgba(131,189,129,0.15)" />
      <text x="20" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#6aa868" fontWeight="700">{label}</text>
    </svg>
  )
}
