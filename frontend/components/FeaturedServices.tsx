import Link from "next/link";
import { services } from "@/data/services";

export default function FeaturedServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Featured Services
          </h2>

          <p className="text-gray-500 mt-3">
            Most Popular Digital Desk Services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.slice(0, 4).map((service) => (

            <Link
              href={`/service/${service.slug}`}
              key={service.slug}
            >

              <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-8 shadow-xl hover:scale-105 transition">

                <div className="text-6xl">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {service.title}
                </h3>

                <p className="mt-3 text-blue-100">
                  Fast, Secure & Professional Service
                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}