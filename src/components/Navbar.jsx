import { BookOpen, Sparkles, User } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-rose-500 flex items-center justify-center text-white shadow-lg">
            <BookOpen size={18} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">BookVerse</span>
            <span className="text-[11px] text-zinc-500">Your digital bookshelf</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50 transition-colors">Features</a>
          <a href="#community" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50 transition-colors">Community</a>
          <a href="#dashboard" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50 transition-colors">Dashboard</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">
            <Sparkles size={16} /> Try demo
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 text-white px-3 py-2 text-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200">
            <User size={16} /> Sign in
          </button>
        </div>
      </div>
    </header>
  )
}
