'use client'
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#urunler', label: 'Ürünler' },
  { href: '#nasil-calisir', label: 'Nasıl Çalışır' },
  { href: '#kalite', label: 'Kalite' },
  { href: '#bolgeler', label: 'Hizmet Bölgeleri' },
  { href: '#sss', label: 'SSS' },
  { href: '#iletisim', label: 'İletişim' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" aria-label="Fenetre Systems Ana Sayfa" className="flex items-center gap-2.5 group">
          <PliseSVGLogo />
          <div className="leading-none">
            <span className="block text-sm font-800 tracking-tight" style={{ color: '#404e5e', fontWeight: 800 }}>
              Fenetre Systems
            </span>
            <span className="block text-[10px] font-500 tracking-widest uppercase" style={{ color: '#83bd81' }}>
              Yapıştırmalı Plise Perde
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Ana Menü">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 hover:text-[#83bd81]"
              style={{ color: scrolled ? '#404e5e' : '#404e5e' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/905403363873?text=Merhaba%2C%20yapıştırmalı%20plise%20perde%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: 'linear-gradient(135deg,#83bd81,#6aa868)' }}
          >
            <WhatsAppIcon />
            Teklif Al
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <span
            className={`block h-0.5 w-6 rounded transition-all duration-200 bg-[#404e5e] ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 rounded transition-all duration-200 bg-[#404e5e] ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 rounded transition-all duration-200 bg-[#404e5e] ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#e8f0e8] px-4 pb-5 pt-3 shadow-xl">
          <nav className="flex flex-col gap-1" aria-label="Mobil Menü">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2.5 text-sm font-medium text-[#404e5e] border-b border-[#f0f8ef] hover:text-[#83bd81] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/905403363873?text=Merhaba%2C%20yapıştırmalı%20plise%20perde%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold text-white"
            style={{ background: 'linear-gradient(135deg,#83bd81,#6aa868)' }}
          >
            <WhatsAppIcon />
            WhatsApp ile Teklif Al
          </a>
        </div>
      )}
    </header>
  )
}

function PliseSVGLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="36" height="36" rx="9" fill="#83bd81" fillOpacity="0.12" />
      <g>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={7 + i * 5} y="10" width="3" height="16" rx="1.5" fill="#83bd81" opacity={1 - i * 0.13} />
        ))}
      </g>
      <path d="M7 26 L29 26" stroke="#404e5e" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 10 L29 10" stroke="#404e5e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
