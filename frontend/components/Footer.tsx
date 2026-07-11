import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-bold text-cyan-400">
            Digital Desk
          </h2>

          <p className="mt-5 text-gray-300 leading-7">
            One Platform for Government Services,
            PDF Tools, Image Tools, AI Assistant,
            Online Forms and Digital Solutions.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Services</Link></li>
            <li><Link href="/">PDF Tools</Link></li>
            <li><Link href="/">Image Tools</Link></li>
            <li><Link href="/">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">
            Government Services
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>PAN Card</li>
            <li>Aadhaar</li>
            <li>Passport</li>
            <li>Driving Licence</li>
            <li>Income Certificate</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">
            Contact
          </h3>

          <p className="text-gray-300">
            📧 yoursdigitaldesk@gmail.com
          </p>

          <p className="mt-3 text-gray-300">
            📞 +91 9696295457
          </p>

          <p className="mt-3 text-gray-300">
            📍 Kanpur, Uttar Pradesh
          </p>
        </div>

      </div>

      <div className="border-t border-slate-700 py-6 text-center text-gray-400">
        © 2026 Digital Desk. All Rights Reserved.
      </div>

    </footer>
  );
}