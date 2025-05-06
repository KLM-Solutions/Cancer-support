"use client"

import Link from "next/link"
import { ArrowLeft, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsOfService() {
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
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h1>
          <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="prose max-w-none text-gray-600">
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and CancerClassify ("we," "us" or "our"), concerning your access to and use of our cancer classification service and website.
            </p>
            <p>
              You agree that by accessing the site and using our services, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these terms, you are prohibited from using the site and services and must discontinue use immediately.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. Medical Disclaimer</h2>
            <p>
              The CancerClassify service is designed to assist healthcare professionals in cancer classification and treatment recommendation. It is not intended to replace professional medical advice, diagnosis, or treatment.
            </p>
            <p>
              All cancer classifications and treatment recommendations provided by our service should be reviewed by qualified healthcare professionals before making medical decisions. We do not guarantee the accuracy of any classification or recommendation provided through our service.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the site and services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
            </p>
            <p>
              The Content and Marks are provided on the site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. User Representations</h2>
            <p>
              By using the site and services, you represent and warrant that:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>You have the legal capacity and agree to comply with these Terms of Service</li>
              <li>You are not a minor in the jurisdiction in which you reside</li>
              <li>You will not access the site or services through automated or non-human means</li>
              <li>You will not use the site or services for any illegal or unauthorized purpose</li>
              <li>Your use of the site or services will not violate any applicable law or regulation</li>
              <li>If you are using the service in a professional healthcare capacity, you are duly qualified and licensed to practice in your respective field</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Service Fee and Billing</h2>
            <p>
              Use of certain features of our service may require payment of fees. Information regarding our subscription plans, one-time fees, and billing practices is available on our website or through our customer service representatives.
            </p>
            <p>
              We may modify our fees and billing practices at any time. We will provide you with notice of any price change before it becomes effective. Your continued use of the service after the price change becomes effective constitutes your agreement to pay the modified amount.
            </p>
            <p>
              API access may be priced at $5, $10, or $15 per month depending on the tier selected and the volume of usage.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. User Data</h2>
            <p>
              We respect the privacy of your data. Please review our Privacy Policy for more information on how we collect and use your data. By using our service, you agree to our Privacy Policy and consent to our collection, use, and sharing of your information as detailed therein.
            </p>
            <p>
              You retain all rights to any data you submit, post, or display on or through the service. By submitting, posting, or displaying content on or through the service, you grant us a worldwide, non-exclusive, royalty-free license to use, process, and analyze such content to provide and improve our services.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Termination</h2>
            <p>
              We may terminate or suspend your access to the service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service.
            </p>
            <p>
              All provisions of the Terms of Service which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8. Limitation of Liability</h2>
            <p>
              In no event shall CancerClassify, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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