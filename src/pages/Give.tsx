import PageHeader from '../components/PageHeader'
import GiveSection from '../components/GiveSection'
import { wix, PHOTOS } from '../lib/data'

const ways = [
  { t: 'M-PESA', d: 'Give instantly from your phone. Call or message us for the current Paybill and account details.', action: 'Call +254 738 900218', href: 'tel:+254738900218' },
  { t: 'Bank Transfer', d: 'Set up a one-off or recurring gift by bank transfer. Email us and we will share account details.', action: 'Email info@vohkenya.org', href: 'mailto:info@vohkenya.org?subject=Bank%20giving' },
  { t: 'Partner Monthly', d: 'Become a monthly partner and help sustain discipleship, missions, and youth ministry year-round.', action: 'Become a Partner', href: 'mailto:info@vohkenya.org?subject=Monthly%20partnership' },
]

export default function Give() {
  return (
    <>
      <PageHeader
        eyebrow="Give & Support"
        title="Partner with the mission."
        intro="Your generosity fuels discipleship, missions, and youth empowerment across Kenya. Every gift helps raise the next generation of Vessels of Honor."
        image="https://media.istockphoto.com/id/512421423/photo/group-of-people-holding-cross-and-praying-in-back-lit.jpg?s=612x612&w=0&k=20&c=L8L0zuhWP7_xGGGShvtvAbIVNorin1TJoeDVq3Rl1lU="
        crumbs={[{ label: 'Give' }]}
      />

      <section className="py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {ways.map((w) => (
            <div key={w.t} className="flex flex-col rounded-[28px] bg-white p-7 shadow-lg shadow-slate-900/5 border border-slate-100">
              <h3 className="font-display font-bold text-slate-900 text-xl mb-2">{w.t}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{w.d}</p>
              <a
                href={w.href}
                className="text-center font-semibold text-slate-900 bg-amber-500 hover:bg-amber-400 py-3 rounded-full text-sm transition-colors"
              >
                {w.action}
              </a>
            </div>
          ))}
        </div>
      </section>

      <GiveSection />
    </>
  )
}
