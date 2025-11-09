import Spline from '@splinetool/react-spline'
import { Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1 text-xs text-zinc-600 dark:text-zinc-300 mb-4">
            <Star size={14} className="text-amber-500" />
            A cozy, smart companion for your reading life
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Your digital bookshelf for books, memories, and ideas
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
            Track chapters, capture highlights, journal feelings, and connect with readers. The heart of Notion meets the brain of Goodreads.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#dashboard" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white px-5 py-3 text-sm font-medium shadow hover:bg-indigo-500">Start your shelf</a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800">Explore features</a>
          </div>
        </div>

        <div className="h-[380px] sm:h-[440px] rounded-2xl overflow-hidden relative">
          <Spline scene="https://prod.spline.design/6c5Qw1o2N8cL5A18/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-zinc-950/80" />
        </div>
      </div>
    </section>
  )
}
