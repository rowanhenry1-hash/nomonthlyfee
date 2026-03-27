import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { categories, getServicesForCategory } from "./data/services";

export default function HomePage() {
  return (
    <>
      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-12 sm:pt-20 sm:pb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
            You can bank, stream, and design —{" "}
            <span className="text-green-600">for no monthly fee.</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-500 max-w-xl">
            Free alternatives to the subscriptions Canadians pay for every month.
          </p>
        </section>

        {/* Category grid */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {categories.map((cat) => {
              const count = getServicesForCategory(cat.slug).length;
              return (
                <Link
                  key={cat.slug}
                  href={`/${cat.slug}`}
                  className="group block rounded-xl border border-gray-200 p-4 sm:p-5 hover:border-green-500 hover:shadow-sm transition-all bg-white"
                >
                  <div className="text-2xl mb-2">{cat.icon}</div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base leading-tight group-hover:text-green-700 transition-colors">
                    {cat.name}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-gray-400">
                    {count} free {count === 1 ? "alternative" : "alternatives"}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
