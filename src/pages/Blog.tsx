import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import { blogPosts, wix, PHOTOS } from '../lib/data'

export default function Blog() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Stories, teaching & reflection."
        intro="Insight from our team on discipleship, leadership, relationships, and mission — written for a generation learning to live for Christ."
        image={wix(PHOTOS.i, 1920, 900)}
        crumbs={[{ label: 'Blog' }]}
      />

      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Featured */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-[28px] overflow-hidden bg-white shadow-lg shadow-slate-900/5 border border-slate-100 mb-12"
          >
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-7 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs mb-4">
                <span className="font-semibold text-amber-600 uppercase tracking-wider">{featured.category}</span>
                <span className="text-slate-300">·</span>
                <span className="text-slate-400">{featured.date}</span>
              </div>
              <h2 className="font-display font-extrabold text-slate-900 text-2xl md:text-3xl leading-tight tracking-tight mb-4">
                {featured.title}
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="text-sm text-slate-600">
                By <span className="font-semibold text-slate-900">{featured.author}</span>
              </div>
            </div>
          </motion.article>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="rounded-[28px] overflow-hidden bg-white shadow-lg shadow-slate-900/5 border border-slate-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs mb-3">
                    <span className="font-semibold text-amber-600 uppercase tracking-wider">{post.category}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-400">{post.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-lg leading-snug mb-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
