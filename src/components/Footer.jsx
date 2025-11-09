export default function Footer() {
  return (
    <footer className="py-10 border-t border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
        <div>
          <div className="text-zinc-900 dark:text-zinc-50 font-semibold">BookVerse</div>
          <p className="text-zinc-500 mt-2">A cozy companion for your reading life. Built for readers who love to remember.</p>
        </div>
        <div>
          <div className="text-zinc-900 dark:text-zinc-50 font-semibold">Product</div>
          <ul className="mt-2 space-y-2 text-zinc-500">
            <li><a href="#features" className="hover:text-zinc-700 dark:hover:text-zinc-300">Features</a></li>
            <li><a href="#dashboard" className="hover:text-zinc-700 dark:hover:text-zinc-300">Dashboard</a></li>
            <li><a href="#community" className="hover:text-zinc-700 dark:hover:text-zinc-300">Community</a></li>
          </ul>
        </div>
        <div>
          <div className="text-zinc-900 dark:text-zinc-50 font-semibold">Resources</div>
          <ul className="mt-2 space-y-2 text-zinc-500">
            <li><a href="#" className="hover:text-zinc-700 dark:hover:text-zinc-300">Help center</a></li>
            <li><a href="#" className="hover:text-zinc-700 dark:hover:text-zinc-300">Status</a></li>
            <li><a href="#" className="hover:text-zinc-700 dark:hover:text-zinc-300">Privacy</a></li>
          </ul>
        </div>
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="text-zinc-900 dark:text-zinc-50 font-semibold">Stay in the loop</div>
          <p className="text-zinc-500 mt-2">Get cozy updates about new features, themes, and clubs.</p>
          <form className="mt-3 flex gap-2">
            <input type="email" placeholder="you@example.com" className="flex-1 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-400" />
            <button className="rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm hover:bg-indigo-500">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-zinc-500">© {new Date().getFullYear()} BookVerse. All rights reserved.</div>
    </footer>
  )
}
