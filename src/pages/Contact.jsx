import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

function Contact(){
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(()=> setStatus('Thanks! We received your message and will respond soon.'), 600)
    e.currentTarget.reset()
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-teal-500" aria-hidden="true"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="mt-3 max-w-3xl text-teal-50">We would love to hear from you and pray with you.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold">Send a Message</h2>
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea rows="5" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                </div>
                <button className="inline-flex items-center rounded-md bg-teal-600 px-5 py-2 text-sm font-semibold text-white hover:bg-teal-700">Send</button>
                {status && <p className="text-sm text-slate-600 mt-2">{status}</p>}
              </form>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-semibold text-slate-900">Mailing Address</h3>
                <p className="mt-2 text-sm text-slate-600">123 Ministry Way, City, State</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-semibold text-slate-900">Prayer Requests</h3>
                <p className="mt-2 text-sm text-slate-600">We have a team ready to pray with you. Submit your request above.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Contact
