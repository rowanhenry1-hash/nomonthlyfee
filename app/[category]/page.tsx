import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FreeTypeBadge from "../components/FreeTypeBadge";
import { categories, getCategory, getServicesForCategory } from "../data/services";

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};
  return {
    title: `${cat.name} — nomonthlyfee.ca`,
    description: cat.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  const catServices = getServicesForCategory(category);

  return (
    <>
      <Nav />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-green-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-600">{cat.name}</span>
        </nav>

        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{cat.icon}</span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {cat.name}
            </h1>
          </div>
          <p className="text-gray-500 text-base sm:text-lg">{cat.description}</p>
        </div>

        {/* Service cards */}
        <div className="flex flex-col gap-4">
          {catServices.map((service) => (
            <Link
              key={service.slug}
              href={`/${category}/${service.slug}`}
              className="group block rounded-xl border border-gray-200 p-5 sm:p-6 hover:border-green-500 hover:shadow-sm transition-all bg-white"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="font-semibold text-gray-900 text-base sm:text-lg group-hover:text-green-700 transition-colors">
                      {service.name}
                    </h2>
                    <FreeTypeBadge type={service.freeType} />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                    Replaces: {service.replacesWhat}
                  </p>
                  {service.bestFor && (
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                      Best for: {service.bestFor}
                    </p>
                  )}
                  <p className="text-sm sm:text-base text-gray-600 mt-2 leading-snug">
                    {service.pitchLine}
                  </p>
                </div>
                <span className="text-green-500 text-xl flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
