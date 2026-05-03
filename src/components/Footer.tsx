export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: '#2d3a48', color: 'rgba(255,255,255,0.7)' }} aria-label="Site Altbilgisi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PliseLogo />
              <span className="text-white font-extrabold text-base">Fenetre Systems</span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <a href="/" title="Plise perde üreticisi" className="hover:text-[#83bd81] transition-colors" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Plise perde
              </a>{' '}
              ve sineklik sistemlerinde Türkiye'nin üretici markası.
            </p>
            <a
              href="https://www.fenetresystems.com"
              target="_blank"
              rel="dofollow noopener"
              className="text-sm font-semibold hover:text-[#83bd81] transition-colors"
              style={{ color: '#83bd81' }}
            >
              www.fenetresystems.com ↗
            </a>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Ürünler</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {FOOTER_PRODUCTS.map((p) => (
                <li key={p.label}>
                  <a href="/" title={p.title} className="hover:text-[#83bd81] transition-colors">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">İletişim</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><a href="tel:+905403363873" className="hover:text-[#83bd81] transition-colors">📞 +90 540 336 3873</a></li>
              <li><a href="https://wa.me/905403363873" target="_blank" rel="noopener noreferrer" className="hover:text-[#83bd81] transition-colors">💬 WhatsApp</a></li>
              <li><a href="mailto:info@fenetresystems.com" className="hover:text-[#83bd81] transition-colors">✉ info@fenetresystems.com</a></li>
              <li className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Cumhuriyet Mah. 2233 Sok. No:4/A Gebze / Kocaeli
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Sosyal Medya</h4>
            <div className="flex flex-wrap gap-2 mb-5">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold transition-all hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.08)', color: '#83bd81', border: '1px solid rgba(131,189,129,0.2)' }}
                  title={s.label}
                >
                  {s.short}
                </a>
              ))}
            </div>
            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Avrupa teslimat: 4-10 iş günü
            </div>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.35)' }}>
          <div>
            © {year}{' '}
            <a
              href="https://www.fenetresystems.com"
              target="_blank"
              rel="dofollow noopener"
              className="font-semibold hover:text-[#83bd81] transition-colors"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              Fenetre Systems
            </a>
            . Tüm hakları saklıdır.
          </div>
          <div className="flex gap-4">
            <a href="/" title="Yapıştırmalı plise perde" className="hover:text-[#83bd81] transition-colors">
              Yapıştırmalı Plise Perde
            </a>
            <a href="/" title="Gece gündüz plise perde" className="hover:text-[#83bd81] transition-colors">
              Gece Gündüz Plise
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const FOOTER_PRODUCTS = [
  { label: 'Yapıştırmalı Plise Perde', title: 'Yapıştırmalı plise perde modelleri' },
  { label: 'Gece Gündüz Plise Perde', title: 'Gece gündüz plise perde' },
  { label: 'Honeycomb Plise Perde', title: 'Honeycomb ısı yalıtımlı perde' },
  { label: 'Saten Plise Perde', title: 'Saten plise perde' },
  { label: 'Plise Sineklik', title: 'Plise sineklik sistemleri' },
  { label: 'Zip Perde', title: 'Zip perde sistemleri' },
]

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/FenetreSystems/', short: 'FB' },
  { label: 'Instagram', href: 'https://www.instagram.com/fenetresystems/', short: 'IG' },
  { label: 'Twitter / X', href: 'https://x.com/FenetreSystems', short: 'X' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/fenetresystems/', short: 'IN' },
  { label: 'Pinterest', href: 'https://tr.pinterest.com/fenetresystems/', short: 'PT' },
  { label: 'YouTube', href: 'https://www.youtube.com/@FenetreSystems', short: 'YT' },
]

function PliseLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="28" height="28" rx="7" fill="rgba(131,189,129,0.18)" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={5 + i * 5} y="8" width="3" height="12" rx="1.5" fill="#83bd81" opacity={1 - i * 0.18} />
      ))}
    </svg>
  )
}
