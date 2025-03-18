import Header from "../../components/header"
import Footer from "../../components/footer"
import { Users, Building, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About SalleConnect</h1>
            <p className="text-lg text-gray-600 mb-8">Connecting couples with their dream wedding venues since 2020</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="prose max-w-none">
              <p>
                SalleConnect was founded with a simple mission: to make finding and booking the perfect wedding venue as
                easy and stress-free as possible. After experiencing the challenges of venue hunting firsthand, our
                founders decided to create a platform that would streamline the process for couples everywhere.
              </p>
              <p>
                What started as a small directory of venues in Casablanca has grown into a comprehensive platform
                featuring hundreds of beautiful wedding venues across Algeria and beyond. We're proud to have helped
                thousands of couples find the perfect setting for their special day.
              </p>
              <p>
                Our team is made up of wedding enthusiasts, tech experts, and customer service professionals who are
                passionate about creating the best possible experience for both couples and venue owners. We believe
                that every love story deserves the perfect backdrop, and we're committed to making that a reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600">We prioritize the needs of couples and venue owners in everything we do.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-4">
                <Building size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">We maintain high standards for the venues featured on our platform.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-gray-600">We believe in honest, clear communication with all our users.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-gray-600">We're passionate about making wedding planning easier and more enjoyable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-64 relative">
                  <img
                    src={`/placeholder.svg?height=256&width=384&text=Team Member ${index}`}
                    alt={`Team member ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Team Member {index}</h3>
                  <p className="text-purple-600 mb-4">Position Title</p>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

