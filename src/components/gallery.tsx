import { ImageIcon } from "lucide-react"

interface GalleryProps {
  mainImage: string
  secondaryImages: string[]
  onViewAllClick: () => void
}

export default function Gallery({ mainImage, secondaryImages, onViewAllClick }: GalleryProps) {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="grid grid-cols-3 gap-2 h-full">
        <div className="col-span-2 relative">
          <img src={mainImage || "/placeholder.svg"} alt="Main venue image" className="object-cover" />
        </div>
        <div className="grid grid-rows-2 gap-2">
          {secondaryImages.slice(0, 2).map((img, index) => (
            <div key={index} className="relative">
              <img src={img || "/placeholder.svg"} alt={`Venue image ${index + 1}`} className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <button
          onClick={onViewAllClick}
          className="bg-white px-4 py-2 rounded-lg shadow-lg text-gray-800 hover:bg-gray-100 transition-colors flex items-center"
        >
          <ImageIcon size={18} className="mr-2" />
          View All Photos
        </button>
      </div>
    </section>
  )
}

