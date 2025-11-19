import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function AmountButton({ value, onClick }){
  return (
    <button onClick={()=>onClick(value)} className="px-4 py-2 rounded-md border border-slate-300 hover:border-teal-500 hover:bg-teal-50 text-slate-700">${value}</button>
  )
}

function Donate(){
  const [amount, setAmount] = useState(50)
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Processing...')
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    try{
      const res = await fetch(`${baseUrl}/api/donate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, currency: 'USD', method: 'intent' })
      })
      if(!res.ok) throw new Error('Failed')
      setStatus('Thank you for your generosity! We will email you next steps to complete the gift.')
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
            <h1 className="text-4xl font-bold">Give to the Mission</h1>
            <p className="mt-3 max-w-3xl text-teal-50">Your gift advances the Gospel and holistic transformation in conflict-affected regions.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-slate-200 p-6 bg-white">
              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Choose an amount</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {[25,50,100,250].map(v => (
                      <AmountButton key={v} value={v} onClick={setAmount} />
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Custom Amount</label>
                  <div className="mt-1 relative">
                    <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">$</span>
                    <input type="number" min="1" value={amount} onChange={(e)=>setAmount(parseInt(e.target.value||'0',10))} className="pl-7 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                  </div>
                </div>
                <button className="w-full inline-flex items-center justify-center rounded-md bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-700">Continue</button>
                {status && <p className="text-sm text-slate-600">{status}</p>}
                <p className="text-xs text-slate-500">Secure processing coming next (Stripe Checkout). This records your intent while we finalize setup.</p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Donate
