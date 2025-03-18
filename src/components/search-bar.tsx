import { Search } from "lucide-react"

export default function SearchBar() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-4 rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Location"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div className="flex-1">
          <input
            type="date"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center">
          <Search size={18} className="mr-2" />
          Search
        </button>
      </div>
    </div>
  )
}

