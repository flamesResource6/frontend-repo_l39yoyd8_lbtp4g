import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Transparency(){
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-teal-500" aria-hidden="true"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
            <h1 className="text-4xl font-bold">Transparency & Stewardship</h1>
            <p className="mt-3 max-w-3xl text-teal-50">We steward every gift with integrity and accountability before God and our supporters.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-slate-200 p-6 bg-white">
              <h3 className="font-semibold text-slate-900">Annual Reports</h3>
              <p className="mt-2 text-sm text-slate-600">Read our yearly summaries of ministry outcomes, finances, and stories.</p>
              <a href="#" className="mt-4 inline-block text-teal-700 hover:text-teal-800 text-sm">View reports</a>
            </div>
            <div className="rounded-xl border border-slate-200 p-6 bg-white">
              <h3 className="font-semibold text-slate-900">Financials</h3>
              <p className="mt-2 text-sm text-slate-600">Budget overview and program allocations with easy-to-understand charts.</p>
              <a href="#" className="mt-4 inline-block text-teal-700 hover:text-teal-800 text-sm">See breakdown</a>
            </div>
            <div className="rounded-xl border border-slate-200 p-6 bg-white">
              <h3 className="font-semibold text-slate-900">Accountability</h3>
              <p className="mt-2 text-sm text-slate-600">Policies, safeguarding, and independent oversight partners.</p>
              <a href="#" className="mt-4 inline-block text-teal-700 hover:text-teal-800 text-sm">Learn more</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Transparency
