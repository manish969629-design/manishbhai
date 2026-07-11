"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/data/services";

export default function ServiceGrid() {
  const [search, setSearch] = useState("");

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Our Popular Services
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Search and access all Digital Desk services instantly.
        </p>

        {/* Search Box */}
        <div className="max-w-xl mx-auto mb-12">
          <input
            type="text"
            placeholder="🔍 Search services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-300 p-4 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <Link
                href={`/service/${service.slug}`}
                key={service.slug}
              >
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 p-8 text-center cursor-pointer h-full">

                  <div
                    className={`${service.color} w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-5`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-lg font-semibold">
                    {service.title}
                  </h3>

                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-500 text-xl">
              No services found.
            </div>
          )}

        </div>

      </div>
    </section>
  );
}