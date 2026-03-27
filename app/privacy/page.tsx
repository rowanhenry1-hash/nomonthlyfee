import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — nomonthlyfee.ca",
  description: "Privacy policy for nomonthlyfee.ca",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-8">Last updated: March 27, 2026</p>

        <div className="prose prose-gray max-w-none space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Overview</h2>
            <p>
              nomonthlyfee.ca (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website located at{" "}
              <strong>nomonthlyfee.ca</strong>. This page explains how we handle information when you visit our site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Information We Collect</h2>
            <p>
              We do not collect personally identifiable information directly. However, like most websites, our
              site automatically receives and records certain information from your browser, including your IP
              address, browser type, referring page, and pages visited. This information is used only in aggregate
              to understand how our site is used.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Cookies</h2>
            <p>
              Cookies are small text files placed on your device by websites you visit. We and our third-party
              partners use cookies to operate and improve the site, serve relevant advertising, and analyze traffic.
            </p>
            <p className="mt-2">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              However, some parts of the site may not function properly if cookies are disabled.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Advertising</h2>
            <p>
              We use Google AdSense to display advertisements on this site. Google, as a third-party vendor,
              uses cookies to serve ads based on your prior visits to this site and other sites on the internet.
              Google&rsquo;s use of advertising cookies enables it and its partners to serve ads to you based on
              your visit to nomonthlyfee.ca and/or other sites on the internet.
            </p>
            <p className="mt-2">
              Google uses the DoubleClick DART cookie to serve ads to users based on their visit to our site
              and other sites on the internet. Users may opt out of the use of the DART cookie by visiting the{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Google Advertising Policies page
              </a>
              .
            </p>
            <p className="mt-2">
              You may also opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                www.aboutads.info/choices
              </a>{" "}
              or{" "}
              <a
                href="https://www.networkadvertising.org/managing/opt_out.asp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                www.networkadvertising.org
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Third-Party Links</h2>
            <p>
              nomonthlyfee.ca contains links to external websites. We are not responsible for the privacy
              practices or content of those sites. We encourage you to read the privacy policies of any
              third-party site you visit.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Analytics</h2>
            <p>
              We may use third-party analytics services (such as Google Analytics) to help understand how
              visitors use our site. These services may collect information about your use of the site,
              including pages visited and time spent. This data is used in aggregate form only.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Children&rsquo;s Privacy</h2>
            <p>
              This site is not directed at children under the age of 13. We do not knowingly collect personal
              information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page
              with an updated date. Continued use of the site after changes constitutes acceptance of the
              updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Contact</h2>
            <p>
              If you have questions about this Privacy Policy, you can reach us at:{" "}
              <a href="mailto:privacy@nomonthlyfee.ca" className="text-green-600 hover:underline">
                privacy@nomonthlyfee.ca
              </a>
            </p>
          </section>

        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <Link href="/" className="text-sm text-gray-400 hover:text-green-600 transition-colors">
            ← Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
