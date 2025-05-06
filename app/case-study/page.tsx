"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Brain, FileText, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample case studies data
const caseStudies = [
  {
    id: 1,
    title: "Improving Breast Cancer Detection Accuracy by 35%",
    client: "Memorial Cancer Institute",
    challenge: "The institute was struggling with false positives in mammogram screenings, leading to unnecessary biopsies and patient stress.",
    solution: "Implementation of our AI-based classification system to provide second opinions on mammogram readings.",
    results: "35% reduction in false positives, 22% increase in early detection rates, and estimated $1.2M annual savings in unnecessary procedures.",
    industry: "Healthcare",
    year: "2023",
    thumbnailColor: "bg-pink-600"
  },
  {
    id: 2,
    title: "Accelerating Lung Cancer Treatment Planning by 60%",
    client: "Pacific Northwest Oncology Center",
    challenge: "Lengthy diagnosis and treatment planning cycles were causing delays in beginning critical treatments for lung cancer patients.",
    solution: "Integration of our classification and treatment recommendation system with their existing EMR infrastructure.",
    results: "60% reduction in time from initial scan to treatment plan, increased standardization of care protocols, and improved patient outcomes.",
    industry: "Healthcare",
    year: "2022",
    thumbnailColor: "bg-blue-600"
  },
  {
    id: 3,
    title: "Bringing Advanced Cancer Classification to Rural Communities",
    client: "Rural Health Initiative",
    challenge: "Limited access to oncology specialists in rural areas was resulting in delayed or inaccurate cancer diagnoses.",
    solution: "Deployment of our cloud-based cancer classification system with telemedicine integration.",
    results: "Enabled 15 rural clinics to provide specialist-level cancer diagnosis, reducing diagnosis time by 75% and eliminating need for long-distance travel for initial assessments.",
    industry: "Healthcare Non-profit",
    year: "2023",
    thumbnailColor: "bg-green-600"
  },
  {
    id: 4,
    title: "Standardizing Cancer Care Across a Multi-Hospital Network",
    client: "National Hospital Alliance",
    challenge: "Inconsistent diagnosis and treatment approaches across 12 affiliated hospitals were leading to variable patient outcomes and care quality.",
    solution: "Enterprise deployment of our classification system with customized workflow integration for each location.",
    results: "Achieved 94% standardization in diagnosis approach, reduced treatment variance by 65%, and improved overall survival rates by 12% within the first year.",
    industry: "Healthcare",
    year: "2022",
    thumbnailColor: "bg-purple-600"
  }
];

export default function CaseStudyPage() {
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

      {/* Case Studies Header */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world examples of how our cancer classification system is improving patient outcomes and healthcare efficiency
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-16">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className={`${study.thumbnailColor} p-8 md:p-12 flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <FileText className="h-12 w-12 mx-auto mb-4" />
                    <div className="text-sm font-medium mb-1">CASE STUDY</div>
                    <div className="text-2xl font-bold">{study.year}</div>
                    <div className="mt-4 inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
                      {study.industry}
                    </div>
                  </div>
                </div>
                <div className="col-span-2 p-8 md:p-12">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">{study.title}</h2>
                  <p className="text-purple-600 font-medium mb-6">Client: {study.client}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">The Challenge</h3>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Solution</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">The Results</h3>
                      <p className="text-gray-600">{study.results}</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Link href={`/case-study/${study.id}`}>
                      <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                        Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-purple-600 text-white rounded-lg p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Achieve Similar Results?</h3>
          <p className="mb-8 max-w-2xl mx-auto">
            Discover how CancerClassify can help your healthcare organization improve cancer diagnosis accuracy, streamline treatment planning, and improve patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/demo-request">
              <Button className="bg-white text-purple-600 hover:bg-gray-100">
                Request a Demo
              </Button>
            </Link>
            <Link href="/documents">
              <Button variant="outline" className="border-white text-white hover:bg-purple-700 hover:text-white hover:border-transparent">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-12">Our Impact by the Numbers</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <BarChart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-800 mb-2">93%</div>
              <p className="text-gray-600">Average diagnosis accuracy across all cancer types</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <BarChart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-800 mb-2">65%</div>
              <p className="text-gray-600">Average reduction in diagnosis time</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <BarChart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-800 mb-2">48%</div>
              <p className="text-gray-600">Average improvement in treatment planning efficiency</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <BarChart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-800 mb-2">150+</div>
              <p className="text-gray-600">Healthcare institutions using our system worldwide</p>
            </div>
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