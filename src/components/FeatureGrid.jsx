import { BarChart3, BookmarkPlus, MessageSquareText, NotebookPen, Trophy } from 'lucide-react'

const features = [
  {
    icon: BookmarkPlus,
    title: 'Smart Book Shelves',
    desc: 'Currently Reading, Completed, To Read, and Favorites — organized your way with filters and tags.'
  },
  {
    icon: NotebookPen,
    title: 'Highlights & Notes',
    desc: 'Capture favorite lines, add emotions and themes, and build your personal Quote Wall.'
  },
  {
    icon: BarChart3,
    title: 'Personal Dashboard',
    desc: 'Track books per year, streaks, genre pie charts, average ratings, and mood trends.'
  },
  {
    icon: MessageSquareText,
    title: 'Community & Reviews',
    desc: 'Follow readers, react with emojis, comment on reviews, and join book clubs.'
  },
  {
    icon: Trophy,
    title: 'Goals & Achievements',
    desc: 'Set goals, earn badges like Night Owl, Quote Collector, and level up as you read.'
  }
]

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50">Everything you want in one place</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">A diary for your reading life — cozy, social, insightful.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white/70 dark:bg-zinc-900/60 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
                <Icon size={18} />
              </div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
