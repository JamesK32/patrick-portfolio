import CoreValueStats, { type CoreStat } from "@/components/ui/core-value-stats";

const stats: CoreStat[] = [
  {
    value: "4+",
    label: "Years of Experience",
    description: "Developing skills in photography, videography, and digital art through coursework and freelance work.",
  },
  {
    value: "BC",
    label: "Boston College",
    description: "Currently studying Marketing with a minor in Film and Studio Art.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    value: "6+",
    label: "Software Skills",
    description: "Proficient in Photoshop, Illustrator, Premiere Pro, Lightroom, Canva, and CapCut.",
  },
  {
    value: "50+",
    label: "Projects Completed",
    description: "From graduation portraits to social media content, delivering quality work for every client.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    value: "MA",
    label: "Wakefield, Massachusetts",
    description: "Based in Wakefield, available for shoots throughout the Greater Boston area.",
  },
];

export default function About() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Patrick O'Neil
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Photographer & Video Artist
        </p>
        <div className="prose prose-invert max-w-2xl mx-auto text-left">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Hello, I am Patrick O'Neil! I am a photographer and video artist from Wakefield, Massachusetts,
            currently studying at Boston College, where I major in Marketing with a minor in Film and Studio Art.
            My creative foundation comes from coursework in video art, photography, and Adobe Premiere editing,
            which gave me the technical grounding to shape my own visual style.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mt-4">
            I shoot both personal projects and freelance work, and I especially enjoy creating pieces that feel
            intimate and grounded in real places and real people. Alongside my solo projects, I have worked with
            clients on shoots such as graduation portraits and social media carousels.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mt-4">
            My goal is to bring a thoughtful eye to every project, capturing moments with clarity and personality
            while always looking for new ways to experiment and grow.
          </p>
        </div>
      </section>

      {/* Core Stats Section */}
      <CoreValueStats
        title="Skills & Experience"
        subtitle="About Me"
        description="A combination of academic training and hands-on experience in visual storytelling."
        stats={stats}
      />

      {/* Services Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Graduation Photos",
            "Headshots",
            "Photoshoots",
            "Video Production",
            "Social Media Content",
            "And More!"
          ].map((service, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-border bg-card hover:bg-accent transition-colors text-center"
            >
              <p className="font-medium">{service}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
