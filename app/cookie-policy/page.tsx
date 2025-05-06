"use client"

import Link from "next/link"
import { ArrowLeft, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mr-3">
              <Brain className="text-white h-6 w-6" />
            </div>
            <h1 className="text-xl font-bold text-gray-800">CancerClassify</h1>
          </Link>
          
          <nav>
            <ul className="flex space-x-8">
              <li><Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link></li>
              <li><Link href="/documents" className="text-gray-700 hover:text-purple-600 transition-colors">Documentation</Link></li>
              <li><Link href="/blog-page" className="text-gray-700 hover:text-purple-600 transition-colors">Blog</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link href="/">
          <Button variant="ghost" className="flex items-center text-purple-600 hover:text-purple-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Cookie Policy</h1>
          <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="prose max-w-none text-gray-600">
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the service or a third-party to recognize you and make your next visit easier and the service more useful to you.
            </p>
            <p>
              Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. How CancerClassify Uses Cookies</h2>
            <p>
              When you use and access our service, we may place a number of cookie files in your web browser. We use cookies for the following purposes:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>To enable certain functions of the service</li>
              <li>To provide analytics</li>
              <li>To store your preferences</li>
              <li>To enable advertisements delivery, including behavioral advertising</li>
              <li>To authenticate users and prevent fraudulent use of user accounts</li>
            </ul>
            <p>
              We use both session and persistent cookies on the service and we use different types of cookies to run the service:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li><strong>Essential cookies.</strong> We may use essential cookies to authenticate users and prevent fraudulent use of user accounts.</li>
              <li><strong>Preferences cookies.</strong> We may use preferences cookies to remember information that changes the way the service behaves or looks, such as the user's preferred language or the region that the user is in.</li>
              <li><strong>Analytics cookies.</strong> We may use analytics cookies to track information on how the service is used so that we can make improvements.</li>
              <li><strong>Advertising cookies.</strong> These types of cookies are used to deliver advertisements that are relevant to you and your interests.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on.
            </p>
            <p>
              These may include:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Google Analytics – for tracking website traffic and user behavior</li>
              <li>Google AdSense – for serving personalized advertisements</li>
              <li>Facebook Pixel – for tracking conversions from Facebook ads</li>
              <li>Hotjar – for analyzing user behavior and feedback</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. What Are Your Choices Regarding Cookies</h2>
            <p>
              If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
            </p>
            <p>
              Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
            </p>
            <p>
              You can learn more about cookies and the following third-party websites:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>AllAboutCookies: <a href="https://www.allaboutcookies.org/" className="text-purple-600">https://www.allaboutcookies.org/</a></li>
              <li>Network Advertising Initiative: <a href="https://www.networkadvertising.org/" className="text-purple-600">https://www.networkadvertising.org/</a></li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Changes to This Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date at the top of this page.
            </p>
            <p>
              You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
            </p>
            <p className="mt-2">
              Email: rasheq53@gmail.com<br />
              Phone: 8902325887<br />
              Address: 10/c Trichy
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center mr-3">
                <Brain className="text-white h-4 w-4" />
              </div>
              <span className="text-lg font-bold">CancerClassify</span>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
              <Link href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center md:text-left">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} CancerClassify. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 