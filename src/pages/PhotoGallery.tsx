import { CircularGallery, type GalleryItem } from '@/components/ui/circular-gallery';

// Patrick's photography work
const galleryData: GalleryItem[] = [
  {
    common: 'Portrait Photography',
    binomial: 'Authentic Expressions',
    photo: {
      url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&auto=format&fit=crop&q=80',
      text: 'Professional portrait capturing natural expression',
      pos: '50% 30%',
      by: 'Patrick O\'Neil'
    }
  },
  {
    common: 'Graduation Photos',
    binomial: 'Academic Milestones',
    photo: {
      url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&auto=format&fit=crop&q=80',
      text: 'Graduates celebrating their achievement',
      pos: '50% 40%',
      by: 'Patrick O\'Neil'
    }
  },
  {
    common: 'Digital Art',
    binomial: 'Creative Compositions',
    photo: {
      url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&auto=format&fit=crop&q=80',
      text: 'Abstract digital artwork',
      pos: '50% 50%',
      by: 'Patrick O\'Neil'
    }
  },
  {
    common: 'Landscape',
    binomial: 'New England Scenery',
    photo: {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&auto=format&fit=crop&q=80',
      text: 'Mountain landscape at golden hour',
      pos: '50% 60%',
      by: 'Patrick O\'Neil'
    }
  },
  {
    common: 'Street Photography',
    binomial: 'Urban Moments',
    photo: {
      url: 'https://images.unsplash.com/photo-1476973422084-e0fa66ff9456?w=900&auto=format&fit=crop&q=80',
      text: 'Candid street scene',
      pos: '50% 50%',
      by: 'Patrick O\'Neil'
    }
  },
  {
    common: 'Creative Headshots',
    binomial: 'Professional Branding',
    photo: {
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80',
      text: 'Professional headshot with creative lighting',
      pos: '50% 30%',
      by: 'Patrick O\'Neil'
    }
  },
  {
    common: 'Event Photography',
    binomial: 'Capturing Moments',
    photo: {
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&auto=format&fit=crop&q=80',
      text: 'Event crowd at a conference',
      pos: '50% 40%',
      by: 'Patrick O\'Neil'
    }
  },
  {
    common: 'Nature',
    binomial: 'Wildlife & Flora',
    photo: {
      url: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=900&auto=format&fit=crop&q=80',
      text: 'Sunlight through forest trees',
      pos: '50% 50%',
      by: 'Patrick O\'Neil'
    }
  },
  {
    common: 'Architecture',
    binomial: 'Urban Structures',
    photo: {
      url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&auto=format&fit=crop&q=80',
      text: 'Modern building architecture',
      pos: '50% 50%',
      by: 'Patrick O\'Neil'
    }
  },
  {
    common: 'Golden Hour',
    binomial: 'Magic Light',
    photo: {
      url: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=900&auto=format&fit=crop&q=80',
      text: 'Beach scene during golden hour',
      pos: '50% 60%',
      by: 'Patrick O\'Neil'
    }
  },
];

export default function PhotoGallery() {
  return (
    <div className="w-full bg-gradient-to-br from-slate-100 via-purple-50 to-slate-100" style={{ height: '500vh' }}>
      {/* Sticky container */}
      <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center mb-8 absolute top-20 z-10">
          <h1 className="text-4xl font-bold text-foreground">Photo Gallery</h1>
          <p className="text-muted-foreground">Scroll to explore the collection</p>
        </div>
        <div className="w-full h-full">
          <CircularGallery items={galleryData} radius={500} autoRotateSpeed={0.015} />
        </div>
      </div>
    </div>
  );
}
