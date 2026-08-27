import { Link } from 'react-router'
import PageHeader from '../components/PageHeader'

export default function Leadership() {
  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        title="Meet the heart behind the mission."
        intro="VOH Kenya is led by people devoted to seeing a generation discipled, equipped, and released into purpose."
        image="https://media.istockphoto.com/id/512421423/photo/group-of-people-holding-cross-and-praying-in-back-lit.jpg?s=612x612&w=0&k=20&c=L8L0zuhWP7_xGGGShvtvAbIVNorin1TJoeDVq3Rl1lU="
        compact
        crumbs={[{ label: 'About Us', to: '/about' }, { label: 'Leadership' }]}
      />

      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-center">
          <img
            src="/images/about-us-new.jpg"
            alt="Pastor Timothy Nyamgero"
            className="rounded-[28px] object-cover w-full h-full max-h-[560px] shadow-lg shadow-slate-900/10"
          />
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 tracking-[0.2em] uppercase mb-4">
              <span className="w-6 h-px bg-amber-500" />
              Founder &amp; Senior Pastor
            </div>
            <h2 className="font-display font-extrabold text-slate-900 text-3xl md:text-4xl leading-tight tracking-tight mb-2">
              Pastor Timothy Nyamgero
            </h2>
            <blockquote className="font-display font-bold text-slate-800 text-xl md:text-2xl leading-[1.35] my-6">
              “We are not simply building a church programme — we are raising a generation that will transform every sphere of
              African society with the character and power of Christ.”
            </blockquote>
            <div className="flex flex-col gap-4 text-slate-600 text-base leading-relaxed">
              <p>
                Pastor Timothy Nyamgero is the Youth Pastor at Ruaraka Baptist Church. His mission in life is to raise a
                generation of Christ-centred leaders and role-model Christians playing transformative roles in families, the
                church, and society.
              </p>
              <p>
                He is married to Macreen Nyamgero, an advocate of the High Court of Kenya currently serving as a legal officer
                with an AI company. He studied at Africa International University, where he also served as an Assistant
                Chaplain for five years before transitioning to RBC.
              </p>
              <p>
                Pastor Timothy is the founding Chairman of Vessels of Honor, a parachurch movement that seeks to transform
                Africa and the world by raising Christ-centred leaders and role-model Christians. He is passionate about
                expository preaching, transformational leadership, creative arts, Christian music, and discipleship for
                practical and effective Christian living.
              </p>
              <p>His favourite Bible verse is 2 Timothy 2:20–22:</p>
              <blockquote className="border-l-2 border-amber-500 pl-5 text-slate-700">
                <p>
                  20 But in a great house there are not only vessels of gold and silver, but also of wood and clay, some for
                  honor and some for dishonor.
                </p>
                <p>
                  21 Therefore if anyone cleanses himself from the latter, he will be a vessel for honor, sanctified and useful
                  for the Master, prepared for every good work.
                </p>
              </blockquote>
              <p>
                Pastor Timothy carries a deep burden to see young people discipled into maturity and released into purpose. His
                teaching blends solid biblical foundations with the practical realities of life, love, work, and leadership for
                this generation.
              </p>
              <p>
                Under his leadership, VOH Kenya has grown into a thriving community equipping teens, young adults, and
                professionals to live for Christ and lead with honour across Kenya and beyond.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/fellowships" className="text-center font-display font-bold text-white bg-slate-900 hover:bg-slate-800 px-7 py-3.5 rounded-full text-sm transition-colors">
                Come and Visit →
              </Link>
              <a href="mailto:info@vohkenya.org" className="text-center font-medium text-slate-700 border border-slate-300 hover:border-slate-500 px-7 py-3.5 rounded-full text-sm transition-colors">
                Contact the Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
