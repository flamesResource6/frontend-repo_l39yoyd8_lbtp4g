import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function StoryCard({ story }) {
  return (
    <article className="rounded-xl bg-white shadow border border-slate-200 overflow-hidden">
      {story.image_url && (
        <img src={story.image_url} alt={story.title} className="w-full h-56 object-cover" />
      )}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900">{story.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{story.content}</p>
        {story.author_name && <p className="mt-3 text-xs text-slate-500">— {story.author_name}</p>}
      </div>
    </article>
  )
}

function Stories() {
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/stories`)
        const data = await res.json()
        setStories(data.items || [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-teal-500" aria-hidden="true"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
            <h1 className="text-4xl font-bold">Stories of Hope</h1>
            <p className="mt-3 max-w-3xl text-teal-50">Testimonies of lives transformed by the Gospel and holistic ministry.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <p className="text-slate-600">Loading...</p>
            ) : stories.length === 0 ? (
              <p className="text-slate-600">Stories will appear here as you add them.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {stories.map((s) => (
                  <StoryCard key={s.id} story={s} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Stories
