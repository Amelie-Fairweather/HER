import Link from 'next/link'
import Image from 'next/image'

export default function EventRecap() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFBF3] to-[#FFF8D2]">
      {/* Header */}
      <header className="bg-[#EB89B5] text-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/events" className="inline-block mb-4 text-pink-100 hover:text-white transition-colors">
            ← Back to Events
          </Link>
          <h1 className="text-4xl font-bold mb-2">Event Recap</h1>
          <p className="text-lg opacity-90">Recap of the Event to Include Women in the Curriculum</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Event Recap</h2>
          <p className="text-lg text-gray-600 mb-8">
            Recap of the Event to Include Women in the Curriculum held on November 12, 2025.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://docs.google.com/document/d/1rfBk_AY9W4rAnKTmsod4Mq7H8HwBcTt39DdgKDetItU/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#EB89B5] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#C76B99] transition-colors shadow-lg hover:shadow-xl text-center"
            >
              View Student Speeches
            </a>
            <a
              href="https://docs.google.com/presentation/d/1SyTZSl6CRGAmtq75MI6w4PjbesC4q5xLg8AYu-rq2oE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#EB89B5] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#C76B99] transition-colors shadow-lg hover:shadow-xl text-center"
            >
              View Event Slides
            </a>
          </div>
        </div>

        {/* Event Images Collage */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EB89B5] text-center mb-6">
            EVENT PHOTOS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {/* Event 8 */}
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/event8.jpg"
                alt="HER Club event photo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            
            {/* Event 9 */}
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/event9.jpg"
                alt="HER Club event photo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            
            {/* Event 10 */}
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/event10.jpg"
                alt="HER Club event photo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            
            {/* Event 11 */}
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/event11.jpg"
                alt="HER Club event photo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            
            {/* Event 12 */}
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/event12.jpg"
                alt="HER Club event photo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            
            {/* Event 13 */}
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/event13.jpg"
                alt="HER Club event photo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          </div>
          
          {/* Event 14 - Full Width */}
          <div className="mt-4 md:mt-6 relative w-full overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow" style={{ aspectRatio: '21/9' }}>
            <Image
              src="/event14.jpg"
              alt="HER Club event photo"
              fill
              className="object-cover"
              sizes="100vw"
            />
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

