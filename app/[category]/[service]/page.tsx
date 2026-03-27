import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import FreeTypeBadge from "../../components/FreeTypeBadge";
import { services, getCategory, getService } from "../../data/services";

export async function generateStaticParams() {
  return services.map((s) => ({
    category: s.categorySlug,
    service: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; service: string }>;
}) {
  const { category, service } = await params;
  const s = getService(category, service);
  if (!s) return {};
  return {
    title: `${s.name} — nomonthlyfee.ca`,
    description: s.pitchLine,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ category: string; service: string }>;
}) {
  const { category, service } = await params;
  const s = getService(category, service);
  if (!s) notFound();

  const cat = getCategory(category);

  return (
    <>
      <Nav />

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-6 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-green-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href={`/${category}`}
            className="hover:text-green-600 transition-colors"
          >
            {cat?.name ?? category}
          </Link>
          <span>/</span>
          <span className="text-gray-600">{s.name}</span>
        </nav>

        {/* Service name + badge */}
        <div className="flex items-start gap-3 flex-wrap">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {s.name}
          </h1>
          <span className="mt-1.5 sm:mt-2.5">
            <FreeTypeBadge type={s.freeType} />
          </span>
        </div>

        {/* Replaces */}
        <p className="mt-2 text-sm sm:text-base text-gray-400">
          You might be paying for: <span className="text-gray-600">{s.replacesWhat}</span>
        </p>

        {/* Best for (banking only) */}
        {s.bestFor && (
          <p className="mt-1 text-sm sm:text-base text-gray-500">
            Best for: {s.bestFor}
          </p>
        )}

        {/* Pitch line */}
        <p className="mt-5 text-base sm:text-lg text-gray-700 leading-relaxed border-l-4 border-green-500 pl-4">
          {s.pitchLine}
        </p>

        {/* What you get */}
        <section className="mt-8 sm:mt-10">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
            What you get
          </h2>
          <ul className="space-y-2">
            {s.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* What's different */}
        <section className="mt-8 sm:mt-10">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
            What&apos;s different from the paid version
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {s.honestDifference}
          </p>
        </section>

        {/* Perfect for */}
        <section className="mt-8 sm:mt-10">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
            Perfect for
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {s.perfectFor}
          </p>
        </section>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 flex flex-wrap gap-3">
          {s.url ? (
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-sm sm:text-base font-semibold text-white hover:bg-green-700 transition-colors"
            >
              {s.urlLabel ?? `Visit ${s.name}`}
              <span>↗</span>
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 rounded-lg bg-green-50 border border-green-200 px-5 py-3 text-sm sm:text-base font-semibold text-green-800">
              📞 {s.urlLabel ?? `Dial 811`}
            </div>
          )}

          {s.secondaryUrl && (
            <a
              href={s.secondaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-sm sm:text-base font-semibold text-gray-700 hover:border-green-400 hover:text-green-700 transition-colors"
            >
              {s.secondaryUrlLabel ?? s.secondaryUrl}
              <span>↗</span>
            </a>
          )}
        </div>

        {/* Back link */}
        <div className="mt-8 pt-8 border-t border-gray-100">
          <Link
            href={`/${category}`}
            className="text-sm text-gray-400 hover:text-green-600 transition-colors"
          >
            ← Back to {cat?.name ?? category}
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
