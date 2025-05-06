"use client"

import Link from "next/link"
import { ArrowLeft, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="prose max-w-none text-gray-600">
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Introduction</h2>
            <p>
              CancerClassify ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our cancer classification service.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. Collection of Your Information</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect via the Service includes:
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Personal Data</h3>
            <p>
              When you use our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Organization</li>
              <li>Job title</li>
              <li>Medical/healthcare information</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Healthcare Data</h3>
            <p>
              Our service may collect and process healthcare information for cancer classification purposes. This data is handled in accordance with all applicable healthcare data protection regulations, including HIPAA where applicable.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Service to:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Create and manage your account</li>
              <li>Process your cancer classification requests</li>
              <li>Provide personalized treatment recommendations</li>
              <li>Improve our website and services</li>
              <li>Send you technical notices and updates</li>
              <li>Respond to customer service requests</li>
              <li>Communicate with you about products, services, and events</li>
              <li>Administer promotions, surveys, and contests</li>
              <li>Monitor and analyze usage patterns</li>
              <li>Enhance the security of our Service</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">By Law or to Protect Rights</h3>
            <p>
              If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Third-Party Service Providers</h3>
            <p>
              We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
            <p>
              For healthcare data, we implement additional security measures in compliance with healthcare data protection standards, including encryption of data both in transit and at rest.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:
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