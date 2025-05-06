"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Brain, Users, Bot, Database, ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
              <li><a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a></li>
              <li><a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">Features</a></li>
              <li><a href="#bot" className="text-gray-700 hover:text-purple-600 transition-colors">Bot</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a></li>
            </ul>
          </motion.nav>
        </div>
      </header>

      {/* Section 1 - Hero */}
      <section id="home" className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Advanced Cancer <span className="text-purple-600">Classification</span> System
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Our AI-powered system accurately classifies cancer types and provides personalized treatment recommendations to help healthcare professionals make informed decisions.
              </p>
              <div className="flex space-x-4">
                <Link href="/cancer-page">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Get Started
                  </Button>
                </Link>
                <Link href="/documents">
                  <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg blur opacity-30"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-xl">
                  <div className="w-full h-64 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Brain className="h-24 w-24 text-purple-500" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-800">AI-Powered Analysis</h3>
                    <p className="text-gray-600">Our system uses advanced machine learning algorithms to analyze patient data and provide accurate cancer classifications.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link href="/documents" className="flex flex-col items-center text-purple-600">
            <span className="text-sm mb-1">Learn More</span>
            <ChevronDown className="animate-bounce" />
          </Link>
        </motion.div>
      </section>

      {/* Section 2 - About Us */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              We are a team of medical professionals, data scientists, and AI experts dedicated to improving cancer diagnosis and treatment through innovative technology.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="bg-purple-50 p-8 rounded-lg"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Expert Team</h3>
              <p className="text-gray-600 text-center">
                Our multidisciplinary team combines expertise in oncology, data science, and artificial intelligence to create cutting-edge solutions.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="bg-purple-50 p-8 rounded-lg"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Brain className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Advanced Technology</h3>
              <p className="text-gray-600 text-center">
                We leverage state-of-the-art machine learning algorithms and medical research to provide accurate cancer classifications.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="bg-purple-50 p-8 rounded-lg"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Database className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Comprehensive Data</h3>
              <p className="text-gray-600 text-center">
                Our system is trained on extensive medical datasets to ensure high accuracy and reliability in cancer classification.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 3 - Features */}
      <section id="features" className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Features</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Our cancer classification system offers a range of features designed to improve diagnosis accuracy and treatment planning.
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">1</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Accurate Classification</h3>
                    <p className="text-gray-600">
                      Our system accurately classifies cancer types based on patient data, helping doctors make informed decisions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Treatment Plans</h3>
                    <p className="text-gray-600">
                      Receive tailored treatment recommendations based on the specific cancer type and patient characteristics.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-time Analysis</h3>
                    <p className="text-gray-600">
                      Get instant results and analysis, allowing for quicker treatment decisions and improved patient outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 order-1 md:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg blur opacity-30"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-xl">
                  <div className="w-full h-64 bg-purple-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Bot className="h-24 w-24 text-purple-500 mx-auto mb-4" />
                      <p className="text-purple-700 font-medium">AI-Powered Classification</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4 - Bot Functionality */}
      <section id="bot" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Bot Functionality</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Our AI-powered bot provides comprehensive cancer analysis and personalized treatment recommendations.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">How It Works</h3>
                <div className="space-y-8">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-600 font-bold">1</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Data Processing</h4>
                      <p className="text-gray-600">
                        The bot collects and processes patient data, including medical history, test results, and imaging data.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-600 font-bold">2</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Cancer Analysis</h4>
                      <p className="text-gray-600">
                        Using advanced algorithms, the bot analyzes the data to classify the cancer type with high accuracy.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-600 font-bold">3</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Treatment Recommendation</h4>
                      <p className="text-gray-600">
                        Based on the classification, the bot provides a detailed treatment plan tailored to the patient's specific condition.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Detailed Analysis Output</h3>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-purple-700 mb-2">1. Cancer Classification</h4>
                      <ul className="list-disc list-inside text-gray-600 ml-2 space-y-1">
                        <li>Primary detection: Cancer Type</li>
                        <li>Key findings from the data</li>
                        <li>Confidence level assessment</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-purple-700 mb-2">2. Step-by-Step Treatment Plan</h4>
                      <ul className="list-disc list-inside text-gray-600 ml-2 space-y-1">
                        <li>Step 1: Initial treatment approach</li>
                        <li>Step 2: Follow-up procedures</li>
                        <li>Step 3: Long-term management</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-purple-700 mb-2">3. What to Expect</h4>
                      <ul className="list-disc list-inside text-gray-600 ml-2 space-y-1">
                        <li>Typical timeline for treatment</li>
                        <li>Common side effects and management</li>
                        <li>Success rates and prognosis</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-purple-700 mb-2">4. Important Considerations</h4>
                      <ul className="list-disc list-inside text-gray-600 ml-2 space-y-1">
                        <li>Key decisions for the patient</li>
                        <li>Lifestyle recommendations</li>
                        <li>Support resources available</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-purple-700 mb-2">5. Next Steps</h4>
                      <ul className="list-disc list-inside text-gray-600 ml-2 space-y-1">
                        <li>Immediate actions to take</li>
                        <li>Questions to ask your doctor</li>
                        <li>How to prepare for treatment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 5 - Additional Content */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Advanced Cancer Detection</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Our system is continuously improving to provide the most accurate cancer detection and classification available.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-white rounded-lg shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Get Started Today</h3>
                  <p className="text-gray-600 mb-6">
                    Join healthcare professionals worldwide who are using our cancer classification system to improve patient outcomes.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">Accurate cancer classification</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">Personalized treatment plans</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">Continuous system improvements</span>
                    </li>
                  </ul>
                  <Link href="/demo-request">
                    <Button className="bg-purple-600 hover:bg-purple-700 w-full">
                      Request a Demo
                    </Button>
                  </Link>
                </div>
                
                <div className="bg-purple-600 p-8 md:p-12 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                    <p className="mb-6">Have questions about our cancer classification system?</p>
                    <Link href="/support">
                      <Button variant="outline" className="border-white text-purple-600 hover:bg-purple-700 hover:text-white hover:border-transparent">
                        Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6 - Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest From Our Blog</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Stay updated with the latest insights, research, and updates in cancer classification and treatment
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Blog Post 1 */}
            <motion.article 
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-purple-100 flex items-center justify-center">
                <span className="text-3xl font-bold text-purple-600">R</span>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                    Research
                  </span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    8 min read
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-purple-600 transition-colors">
                  Advances in AI-Powered Cancer Detection
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  How machine learning algorithms are revolutionizing early cancer detection and improving patient outcomes.
                </p>
              </div>
            </motion.article>
            
            {/* Blog Post 2 */}
            <motion.article 
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <span className="text-3xl font-bold text-purple-600">E</span>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                    Education
                  </span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    12 min read
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-purple-600 transition-colors">
                  Understanding Different Types of Cancer
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  An in-depth look at the major categories of cancer, their characteristics, and how they're classified by modern medicine.
                </p>
              </div>
            </motion.article>
            
            {/* Blog Post 3 */}
            <motion.article 
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-green-100 flex items-center justify-center">
                <span className="text-3xl font-bold text-purple-600">T</span>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                    Treatment
                  </span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    10 min read
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-purple-600 transition-colors">
                  The Future of Personalized Cancer Treatment
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  How AI and genetic analysis are enabling truly personalized treatment plans that improve efficacy and reduce side effects.
                </p>
              </div>
            </motion.article>
          </motion.div>
          
          <div className="text-center mt-12">
            <Link href="/blog-page">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7 - Case Studies */}
      <section id="case-studies" className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Real-world examples of how our cancer classification system is improving patient outcomes
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Case Study 1 */}
            <motion.div 
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-pink-600 p-6 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-sm font-medium mb-1">CASE STUDY</div>
                    <div className="text-xl font-bold">2023</div>
                  </div>
                </div>
                <div className="col-span-2 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Improving Breast Cancer Detection Accuracy by 35%</h3>
                  <p className="text-purple-600 font-medium mb-4">Memorial Cancer Institute</p>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    Implementation of our AI-based classification system resulted in 35% reduction in false positives and 22% increase in early detection rates.
                  </p>
                  <Link href="/case-study/1">
                    <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 text-sm px-4">
                      Read Case Study <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
            
            {/* Case Study 2 */}
            <motion.div 
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-blue-600 p-6 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-sm font-medium mb-1">CASE STUDY</div>
                    <div className="text-xl font-bold">2022</div>
                  </div>
                </div>
                <div className="col-span-2 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Accelerating Lung Cancer Treatment Planning by 60%</h3>
                  <p className="text-purple-600 font-medium mb-4">Pacific Northwest Oncology Center</p>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    Integration of our system with their existing EMR infrastructure reduced time from initial scan to treatment plan by 60%.
                  </p>
                  <Link href="/case-study/2">
                    <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 text-sm px-4">
                      Read Case Study <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="text-center mt-12">
            <Link href="/case-study">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8 - Support */}
      <section id="support-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Need Help?</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              We're here to support you with any questions or issues related to our cancer classification system
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Support</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Our Support Team</h4>
                    <p className="text-gray-600 mb-6">
                      Our dedicated support team is available to help you with technical issues, account questions, and more.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Contact Information</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <svg className="h-6 w-6 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <span>rasheq53@gmail.com</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <span>8902325887</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link href="/support">
                    <Button className="bg-purple-600 hover:bg-purple-700 w-full">
                      Visit Support Center
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-purple-50 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-md font-semibold text-gray-800 mb-1">How accurate is the classification system?</h4>
                    <p className="text-gray-600 text-sm">
                      Our system has demonstrated an average accuracy of 93% across all cancer types in clinical trials.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-md font-semibold text-gray-800 mb-1">Is my medical data secure?</h4>
                    <p className="text-gray-600 text-sm">
                      Yes, we implement comprehensive security measures including end-to-end encryption and access controls.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-md font-semibold text-gray-800 mb-1">Can it integrate with our EMR systems?</h4>
                    <p className="text-gray-600 text-sm">
                      Yes, our system is designed with interoperability in mind and can connect with most major EMR systems.
                    </p>
                  </div>
                  
                  <Link href="/support" className="text-purple-600 font-medium hover:text-purple-700 flex items-center mt-4">
                    View all FAQs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mr-3">
                  <Brain className="text-white h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold">CancerClassify</h2>
              </div>
              <p className="text-gray-400 mb-4">
                Advanced cancer classification and treatment recommendation system powered by AI.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/mohamedrasheq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="https://x.com/mohamedrasheq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://wa.me/8902325887" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#bot" className="text-gray-400 hover:text-white transition-colors">Bot Functionality</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/documents" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
                <li><span className="text-gray-400">API Reference <span className="ml-2 text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full">$5-$15/mo</span></span></li>
                <li><Link href="/blog-page" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/case-study" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="/support" className="text-gray-400 hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>10/c Trichy</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>rasheq53@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>8902325887</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} CancerClassify. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link href="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )   
}


