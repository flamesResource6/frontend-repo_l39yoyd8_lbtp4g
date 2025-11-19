import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ImpactStats from '../components/ImpactStats'
import StoriesCarousel from '../components/StoriesCarousel'
import ProgramsGrid from '../components/ProgramsGrid'
import Footer from '../components/Footer'

function Home(){
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ImpactStats />
        <StoriesCarousel />
        <ProgramsGrid />
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl bg-teal-600 text-white p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold">Partner with us in prayer and giving</h3>
                <p className="text-teal-100">Together we can see the Gospel bring healing and flourishing.</p>
              </div>
              <a href="/donate" className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-teal-800 shadow hover:bg-teal-50">
                Donate Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
