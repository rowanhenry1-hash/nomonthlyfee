import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
        <span>🍁 Made in Canada &mdash; Last updated March 2026</span>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:text-green-600 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-green-600 transition-colors">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
