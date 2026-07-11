const categories = [
  { title: "Government Services", icon: "🏛️" },
  { title: "PAN Card", icon: "🪪" },
  { title: "Aadhaar", icon: "🆔" },
  { title: "Passport", icon: "🛂" },
  { title: "Voter ID", icon: "🗳️" },
  { title: "Driving Licence", icon: "🚗" },
  { title: "PDF Tools", icon: "📄" },
  { title: "Image Tools", icon: "🖼️" },
  { title: "Typing", icon: "⌨️" },
  { title: "Printing", icon: "🖨️" },
  { title: "Bill Payment", icon: "💳" },
  { title: "AI Tools", icon: "🤖" },
];

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Browse Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border hover:border-blue-500 shadow hover:shadow-xl transition-all duration-300 p-6 text-center cursor-pointer"
            >
              <div className="text-5xl mb-4">
                {item.icon}
              </div>

              <h3 className="font-semibold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}