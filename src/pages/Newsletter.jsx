import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Newsletter(){
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Subscribing...')
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    try{
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      if(!res.ok) throw new Error('Failed')
      setStatus('Thanks! You\'re subscribed.')
      e.currentTarget.reset()
    }catch(err){
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
            <h1 className="text-4xl font-bold">Newsletter</h1>
            <p className="mt-3 max-w-3xl text-teal-50">Stay updated with prayer points, stories of hope, and ministry news.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <form onSubmit={submit} className="flex gap-3">
              <label htmlFor="email" className="sr-only">Email</label>
              <input id="email" name="email" type="email" required placeholder="you@example.org" className="w-full rounded-md border border-slate-300 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <button className="rounded-md bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-700">Subscribe</button>
            </form>
            {status && <p className="mt-4 text-sm text-slate-600">{status}</p>}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Newsletter
