import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function GetInvolved() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/volunteer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('Thank you! We will be in touch soon.')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-teal-500" aria-hidden="true"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
            <h1 className="text-4xl font-bold">Serve with Us</h1>
            <p className="mt-3 max-w-3xl text-teal-50">Use your gifts to bless communities — in prayer, giving, advocacy, and volunteering.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold">Volunteer Form</h2>
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Full Name</label>
                  <input name="full_name" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" name="email" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Phone</label>
                  <input name="phone" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Areas of Interest</label>
                  <select name="interests" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500">
                    <option>Prayer</option>
                    <option>Administration</option>
                    <option>Communications</option>
                    <option>Field Work</option>
                    <option>Fundraising</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea name="message" rows="4" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                </div>
                <button className="inline-flex items-center rounded-md bg-teal-600 px-5 py-2 text-sm font-semibold text-white hover:bg-teal-700">Submit</button>
                {status && <p className="text-sm text-slate-600 mt-2">{status}</p>}
              </form>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-semibold text-slate-900">Pray with Us</h3>
                <p className="mt-2 text-sm text-slate-600">Join our prayer network and receive monthly prayer points for the ministry and the communities we serve.</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-semibold text-slate-900">Give Monthly</h3>
                <p className="mt-2 text-sm text-slate-600">Become a sustaining partner — your faithful giving fuels long-term transformation.</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-semibold text-slate-900">Share the Story</h3>
                <p className="mt-2 text-sm text-slate-600">Advocate in your church and community. Host an info night or invite a speaker.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default GetInvolved
