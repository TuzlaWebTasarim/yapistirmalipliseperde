export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f6fbf6 0%, #eef7ed 40%, #fafdf9 100%)' }}
      aria-label="Ana Başlık Bölümü"
    >
      {/* Plise accordion SVG background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <PliseBgPattern />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 md:pt-36 md:pb-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <div className="badge mb-5">
            <LeafIcon />
            Türkiye Üretimi · Avrupa Standartları
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 tracking-tight" style={{ color: '#404e5e' }}>
            <a href="/" title="Yapıştırmalı Plise Perde Ana Sayfa" className="hover:text-[#83bd81] transition-colors">
              Yapıştırmalı
            </a>{' '}
            <span style={{ color: '#83bd81' }}>Plise Perde</span>
            <br />
            <span className="text-3xl sm:text-4xl font-bold" style={{ color: '#5a6878' }}>
              Delmeden. Kolayca. Kalıcı.
            </span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed mb-4" style={{ color: '#5a6878' }}>
            <strong>Cam yüzeyine yapışan 14 mm profil sistemi</strong> ile vida ve matkap gerektirmez.{' '}
            <a href="/" title="Plise perde modelleri" style={{ color: '#83bd81', fontWeight: 600 }}>
              Plise perde
            </a>{' '}
            sistemlerinde özel ölçü kesim, <em>montaj dahil teslimat</em> ve{' '}
            <u>2 yıl üretici garantisi</u> sunuyoruz.
          </p>
          <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: '#5a6878' }}>
            Gebze merkezli üretim tesisimizden Türkiye'nin her köşesine demonte teslimat yapılır; montaj ekibimiz kapınıza gelir.{' '}
            <strong>Almanya, Hollanda, Belçika, Fransa, Avusturya ve İsviçre</strong> başta tüm Avrupa ülkelerine{' '}
            <em>4–10 iş günü</em> içinde adrese teslim gerçekleştirilir.
          </p>

          {/* Stat bar */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center rounded-2xl py-3 px-2" style={{ background: 'rgba(131,189,129,0.1)', border: '1px solid rgba(131,189,129,0.25)' }}>
                <div className="text-2xl font-extrabold" style={{ color: '#404e5e' }}>{s.value}</div>
                <div className="text-[11px] font-medium mt-0.5" style={{ color: '#6aa868' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/905403363873?text=Merhaba%2C%20yapıştırmalı%20plise%20perde%20için%20ölçü%20ve%20fiyat%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
              style={{ background: 'linear-gradient(135deg,#83bd81,#6aa868)', boxShadow: '0 8px 24px rgba(131,189,129,0.35)' }}
            >
              <WASmallIcon />
              Ücretsiz Ölçü & Teklif
            </a>
            <a
              href="tel:+905403363873"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base border-2 transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ borderColor: '#404e5e', color: '#404e5e' }}
            >
              <PhoneSmallIcon />
              +90 540 336 3873
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mt-7">
            {TRUST.map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full" style={{ background: '#fff', border: '1px solid #e0f0de', color: '#404e5e' }}>
                <CheckSmall />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Plise illustration */}
        <div className="hidden md:flex items-center justify-center">
          <PliseWindowIllustration />
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60 Q360 0 720 30 Q1080 60 1440 20 L1440 60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}

const STATS = [
  { value: '2 Yıl', label: 'Garanti' },
  { value: '4-10 Gün', label: 'Avrupa Teslimat' },
  { value: '500+', label: 'Renk & Desen' },
]

const TRUST = ['Özel Ölçü', 'Montaj Dahil', 'AB Standartları', 'Delmeden Kurulum', 'Fabrika Fiyatı']

function LeafIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M17 8C8 10 5.9 16.17 3.82 21h2.71c.27-.9.59-1.79.97-2.63A11.96 11.96 0 0012 20c5.5 0 10-4.5 10-10V4L17 8z" />
    </svg>
  )
}

function WASmallIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function PhoneSmallIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}

function CheckSmall() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M2 6l3 3 5-5" stroke="#83bd81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PliseBgPattern() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      {Array.from({ length: 30 }).map((_, i) => (
        <line
          key={i}
          x1={`${i * 3.5}%`} y1="0"
          x2={`${i * 3.5}%`} y2="100%"
          stroke="#83bd81"
          strokeWidth="0.6"
          opacity="0.08"
        />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <path
          key={`arc-${i}`}
          d={`M ${i * 14}% 0 Q ${i * 14 + 7}% 50% ${i * 14 + 14}% 0`}
          stroke="#83bd81"
          strokeWidth="1"
          fill="none"
          opacity="0.06"
        />
      ))}
    </svg>
  )
}

function PliseWindowIllustration() {
  return (
    <svg width="420" height="460" viewBox="0 0 420 460" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Yapıştırmalı plise perde pencere görseli" role="img">
      {/* Window frame */}
      <rect x="40" y="30" width="340" height="400" rx="12" fill="#f0f7ef" stroke="#c5dfc4" strokeWidth="3" />
      <rect x="40" y="30" width="340" height="20" rx="8" fill="#404e5e" />

      {/* Top rail */}
      <rect x="60" y="68" width="300" height="12" rx="6" fill="#404e5e" />

      {/* Plise folds */}
      {Array.from({ length: 18 }).map((_, i) => {
        const y = 80 + i * 18
        const isEven = i % 2 === 0
        return (
          <g key={i}>
            <rect x="60" y={y} width="300" height="18" rx="0"
              fill={isEven ? 'rgba(131,189,129,0.18)' : 'rgba(131,189,129,0.08)'}
            />
            <line x1="60" y1={y} x2="360" y2={y} stroke="#83bd81" strokeWidth="0.8" opacity="0.5" />
          </g>
        )
      })}

      {/* Bottom rail */}
      <rect x="60" y="404" width="300" height="12" rx="6" fill="#404e5e" />

      {/* Cord/handle */}
      <circle cx="210" cy="404" r="8" fill="#6aa868" />
      <circle cx="210" cy="404" r="4" fill="#fff" />

      {/* Adhesive tape marks */}
      <rect x="60" y="62" width="24" height="8" rx="2" fill="#83bd81" opacity="0.6" />
      <rect x="336" y="62" width="24" height="8" rx="2" fill="#83bd81" opacity="0.6" />

      {/* Fenetre Systems label */}
      <rect x="120" y="420" width="180" height="26" rx="6" fill="#404e5e" opacity="0.07" />
      <text x="210" y="437" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#404e5e" fontWeight="600" opacity="0.7">
        Fenetre Systems
      </text>

      {/* Light effect through perde */}
      <ellipse cx="210" cy="240" rx="80" ry="100" fill="rgba(255,255,200,0.08)" />
    </svg>
  )
}
