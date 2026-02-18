import FloatingCardGallery, { type GalleryCard } from '@/components/ui/floating-card-gallery';

// Patrick's photography work with real Unsplash images
const photoCards: GalleryCard[] = [
  {
    title: "Portrait Photography",
    description: "Capturing authentic moments and expressions in portrait sessions.",
    fullDescription: "Professional portrait photography that captures the essence of each individual. From headshots to creative portraits, each session is tailored to bring out natural expressions and personality.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    author: "Patrick O'Neil",
    category: "Portrait",
    tags: ["Portrait", "Headshots", "Professional", "Natural Light"]
  },
  {
    title: "Graduation Photography",
    description: "Celebrating achievements with stunning graduation portraits.",
    fullDescription: "Commemorate your academic achievements with professional graduation photos. I work with graduates to capture this milestone moment in beautiful, timeless images that you'll treasure forever.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    author: "Patrick O'Neil",
    category: "Graduation",
    tags: ["Graduation", "Academic", "Milestone", "Celebration"]
  },
  {
    title: "Digital Art",
    description: "Creative digital compositions blending photography with artistic vision.",
    fullDescription: "Exploring the intersection of photography and digital art. These pieces combine traditional photography techniques with digital manipulation to create unique, imaginative works that push creative boundaries.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    author: "Patrick O'Neil",
    category: "Digital Art",
    tags: ["Digital Art", "Creative", "Composition", "Experimental"]
  },
  {
    title: "Landscape Photography",
    description: "Breathtaking landscapes from Massachusetts and beyond.",
    fullDescription: "From the shores of Wakefield to scenic locations across New England, these landscape photographs capture the natural beauty of our surroundings. Each image tells a story of place and time.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    author: "Patrick O'Neil",
    category: "Landscape",
    tags: ["Landscape", "Nature", "New England", "Scenic"]
  },
  {
    title: "Street Photography",
    description: "Candid moments from urban environments and everyday life.",
    fullDescription: "Street photography that captures the rhythm and energy of urban life. These candid shots document authentic moments, interesting characters, and the visual poetry found in everyday scenes.",
    image: "https://images.unsplash.com/photo-1476973422084-e0fa66ff9456?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    author: "Patrick O'Neil",
    category: "Street",
    tags: ["Street", "Urban", "Candid", "Documentary"]
  },
  {
    title: "Creative Headshots",
    description: "Professional headshots with a creative, modern approach.",
    fullDescription: "Stand out with headshots that go beyond the traditional. Whether for LinkedIn, acting portfolios, or personal branding, these sessions combine professionalism with creative flair.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    author: "Patrick O'Neil",
    category: "Headshots",
    tags: ["Headshots", "Professional", "Branding", "Corporate"]
  },
];

export default function PhotoGallery() {
  return (
    <div className="pt-16">
      <FloatingCardGallery
        cards={photoCards}
        backgroundColor="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        accentColor="rgba(139, 92, 246, 0.5)"
        maxCards={6}
      />
    </div>
  );
}
