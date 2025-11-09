import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import DashboardPreview from './components/DashboardPreview'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <DashboardPreview />
      <section id="community" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 bg-white/70 dark:bg-zinc-900/60 text-center">
            <h3 className="text-xl font-semibold">Join the readers club</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">Follow fellow readers, share reviews with spoiler-safe mode, react with emojis, and discover books from people who read like you.</p>
            <div className="mt-6 flex justify-center gap-3">
              <button className="rounded-lg bg-zinc-900 text-white px-5 py-3 text-sm hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200">Create account</button>
              <button className="rounded-lg border border-zinc-300 dark:border-zinc-700 px-5 py-3 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800">Browse clubs</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
