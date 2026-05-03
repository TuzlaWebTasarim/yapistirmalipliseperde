export default function FinalCTA() {
  return (
    <section
      id="iletisim"
      className="section-pad"
      style={{ background: 'linear-gradient(135deg,#404e5e 0%,#2d3a48 100%)' }}
      aria-labelledby="cta-baslik"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

        <div className="badge mb-6 inline-flex" style={{ background: 'rgba(131,189,129,0.15)', borderColor: 'rgba(131,189,129,0.4)', color: '#83bd81' }}>
          <RocketIcon /> Hemen Başlayın
        </div>

        <h2 id="cta-baslik" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight text-white">
          <a href="/" title="Delmeden plise perde sipariş" className="text-white hover:text-[#83bd81] transition-colors">
            Delmeden Plise Perde
          </a>{' '}
          Siparişinizi Bugün Verin
        </h2>
        <p className="text-base sm:text-lg mb-4 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
          Ölçü alımından montaja kadar tüm süreç <strong className="text-white">ücretsiz danışmanlık</strong> kapsamındadır. WhatsApp veya telefon üzerinden ulaşın; fiyatı anında öğrenin.
        </p>
        <p className="text-sm mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
          Türkiye geneli montajlı teslim • Avrupa'ya 4-10 günde kapıya • 2 yıl garanti
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://wa.me/905403363873?text=Merhaba%2C%20yapıştırmalı%20plise%20perde%20için%20ölçü%20ve%20fiyat%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white text-base transition-all hover:scale-105 shadow-xl"
            style={{ background: 'linear-gradient(135deg,#83bd81,#6aa868)', boxShadow: '0 8px 32px rgba(131,189,129,0.4)' }}
          >
            <WAIcon />
            WhatsApp ile Teklif Al
          </a>
          <a
            href="tel:+905403363873"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white text-base border-2 transition-all hover:bg-white hover:text-[#404e5e]"
            style={{ borderColor: 'rgba(255,255,255,0.35)' }}
          >
            <PhoneIcon />
            +90 540 336 3873
          </a>
        </div>

        {/* Contact info grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {CONTACT_ITEMS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noopener noreferrer' : undefined}
              className="rounded-2xl p-4 flex flex-col gap-1.5 text-left transition-all hover:scale-105"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#83bd81' }}>{c.label}</div>
              <div className="text-sm font-medium text-white">{c.value}</div>
            </a>
          ))}
        </div>

        {/* Bayilik */}
        <div
          className="rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 justify-between"
          style={{ background: 'rgba(131,189,129,0.1)', border: '1px solid rgba(131,189,129,0.25)' }}
        >
          <div className="text-left">
            <div className="font-bold text-white mb-1">Bayilik Fırsatı</div>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              İç mimar, müteahhit veya esnaf mısınız? Özel bayi koşulları ve indirimli fiyat tablosu için WhatsApp'a yazın.
            </p>
          </div>
          <a
            href="https://wa.me/905403363873?text=Merhaba%2C%20bayilik%20koşulları%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white whitespace-nowrap transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg,#83bd81,#6aa868)' }}
          >
            <WAIcon /> Bayilik Başvurusu
          </a>
        </div>
      </div>
    </section>
  )
}

const CONTACT_ITEMS = [
  { label: 'Telefon', value: '+90 540 336 3873', href: 'tel:+905403363873', external: false },
  { label: 'WhatsApp', value: '+90 540 336 3873', href: 'https://wa.me/905403363873', external: true },
  { label: 'E-Posta', value: 'info@fenetresystems.com', href: 'mailto:info@fenetresystems.com', external: false },
  { label: 'Adres', value: 'Gebze / Kocaeli', href: 'https://maps.google.com/?q=Gebze+Kocaeli', external: true },
]

function WAIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
}
function PhoneIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
}
function RocketIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.82-.56l1.32.27zM11.17 17c.31-.13 3.58-1.53 5.87-3.57l.27 1.32c.12.67-.09 1.35-.56 1.82L12.5 20.5l-1.33-3.5zM19 3c-1.49 0-3.52.56-5.5 2.11L19 11.17c1.55-1.98 2.11-4.01 2.11-5.5C21.11 4.19 20.24 3 19 3zM3.5 18.5c-.97.97-.97 2.56 0 3.54.49.49 1.12.73 1.76.73.64 0 1.28-.24 1.77-.73L9 20l-1.5-1.5-4 0zM12 12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
}
