const features = [
  {
    title: "Fast Service",
    icon: "⚡",
    desc: "Quick processing with minimum waiting time.",
  },
  {
    title: "100% Secure",
    icon: "🔒",
    desc: "Your documents and personal data remain secure.",
  },
  {
    title: "Expert Support",
    icon: "👨‍💻",
    desc: "Experienced professionals available to help.",
  },
  {
    title: "All-in-One Platform",
    icon: "🌐",
    desc: "Government services, PDF tools, image tools and more.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Why Choose Digital Desk?
          </h2>

          <p className="text-gray-500 mt-4">
            Professional Digital Services with Speed, Security & Trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-6xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}