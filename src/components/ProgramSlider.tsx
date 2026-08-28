import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router'
import { programs } from '../lib/data'

export default function ProgramSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', containScroll: false })
  const [selected, setSelected] = useState(0)

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="programs" className="py-20 md:py-28 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-[0.2em] uppercase mb-4">
              <span className="w-6 h-px bg-amber-500" />
              Our Programs
            </div>
            <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
              Find your space.
            </h2>
            <p className="text-white/55 text-base mt-3 max-w-lg leading-relaxed">
              An endless community — swipe through every platform designed to meet you exactly where you are.
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-11 h-11 rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 flex items-center justify-center text-white/70 hover:text-white transition-all"
              aria-label="Previous program"
            >
              ←
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-11 h-11 rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 flex items-center justify-center text-white/70 hover:text-white transition-all"
              aria-label="Next program"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="embla" ref={emblaRef}>
        <div className="flex touch-pan-y pl-5 md:pl-8">
          {programs.map((prog, i) => {
            const active = i === selected
            return (
              <div key={prog.id} className="shrink-0 basis-[80%] sm:basis-[52%] md:basis-[36%] lg:basis-[30%] pr-4 md:pr-5">
                <motion.article
                  animate={{ scale: active ? 1 : 0.9, opacity: active ? 1 : 0.55 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                  className="group relative rounded-[28px] overflow-hidden bg-slate-800 cursor-grab active:cursor-grabbing"
                >
                  <div className="relative h-[26rem] overflow-hidden">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className={`absolute inset-0 w-full h-full object-center transition-transform duration-700 group-hover:scale-105 ${prog.id === 'masterclass' ? 'object-contain' : 'object-cover'} ${prog.id === 'move' ? 'scale-[1.35]' : ''}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                    <span className={`absolute top-4 left-4 ${prog.tagBg} px-3 py-1 rounded-full text-xs font-semibold z-10`}>{prog.tag}</span>

                    <Link to={`/programs/${prog.id}`} aria-label={`Learn more about ${prog.title}`} className="absolute inset-0 z-10" />

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="font-display font-bold text-white text-xl leading-tight mb-2">{prog.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{prog.description}</p>

                      {/* hover reveal: additional detail from the original content */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                        <div className="overflow-hidden">
                          <p className="text-amber-300/90 text-xs leading-relaxed pt-3">{prog.detail}</p>
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 mt-3">
                            Learn more <span>→</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-10">
        {programs.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Go to program ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === selected ? 'w-7 bg-amber-500' : 'w-1.5 bg-white/25 hover:bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  )
}
