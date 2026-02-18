import { Link } from 'react-router-dom';
import { Camera, Video, Mail, Instagram, Youtube } from 'lucide-react';
import { PortfolioGallery } from '@/components/ui/portfolio-gallery';

// Featured work images
const featuredImages = [
  {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=600&fit=crop&q=80",
    alt: "Portrait Photography",
  },
  {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&q=80",
    alt: "Music Video Production",
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&q=80",
    alt: "Graduation Photography",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80",
    alt: "Landscape Photography",
  },
  {
    src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop&q=80",
    alt: "Short Films",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&q=80",
    alt: "Creative Headshots",
  },
  {
    src: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop&q=80",
    alt: "Social Media Content",
  },
  {
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop&q=80",
    alt: "Digital Art",
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&q=80",
    alt: "Event Coverage",
  },
  {
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop&q=80",
    alt: "Personal Projects",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Patrick's Photo */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Placeholder for Patrick's photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&auto=format&fit=crop&q=80"
            alt="Patrick O'Neil"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Patrick O'Neil
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            Photographer & Video Artist
          </p>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12">
            Capturing moments with clarity and personality from Wakefield, Massachusetts
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/photos"
              className="flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all hover:scale-105"
            >
              <Camera size={20} />
              View Photos
            </Link>
            <Link
              to="/videos"
              className="flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all hover:scale-105 backdrop-blur-sm"
            >
              <Video size={20} />
              Watch Videos
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <PortfolioGallery
        title="Browse My Work"
        archiveButton={{
          text: "View full gallery",
          href: "/photos"
        }}
        images={featuredImages}
        className="bg-muted/30"
      />

      {/* Footer Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Reach out for freelance work, photoshoots, video production, or job inquiries.
          </p>

          {/* Contact Emails */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="mailto:patrickoneilphotography@gmail.com"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
            >
              <Mail size={18} />
              <span className="text-sm">patrickoneilphotography@gmail.com</span>
            </a>
            <a
              href="mailto:patrickoconnoroneil@gmail.com"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
            >
              <Mail size={18} />
              <span className="text-sm">patrickoconnoroneil@gmail.com</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://instagram.com/patrickoneilphotography"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://twitter.com/PatONeilPhoto"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-accent transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@patrick.oneil.photo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-accent transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/patrickoneil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-accent transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://youtube.com/@o.neil_edits"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-accent transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-16 text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Patrick O'Neil. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
