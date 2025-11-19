function Footer(){
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-semibold">Favor International</h3>
          <p className="mt-2 text-sm text-slate-400">Partnering with local leaders to transform communities affected by conflict.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Get Involved</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="/donate" className="hover:text-white">Donate</a></li>
            <li><a href="/get-involved" className="hover:text-white">Volunteer</a></li>
            <li><a href="/newsletter" className="hover:text-white">Newsletter</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Connect</h4>
          <form className="mt-3 flex gap-2" onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="footer-email" className="sr-only">Email</label>
            <input id="footer-email" type="email" required placeholder="Your email" className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <button className="rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Favor International. All rights reserved.</div>
    </footer>
  )
}

export default Footer
