import { Phone, Mail } from "lucide-react"

interface BookingCardProps {
  price: number
  currency?: string
  phone: string
  email: string
}

export default function BookingCard({ phone, email }: BookingCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg h-fit sticky top-4">
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

