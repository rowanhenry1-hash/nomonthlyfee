import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use — nomonthlyfee.ca",
  description: "Terms of use for nomonthlyfee.ca",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Terms of Use</h1>
        <p className="text-sm text-gray-400 mb-8">Last updated: March 27, 2026</p>

        <div className="space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Acceptance of Terms</h2>
            <p>
              By accessing and using nomonthlyfee.ca (&ldquo;the Site&rdquo;), you accept and agree to be bound
              by these Terms of Use. If you do not agree to these terms, please do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">About the Site</h2>
            <p>
              nomonthlyfee.ca provides information about free alternatives to paid subscription services
              available to Canadians. The content is informational only. We are not affiliated with, endorsed
              by, or compensated by any of the services listed on this site unless explicitly stated.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Accuracy of Information</h2>
            <p>
              We make reasonable efforts to ensure the information on this Site is accurate and up to date.
              However, service features, pricing, and availability change frequently. We make no warranty
              that any information on this Site is current, complete, or accurate. Always verify details
              directly with the service provider before making decisions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Third-Party Services</h2>
            <p>
              This Site links to third-party websites and services. We have no control over those sites and
              are not responsible for their content, privacy practices, or availability. Links do not
              constitute an endorsement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Intellectual Property</h2>
            <p>
              The content, layout, and design of this Site are owned by nomonthlyfee.ca. You may not
              reproduce, redistribute, or republish any content from this Site without prior written
              permission, except for personal, non-commercial use.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Disclaimer of Warranties</h2>
            <p>
              This Site is provided &ldquo;as is&rdquo; without warranties of any kind, either express or implied.
              We disclaim all warranties, including but not limited to implied warranties of merchantability,
              fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, nomonthlyfee.ca shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from your use of, or inability
              to use, this Site or any services linked from it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Advertising</h2>
            <p>
              This Site may display advertisements served by Google AdSense and other third-party ad networks.
              These advertisements are clearly labeled. We are not responsible for the content of third-party
              advertisements.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the Province of Ontario
              and the federal laws of Canada applicable therein.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the Site after changes are posted
              constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Contact</h2>
            <p>
              Questions about these Terms can be sent to:{" "}
              <a href="mailto:hello@nomonthlyfee.ca" className="text-green-600 hover:underline">
                hello@nomonthlyfee.ca
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
