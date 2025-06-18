// src/app/contact/page.tsx
export default function ContactPage() {
  return (
    <section className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form className="flex flex-col space-y-4">
        <input type="text" placeholder="Your Name" className="border p-2 rounded" />
        <input type="email" placeholder="Your Email" className="border p-2 rounded" />
        <textarea placeholder="Your Message" rows={5} className="border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Send
        </button>
      </form>
    </section>
  )
}
