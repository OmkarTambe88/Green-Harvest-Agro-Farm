import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";
import { ArrowRight, Check } from "lucide-react";

import cocopeatProduct from "@/assets/cocopeat-product.jpg";
import vermicompostProduct from "@/assets/vermicompost-product.jpg";
import heroCocopeat from "@/assets/hero-cocopeat.jpg";

const cocopeatBenefits = [
  "Excellent water retention - holds up to 10x its weight in water",
  "Provides optimal aeration for root development",
  "Naturally pest and disease resistant",
  "pH neutral and cation exchange capacity optimized",
  "100% biodegradable and eco-friendly",
  "Can be reused for multiple growing cycles",
  "Free from weeds and pathogens",
  "Ideal for hydroponic and soilless growing",
];

const vermicompostBenefits = [
  "Rich in essential macro and micronutrients",
  "Contains beneficial microorganisms and enzymes",
  "Improves soil structure and water-holding capacity",
  "Enhances nutrient uptake by plants",
  "Promotes strong root development",
  "Slow-release nutrition for sustained growth",
  "Suppresses soil-borne plant diseases",
  "100% organic and chemical-free",
];

const cocopeatUsage = [
  "Seed starting and germination",
  "Potting mixes for container plants",
  "Hydroponic growing systems",
  "Soil amendment for gardens",
  "Mulching around plants",
  "Worm bedding material",
];

const vermicompostUsage = [
  "Garden bed preparation",
  "Potting soil amendment",
  "Top dressing for lawns",
  "Vegetable and fruit gardens",
  "Flower beds and ornamentals",
  "Organic farming applications",
];

const ProductsPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroCocopeat})` }}
        >
          <div className="absolute inset-0 bg-primary/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Our Products
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Premium organic soil enhancers for exceptional plant growth
          </p>
        </div>
      </section>

      {/* Cocopeat Section */}
      <section id="cocopeat" className="py-16 md:py-24 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Premium Quality
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Cocopeat
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our premium Cocopeat is made from 100% natural coconut coir, carefully processed to create the perfect growing medium. This versatile substrate offers exceptional water retention while maintaining optimal aeration, making it ideal for a wide range of gardening applications.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you are starting seeds, growing in containers, or setting up a hydroponic system, our Cocopeat provides the perfect foundation for healthy plant growth. It is naturally pest-resistant, pH-balanced, E.C.Maintained and can be reused multiple times.
              </p>

              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  Order Cocopeat
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
            </div>

            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src={cocopeatProduct}
                  alt="Premium Cocopeat Product"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>

          {/* Benefits & Usage */}
          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                Key Benefits
              </h3>
              <ul className="space-y-3">
                {cocopeatBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                How to Use
              </h3>
              <ul className="space-y-3">
                {cocopeatUsage.map((usage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary font-bold">{index + 1}.</span>
                    <span className="text-muted-foreground">{usage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="h-px bg-border max-w-6xl mx-auto" />
      </div>

      {/* Vermicompost Section */}
      <section id="vermicompost" className="py-16 md:py-24 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src={vermicompostProduct}
                  alt="Premium Vermicompost Product"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                Nutrient Rich
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Vermicompost
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our premium Vermicompost is nature&apos;s finest organic fertilizer, produced by earthworms transforming organic matter into nutrient-rich humus. This black gold is packed with essential nutrients, beneficial microorganisms, and growth-promoting enzymes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Perfect for all types of plants, our Vermicompost improves soil structure, enhances water retention, and provides slow-release nutrition that promotes healthy, vigorous plant growth throughout the season.
              </p>

              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg">
                  Order Vermicompost
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Benefits & Usage */}
          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                Key Benefits
              </h3>
              <ul className="space-y-3">
                {vermicompostBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                How to Use
              </h3>
              <ul className="space-y-3">
                {vermicompostUsage.map((usage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-secondary font-bold">{index + 1}.</span>
                    <span className="text-muted-foreground">{usage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;
