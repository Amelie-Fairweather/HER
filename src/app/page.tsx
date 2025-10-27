import Link from 'next/link'
// import HeroTitle from '@/components/HeroTitle' // Removed hearts and stars animation

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFBF3] to-[#FFF8D2]">
      {/* Header */}
      <header className="bg-[#EB89B5] text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-7xl font-bold mb-4 transition-transform duration-500 hover:scale-150 focus:scale-150 active:scale-140 cursor-pointer transform-gpu ease-out">
            HER
          </h1>
          <h2 className="text-2xl font-semibold mb-2">Her Education Required</h2>
          <p className="text-lg opacity-90">
            Student-led club at CVU dedicated to addressing the lack of Women&apos;s history and current rights in the curriculum
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pt-0 pb-16">
        {/* Mission Section with Surrounding Statistics */}
        <div className="mb-16 max-w-7xl mx-auto">
          {/* Statistics Bubbles Around Mission */}
          <div className="relative">
            {/* Top Statistics Row */}
            <div className="flex justify-center mt-9 mb-12 max-w-6xl mx-auto gap-6">
              {/* Left Statistic */}
              <div className="w-80">
                <div className="bg-white rounded-2xl p-8 shadow-lg shadow-[#EB89B5]/20 transform hover:scale-110 transition-transform duration-300 h-48 flex items-center">
                  <div className="text-center w-full">
                    <div className="text-4xl font-bold text-[#EB89B5] mb-3">85%</div>
                    <p className="text-sm text-gray-700 font-semibold px-4">
                      of students grades 9-12 did not know what the suffrage movement was, Title 7 or 8 or ERA, pay and gender gap, or what year women gained the right to vote.
                    </p>
                  </div>
                </div>
              </div>

              {/* Middle Statistic */}
              <div className="w-80">
                <div className="bg-white rounded-2xl p-8 shadow-lg shadow-[#EB89B5]/20 transform hover:scale-110 transition-transform duration-300 h-48 flex items-center">
                  <div className="text-center w-full">
                    <div className="text-4xl font-bold text-[#EB89B5] mb-3">90%</div>
                    <p className="text-sm text-gray-700 font-semibold px-4">
                      of students grades 9-12 said they had received no education around women&apos;s rights from school.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Statistic */}
              <div className="w-80">
                <div className="bg-white rounded-2xl p-8 shadow-lg shadow-[#EB89B5]/20 transform hover:scale-110 transition-transform duration-300 h-48 flex items-center">
                  <div className="text-center w-full">
                    <div className="text-4xl font-bold text-[#EB89B5] mb-3">81%</div>
                    <p className="text-sm text-gray-700 font-semibold px-4">
                      of students grades 9-12 reported they had experienced sexism.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Mission Bubble */}
            <div className="relative bg-[#FFD7E9] rounded-full py-16 px-16 max-w-5xl mx-auto shadow-xl border-4 border-[#EB89B5]">
              {/* Heart decoration at top */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#EB89B5" className="drop-shadow-md">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              
              <div className="text-center pt-6 pb-4">
                <h3 className="text-3xl font-bold text-[#EB89B5] mb-6">
                  Support our mission to implement a required Unit into the curriculum
                </h3>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
                  A required unit is absolutely essential to ensuring students have a well rounded understanding of American history. Today, students have no idea the struggle women faced and the work needed to overcome them. Lack of role models for young girls, lack of representation and lack of knowledge limits the inclusion and success of your daughters, mothers, sisters, etc. Furthermore, men lack this education too. How can students vote on new policies surrounding women&apos;s rights without basic understanding of them?
                </p>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto font-semibold">
                  To not require this education is to suggest women&apos;s history as secondary, as optional, as unimportant.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {/* About Us Button */}
          <Link href="/about" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#EB89B5]">
              <div className="w-16 h-16 bg-[#FFD7E9] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#EB89B5] transition-colors">
                <svg className="w-8 h-8 text-[#EB89B5] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">About Us</h3>
              <p className="text-gray-600 group-hover:text-gray-700">
                Learn about our mission, values, and the passionate students behind HER.
              </p>
            </div>
          </Link>

          {/* Upcoming Events Button */}
          <Link href="/events" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#EB89B5]">
              <div className="w-16 h-16 bg-[#FFD7E9] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#EB89B5] transition-colors">
                <svg className="w-8 h-8 text-[#EB89B5] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Upcoming Events</h3>
              <p className="text-gray-600 group-hover:text-gray-700">
                Stay updated on our meetings, workshops, and community events.
              </p>
            </div>
          </Link>

          {/* Get Involved Button */}
          <Link href="/involved" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#EB89B5]">
              <div className="w-16 h-16 bg-[#FFD7E9] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#EB89B5] transition-colors">
                <svg className="w-8 h-8 text-[#EB89B5] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Get Involved</h3>
              <p className="text-gray-600 group-hover:text-gray-700">
                Join our community and help us make a difference in education.
              </p>
            </div>
          </Link>
        </div>

        {/* RSVP Notice */}
        <div className="my-16 p-8 bg-[#FFD7E9] border-l-4 border-[#EB89B5] rounded-r-lg max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <svg className="w-7 h-7 text-[#EB89B5]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="text-[#EB89B5] font-semibold text-lg">
                Please RSVP to upcoming event November 12th on the calendar! Remember to hit <strong>SEND</strong> on the email popup.
              </p>
            </div>
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
    </div>
  )
}