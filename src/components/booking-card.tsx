import { Phone, Mail } from "lucide-react"

interface BookingCardProps {
  price: number
  currency?: string
  phone: string
  email: string
  onReserve?: () => void
}

export default function BookingCard({ price, phone, email, currency = "MAD", onReserve }: BookingCardProps) {
  const handleReserve = () => {
    if (onReserve) {
      onReserve()
    } else {
      console.log("Reserve functionality not implemented")
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg h-fit sticky top-4">
      <div className="mb-4">
        <h3 className="text-2xl font-bold">{price.toLocaleString()} {currency}</h3>
        <p className="text-gray-500 text-sm">Price for standard reservation</p>
      </div>
      
      <button 
        onClick={handleReserve}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
      >
        Reserve Venue
      </button>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Contact Information</h3>
        <div className="space-y-2 text-gray-600">
          <p className="flex items-center">
            <Phone size={16} className="w-6 mr-2" />
            {phone}
          </p>
          <p className="flex items-center">
            <Mail size={16} className="w-6 mr-2" />
            {email}
          </p>
        </div>
      </div>
    </div>
  )
}

