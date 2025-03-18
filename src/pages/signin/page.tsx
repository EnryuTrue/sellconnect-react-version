import Header from "../../components/header"
import Footer from "../../components/footer"
import SignInForm from "../../components/auth/sign-in-form"

export default function SignInPage() {
  return (
    <main>
      <Header />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold">Sign In to SalleConnect</h1>
              <p className="text-gray-600 mt-2">Welcome back! Please enter your details.</p>
            </div>

            <SignInForm />

            <div className="mt-8 pt-6 border-t text-center">
              <p className="text-sm text-gray-600">Or sign in with</p>
              <div className="flex justify-center space-x-4 mt-4">
                <button className="flex items-center justify-center w-full px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                    />
                  </svg>
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

