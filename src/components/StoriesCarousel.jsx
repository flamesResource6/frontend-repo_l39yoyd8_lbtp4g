import { useEffect, useState } from 'react'

function StoryCard({ story }) {
  return (
    <div className="min-w-[280px] max-w-sm rounded-xl bg-white shadow border border-slate-200 overflow-hidden">
      {story.image_url && (
        <img src={story.image_url} alt={story.title} className="w-full h-40 object-cover" />
      )}
      <div className="p-4">
        <h3 className="font-semibold text-slate-900">{story.title}</h3>
        <p className="mt-2 text-sm text-slate-600 line-clamp-3">{story.content}</p>
        {story.author_name && (
          <p className="mt-3 text-xs text-slate-500">— {story.author_name}</p>
        )}
      </div>
    </div>
  )
}

function StoriesCarousel() {
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadStories = async () => {
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
    loadStories()
  }, [])

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Stories of impact</h2>
            <p className="mt-1 text-slate-600">Hear from those whose lives have been transformed.</p>
          </div>
          <a href="/stories" className="hidden sm:inline-flex text-teal-700 hover:text-teal-800 font-medium">View all</a>
        </div>

        <div className="mt-8 overflow-x-auto no-scrollbar">
          <div className="flex gap-4">
            {loading ? (
              <div className="text-slate-600">Loading...</div>
            ) : stories.length === 0 ? (
              <div className="text-slate-600">Stories will appear here as you add them.</div>
            ) : (
              stories.map((s) => <StoryCard key={s.id} story={s} />)
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoriesCarousel
