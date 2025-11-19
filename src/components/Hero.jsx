function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" alt="Worship and community gathering" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/60" aria-hidden="true"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">Sharing the hope of Jesus and rebuilding communities</h1>
          <p className="mt-6 text-lg text-slate-100/90">We exist to make disciples, heal trauma, and equip leaders so the Gospel can take root and flourish.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="/donate" className="inline-flex items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-white">Donate Now</a>
            <a href="/get-involved" className="inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-3 text-base font-semibold text-white ring-1 ring-inset ring-white/30 hover:bg-white/20">Serve with Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
