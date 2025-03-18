import Header from "../../components/header"
import Footer from "../../components/footer"
import RegisterForm from "../../components/auth/register-form"

export default function RegisterPage() {
  return (
    <main>
      <Header />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold">Create Your Account</h1>
              <p className="text-gray-600 mt-2">
                Join SalleConnect to find your perfect wedding venue or list your venue.
              </p>
            </div>

            <RegisterForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

