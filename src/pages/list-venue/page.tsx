import Header from "../../components/header"
import Footer from "../../components/footer"

export default function ListVenuePage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">List Your Wedding Venue</h1>
            <p className="text-lg text-gray-600">Reach thousands of couples looking for their perfect wedding venue</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why List With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-purple-600 mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Increased Visibility</h3>
              <p className="text-gray-600">
                Get your venue in front of thousands of couples actively searching for wedding venues.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-purple-600 mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking Management</h3>
              <p className="text-gray-600">
                Manage inquiries, bookings, and availability all in one place with our intuitive dashboard.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-purple-600 mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Professional Exposure</h3>
              <p className="text-gray-600">
                Showcase your venue with high-quality photos and detailed descriptions to attract the right clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Listing Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-8 text-center">Venue Information</h2>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Venue Owners Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h3 className="font-semibold">John Smith</h3>
                  <p className="text-gray-600 text-sm">Owner, Grand Palace Hall</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Since listing our venue on SalleConnect, we've seen a 40% increase in bookings. The platform is easy to
                use and the support team is always helpful."
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <p className="text-gray-600 text-sm">Manager, Crystal Garden</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The quality of inquiries we receive through SalleConnect is much higher than other platforms. Couples
                are well-informed and serious about booking."
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h3 className="font-semibold">Michael Brown</h3>
                  <p className="text-gray-600 text-sm">Owner, Sunset Beach Resort</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The dashboard makes it so easy to manage our listings and respond to inquiries. We've been able to
                streamline our booking process significantly."
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

