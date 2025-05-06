"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Brain, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function DemoRequest() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    jobTitle: "",
    phone: "",
    message: ""
  })
  
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call with timeout
    setTimeout(() => {
      setFormSubmitted(true)
      setIsSubmitting(false)
    }, 1500)
  }

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
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Request a Demo</h1>
            <p className="text-gray-600">
              Fill out the form below to request a personalized demo of our cancer classification system.
            </p>
          </div>

          {formSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-10 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-6">
                <CheckCircle className="h-20 w-20 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You for Your Interest!</h2>
              <p className="text-gray-600 mb-6">
                Your demo request has been successfully submitted. One of our team members will contact you shortly to schedule your personalized demo session.
              </p>
              <div className="mt-8">
                <Link href="/">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Return to Home
                  </Button>
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                      className="w-full border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  {/* Organization Field */}
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization/Institution *</Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formState.organization}
                      onChange={handleInputChange}
                      placeholder="Enter your organization name"
                      required
                      className="w-full border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  {/* Job Title Field */}
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle">Job Title *</Label>
                    <Input
                      id="jobTitle"
                      name="jobTitle"
                      value={formState.jobTitle}
                      onChange={handleInputChange}
                      placeholder="Enter your job title"
                      required
                      className="w-full border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number (optional)"
                      className="w-full border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your specific needs or questions"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md transition-colors"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>
                </div>
              </form>
            </motion.div>
          )}

          <div className="mt-12 text-center text-gray-600 text-sm">
            <p>
              By submitting this form, you agree to our <Link href="#" className="text-purple-600 hover:underline">Privacy Policy</Link> and <Link href="#" className="text-purple-600 hover:underline">Terms of Service</Link>.
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
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Support</Link>
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