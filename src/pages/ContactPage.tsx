import Layout from "@/components/layout/Layout";
import { COMPANY_INFO } from "@/lib/constants";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            We would love to hear from you. Reach out to us for any queries or orders.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Email */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Email Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  Send us an email for detailed inquiries
                </p>
                <p className="text-primary font-semibold">
                  {COMPANY_INFO.email}
                </p>
              </a>

              {/* Phone */}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Call Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  Speak directly with our team
                </p>
                <p className="text-secondary font-semibold">
                  {COMPANY_INFO.phone}
                </p>
              </a>

              {/* Address */}
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <MapPin className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Visit Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our office location
                </p>
                <p className="text-foreground leading-relaxed">
                  {COMPANY_INFO.address}
                </p>
              </div>

              {/* Hours */}
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Business Hours
                </h3>
                <p className="text-muted-foreground mb-4">
                  When we are available
                </p>
                <div className="space-y-2">
                  <p className="text-foreground">
                    <span className="font-medium">Mon - Sat:</span> 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-foreground">
                    <span className="font-medium">Sunday:</span> Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Find Us
            </h2>
            <div className="bg-card rounded-2xl overflow-hidden shadow-card">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4807.522978133087!2d74.16408147514886!3d16.67037338409964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDQwJzEzLjMiTiA3NMKwMDknNjAuMCJF!5e1!3m2!1sen!2sin!4v1766169170741!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Green Harvest Agro Farm Location"
                className="aspect-[16/9] w-full"
              ></iframe>
            </div>
            <a
              href="https://maps.app.goo.gl/pHA8SFtngSHkSWNcA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <MapPin className="h-5 w-5" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
