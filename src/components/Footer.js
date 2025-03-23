// src/components/HeroSection.js
'use client'
import React, { useState } from 'react'

const Footer = () => {

  return (
    <footer className="bg-gray-900 text-white py-8">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
     
      <div>
        <h3 className="text-lg font-bold mb-4">Explore Neuroverse</h3>
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Use Cases</li>
          <li>Blog</li>
          <li>About Us</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
        <ul>
          <li>Email: support@neuroverse.build</li>
          <li>Phone: +1 123-456-7890</li>
          <li>Address: 123 Innovation Drive</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Connect with Us</h3>
        <ul className="flex justify-center gap-4">
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
        </ul>
      </div>
    </div>

    {/* <div className="text-center mt-8">
      <p>Stay Updated</p>
      <p className="mb-4">Sign up to receive the latest updates about Neuroverse.</p>
      <div className="flex justify-center gap-4">
        <input
          type="email"
          className="p-2 w-full max-w-xs text-gray-900"
          placeholder="Email Address"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Subscribe</button>
      </div>
    </div> */}

    <div className="text-center mt-8">
      <p>© 2024 Neuroverse. All rights reserved.</p>
      <div className="mt-4">
        <ul className="flex justify-center gap-8 text-sm">
          <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
          <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
  </footer> 
  )
}

export default Footer
