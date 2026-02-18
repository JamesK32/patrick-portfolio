import FloatingCardGallery, { type GalleryCard } from '@/components/ui/floating-card-gallery';

// Patrick's video work
const videoCards: GalleryCard[] = [
  {
    title: "Social Media Content",
    description: "Engaging video content optimized for social platforms.",
    fullDescription: "Creating scroll-stopping content for Instagram, TikTok, and other social platforms. From reels to stories, each video is crafted to maximize engagement and tell compelling visual stories.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    author: "Patrick O'Neil",
    category: "Social Media",
    tags: ["Social Media", "Reels", "TikTok", "Instagram"]
  },
  {
    title: "Music Video Production",
    description: "Cinematic music videos that bring songs to life visually.",
    fullDescription: "Collaborating with artists to create music videos that amplify their creative vision. From concept development to final edit, each project combines storytelling with striking visuals.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    author: "Patrick O'Neil",
    category: "Music Video",
    tags: ["Music Video", "Cinematic", "Production", "Artist Collaboration"]
  },
  {
    title: "Event Videography",
    description: "Capturing special moments at events and celebrations.",
    fullDescription: "Professional event coverage that captures the energy and emotion of your special occasions. From corporate events to personal celebrations, every moment is documented with care.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    author: "Patrick O'Neil",
    category: "Events",
    tags: ["Events", "Corporate", "Celebrations", "Documentary"]
  },
  {
    title: "Personal Projects",
    description: "Artistic video pieces exploring personal creative vision.",
    fullDescription: "Self-directed video art projects that push creative boundaries. These pieces explore themes, techniques, and storytelling methods that define my unique visual style and artistic voice.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    author: "Patrick O'Neil",
    category: "Personal",
    tags: ["Art", "Experimental", "Creative", "Personal Vision"]
  },
  {
    title: "Brand Content",
    description: "Video content that elevates brand identity and messaging.",
    fullDescription: "Creating video content that helps brands connect with their audience. From product showcases to brand stories, each video is designed to communicate your message effectively.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    author: "Patrick O'Neil",
    category: "Brand",
    tags: ["Brand", "Commercial", "Marketing", "Content"]
  },
  {
    title: "Short Films",
    description: "Narrative short films with cinematic production value.",
    fullDescription: "Original short films that combine compelling narratives with high production quality. Each project is an opportunity to explore storytelling through the medium of film.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    author: "Patrick O'Neil",
    category: "Film",
    tags: ["Short Film", "Narrative", "Cinematic", "Storytelling"]
  },
];

export default function VideoGallery() {
  return (
    <div className="pt-16">
      <FloatingCardGallery
        cards={videoCards}
        backgroundColor="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900"
        accentColor="rgba(99, 102, 241, 0.5)"
        maxCards={6}
      />
    </div>
  );
}
