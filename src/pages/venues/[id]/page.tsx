import { useState } from "react"
import Header from "../../../components/header"
import Gallery from "../../../components/gallery"
import VenueDetails from "../../../components/venue-details"
import BookingCard from "../../../components/booking-card"

interface VenuePageProps {
  params: {
    id: string
  }
}

export default function VenuePage({ }: VenuePageProps) {
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  
  // This would normally come from an API or database
  const venueData = {
    name: "Le Grand Palace",
    location: "123 Wedding Avenue, Casablanca",
    rating: 4.2,
    price: 25000,
    description:
      "Le Grand Palace is a luxurious wedding venue that can accommodate up to 500 guests. Our elegant hall features crystal chandeliers, marble floors, and a grand staircase perfect for photo opportunities. The venue includes a spacious dining area, dance floor, and separate cocktail lounge.",
    capacity: 500,
    amenities: {
      parking: true,
      catering: true,
      soundSystem: true,
    },
    contact: {
      phone: "+212 5XX-XXXXXX",
      email: "info@legrandpalace.ma",
    },
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  }

  const handleViewAllPhotos = () => {
    setShowAllPhotos(true)
  }

  const handleReserve = () => {
    // In a real application, this would navigate to a checkout or booking form page
    alert("Reservation request submitted for " + venueData.name)
  }

  // Photo gallery modal
  if (showAllPhotos) {
    return (
      <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
        <div className="p-4">
          <button
            onClick={() => setShowAllPhotos(false)}
            className="fixed top-4 right-4 bg-white p-2 rounded-full text-black hover:bg-gray-200"
          >
            Close
          </button>
          <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 gap-4">
            {venueData.images.map((img, index) => (
              <div key={index} className="relative h-[500px] w-full">
                <img
                  src={img || "/placeholder.svg"}
                  alt={`${venueData.name} - Photo ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="bg-gray-50">
      <Header />

      {/* Gallery Section */}
      <div className="pt-16">
        <Gallery
          mainImage={venueData.images[0]}
          secondaryImages={venueData.images.slice(1, 3)}
          onViewAllClick={handleViewAllPhotos}
        />
      </div>

      {/* Venue Details Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <VenueDetails
              name={venueData.name}
              location={venueData.location}
              rating={venueData.rating}
              description={venueData.description}
              capacity={venueData.capacity}
              amenities={venueData.amenities}
            />
          </div>
          <div>
            <BookingCard
              price={venueData.price}
              phone={venueData.contact.phone}
              email={venueData.contact.email}
              onReserve={handleReserve}
            />
          </div>
          
        </div>
      </section>
    </main>
  )
}

