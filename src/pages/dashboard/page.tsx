import { useState } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { Calendar, Heart, Settings, LogOut, User, MessageSquare, Building, Plus } from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("bookings")

  // Sample data for bookings
  const bookings = [
    {
      id: "booking-1",
      venue: "Grand Palace Hall",
      date: "2023-10-15",
      status: "confirmed",
      price: 2500,
    },
    {
      id: "booking-2",
      venue: "Crystal Garden Venue",
      date: "2023-11-20",
      status: "pending",
      price: 1800,
    },
    {
      id: "booking-3",
      venue: "Sunset Beach Resort",
      date: "2024-02-05",
      status: "confirmed",
      price: 3200,
    },
  ]

  // Sample data for favorites
  const favorites = [
    {
      id: "venue-1",
      name: "Royal Mansion",
      location: "Historic District",
      price: 3000,
      imageUrl: "/placeholder.svg?height=100&width=150",
    },
    {
      id: "venue-2",
      name: "Garden Oasis",
      location: "Botanical Gardens",
      price: 1800,
      imageUrl: "/placeholder.svg?height=100&width=150",
    },
    {
      id: "venue-3",
      name: "Mountain View Lodge",
      location: "Mountain Range",
      price: 2200,
      imageUrl: "/placeholder.svg?height=100&width=150",
    },
  ]

  // Sample data for messages
  const messages = [
    {
      id: "msg-1",
      from: "Grand Palace Hall",
      subject: "Booking Confirmation",
      date: "2023-09-10",
      read: true,
    },
    {
      id: "msg-2",
      from: "Crystal Garden Venue",
      subject: "Your Inquiry",
      date: "2023-09-08",
      read: false,
    },
    {
      id: "msg-3",
      from: "SalleConnect Support",
      subject: "Welcome to SalleConnect",
      date: "2023-09-05",
      read: true,
    },
  ]

  // Sample data for user profile
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    joinDate: "September 2023",
  }

  return (
    <main>
      <Header />

      <section className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
                    <User size={32} />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">{userProfile.name}</h2>
                    <p className="text-gray-600 text-sm">Member since {userProfile.joinDate}</p>
                  </div>
                </div>

                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab("bookings")}
                    className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                      activeTab === "bookings" ? "bg-purple-100 text-purple-600" : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Calendar size={20} className="mr-3" />
                    <span>My Bookings</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("favorites")}
                    className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                      activeTab === "favorites" ? "bg-purple-100 text-purple-600" : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Heart size={20} className="mr-3" />
                    <span>Favorites</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("messages")}
                    className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                      activeTab === "messages" ? "bg-purple-100 text-purple-600" : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <MessageSquare size={20} className="mr-3" />
                    <span>Messages</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("venues")}
                    className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                      activeTab === "venues" ? "bg-purple-100 text-purple-600" : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Building size={20} className="mr-3" />
                    <span>My Venues</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                      activeTab === "profile" ? "bg-purple-100 text-purple-600" : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Settings size={20} className="mr-3" />
                    <span>Account Settings</span>
                  </button>

                  <button className="w-full flex items-center p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                    <LogOut size={20} className="mr-3" />
                    <span>Sign Out</span>
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-md p-6">
                {/* Bookings Tab */}
                {activeTab === "bookings" && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
                    {bookings.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-3 px-4">Venue</th>
                              <th className="text-left py-3 px-4">Date</th>
                              <th className="text-left py-3 px-4">Status</th>
                              <th className="text-left py-3 px-4">Price</th>
                              <th className="text-left py-3 px-4">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {bookings.map((booking) => (
                              <tr key={booking.id} className="border-b hover:bg-gray-50">
                                <td className="py-3 px-4">{booking.venue}</td>
                                <td className="py-3 px-4">{new Date(booking.date).toLocaleDateString()}</td>
                                <td className="py-3 px-4">
                                  <span
                                    className={`px-2 py-1 rounded-full text-xs ${
                                      booking.status === "confirmed"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-yellow-100 text-yellow-800"
                                    }`}
                                  >
                                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                  </span>
                                </td>
                                <td className="py-3 px-4">${booking.price}</td>
                                <td className="py-3 px-4">
                                  <button className="text-purple-600 hover:text-purple-800">View Details</button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-600">You don't have any bookings yet.</p>
                        <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                          Browse Venues
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Favorites Tab */}
                {activeTab === "favorites" && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">My Favorites</h2>
                    {favorites.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {favorites.map((venue) => (
                          <div key={venue.id} className="border rounded-lg overflow-hidden flex">
                            <div className="w-1/3 relative">
                              <img
                                src={venue.imageUrl || "/placeholder.svg"}
                                alt={venue.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="w-2/3 p-4">
                              <h3 className="font-semibold">{venue.name}</h3>
                              <p className="text-gray-600 text-sm mb-2">{venue.location}</p>
                              <p className="text-purple-600 font-semibold mb-2">From ${venue.price}</p>
                              <div className="flex space-x-2">
                                <button className="text-sm px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
                                  View
                                </button>
                                <button className="text-sm px-3 py-1 border border-red-500 text-red-500 rounded hover:bg-red-50 transition-colors">
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-600">You haven't saved any favorites yet.</p>
                        <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                          Browse Venues
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Messages Tab */}
                {activeTab === "messages" && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Messages</h2>
                    {messages.length > 0 ? (
                      <div className="space-y-4">
                        {messages.map((message) => (
                          <div
                            key={message.id}
                            className={`border rounded-lg p-4 ${!message.read ? "bg-blue-50 border-blue-200" : ""}`}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold">{message.subject}</h3>
                                <p className="text-gray-600 text-sm">From: {message.from}</p>
                              </div>
                              <span className="text-gray-500 text-sm">
                                {new Date(message.date).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="mt-2 flex justify-between">
                              <button className="text-purple-600 hover:text-purple-800 text-sm">Read Message</button>
                              {!message.read && (
                                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">New</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-600">You don't have any messages.</p>
                      </div>
                    )}
                  </div>
                )}

                {/* My Venues Tab (for venue owners) */}
                {activeTab === "venues" && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold">My Venues</h2>
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                        <Plus size={16} className="mr-2" />
                        Add New Venue
                      </button>
                    </div>

                    <div className="text-center py-8">
                      <p className="text-gray-600">You haven't listed any venues yet.</p>
                      <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                        List Your Venue
                      </button>
                    </div>
                  </div>
                )}

                {/* Profile Tab */}
                {activeTab === "profile" && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                    <form className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                              Full Name
                            </label>
                            <input
                              id="name"
                              type="text"
                              value={userProfile.name}
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              Email Address
                            </label>
                            <input
                              id="email"
                              type="email"
                              value={userProfile.email}
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              Phone Number
                            </label>
                            <input
                              id="phone"
                              type="tel"
                              value={userProfile.phone}
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2">Change Password</h3>
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">
                              Current Password
                            </label>
                            <input
                              id="current-password"
                              type="password"
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                          </div>
                          <div>
                            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
                              New Password
                            </label>
                            <input
                              id="new-password"
                              type="password"
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                          </div>
                          <div>
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                              Confirm New Password
                            </label>
                            <input
                              id="confirm-password"
                              type="password"
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2">Notification Preferences</h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input
                              id="email-notifications"
                              type="checkbox"
                              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <label htmlFor="email-notifications" className="ml-2 block text-sm text-gray-700">
                              Email notifications for new messages
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="booking-notifications"
                              type="checkbox"
                              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <label htmlFor="booking-notifications" className="ml-2 block text-sm text-gray-700">
                              Email notifications for booking updates
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="marketing-notifications"
                              type="checkbox"
                              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <label htmlFor="marketing-notifications" className="ml-2 block text-sm text-gray-700">
                              Marketing emails and promotions
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end space-x-4">
                        <button
                          type="button"
                          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

