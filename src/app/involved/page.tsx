'use client'

import Link from 'next/link'
import { useState } from 'react'
import JoinForm from '@/components/JoinForm'

export default function Involved() {
  const [showJoinForm, setShowJoinForm] = useState(false)
  const involvementOptions = [
    {
      title: "Join Our Club",
      description: "Become an official HER member and participate in regular meetings and activities. This is open to ALL CVU students, room 134 on Wednesdays!!",
      icon: (
        <svg className="w-8 h-8 text-[#EB89B5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      benefits: ["Regular club meetings", "YOUR SUPPORT IS CRUCIAL TO OUR CAUSE", "Leadership opportunities"]
    },
    {
      title: "Volunteer at Events",
      description: "Help us organize and run our events, workshops, and community activities. Check the upcoming events and RSVP! ",
      icon: (
        <svg className="w-8 h-8 text-[#EB89B5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      benefits: ["Event planning experience", "Fundraising experience", "Networking opportunities", "Skill development"]
    },
    {
      title: "Help us advocate!",
      description: "If you are interested in helping us advocate for the required unit, please contact us at hereducationrequired@gmail.com. Or refer anyone of interest.",
      icon: (
        <svg className="w-8 h-8 text-[#EB89B5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      benefits: ["Help us move towards our goal", "Required unit"]
    },
    {
      title: "Social Media & Outreach",
      description: "Help us spread awareness through social media, flyers, and community outreach.",
      icon: (
        <svg className="w-8 h-8 text-[#EB89B5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v22a1 1 0 01-1 1h-2a1 1 0 01-1-1V4M7 4V1a1 1 0 00-1-1H4a1 1 0 00-1 1v22a1 1 0 001 1h2a1 1 0 001-1V4m8 8h2m-2 4h2m-8-4h2m-2 4h2m-8-4h2m-2 4h2" />
        </svg>
      ),
      benefits: ["You can follow us on Instagram at @her_hereducationrequired", "Sign up for our email list (written by students)"]
    }
  ]

  // Removed unused leadershipRoles array

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFBF3] to-[#FFF8D2]">
      {/* Header */}
      <header className="bg-[#EB89B5] text-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-block mb-4 text-pink-100 hover:text-white transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">Get Involved</h1>
          <p className="text-lg opacity-90">Join our community and help us make a difference in education</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        {/* Petition Notice */}
        <div className="mb-16 p-4 md:p-8 bg-white border-4 border-[#EB89B5] rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-lg md:text-2xl font-bold text-[#EB89B5] mb-4">
              SHOW YOUR SUPPORT BY SIGNING OUR PETITION IN SUPPORT OF EDUCATION
            </h2>
            <a 
              href="https://docs.google.com/document/d/1VGe4JnrzEtrg9oV6BK7Taaub3hooeU8LjgWIXgC7gNk/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#EB89B5] text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-[#C76B99] transition-colors shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              Sign Our Petition
            </a>
          </div>
        </div>

        {/* Email Popup Notice */}
        <div className="mb-8 p-4 md:p-6 bg-[#FFF8D2] border-2 border-[#EB89B5] rounded-lg max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-2">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#EB89B5]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <h3 className="text-lg md:text-xl font-bold text-[#EB89B5]">Important Reminder</h3>
            </div>
            <p className="text-sm md:text-lg text-[#EB89B5] font-semibold">
              After filling out any form, please remember to hit <strong>SEND</strong> on the email popup to complete your submission!
            </p>
          </div>
        </div>

        {/* How to Get Involved */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center">Ways to Get Involved</h2>
          <div className="grid grid-cols-2 gap-3 md:gap-8">
            {involvementOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFD7E9] rounded-full flex items-center justify-center flex-shrink-0">
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{option.title}</h3>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    <ul className="space-y-1">
                      {option.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-500 flex items-center gap-2">
                          <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Support */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            {/* How to Support */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#EB89B5] mb-6">How to Support</h2>
              <div className="space-y-4 mb-6">
                <p className="text-gray-700">
                  If you are an adult who would like to support, please reach out to the club email. 
                  Refer as many people as possible, as students, your support is so inspiring. We are also accepting donations!
                </p>
              </div>
              
              {/* Fundraising Progress */}
              <div className="bg-[#FFFBF3] rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Fundraising Progress</h3>
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-32 h-32">
                    {/* Pie Chart */}
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#FFD7E9"
                        strokeWidth="8"
                      />
                      {/* Progress circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#EB89B5"
                        strokeWidth="8"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - 610.25 / 1000)}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#EB89B5]">$610.25</div>
                        <div className="text-sm text-gray-600">of $1000</div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-600 text-sm mb-4">
                  This money helps us organize more events to help promote the inclusion of women&apos;s rights.
                </p>
                <div className="text-center">
                  <p className="text-gray-700 font-semibold mb-2">Money can be accepted via Venmo to:</p>
                  <p className="text-[#EB89B5] font-bold text-lg">@Ameliefairweather7</p>
                  <p className="text-gray-600 text-sm">Please specify &quot;donation&quot; in the message</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">How to Join</h2>
            <div className="grid grid-cols-2 gap-3 md:gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Get Started Today</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-pink-600 text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Attend a Meeting</h4>
                      <p className="text-gray-600">Come to our weekly meetings to learn more about our activities and meet current members.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-pink-600 text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Sign Up</h4>
                      <p className="text-gray-600">Complete our membership form and join our email list for updates and announcements. (student run)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-pink-600 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Get Active</h4>
                      <p className="text-gray-600">Participate in events by checking the calendar and RVSP to events</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-pink-600 text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Fill out Join Now form!</h4>
                      <p className="text-gray-600">Complete our online application form to officially become a member</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-600">hereducationrequired@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600">CVU Room 134</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">Wednesdays at 10:00 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RSVP Notice */}
        <div className="mb-12 p-4 md:p-6 bg-[#FFD7E9] border-l-4 border-[#EB89B5] rounded-r-lg">
          <div className="flex items-center gap-2 md:gap-3">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-[#EB89B5] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="text-[#EB89B5] font-semibold text-sm md:text-base">
                Please RSVP to upcoming event November 12th on the calendar! Remember to hit <strong>SEND</strong> on the email popup.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Ready to Make a Difference?</h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Join HER today and be part of the movement to ensure women&apos;s voices are heard in education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/events" 
              className="inline-block bg-[#EB89B5] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#C76B99] transition-colors shadow-lg hover:shadow-xl"
            >
              View Upcoming Events
            </Link>
            <button 
              onClick={() => setShowJoinForm(true)}
              className="inline-block bg-[#EB89B5] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#C76B99] transition-colors shadow-lg hover:shadow-xl"
            >
              Join Now
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#FFF8D2] text-gray-800 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700">
            © 2024 HER - Her Education Required | CVU Student Club
          </p>
        </div>
      </footer>

      {/* Join Form Modal */}
      {showJoinForm && (
        <JoinForm onClose={() => setShowJoinForm(false)} />
      )}
    </div>
  )
}
