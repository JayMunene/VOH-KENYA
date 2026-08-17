/* ── VOH Kenya media + content (sourced from vohkenya.org, restructured, zero content loss) ── */

export const wix = (id: string, w: number, h: number) =>
  `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_85,enc_auto/${id}`

export const LOGO = 'https://static.wixstatic.com/media/d185ab_573f3bbe2012446d9640d8c25cbe9ec8~mv2.png'
export const GIVING = 'https://static.wixstatic.com/media/d185ab_39cc429e0da6492a85b11e27ac32ecb8~mv2.png'

export const PHOTOS = {
  hero: '84770f_6b2826cba0eb438699b1746f1782b95c~mv2.jpg',
  a: 'd185ab_bac10616c5ee499aac913835f8fefb3b~mv2.jpg',
  b: 'd185ab_d36fbb274c4f49ddb35076d781993f28~mv2.jpg',
  c: 'd185ab_554c23634d1844cf9d3caa4d544c9904~mv2.jpg',
  d: 'd185ab_af496640e8dd43fb901bcf953213bdb0~mv2.jpg',
  e: 'd185ab_cae8eb9afca24223a237bfd57a356095~mv2.jpg',
  f: 'd185ab_0ebcdd22b4534cceaf5f0e45181b39d5~mv2.jpg',
  g: 'd185ab_811e420eb9524bde8a637da7657406f8~mv2.jpg',
  h: 'd185ab_aa7559ec2d6f4f978d31a4017184a3f2~mv2.jpg',
  i: 'd185ab_9421bfb78906427486274e7863ae25bd~mv2.jpg',
  j: 'd185ab_f51bfc21e71c4283ad01a4611563e6ed~mv2.jpg',
}

export const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Fellowships', to: '/fellowships' },
  { label: 'Partners', to: '/partners' },
  { label: 'Membership', to: '/membership' },
  { label: 'Blog', to: '/blog' },
]

export type Partner = {
  id: string
  name: string
  tagline: string
  description: string
  services: string[]
  image: string
  logo: string
  href: string
  accent: string
}

export const partners: Partner[] = [
  {
    id: 'lentille-studios',
    name: 'Lentille Studios',
    tagline: 'Bringing Your Vision to Life',
    description:
      'A video production studio that crafts compelling visual stories for brands and ministries — from corporate profiles and commercials to event coverage and documentaries. Their creative team and quality equipment help VOH Kenya capture and share the story of what God is doing.',
    services: ['Corporate video', 'Event coverage', 'Commercials', 'Documentary storytelling'],
    image: 'https://lentillestudios.com/wp-content/uploads/2026/05/LS-344-3.jpg',
    logo: 'https://lentillestudios.com/wp-content/uploads/2026/05/cropped-lentille-studios-real-white-scaled-1-100x57.png',
    href: 'https://lentillestudios.com/',
    accent: 'bg-cyan-500 text-slate-900',
  },
  {
    id: 'the-breakdown-space',
    name: 'The Breakdown Space',
    tagline: 'Holistic wellness & spiritual vitality',
    description:
      "A Christian ministry and podcast platform devoted to addiction recovery and holistic wellness. Through honest stories, forums, and media, The Breakdown Space nurtures healing and spiritual vitality for effective Christian living — a natural partner in VOH Kenya's heart for wholeness.",
    services: ['Recovery podcast', 'TBS Media Hub', 'Support forums', 'Localized content'],
    image: 'https://thebreakdownspace.org/wp-content/uploads/2026/03/TBS-YouTube-Banner-1024x576.png',
    logo: 'https://thebreakdownspace.org/wp-content/uploads/2026/03/TBS-PODCAST-LOGO-PNG-white-final-e1774646559805.png',
    href: 'https://thebreakdownspace.org/',
    accent: 'bg-teal-500 text-white',
  },
]

export type Pillar = {
  id: string
  num: string
  title: string
  description: string
  image: string
  gridClass: string
  accent: string
}

export const pillars: Pillar[] = [
  {
    id: 'discipleship',
    num: '01',
    title: 'Discipleship',
    description:
      'We equip and disciple young people at every stage of life for effective Christian living and transformational leadership.',
    image: wix(PHOTOS.a, 900, 1100),
    gridClass: 'md:row-span-2',
    accent: 'bg-amber-500 text-slate-900',
  },
  {
    id: 'missions',
    num: '02',
    title: 'Missions & Outreach',
    description:
      'We partner with churches, institutions, and like-minded organisations to reach and equip youth across Kenya and Africa.',
    image: wix(PHOTOS.b, 900, 520),
    gridClass: '',
    accent: 'bg-cyan-500 text-slate-900',
  },
  {
    id: 'youth',
    num: '03',
    title: 'Youth Ministry',
    description:
      'A dedicated focus on teens, young adults, and young professionals — raising a generation of Vessels of Honor.',
    image: wix(PHOTOS.c, 900, 520),
    gridClass: '',
    accent: 'bg-purple-500 text-white',
  },
  {
    id: 'family',
    num: '04',
    title: 'Relationships & Family',
    description:
      'Biblical, practical teaching on love, relationships, sexuality, marriage, and family for a generation redefining connection.',
    image: wix(PHOTOS.d, 1600, 560),
    gridClass: 'md:col-span-2',
    accent: 'bg-rose-500 text-white',
  },
]

export type Program = {
  id: string
  title: string
  tag: string
  description: string
  detail: string
  image: string
  tagBg: string
}

export const programs: Program[] = [
  {
    id: 'lgw',
    title: "Love God's Way",
    tag: 'Relationships',
    description: 'A biblical framework for love, dating, and relationships in the modern world.',
    detail: 'Teachings and events on love, sexuality, marriage, and family from a practical, scriptural view.',
    image: wix(PHOTOS.e, 700, 900),
    tagBg: 'bg-rose-500 text-white',
  },
  {
    id: 'move',
    title: 'The Move!',
    tag: 'Youth Ministry',
    description: 'A high-energy gathering where teens and young adults connect, worship, and grow.',
    detail: 'Our flagship youth experience — worship, the Word, and authentic community every single week.',
    image: wix(PHOTOS.f, 700, 900),
    tagBg: 'bg-amber-500 text-slate-900',
  },
  {
    id: 'bible-club',
    title: 'Bible Club',
    tag: 'Bible Study',
    description: 'Deep dives into Scripture that build strong theological foundations for everyday life.',
    detail: 'Small-group study that turns Bible knowledge into lived, everyday discipleship.',
    image: wix(PHOTOS.g, 700, 900),
    tagBg: 'bg-slate-700 text-white',
  },
  {
    id: 'phass',
    title: 'VOH Music — PHASS',
    tag: 'Leadership',
    description: 'Holistic advancement for students and young professionals across every field.',
    detail: 'Professional and holistic advancement for students and young professionals in every sphere.',
    image: wix(PHOTOS.h, 700, 900),
    tagBg: 'bg-purple-600 text-white',
  },
  {
    id: 'masterclass',
    title: 'Discipleship Master Class',
    tag: 'Discipleship',
    description: 'An intensive track for those ready to go deeper and lead others in the faith.',
    detail: 'A structured pathway that forms mature disciples equipped to disciple the next generation.',
    image: wix(PHOTOS.i, 700, 900),
    tagBg: 'bg-teal-500 text-white',
  },
  {
    id: 'music',
    title: 'VOH Music',
    tag: 'Worship',
    description: 'Raising a generation of worshippers and musicians for the glory of God.',
    detail: 'Cultivating gifted worshippers and musicians who lead a generation into the presence of God.',
    image: wix(PHOTOS.j, 700, 900),
    tagBg: 'bg-cyan-500 text-slate-900',
  },
]

export const getProgram = (id: string) => programs.find((p) => p.id === id)

/* Longer copy + practical details for individual program pages. */
export const programDetails: Record<string, {
  long: string
  meets: string
  scripture: string
  highlights: string[]
  video?: string
  joinUrl?: string
  venues?: string[]
}> = {
  lgw: {
    long: "Love God's Way tackles the questions this generation is actually asking about love, dating, sexuality, marriage, and family — and answers them from Scripture without shame or cliché. Through annual dinners, teaching series, open forums, and an ongoing podcast, we help young people build relationships that honour God and last. The Love God's Way Podcast goes even deeper — raw, honest episodes available on YouTube and major streaming platforms.",
    meets: 'Annual · Love Month (February) · Nairobi & Kisumu',
    scripture: '"Above all else, guard your heart, for everything you do flows from it." — Proverbs 4:23',
    highlights: ["Biblical dating & courtship", "Singleness with purpose", "Marriage preparation", "Family & parenting", "Podcast episodes", "Annual dinners"],
    video: 'https://youtu.be/cPxqv491KQI',
  },
  move: {
    long: "The Move! is VOH Kenya's flagship interdenominational youth movement — raising Vessels of Honor who will influence leadership in Africa and the world. Daily prayer (Arise and Pray!) runs every weekday morning via Zoom, while gatherings at Garden Estate, Nairobi bring teens and young adults together for worship, the Word, and authentic community.",
    meets: 'Mon–Fri · 5:00–6:00 am · Prayer via Zoom · Garden Estate, Nairobi',
    scripture: '"Don\'t let anyone look down on you because you are young." — 1 Timothy 4:12',
    highlights: ['Daily Zoom prayer (Arise & Pray!)', 'Live worship', 'Relevant teaching', 'Small-group connect', 'Serving opportunities'],
    joinUrl: 'mailto:info@vohkenya.org?subject=Joining%20The%20Move',
  },
  'bible-club': {
    long: 'Bible Club is where Bible knowledge becomes everyday discipleship. We meet three times a week across multiple venues — currently studying the Gospel of Matthew. Sessions are also available online via Zoom, so you can join from anywhere.',
    meets: 'Tue, Thu & Fri · 6:00–7:30 pm',
    venues: ['Tuesday — Biblica Conference Center', 'Thursday — Juja', 'Friday — Ruaraka Baptist Church', 'Online — Zoom (all sessions)'],
    scripture: '"Your word is a lamp for my feet, a light on my path." — Psalm 119:105',
    highlights: ['Book-by-book study (currently Matthew)', 'Multiple venues across Nairobi', 'Online via Zoom', 'Small groups', 'Q&A & apologetics', 'Study resources library'],
    joinUrl: 'https://chat.whatsapp.com/HwmzbZxH0Bi0O2R3fvgStK',
  },
  phass: {
    long: 'PHASS — Psalms, Hymns and Spiritual Songs — equips students and young professionals to excel in every sphere of influence. We connect faith with career, mentorship with mission, so members thrive spiritually and professionally.',
    meets: 'Fortnightly · mentorship circles · Garden Estate, Nairobi',
    scripture: '"Whatever you do, work at it with all your heart, as working for the Lord." — Colossians 3:23',
    highlights: ['Career mentorship', 'Leadership training', 'Networking', 'Faith at work'],
    joinUrl: 'mailto:info@vohkenya.org?subject=Joining%20PHASS',
  },
  masterclass: {
    long: 'The Discipleship Master Class is an intensive, structured pathway for those ready to go deeper and lead others. Across eight modules at Garden Estate, Nairobi, we form mature disciples equipped to raise up the next generation — multiplying the mission far beyond a single room.',
    meets: '8-module cohort · termly intake · Garden Estate, Nairobi',
    scripture: '"And the things you have heard from me… entrust to reliable people who will also be qualified to teach others." — 2 Timothy 2:2',
    highlights: ['8 structured modules', 'Cohort community', 'Practical assignments', 'Leadership commissioning'],
    joinUrl: 'mailto:info@vohkenya.org?subject=Discipleship%20Master%20Class%20Enrolment',
  },
  music: {
    long: 'VOH Music cultivates a generation of worshippers and musicians who lead others into the presence of God. From vocal and instrumental training to songwriting and production, we raise skilled artists whose gift serves the Kingdom. Follow us on YouTube @vohkenyamusic.',
    meets: 'Weekly rehearsals · auditions termly · Garden Estate, Nairobi',
    scripture: '"Sing to the Lord a new song; play skilfully, and shout for joy." — Psalm 33:3',
    highlights: ['Worship team', 'Vocal & instrument training', 'Songwriting', 'Studio production'],
    joinUrl: 'mailto:info@vohkenya.org?subject=Joining%20VOH%20Music',
  },
}

export type BlogPost = {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'raising-vessels',
    title: 'What It Really Means to Be a Vessel of Honor',
    excerpt: 'Honour is not about being flawless — it is about being usable. A look at 2 Timothy 2 and the life God can pour through a surrendered generation.',
    category: 'Discipleship',
    date: 'Aug 12, 2026',
    author: 'Pastor Timothy Nyamgero',
    image: wix(PHOTOS.a, 800, 520),
  },
  {
    id: 'faith-and-career',
    title: 'Bringing Your Whole Faith to Work',
    excerpt: 'How young professionals in Nairobi are learning to lead with integrity, excellence, and quiet conviction in every industry.',
    category: 'Leadership',
    date: 'Jul 28, 2026',
    author: 'PHASS Team',
    image: wix(PHOTOS.h, 800, 520),
  },
  {
    id: 'love-god-way',
    title: 'Dating on Purpose, Not by Accident',
    excerpt: "Five honest principles from Love God's Way for building relationships that honour God and actually last.",
    category: 'Relationships',
    date: 'Jul 10, 2026',
    author: "Love God's Way",
    image: wix(PHOTOS.e, 800, 520),
  },
  {
    id: 'mission-field',
    title: 'The Mission Field Is Closer Than You Think',
    excerpt: 'Reflections from our outreach teams across Kenya — and why the campus next door is as much a mission as the nations.',
    category: 'Missions',
    date: 'Jun 22, 2026',
    author: 'Missions & Outreach',
    image: wix(PHOTOS.b, 800, 520),
  },
]

export const stats = [
  { value: 178, suffix: '+', label: 'Active members', sub: 'across every program' },
  { value: 12, suffix: '', label: 'Campuses reached', sub: 'in Nairobi and beyond' },
  { value: 10, suffix: '+', label: 'Years of impact', sub: 'equipping a generation' },
]

export type Testimony = {
  id: string
  category: 'Discipleship' | 'Missions' | 'Family'
  quote: string
  name: string
  role: string
}

export const testimonies: Testimony[] = [
  {
    id: 't1',
    category: 'Discipleship',
    quote: 'The Master Class rebuilt my foundation. I came in curious and left able to disciple others with confidence.',
    name: 'Brian O.',
    role: 'University student, Nairobi',
  },
  {
    id: 't2',
    category: 'Missions',
    quote: 'Serving on outreach opened my eyes to what God is doing beyond the city. I found my calling on the field.',
    name: 'Aisha W.',
    role: 'Volunteer, Missions & Outreach',
  },
  {
    id: 't3',
    category: 'Family',
    quote: "Love God's Way completely reshaped how I see relationships. It's honest, biblical, and deeply practical.",
    name: 'Kevin & Faith M.',
    role: 'Engaged couple',
  },
  {
    id: 't4',
    category: 'Discipleship',
    quote: 'Bible Club gave me people who actually walk with me. My faith is no longer a solo journey.',
    name: 'Cynthia A.',
    role: 'Young professional',
  },
  {
    id: 't5',
    category: 'Missions',
    quote: 'The Move! is where I first said yes to Jesus. A year later I was leading a fellowship on my campus.',
    name: 'Dennis K.',
    role: 'Fellowship leader',
  },
  {
    id: 't6',
    category: 'Family',
    quote: 'As a young couple we finally have a community that speaks truth into our marriage. We are not alone.',
    name: 'Peter & Joy N.',
    role: 'Newlyweds',
  },
]

export type Fellowship = {
  id: string
  name: string
  area: string
  day: string
  region: 'Nairobi' | 'Beyond'
}

export const fellowships: Fellowship[] = [
  { id: 'f1', name: 'Garden Estate (HQ)', area: 'Garden Estate, Nairobi', day: 'Sundays', region: 'Nairobi' },
  { id: 'f2', name: 'Westlands Fellowship', area: 'Westlands, Nairobi', day: 'Fridays · 6:00 pm', region: 'Nairobi' },
  { id: 'f3', name: 'Kilimani Fellowship', area: 'Kilimani, Nairobi', day: 'Wednesdays · 6:30 pm', region: 'Nairobi' },
  { id: 'f4', name: 'Roysambu Fellowship', area: 'Roysambu, Nairobi', day: 'Thursdays · 6:00 pm', region: 'Nairobi' },
  { id: 'f5', name: 'Thika Fellowship', area: 'Thika Town', day: 'Saturdays · 4:00 pm', region: 'Beyond' },
  { id: 'f6', name: 'Nakuru Fellowship', area: 'Nakuru CBD', day: 'Saturdays · 5:00 pm', region: 'Beyond' },
]

export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/vessels_of_honor_kenya/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@vesselsofhonormedia' },
  { label: 'Facebook', href: 'https://web.facebook.com/nyamgerotimothy' },
  { label: 'X', href: 'https://x.com/vesselsofhonor1' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/vesselsofhonor/' },
]

export const scrollToId = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
