import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ProgramCard({ program }) {
  return (
    <div className="rounded-xl bg-white shadow border border-slate-200 overflow-hidden">
      {program.image_url && (
        <img src={program.image_url} alt={program.name} className="w-full h-48 object-cover" />
      )}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900">{program.name}</h3>
        <p className="mt-2 text-sm text-slate-600">{program.description}</p>
        <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
          {program.region && <span>Region: {program.region}</span>}
          {program.category && <span className="px-2 py-1 rounded bg-slate-100 border">{program.category}</span>}
        </div>
      </div>
    </div>
  )
}

function Programs() {
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/programs`)
        const data = await res.json()
        setPrograms(data.items || [])
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
            <h1 className="text-4xl font-bold">Programs & Ministries</h1>
            <p className="mt-3 max-w-3xl text-teal-50">Explore how we serve through discipleship, trauma healing, education, church planting, and economic empowerment.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <p className="text-slate-600">Loading...</p>
            ) : programs.length === 0 ? (
              <p className="text-slate-600">Programs will appear here as you add them.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {programs.map((p) => (
                  <ProgramCard key={p.id} program={p} />
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

export default Programs
