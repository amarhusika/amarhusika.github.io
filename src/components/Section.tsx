const cards = [
  { title: 'Projects', icon: '🧠', link: '#projects' },
  { title: 'Skills', icon: '💻', link: '#skills' },
  { title: 'Experience', icon: '📁', link: '#experience' },
  { title: 'Contact', icon: '✉️', link: '#contact' }
]

export const Section = () => (
  <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto p-4">
    {cards.map(({ title, icon, link }) => (
      <a href={link} key={title} className="bg-white text-slate-900 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
        <div className="text-4xl mb-2">{icon}</div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </a>
    ))}
  </section>
)