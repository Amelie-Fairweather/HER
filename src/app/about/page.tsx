import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFBF3] to-[#FFF8D2]">
      {/* Header */}
      <header className="bg-[#EB89B5] text-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-block mb-4 text-pink-100 hover:text-white transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">About HER</h1>
          <p className="text-lg opacity-90">Learn about our mission and the students behind the movement</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              HER (Her Education Required) is a student-led club at Champlain Valley Union High School 
              dedicated to addressing the total lack of women&apos;s history and current rights in the curriculum.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that education should reflect the full spectrum of human experience, including 
              the stories, struggles, and achievements of women throughout history and in contemporary society. Our goal is to foster an environment where students are informed and understanding of 50% of the population. Women have to long been made to feel secondary, unimportant, and not equal to men. We want to change that.
            </p>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-[#FFD7E9] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#EB89B5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Curriculum Advocacy</h3>
              <p className="text-gray-600">
               Now is the time to advocate for a required unit in teh currciulumn, club members have met with the curriculumn director, principal, super intendent, teacher, etc. Also presneted to midddle schools, freshman and sophmore classes, to attempt to remedy the lack of education.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-[#FFD7E9] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#EB89B5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Educational Events</h3>
              <p className="text-gray-600">
                Host workshops, speaker series, and educational events to raise awareness about 
                women&apos;s rights and historical contributions. We recently fundraised over $600 dollars to host a huge event in the shelburne library.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-[#FFD7E9] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#EB89B5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">The club!</h3>
              <p className="text-gray-600">
                our club is entirely student led, with members from all grades, dedicated to tecahing womens history. We will continue to advocate and fight until this education is required!
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-[#FFD7E9] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#EB89B5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Activism & Awareness</h3>
              <p className="text-gray-600">
                Organize campaigns and initiatives to promote gender equality and raise awareness 
                about current women&apos;s rights issues.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Resources</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Explore our educational materials and curriculum plans for implementing women&apos;s history in schools.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {/* KUD Link */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFD7E9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#EB89B5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#EB89B5] mb-3">KUD</h3>
                <p className="text-gray-600 mb-4">Know, Understand, Do framework for women&apos;s history curriculum</p>
                <a 
                  href="https://docs.google.com/document/d/1LlC2wW0qCM31NDHau47mPvXDYUyXJ7EcpAMRVpobbR0/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#EB89B5] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#C76B99] transition-colors shadow-md hover:shadow-lg"
                >
                  View KUD
                </a>
              </div>

              {/* Slideshow Link */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFD7E9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#EB89B5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v22a1 1 0 01-1 1h-2a1 1 0 01-1-1V4M7 4V1a1 1 0 00-1-1H4a1 1 0 00-1 1v22a1 1 0 001 1h2a1 1 0 001-1V4m8 8h2m-2 4h2m-8-4h2m-2 4h2m-8-4h2m-2 4h2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#EB89B5] mb-3">Women&apos;s History Slideshow</h3>
                <p className="text-gray-600 mb-4">Educational presentation on women&apos;s history and rights</p>
                <a 
                  href="https://docs.google.com/presentation/d/18eRzSft1iVdo2hu4mtBnubxHUdXDKA5NT45-LJIFHcA/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#EB89B5] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#C76B99] transition-colors shadow-md hover:shadow-lg"
                >
                  View Slideshow
                </a>
              </div>

              {/* Curriculum Plan Link */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFD7E9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#EB89B5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#EB89B5] mb-3">Curriculum Plan</h3>
                <p className="text-gray-600 mb-4">Comprehensive plan for implementing women&apos;s rights unit</p>
                <a 
                  href="https://docs.google.com/document/d/1x9kDm71fgmfgrRO6Xu8a89Ycijn3YvjuSPRUHFVf-Ic/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#EB89B5] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#C76B99] transition-colors shadow-md hover:shadow-lg"
                >
                  View Curriculum Plan
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#EB89B5] mb-2">Equality</h3>
                <p className="text-gray-600">We believe in equal representation and opportunities for all genders.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#EB89B5] mb-2">Education</h3>
                <p className="text-gray-600">We value comprehensive, inclusive education that reflects diverse perspectives.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#EB89B5] mb-2">Action</h3>
                <p className="text-gray-600">We are committed to taking concrete steps toward positive change.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Join Our Mission?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Be part of the movement to ensure women&apos;s voices are heard in education.
          </p>
          <Link 
            href="/involved" 
            className="inline-block bg-[#EB89B5] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#C76B99] transition-colors shadow-lg hover:shadow-xl"
          >
            Get Involved Today
          </Link>
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
    </div>
  )
}
