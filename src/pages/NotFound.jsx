import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function NotFound(){
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <h1 className="text-6xl font-black text-slate-900">404</h1>
          <p className="mt-4 text-slate-600">We couldn't find that page. Try the links in the menu.</p>
          <a href="/" className="mt-6 inline-flex items-center rounded-md bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-700">Back Home</a>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default NotFound
