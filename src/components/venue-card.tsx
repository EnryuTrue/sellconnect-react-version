import { Link } from 'react-router-dom'
import { Star, MapPin } from "lucide-react"

interface VenueCardProps {
  id: string
  name: string
  location: string
  price: number
  rating: number
  imageUrl: string
}

export default function VenueCard({ id, name, location, price, rating, imageUrl }: VenueCardProps) {
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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-64">
        <img src={imageUrl || "/placeholder.svg"} alt={name} className="object-cover w-full h-full" />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-purple-600">
          From ${price.toLocaleString()}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="flex items-center mb-4 text-gray-600">
          <MapPin size={16} className="mr-2" />
          <span>{location}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex mr-2">{renderStars()}</div>
            <span className="text-gray-600">{rating.toFixed(1)}</span>
          </div>
          <Link
            to={`/venues/${id}`}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

