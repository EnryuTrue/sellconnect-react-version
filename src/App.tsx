import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import VenuePage from "./pages/venues/[id]/page"  // Add this import at the top
import { HomePage } from "./pages/page"
import VenuesPage from "./pages/venues/page"
import AboutPage from "./pages/about/page"
import ContactPage from "./pages/contact/page"
import RegisterPage from "./pages/register/page"
import SignInPage from "./pages/signin/page"
import DashboardPage from "./pages/dashboard/page"
import ListVenuePage from "./pages/list-venue/page"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/venues" element={<VenuesPage />} />
        <Route path="/venues/:id" element={<VenuePage params={{
          id: ""
        }} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/list-venue" element={<ListVenuePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
