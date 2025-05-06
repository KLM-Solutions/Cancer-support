"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Brain, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Advances in AI-Powered Cancer Detection",
    excerpt: "How machine learning algorithms are revolutionizing early cancer detection and improving patient outcomes.",
    author: "Dr. Sarah Johnson",
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "Research",
    thumbnailBg: "bg-purple-100"
  },
  {
    id: 2,
    title: "Understanding Different Types of Cancer: A Comprehensive Guide",
    excerpt: "An in-depth look at the major categories of cancer, their characteristics, and how they're classified by modern medicine.",
    author: "Dr. Michael Chen",
    date: "April 22, 2023",
    readTime: "12 min read",
    category: "Education",
    thumbnailBg: "bg-blue-100"
  },
  {
    id: 3,
    title: "The Future of Personalized Cancer Treatment",
    excerpt: "How AI and genetic analysis are enabling truly personalized treatment plans that improve efficacy and reduce side effects.",
    author: "Prof. Elizabeth Taylor",
    date: "March 10, 2023",
    readTime: "10 min read",
    category: "Treatment",
    thumbnailBg: "bg-green-100"
  },
  {
    id: 4,
    title: "Breakthrough in Cancer Classification: New ML Model Shows 95% Accuracy",
    excerpt: "Our latest machine learning model demonstrates unprecedented accuracy in distinguishing between cancer types from minimal data.",
    author: "Research Team",
    date: "February 5, 2023",
    readTime: "7 min read",
    category: "Research",
    thumbnailBg: "bg-yellow-100"
  },
  {
    id: 5,
    title: "Navigating a Cancer Diagnosis: Resources for Patients",
    excerpt: "A comprehensive guide to help patients and families find reliable information, support groups, and medical resources.",
    author: "Emma Wilson, Patient Advocate",
    date: "January 18, 2023",
    readTime: "9 min read",
    category: "Support",
    thumbnailBg: "bg-red-100"
  },
  {
    id: 6,
    title: "The Role of Data in Modern Oncology",
    excerpt: "How big data and AI are changing the landscape of cancer research, diagnosis, and treatment planning.",
    author: "Dr. James Roberts",
    date: "December 8, 2022",
    readTime: "11 min read",
    category: "Technology",
    thumbnailBg: "bg-indigo-100"
  }
];

export default function BlogPage() {
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
              <li><Link href="/case-study" className="text-gray-700 hover:text-purple-600 transition-colors">Case Studies</Link></li>
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

      {/* Blog Header */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Latest insights, research, and updates from the world of cancer classification and treatment
          </p>
        </div>

        {/* Blog Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button variant="outline" className="rounded-full bg-white hover:bg-purple-50 hover:text-purple-600">All Categories</Button>
          <Button variant="outline" className="rounded-full bg-white hover:bg-purple-50 hover:text-purple-600">Research</Button>
          <Button variant="outline" className="rounded-full bg-white hover:bg-purple-50 hover:text-purple-600">Treatment</Button>
          <Button variant="outline" className="rounded-full bg-white hover:bg-purple-50 hover:text-purple-600">Technology</Button>
          <Button variant="outline" className="rounded-full bg-white hover:bg-purple-50 hover:text-purple-600">Education</Button>
          <Button variant="outline" className="rounded-full bg-white hover:bg-purple-50 hover:text-purple-600">Support</Button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className={`h-48 ${post.thumbnailBg} flex items-center justify-center`}>
                <span className="text-3xl font-bold text-purple-600">{post.category[0]}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-purple-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Link href={`/blog-page/${post.id}`} className="text-purple-600 font-medium hover:text-purple-700 flex items-center">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-12">
          <Button variant="outline" className="h-10 w-10 p-0 rounded-full">1</Button>
          <Button variant="outline" className="h-10 w-10 p-0 rounded-full">2</Button>
          <Button variant="outline" className="h-10 w-10 p-0 rounded-full">3</Button>
          <span className="text-gray-500">...</span>
          <Button variant="outline" className="h-10 w-10 p-0 rounded-full">8</Button>
        </div>

        {/* Subscribe Section */}
        <div className="mt-20 bg-purple-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest updates on cancer research, treatment advances, and CancerClassify news.
          </p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <Button className="bg-purple-600 hover:bg-purple-700 rounded-l-none">
              Subscribe
            </Button>
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