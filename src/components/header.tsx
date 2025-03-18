import { Link } from "react-router-dom"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-purple-600">
              SalleConnect
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-purple-600">
              <Menu size={24} />
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/venues" className="text-gray-600 hover:text-purple-600">
              Browse Venues
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-purple-600">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-purple-600">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/signin"
              className="px-4 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 border-t">
            <nav className="flex flex-col space-y-4 px-4">
              <Link to="/venues" className="text-gray-600 hover:text-purple-600">
                Browse Venues
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-purple-600">
                About
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-purple-600">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Link
                  to="/signin"
                  className="px-4 py-2 text-center text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-center bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Register
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

