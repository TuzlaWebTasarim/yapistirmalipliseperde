'use client'
import { useState } from 'react'

const FAQS = [
  {
    q: 'Yapıştırmalı plise perde nedir, nasıl çalışır?',
    a: 'Yapıştırmalı plise perde; cam çerçevesine ya da pencere kasasına özel çift taraflı yapışkan bant ile sabitlenen, katlanır akordeon yapılı bir perde sistemidir. 14 mm ince profiller cam yüzeyine yapışır; perdeler bu profillerin içindeki kılavuz rayda ileri-geri hareket eder. Vida veya matkap kullanılmaz. Cam açıldığında perde de camla birlikte hareket ettiğinden balkon sistemlerine biçilmiş kaftan özelliğindedir.',
  },
  {
    q: 'Montaj için usta gelmesi gerekiyor mu?',
    a: 'Türkiye siparişlerinde ücretsiz montaj ekibi hizmeti sunulur. Avrupa ve yurt dışı siparişleri demonte olarak gönderilir; ürünle birlikte adım adım Türkçe-İngilizce-Almanca kılavuz ve video QR kodu eklenir. Çoğu müşteri bu kılavuzla 15-20 dakikada kurulumu tamamlar.',
  },
  {
    q: 'Yapışkan bant cam yüzeyine zarar verir mi?',
    a: 'Hayır. Kullandığımız 3M VHB sanayi tipi bant, cam yüzeyini çizmez ve leke bırakmaz. Söküldüğünde cam üzerinde iz kalmaz; bant artığı varsa %99 alkol veya izopropil alkol ile kolayca temizlenir. Bant, normal oda sıcaklığında beş yılı aşkın süre yapışkanlığını korur.',
  },
  {
    q: 'Kaç günde teslim alırım?',
    a: 'Türkiye içinde siparişler 1-3 iş günü içinde hazırlanır ve kargo verilir. Kargo süresi 1-2 iş günüdür. Almanya, Hollanda ve Belçika için toplam süre 4-7 iş günüdür. Fransa ve Avusturya 5-8, İsviçre ve İtalya ise 6-10 iş günüdür. Kargo takip kodu SMS ve WhatsApp ile anlık iletilir.',
  },
  {
    q: 'Ölçü nasıl almalıyım?',
    a: 'Cam ya da pencere kasasının iç genişliğini ve yüksekliğini milimetre cinsinden ölçün. Balkon sistemleri için her kanat ayrı ayrı ölçülmelidir. Ölçü fotoğrafını WhatsApp\'a gönderirseniz teknik ekibimiz sizi bilgilendirir. Hata payı veya tolerans keserimize dahil olduğundan ekstra ölçü bırakmanıza gerek yoktur.',
  },
  {
    q: 'Hangi cam tiplerine uyumlu?',
    a: 'Isıcam, tek cam, temperli cam, lamineli cam ve PVC çerçeveli tüm pencere sistemlerine uygulanabilir. Alüminyum çerçeveli katlanır cam balkon (akordiyon) sistemlerine de montaj yapılmaktadır. Ancak yüzeyde silikon, yağ veya kir varsa bant tutunmayabilir; montaj öncesi alkollü bezle temizlik yapılması önerilir.',
  },
  {
    q: 'Garanti kapsamı nedir?',
    a: 'Mekanizma ve profil sistemi için 2 yıl, kumaş solması ve renk bozulması için 3 yıl yazılı üretici garantisi verilir. Kullanım hatası, fiziksel darbe veya yanlış temizlik ürünü kaynaklı hasarlar kapsam dışındadır. Garanti belgesi her siparişle birlikte gönderilir.',
  },
  {
    q: 'Fiyatlar neye göre değişiyor?',
    a: 'Fiyat; pencere ölçüsü, kumaş türü (tül, saten, blackout, honeycomb) ve montaj sistemine (yarı yapıştırmalı, tam yapıştırmalı) göre belirlenir. Standart fiyatlarımız fabrikadan doğrudan satış yapıldığından piyasanın altındadır. Kesin teklif için ölçü ve model tercihinizi WhatsApp\'a göndermeniz yeterlidir.',
  },
  {
    q: 'Temizlik nasıl yapılır?',
    a: 'Kumaş temizliği için ılık suyla nemlendirilmiş yumuşak bir bez yeterlidir; deterjan kullanılmasına gerek yoktur. Antistatik apre sayesinde günlük toz tutulmaz. Kumaş, kasasından çıkarılarak 30°C nazik programda makinede yıkanabilir. Profil rayları ise kuru bir bez veya yumuşak fırça ile temizlenir.',
  },
  {
    q: 'Avrupa\'ya nasıl sipariş verebilirim?',
    a: 'WhatsApp (+90 540 336 3873) veya e-posta (info@fenetresystems.com) yoluyla iletişime geçin. Ölçü ve model bilginizi paylaşın; fatura ve ödeme seçeneklerini (banka transferi veya PayPal) sunuyoruz. Ödeme onayından sonra üretim başlar; kargo firması takip koduyla birlikte bildirilir.',
  },
  {
    q: 'Bayilik veya toplu sipariş yapılabiliyor mu?',
    a: 'Evet. Mimar, iç mimar, müteahhit ve esnaf ortaklarımıza özel bayilik koşulları sunulmaktadır. Toplu siparişlerde indirimli fiyat tablosu ve öncelikli üretim sırası avantajı sağlanır. Bayilik için WhatsApp üzerinden "Bayilik" yazarak başvurabilirsiniz.',
  },
  {
    q: 'Renk ve desen seçimi nasıl yapılır?',
    a: 'Fiziksel kumaş kartelası talep üzerine kargo ücreti dahil olarak gönderilir. Dijital katalog ise WhatsApp\'a anlık iletilir. 500\'ü aşkın renk ve desen seçeneği mevcuttur. Baskılı ve desenli seriler için özel görsel baskı da kabul edilmektedir.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <section id="sss" className="section-pad bg-white" aria-labelledby="sss-baslik">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">
          <div className="badge inline-flex mb-4"><QuestionIcon /> SSS</div>
          <h2 id="sss-baslik" className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: '#404e5e' }}>
            Sıkça Sorulan Sorular
          </h2>
          <div className="divider-green mx-auto" />
          <p className="text-base leading-relaxed" style={{ color: '#5a6878' }}>
            <a href="/" title="Cam balkon plise perde" style={{ color: '#83bd81', fontWeight: 600 }}>Cam balkon plise perde</a> siparişinden montaja kadar aklınızdaki her sorunun yanıtı burada.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border overflow-hidden"
              style={{ borderColor: openIdx === idx ? '#83bd81' : '#e0ece0' }}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="w-full text-left flex items-center justify-between gap-3 px-5 py-4 transition-colors"
                style={{ background: openIdx === idx ? 'rgba(131,189,129,0.06)' : '#fafdf9' }}
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
              >
                <span className="font-semibold text-sm sm:text-base pr-4" style={{ color: '#404e5e' }} itemProp="name">
                  {faq.q}
                </span>
                <span
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform"
                  style={{
                    background: openIdx === idx ? '#83bd81' : 'rgba(131,189,129,0.12)',
                    transform: openIdx === idx ? 'rotate(45deg)' : 'none',
                  }}
                  aria-hidden="true"
                >
                  <PlusIcon open={openIdx === idx} />
                </span>
              </button>
              {openIdx === idx && (
                <div
                  className="px-5 pb-5"
                  style={{ background: 'rgba(131,189,129,0.04)' }}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p className="text-sm leading-relaxed" style={{ color: '#5a6878' }} itemProp="text">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm mb-4" style={{ color: '#5a6878' }}>
            Yanıt bulamadığınız bir sorunuz mu var?
          </p>
          <a
            href="https://wa.me/905403363873?text=Merhaba%2C%20plise%20perde%20hakkında%20sormak%20istediğim%20bir%20şey%20var."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg,#83bd81,#6aa868)' }}
          >
            <WAIcon /> WhatsApp ile Sorun
          </a>
        </div>
      </div>
    </section>
  )
}

function QuestionIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
}

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M7 1v12M1 7h12" stroke={open ? '#fff' : '#83bd81'} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function WAIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
}
