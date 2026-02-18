import { PortfolioGallery } from '@/components/ui/portfolio-gallery';

// Patrick's video work
const videoImages = [
  {
    src: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop&q=80",
    alt: "Social Media Content",
    title: "Social Media"
  },
  {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&q=80",
    alt: "Music Video Production",
    title: "Music Videos"
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&q=80",
    alt: "Event Videography",
    title: "Events"
  },
  {
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop&q=80",
    alt: "Personal Projects",
    title: "Personal"
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
    alt: "Brand Content",
    title: "Brand"
  },
  {
    src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop&q=80",
    alt: "Short Films",
    title: "Films"
  },
  {
    src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop&q=80",
    alt: "Documentary Work",
    title: "Documentary"
  },
  {
    src: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop&q=80",
    alt: "Commercial Production",
    title: "Commercial"
  },
  {
    src: "https://images.unsplash.com/photo-1579566346927-c68383817a25?w=800&h=600&fit=crop&q=80",
    alt: "Cinematic Work",
    title: "Cinematic"
  },
  {
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop&q=80",
    alt: "Behind the Scenes",
    title: "BTS"
  },
];

export default function VideoGallery() {
  return (
    <div className="pt-16 min-h-screen bg-background">
      <PortfolioGallery
        title="Video Gallery"
        archiveButton={{
          text: "Contact for projects",
          href: "/contact"
        }}
        images={videoImages}
      />
    </div>
  );
}
