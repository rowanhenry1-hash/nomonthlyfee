import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center">
        <Link
          href="/"
          className="text-green-600 font-semibold text-lg tracking-tight hover:text-green-700 transition-colors"
        >
          nomonthlyfee.ca
        </Link>
      </div>
    </nav>
  );
}
