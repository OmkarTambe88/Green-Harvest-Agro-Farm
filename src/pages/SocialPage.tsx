import Layout from "@/components/layout/Layout";
import SocialButton from "@/components/SocialButton";
import { COMPANY_INFO, WHATSAPP_LINK } from "@/lib/constants";
import { Instagram, Linkedin } from "lucide-react";

const socials = [
  {
    href: COMPANY_INFO.instagram,
    icon: <Instagram className="h-8 w-8 text-primary-foreground" />,
    label: "Instagram",
    description: "Follow us for gardening tips, product updates, and behind-the-scenes content.",
    color: "bg-gradient-to-br from-[hsl(330,70%,50%)] to-[hsl(30,70%,50%)]",
  },
  {
    href: COMPANY_INFO.linkedin,
    icon: <Linkedin className="h-8 w-8 text-primary-foreground" />,
    label: "LinkedIn",
    description: "Connect with us professionally and stay updated on our business journey.",
    color: "bg-[hsl(210,80%,45%)]",
  },
  {
    href: WHATSAPP_LINK,
    icon: (
      <svg className="h-8 w-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: "WhatsApp",
    description: "Chat with us directly for quick orders and instant support. The fastest way to reach us!",
    color: "bg-[hsl(142,70%,45%)]",
  },
];

const SocialPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Connect With Us
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Follow us on social media and stay connected with GreenEarth Organics
          </p>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {socials.map((social) => (
              <SocialButton key={social.label} {...social} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Join Our Community
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Be part of our growing community of organic gardening enthusiasts. Get tips, updates, and exclusive offers!
          </p>
          <div className="flex justify-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full ${social.color} hover:scale-110 transition-transform duration-300`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SocialPage;