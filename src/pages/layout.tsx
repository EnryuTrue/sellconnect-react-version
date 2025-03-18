import "../index.css"

type Metadata = {
  title: string;
  description: string;
  generator: string;
}

export const metadata: Metadata = {
  title: "SalleConnect - Find Your Perfect Wedding Venue",
  description: "Discover and book beautiful wedding halls for your special day",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="font-sans">
      {children}
    </div>
  )
}