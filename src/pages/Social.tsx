import { Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    handle: '@patrickoneilphotography',
    url: 'https://instagram.com/patrickoneilphotography',
    icon: Instagram,
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'X (Twitter)',
    handle: '@PatONeilPhoto',
    url: 'https://twitter.com/PatONeilPhoto',
    icon: Twitter,
    color: 'from-gray-700 to-gray-900',
  },
  {
    name: 'YouTube',
    handle: '@o.neil_edits',
    url: 'https://youtube.com/@o.neil_edits',
    icon: Youtube,
    color: 'from-red-500 to-red-700',
  },
  {
    name: 'TikTok',
    handle: '@patrick.oneil.photo',
    url: 'https://tiktok.com/@patrick.oneil.photo',
    icon: () => (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
    color: 'from-gray-900 to-gray-700',
  },
  {
    name: 'LinkedIn',
    handle: 'Patrick O\'Neil',
    url: 'https://linkedin.com/in/patrickoneil',
    icon: Linkedin,
    color: 'from-blue-600 to-blue-800',
  },
];

export default function Social() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground">
            Here's where to find me online
          </p>
        </div>

        <div className="grid gap-6">
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:scale-[1.02] hover:shadow-xl">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r ${social.color} transition-opacity`} />
                  <div className="relative flex items-center gap-6">
                    <div className={`flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${social.color} text-white`}>
                      <Icon />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{social.name}</h3>
                      <p className="text-muted-foreground">{social.handle}</p>
                    </div>
                    <div className="ml-auto">
                      <svg
                        className="w-6 h-6 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Email Section */}
        <div className="mt-16 p-8 rounded-2xl border border-border bg-card text-center">
          <h2 className="text-2xl font-bold mb-6">Email Me</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">For freelance/shoots:</p>
              <a
                href="mailto:patrickoneilphotography@gmail.com"
                className="text-lg font-medium hover:underline"
              >
                patrickoneilphotography@gmail.com
              </a>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">For job inquiries:</p>
              <a
                href="mailto:patrickoconnoroneil@gmail.com"
                className="text-lg font-medium hover:underline"
              >
                patrickoconnoroneil@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
