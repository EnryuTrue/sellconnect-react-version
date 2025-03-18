import Header from "../components/header"
import Footer from "../components/footer"
import SearchBar from "../components/search-bar"
import VenueCard from "../components/venue-card"
import Testimonials from "../components/testimonials"
import { Link } from "react-router-dom"
import { CheckCircle, Calendar, Search, Heart } from "lucide-react"

export function HomePage() {
  // Sample data for featured venues
  const featuredVenues = [
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
  ]

  // Sample data for testimonials
  const testimonials = [
    {
      id: "testimonial-1",
      name: "Sarah & Michael",
      role: "Married in June 2023",
      avatar: "/placeholder.svg?height=48&width=48",
      rating: 5,
      text: "SalleConnect made finding our dream venue so easy! We found the perfect place within a week of searching.",
    },
    {
      id: "testimonial-2",
      name: "Jessica & David",
      role: "Married in August 2023",
      avatar: "/placeholder.svg?height=48&width=48",
      rating: 4,
      text: "The detailed venue descriptions and photos helped us narrow down our choices without having to visit dozens of places.",
    },
    {
      id: "testimonial-3",
      name: "Emily & James",
      role: "Married in May 2023",
      avatar: "/placeholder.svg?height=48&width=48",
      rating: 5,
      text: "We found a venue that was within our budget and exceeded our expectations. Highly recommend SalleConnect!",
    },
  ]

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-20 h-[600px] bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Find Your Perfect Wedding Venue</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Discover and book beautiful wedding halls for your special day
            </p>
            <SearchBar />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-4">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Search</h3>
              <p className="text-gray-600">
                Browse our collection of beautiful wedding venues and filter by location, price, and amenities.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compare</h3>
              <p className="text-gray-600">Save your favorites, compare venues, and read reviews from other couples.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-4">
                <Calendar size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book</h3>
              <p className="text-gray-600">Contact venues directly, schedule visits, and secure your date with ease.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Venues Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Wedding Venues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVenues.map((venue) => (
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
          <div className="text-center mt-12">
            <Link
              to="/venues"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center"
            >
              View All Venues
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose SalleConnect</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Extensive Selection</h3>
                    <p className="text-gray-600">
                      Browse hundreds of carefully curated wedding venues to find the perfect match for your style and
                      budget.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Detailed Information</h3>
                    <p className="text-gray-600">
                      Access comprehensive venue details, high-quality photos, pricing, and availability all in one
                      place.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Verified Reviews</h3>
                    <p className="text-gray-600">
                      Read authentic reviews from couples who have celebrated their special day at the venues.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Free to Use</h3>
                    <p className="text-gray-600">
                      Our platform is completely free for couples to search, compare, and contact venues.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Happy couple at their wedding venue"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Dream Venue?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of couples who have found their perfect wedding venue through SalleConnect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/venues"
              className="px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Browse Venues
            </Link>
            <Link
              to="/register"
              className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Create an Account
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default HomePage;