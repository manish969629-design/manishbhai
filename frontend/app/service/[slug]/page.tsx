<div className="bg-white rounded-3xl shadow-lg p-8">

  <h2 className="text-2xl font-bold mb-6">
    Apply for {service.title}
  </h2>

  <input
    type="text"
    placeholder="Your Name"
    className="w-full border p-3 rounded-xl mb-4"
  />

  <input
    type="tel"
    placeholder="Mobile Number"
    className="w-full border p-3 rounded-xl mb-4"
  />

  <textarea
    placeholder="Write your requirement..."
    className="w-full border p-3 rounded-xl mb-4 h-28"
  />

  <a
    href={`https://wa.me/919696295457?text=Hello Digital Desk, I want service for ${service.title}`}
    target="_blank"
    className="block text-center w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl mb-4"
  >
    Send on WhatsApp
  </a>

  <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-xl mb-4">
    Required Documents
  </button>

  <Link
    href="/"
    className="block text-center mt-8 text-blue-600 font-semibold"
  >
    ← Back to Home
  </Link>

</div>