function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow border border-slate-200 text-center">
      <p className="text-3xl font-bold text-slate-900">{value}</p>
      <p className="mt-1 text-sm text-slate-600">{label}</p>
    </div>
  )
}

function ImpactStats() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Our Impact</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Real lives changed through access to education, trauma healing, and sustainable livelihoods.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Stat label="People served" value="1.2M+" />
          <Stat label="Communities reached" value="500+" />
          <Stat label="Local leaders trained" value="15k+" />
          <Stat label="Countries" value="6" />
        </div>
      </div>
    </section>
  )
}

export default ImpactStats
