import { BarChart3, BookOpenCheck, Flame, Timer } from 'lucide-react'

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50">A peek at your insights</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">Reading progress, streaks, and genres — beautifully visualized.</p>
          </div>
          <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">See full dashboard →</a>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white/70 dark:bg-zinc-900/60">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <BookOpenCheck size={18} />
              </div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">This year so far</h3>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <Stat label="Books read" value="12" />
              <Stat label="Avg rating" value="4.3" />
              <Stat label="Pages" value="3,420" />
            </div>
            <div className="mt-6 h-36 rounded-lg bg-gradient-to-tr from-indigo-500/10 to-pink-500/10 border border-dashed border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-500 text-sm">
              <BarChart3 className="mr-2" size={16} /> Monthly reading chart
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white/70 dark:bg-zinc-900/60">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                <Flame size={18} />
              </div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Streak & sessions</h3>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-4">
                <div className="text-3xl font-bold">9<span className="text-sm font-medium text-zinc-500 ml-1">days</span></div>
                <div className="text-sm text-zinc-500">Current streak</div>
              </div>
              <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-4">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400"><Timer size={16} /> Today's session</div>
                <div className="text-3xl font-bold mt-1">42m</div>
                <div className="text-sm text-zinc-500">Avg 35m/day</div>
              </div>
            </div>
            <div className="mt-6 h-36 rounded-lg bg-gradient-to-tr from-amber-500/10 to-emerald-500/10 border border-dashed border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-500 text-sm">
              Genre pie chart placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div>
      <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">{value}</div>
      <div className="text-sm text-zinc-500">{label}</div>
    </div>
  )
}
