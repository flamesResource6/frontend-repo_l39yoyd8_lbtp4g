import { useEffect, useState } from 'react'

function ProgramCard({ program }) {
  return (
    <div className="rounded-xl bg-white shadow border border-slate-200 overflow-hidden">
      {program.image_url && (
        <img src={program.image_url} alt={program.name} className="w-full h-40 object-cover" />
      )}
      <div className="p-4">
        <h3 className="font-semibold text-slate-900">{program.name}</h3>
        <p className="mt-2 text-sm text-slate-600 line-clamp-3">{program.description}</p>
        {program.region && <p className="mt-3 text-xs text-slate-500">Region: {program.region}</p>}
      </div>
    </div>
  )
}

function ProgramsGrid() {
  const [programs, setPrograms] = useState([])

  useEffect(() => {
    const loadPrograms = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/programs`)
        const data = await res.json()
        setPrograms(data.items || [])
      } catch (e) {
        console.error(e)
      }
    }
    loadPrograms()
  }, [])

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Where we work</h2>
          <a href="/programs" className="hidden sm:inline-flex text-teal-700 hover:text-teal-800 font-medium">View all</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.length === 0 ? (
            <div className="text-slate-600">Programs will appear here as you add them.</div>
          ) : (
            programs.map((p) => <ProgramCard key={p.id} program={p} />)
          )}
        </div>
      </div>
    </section>
  )
}

export default ProgramsGrid
