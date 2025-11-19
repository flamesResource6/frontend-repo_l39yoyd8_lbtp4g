import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-teal-500" aria-hidden="true"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
            <h1 className="text-4xl sm:text-5xl font-bold">Who We Are</h1>
            <p className="mt-4 max-w-3xl text-teal-50">We are a Christ-centered movement partnering with local leaders to see communities healed, discipled, and flourishing. Our mission is to be the hands and feet of Jesus in regions affected by conflict.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Our Vision</h2>
              <p className="text-slate-600">Communities restored by the Gospel, rooted in peace, and equipped for generational transformation.</p>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-sm text-slate-600">“Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.” — Matthew 5:16</p>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Our Approach</h2>
              <ul className="list-disc pl-5 text-slate-600 space-y-2">
                <li>Local leadership and discipleship</li>
                <li>Trauma healing and peacemaking</li>
                <li>Education and livelihoods</li>
                <li>Accountability and transparency</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default About
