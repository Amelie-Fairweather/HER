'use client'

import Link from 'next/link'
import { useState, useRef } from 'react'
import RSVPForm from '@/components/RSVPForm'

export default function Events() {
  const [showRSVPForm, setShowRSVPForm] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<{id: number, title: string} | null>(null)
  const [specialEventEmojis, setSpecialEventEmojis] = useState<Array<{id: number, type: 'heart' | 'star', x: number, y: number}>>([])
  const specialEventRef = useRef<HTMLDivElement>(null)
  const upcomingEvents = [
    {
      id: 1,
      title: "Weekly HER Club Meeting",
      date: "November 6, 2024",
      time: "10:00 AM - 10:30 AM",
      location: "CVU Room 134",
      description: "Regular club meeting to discuss upcoming initiatives and plan future events.",
      type: "Club Meeting",
      rsvpRequired: false
    },
    {
      id: 2,
      title: "Weekly HER Club Meeting",
      date: "November 13, 2024",
      time: "10:00 AM - 10:30 AM",
      location: "CVU Room 134",
      description: "Regular club meeting to discuss upcoming initiatives and plan future events.",
      type: "Club Meeting",
      rsvpRequired: false
    },
    {
      id: 3,
      title: "Event to Include Women in the Curriculum",
      date: "November 12, 2024",
      time: "5:30 PM - 8:00 PM",
      location: "Pierson Library",
      description: "Join us for this important event focused on including more women&apos;s history and perspectives in our curriculum. This will be catered by Folino&apos;s.",
      type: "Special Event",
      rsvpRequired: true,
      catering: "Catered by Folino&apos;s"
    },
    {
      id: 4,
      title: "Weekly HER Club Meeting",
      date: "November 20, 2024",
      time: "10:00 AM - 10:30 AM",
      location: "CVU Room 134",
      description: "Regular club meeting to discuss upcoming initiatives and plan future events.",
      type: "Club Meeting",
      rsvpRequired: false
    },
    {
      id: 5,
      title: "Weekly HER Club Meeting",
      date: "November 27, 2024",
      time: "10:00 AM - 10:30 AM",
      location: "CVU Room 134",
      description: "Regular club meeting to discuss upcoming initiatives and plan future events.",
      type: "Club Meeting",
      rsvpRequired: false
    },
    {
      id: 6,
      title: "Weekly HER Club Meeting",
      date: "December 4, 2024",
      time: "10:00 AM - 10:30 AM",
      location: "CVU Room 134",
      description: "Regular club meeting to discuss upcoming initiatives and plan future events.",
      type: "Club Meeting",
      rsvpRequired: false
    }
  ]

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Special Event':
        return 'bg-[#FFD7E9] text-[#EB89B5]'
      case 'Club Meeting':
        return 'bg-[#FFD7E9] text-[#EB89B5]'
      case 'Panel Discussion':
        return 'bg-[#FFD7E9] text-[#EB89B5]'
      case 'Workshop':
        return 'bg-[#FFD7E9] text-[#EB89B5]'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const handleRSVPClick = (eventId: number, eventTitle: string) => {
    setSelectedEvent({ id: eventId, title: eventTitle })
    setShowRSVPForm(true)
  }

  const handleCloseRSVP = () => {
    setShowRSVPForm(false)
    setSelectedEvent(null)
  }

  const handleSpecialEventHover = () => {
    if (!specialEventRef.current) return

    const rect = specialEventRef.current.getBoundingClientRect()
    const containerRect = specialEventRef.current.parentElement?.getBoundingClientRect()
    
    if (!containerRect) return

    // Calculate center of the special event card relative to the container
    const cardCenterX = (rect.left - containerRect.left) + (rect.width / 2)
    const cardCenterY = (rect.top - containerRect.top) + (rect.height / 2)

    // Create hearts and stars starting from the center of the special event card
    const newEmojis: Array<{id: number, type: 'heart' | 'star', x: number, y: number}> = []
    
    // Create many emojis from the center of the card
    for (let i = 0; i < 25; i++) {
      const angle = (i * 14.4) * (Math.PI / 180) // 14.4 degrees apart for full circle (360/25)
      const distance = 60 + Math.random() * 120 // Much larger distance to spread across area
      const x = cardCenterX + Math.cos(angle) * distance
      const y = cardCenterY + Math.sin(angle) * distance
      const type = Math.random() > 0.5 ? 'heart' : 'star'
      
      // Only add if it's within reasonable bounds of the area
      if (x >= -50 && x <= containerRect.width + 50 && y >= -50 && y <= containerRect.height + 50) {
        newEmojis.push({
          id: Date.now() + i,
          type,
          x,
          y
        })
      }
    }

    setSpecialEventEmojis(prev => [...prev, ...newEmojis])

    // Remove emojis after animation completes
    setTimeout(() => {
      setSpecialEventEmojis(prev => prev.filter(emoji => !newEmojis.some(newEmoji => newEmoji.id === emoji.id)))
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFBF3] to-[#FFF8D2]">
      {/* Header */}
      <header className="bg-[#EB89B5] text-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-block mb-4 text-pink-100 hover:text-white transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">Upcoming Events</h1>
          <p className="text-lg opacity-90">Stay connected with HER activities and join our upcoming events</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Events List */}
        <div className="space-y-6">
          {upcomingEvents.map((event) => (
            <div 
              key={event.id} 
              ref={event.title === "Event to Include Women in the Curriculum" ? specialEventRef : null}
              onMouseEnter={event.title === "Event to Include Women in the Curriculum" ? handleSpecialEventHover : undefined}
              className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow ${event.title === "Event to Include Women in the Curriculum" ? 'border-4 border-[#EB89B5] hover:border-[#C76B99] special-event-card' : ''}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{event.description}</p>
                  {event.catering && (
                    <p className="text-sm text-gray-500 italic mb-3">{event.catering}</p>
                  )}
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">{event.location}</span>
                </div>
              </div>
              
              {event.rsvpRequired && (
                <div className="mt-4">
                  <button
                    onClick={() => handleRSVPClick(event.id, event.title)}
                    className="bg-[#EB89B5] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#C76B99] transition-colors shadow-md hover:shadow-lg"
                  >
                    RSVP - I Can Go!
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Floating emojis for special event */}
        {specialEventEmojis.map((emoji) => (
          <div
            key={emoji.id}
            className={`fixed pointer-events-none z-40 hero-emoji ${emoji.type === 'heart' ? 'heart' : 'star'}`}
            style={{
              left: emoji.x,
              top: emoji.y,
            }}
          >
            {emoji.type === 'heart' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#EB89B5">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#EB89B5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            )}
          </div>
        ))}

        {/* No Events Message (if needed) */}
        {upcomingEvents.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-xl font-bold text-gray-600 mb-2">No Upcoming Events</h3>
            <p className="text-gray-500">Check back soon for new events and activities!</p>
          </div>
        )}

        {/* Event Categories Legend */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Event Types</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-pink-100 rounded-full"></div>
              <span className="text-sm text-gray-600">Special Event</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-100 rounded-full"></div>
              <span className="text-sm text-gray-600">Club Meeting</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-100 rounded-full"></div>
              <span className="text-sm text-gray-600">Panel Discussion</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-100 rounded-full"></div>
              <span className="text-sm text-gray-600">Workshop</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Want to Stay Updated?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Join our club to receive notifications about upcoming events and activities.
          </p>
          <Link 
            href="/involved" 
            className="inline-block bg-[#EB89B5] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#C76B99] transition-colors shadow-lg hover:shadow-xl"
          >
            Get Involved
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

      {/* RSVP Form Modal */}
      {showRSVPForm && selectedEvent && (
        <RSVPForm
          eventTitle={selectedEvent.title}
          onClose={handleCloseRSVP}
        />
      )}
    </div>
  )
}
