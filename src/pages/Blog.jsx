import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Blog(){
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-teal-500" aria-hidden="true"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
            <h1 className="text-4xl font-bold">News & Updates</h1>
            <p className="mt-3 max-w-3xl text-teal-50">Stories from the field, reflections, and ministry updates.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-slate-600">CMS-powered articles can appear here. For now, this is a placeholder page.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Blog
