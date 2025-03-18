import { MapPin, Star, Users, Car, Utensils, Music } from "lucide-react"

interface VenueDetailsProps {
  name: string
  location: string
  rating: number
  description: string
  capacity: number
  amenities: {
    parking: boolean
    catering: boolean
    soundSystem: boolean
  }
}

export default function VenueDetails({ name, location, rating, description, capacity, amenities }: VenueDetailsProps) {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-yellow-400 text-yellow-400" size={16} />)
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="text-yellow-400" size={16} />
          <Star className="absolute top-0 left-0 fill-yellow-400 text-yellow-400 overflow-hidden w-[8px]" size={16} />
        </div>,
      )
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="text-yellow-400" size={16} />)
    }

    return stars
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>
        <p className="text-gray-600 flex items-center">
          <MapPin size={16} className="mr-2" />
          {location}
        </p>
        <div className="flex items-center mt-4 space-x-4">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Available</span>
          <span className="flex items-center">
            <div className="flex mr-2">{renderStars()}</div>
            <span className="text-gray-600">({rating.toFixed(1)})</span>
          </span>
        </div>
      </div>

      <div className="prose max-w-none mb-8">
        <h2 className="text-xl font-semibold mb-4">About This Venue</h2>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="flex items-center space-x-2">
          <Users size={16} className="text-blue-600" />
          <span>Capacity: {capacity} guests</span>
        </div>
        {amenities.parking && (
          <div className="flex items-center space-x-2">
            <Car size={16} className="text-blue-600" />
            <span>Parking Available</span>
          </div>
        )}
        {amenities.catering && (
          <div className="flex items-center space-x-2">
            <Utensils size={16} className="text-blue-600" />
            <span>Catering Services</span>
          </div>
        )}
        {amenities.soundSystem && (
          <div className="flex items-center space-x-2">
            <Music size={16} className="text-blue-600" />
            <span>Sound System</span>
          </div>
        )}
      </div>
    </div>
  )
}

