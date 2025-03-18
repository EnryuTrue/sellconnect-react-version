import { useState } from "react"
import { Search, X, ChevronDown } from "lucide-react"

interface FilterOption {
  id: string
  label: string
}

interface VenueFiltersProps {
  onFilterChange: (filters: any) => void
}

export default function VenueFilters({ onFilterChange }: VenueFiltersProps) {
  const [location, setLocation] = useState("")
  const [date, setDate] = useState("")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000])
  const [capacity, setCapacity] = useState("")
  const [amenities, setAmenities] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const capacityOptions: FilterOption[] = [
    { id: "small", label: "Up to 100 guests" },
    { id: "medium", label: "100-300 guests" },
    { id: "large", label: "300-500 guests" },
    { id: "xlarge", label: "500+ guests" },
  ]

  const amenityOptions: FilterOption[] = [
    { id: "parking", label: "Parking" },
    { id: "catering", label: "Catering" },
    { id: "sound", label: "Sound System" },
    { id: "decoration", label: "Decoration" },
    { id: "wifi", label: "WiFi" },
    { id: "outdoor", label: "Outdoor Space" },
  ]

  const toggleAmenity = (id: string) => {
    if (amenities.includes(id)) {
      setAmenities(amenities.filter((item) => item !== id))
    } else {
      setAmenities([...amenities, id])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onFilterChange({
      location,
      date,
      priceRange,
      capacity,
      amenities,
    })
  }

  const clearFilters = () => {
    setLocation("")
    setDate("")
    setPriceRange([0, 5000])
    setCapacity("")
    setAmenities([])
    onFilterChange({})
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <form onSubmit={handleSubmit}>
        {/* Basic Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Location"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <input
              type="date"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
          >
            <Search size={18} className="mr-2" />
            Search
          </button>
        </div>

        {/* Advanced Filters Toggle */}
        <div className="flex justify-between items-center mb-4">
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="text-purple-600 flex items-center hover:text-purple-800 transition-colors"
          >
            <span>Advanced Filters</span>
            <ChevronDown size={16} className={`ml-1 transition-transform ${showFilters ? "rotate-180" : ""}`} />
          </button>

          {(location || date || capacity || amenities.length > 0 || priceRange[0] > 0 || priceRange[1] < 5000) && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-gray-600 flex items-center hover:text-gray-800 transition-colors"
            >
              <X size={16} className="mr-1" />
              <span>Clear Filters</span>
            </button>
          )}
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="border-t pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range (${priceRange[0]} - ${priceRange[1]})
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Capacity */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Capacity</label>
              <select
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              >
                <option value="">Any capacity</option>
                {capacityOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Amenities */}
            <div className="lg:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
              <div className="flex flex-wrap gap-2">
                {amenityOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => toggleAmenity(option.id)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      amenities.includes(option.id)
                        ? "bg-purple-600 text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    } transition-colors`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

