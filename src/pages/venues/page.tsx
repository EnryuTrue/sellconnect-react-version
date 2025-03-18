import Header from "../../components/header"
import Footer from "../../components/footer"
import VenueFilters from "../../components/venue-filters"
import VenueCard from "../../components/venue-card"

export default function VenuesPage() {

  // Sample data for venues
  const venues = [
    {
      id: "grand-palace",
      name: "Grand Palace Hall",
      location: "Downtown, City Center",
      price: 2000,
      rating: 4.5,
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "crystal-garden",
      name: "Crystal Garden Venue",
      location: "West End, Garden District",
      price: 1500,
      rating: 5.0,
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "sunset-beach",
      name: "Sunset Beach Resort",
      location: "Coastal Area, Beach Front",
      price: 2500,
      rating: 4.0,
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "royal-mansion",
      name: "Royal Mansion",
      location: "Historic District",
      price: 3000,
      rating: 4.8,
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "garden-oasis",
      name: "Garden Oasis",
      location: "Botanical Gardens",
      price: 1800,
      rating: 4.2,
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "mountain-view",
      name: "Mountain View Lodge",
      location: "Mountain Range",
      price: 2200,
      rating: 4.6,
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "lakeside-retreat",
      name: "Lakeside Retreat",
      location: "Lake District",
      price: 1900,
      rating: 4.3,
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "urban-loft",
      name: "Urban Loft",
      location: "Downtown",
      price: 2100,
      rating: 4.1,
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "historic-castle",
      name: "Historic Castle",
      location: "Countryside",
      price: 3500,
      rating: 4.9,
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
  ]


  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Find Your Perfect Wedding Venue</h1>
            <p className="text-lg text-gray-600">Browse our collection of beautiful wedding venues</p>
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <VenueFilters onFilterChange={() => {}} />

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{venues.length}</span> venues
            </p>
          </div>

          {/* Venues Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues.map((venue) => (
              <VenueCard
                key={venue.id}
                id={venue.id}
                name={venue.name}
                location={venue.location}
                price={venue.price}
                rating={venue.rating}
                imageUrl={venue.imageUrl}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-purple-600 hover:bg-gray-50"
              >
                1
              </a>
              <a
                href="#"
                className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                3
              </a>
              <a
                href="#"
                className="px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                Next
              </a>
            </nav>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

