export default function MinistryCard({ title, description, cta="Learn more", href="#", image }){
  return (
    <a href={href} className="group block rounded-2xl overflow-hidden border border-slate-200 bg-white shadow hover:shadow-md transition-shadow">
      {image && <img src={image} alt="" className="w-full h-48 object-cover" />}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-700">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
        <span className="mt-4 inline-flex items-center text-sm font-medium text-teal-700 group-hover:text-teal-800">{cta}</span>
      </div>
    </a>
  )
}
