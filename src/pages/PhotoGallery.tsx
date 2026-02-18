import { PortfolioGallery } from '@/components/ui/portfolio-gallery';

// Patrick's photography work
const photoImages = [
  {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=600&fit=crop&q=80",
    alt: "Portrait Photography",
    title: "Portrait"
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&q=80",
    alt: "Graduation Photography",
    title: "Graduation"
  },
  {
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop&q=80",
    alt: "Digital Art",
    title: "Digital Art"
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80",
    alt: "Landscape Photography",
    title: "Landscape"
  },
  {
    src: "https://images.unsplash.com/photo-1476973422084-e0fa66ff9456?w=800&h=600&fit=crop&q=80",
    alt: "Street Photography",
    title: "Street"
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&q=80",
    alt: "Creative Headshots",
    title: "Headshots"
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&q=80",
    alt: "Event Photography",
    title: "Events"
  },
  {
    src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop&q=80",
    alt: "Nature Photography",
    title: "Nature"
  },
  {
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop&q=80",
    alt: "Architecture Photography",
    title: "Architecture"
  },
  {
    src: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800&h=600&fit=crop&q=80",
    alt: "Golden Hour Photography",
    title: "Golden Hour"
  },
];

export default function PhotoGallery() {
  return (
    <div className="pt-16 min-h-screen bg-background">
      <PortfolioGallery
        title="Photo Gallery"
        archiveButton={{
          text: "Contact for booking",
          href: "/contact"
        }}
        images={photoImages}
      />
    </div>
  );
}
