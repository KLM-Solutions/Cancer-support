"use client"

import { motion } from "framer-motion"
import { ChevronLeft, Brain, FileText, MessageSquare, Star, HelpCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Documents() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mr-3">
              <Brain className="text-white h-6 w-6" />
            </div>
            <h1 className="text-xl font-bold text-gray-800">CancerClassify</h1>
          </motion.div>
          
          <motion.nav 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="flex space-x-8">
              <li><Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link></li>
              <li><Link href="/#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</Link></li>
              <li><Link href="/#features" className="text-gray-700 hover:text-purple-600 transition-colors">Features</Link></li>
              <li><Link href="/#bot" className="text-gray-700 hover:text-purple-600 transition-colors">Bot</Link></li>
              <li><Link href="/#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</Link></li>
            </ul>
          </motion.nav>
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

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              variants={fadeIn}
            >
              How to Use <span className="text-purple-600">CancerClassify</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              variants={fadeIn}
            >
              Complete documentation and guide for using our AI-powered cancer classification system
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar Navigation */}
            <motion.div 
              className="lg:w-1/4 bg-white rounded-lg shadow-sm p-6 h-fit sticky top-28"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Documentation</h3>
              <ul className="space-y-4">
                <motion.li variants={fadeInFromLeft}>
                  <a href="#overview" className="flex items-center text-purple-600 font-medium">
                    <FileText className="mr-2 h-5 w-5" />
                    System Overview
                  </a>
                </motion.li>
                <motion.li variants={fadeInFromLeft}>
                  <a href="#workflow" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Bot Workflow
                  </a>
                </motion.li>
                <motion.li variants={fadeInFromLeft}>
                  <a href="#features" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors">
                    <Star className="mr-2 h-5 w-5" />
                    Key Features
                  </a>
                </motion.li>
                <motion.li variants={fadeInFromLeft}>
                  <a href="#faq" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors">
                    <HelpCircle className="mr-2 h-5 w-5" />
                    FAQ
                  </a>
                </motion.li>
              </ul>
            </motion.div>

            {/* Main Content Area */}
            <motion.div 
              className="lg:w-3/4"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* System Overview Section */}
              <motion.div 
                variants={fadeIn}
                id="overview" 
                className="bg-white rounded-lg shadow-sm p-8 mb-10"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">System Overview</h2>
                <div className="space-y-6 text-gray-700">
                  <p>
                    CancerClassify is an advanced AI-powered system that helps medical professionals accurately classify cancer types based on patient data. The system utilizes state-of-the-art machine learning algorithms trained on extensive medical datasets to provide precise classifications and personalized treatment recommendations.
                  </p>
                  
                  <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50 italic">
                    The system achieves over 95% accuracy in cancer type classification across multiple cancer categories, including breast, lung, colorectal, and prostate cancers.
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">System Requirements</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
                    <li>Secure internet connection</li>
                    <li>Access credentials for healthcare professionals</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Data Security</h3>
                  <p>
                    All patient data is encrypted both in transit and at rest. The system complies with HIPAA regulations and other healthcare data protection standards. Patient data is never stored longer than necessary for processing, and all personal identifiers are removed during analysis.
                  </p>
                </div>
              </motion.div>

              {/* Bot Workflow Section */}
              <motion.div 
                variants={fadeIn}
                id="workflow" 
                className="bg-white rounded-lg shadow-sm p-8 mb-10"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Bot Workflow</h2>
                <div className="space-y-6 text-gray-700">
                  <p>
                    The CancerClassify bot follows a streamlined workflow to process patient data and provide accurate cancer classifications and treatment recommendations. Below is a step-by-step guide to the bot's workflow:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-purple-600 font-bold">1</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-3">Data Collection</h3>
                      <p>
                        Upload patient data through the secure interface, including medical history, test results, and imaging data. The system accepts various file formats, including DICOM for medical imaging.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-purple-600 font-bold">2</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-3">Data Processing</h3>
                      <p>
                        The system processes and normalizes the input data, extracting relevant features for analysis. All data is validated for completeness and quality before proceeding.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-purple-600 font-bold">3</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-3">Cancer Classification</h3>
                      <p>
                        The AI model analyzes the processed data to classify the cancer type, stage, and key characteristics. The system uses ensemble models to ensure high accuracy.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-purple-600 font-bold">4</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-3">Treatment Recommendation</h3>
                      <p>
                        Based on the classification results, the system generates personalized treatment recommendations aligned with the latest clinical guidelines and research.
                      </p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Output Format</h3>
                  <p>
                    The system provides a comprehensive report that includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Cancer classification with confidence level</li>
                    <li>Key findings from the analysis</li>
                    <li>Personalized treatment recommendations</li>
                    <li>Follow-up care suggestions</li>
                    <li>References to relevant medical literature</li>
                  </ul>
                </div>
              </motion.div>

              {/* Key Features Section */}
              <motion.div 
                variants={fadeIn}
                id="features" 
                className="bg-white rounded-lg shadow-sm p-8 mb-10"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h2>
                <div className="space-y-6 text-gray-700">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Multi-Cancer Classification</h3>
                      <p>
                        The system can accurately classify over 50 different cancer types and subtypes, providing detailed information about each classification to aid in diagnosis.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Treatment Plans</h3>
                      <p>
                        Generate customized treatment recommendations based on the patient's specific cancer type, stage, medical history, and other relevant factors.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Continuous Learning</h3>
                      <p>
                        The system continuously improves through machine learning techniques, incorporating new research findings and treatment outcomes to enhance classification accuracy.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Integration Capabilities</h3>
                      <p>
                        The system can integrate with hospital electronic health record (EHR) systems and other medical platforms through secure APIs, enabling seamless data exchange.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Research Support</h3>
                      <p>
                        The system provides references to relevant medical literature and clinical trials, supporting evidence-based medicine and helping doctors stay current with the latest research.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FAQ Section */}
              <motion.div 
                variants={fadeIn}
                id="faq" 
                className="bg-white rounded-lg shadow-sm p-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6 text-gray-700">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold mb-2">How accurate is the cancer classification?</h3>
                    <p>
                      Our system has demonstrated over 95% accuracy in clinical validation studies across multiple cancer types. Each classification includes a confidence score to help medical professionals evaluate the reliability of the results.
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold mb-2">Is patient data kept secure?</h3>
                    <p>
                      Yes, patient data security is our top priority. All data is encrypted using industry-standard protocols, and the system complies with HIPAA and other relevant regulations. We do not store patient data longer than necessary for processing.
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold mb-2">Can the system integrate with our hospital's EHR?</h3>
                    <p>
                      Yes, the system provides secure API endpoints that allow integration with most major electronic health record systems. Our technical team can assist with custom integration solutions as needed.
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold mb-2">How often is the system updated?</h3>
                    <p>
                      The system is updated quarterly with the latest medical research findings and improved algorithms. Critical updates related to treatment recommendations are implemented more frequently as new clinical guidelines become available.
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold mb-2">Who should use this system?</h3>
                    <p>
                      The system is designed for use by qualified medical professionals, including oncologists, pathologists, and other healthcare providers involved in cancer diagnosis and treatment. It is intended to assist, not replace, clinical judgment.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What support options are available?</h3>
                    <p>
                      We provide comprehensive support options, including 24/7 technical support, regular training sessions, and a dedicated customer success manager for enterprise clients. Our documentation is regularly updated with the latest information.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
            Join healthcare professionals worldwide who are using our cancer classification system to improve patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/demo-request">
              <Button className="bg-white text-purple-600 hover:bg-purple-50">
                Request a Demo
              </Button>
            </Link>
            <Link href="/cancer-page">
              <Button className="bg-white text-purple-600 hover:bg-purple-50">
                Get Started
              </Button>
            </Link>
            <Link href="/support">
              <Button variant="outline" className="border-white text-purple-600 hover:bg-purple-700 hover:text-white hover:border-transparent">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center mr-3">
                <Brain className="text-white h-4 w-4" />
              </div>
              <span className="text-lg font-bold">CancerClassify</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
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