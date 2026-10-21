import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import ImageSlider from "@/components/ImageSlider";
import Layout from "@/components/layout/Layout";
import { ArrowRight, Leaf, Droplets, Sprout, Recycle, Download } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

import heroFarm from "@/assets/hero-farm.jpg";
import cocopeatProduct from "@/assets/cocopeat-product.jpg";
import vermicompostProduct from "@/assets/vermicompost-product.jpg";

const features = [
  {
    icon: Leaf,
    title: "100% Organic",
    description: "Naturally sourced and processed without chemicals",
  },
  {
    icon: Droplets,
    title: "Water Efficient",
    description: "Superior moisture retention for healthy plants",
  },
  {
    icon: Sprout,
    title: "Rich Nutrients",
    description: "Essential nutrients for optimal plant growth",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly",
    description: "Sustainable products for a greener tomorrow",
  },
];

const products = [
  {
    title: "Cocopeat",
    description:
      "Premium coconut coir substrate made from natural coconut husks. Perfect for seed starting, potting mixes, and hydroponic systems. Excellent water retention while maintaining proper aeration for healthy root development.",
    benefits: [
      "Excellent water retention capacity",
      "Natural and biodegradable",
      "Pest and disease resistant",
      "pH balanced for optimal growth",
      "Reusable and eco-friendly",
    ],
    image: cocopeatProduct,
    slug: "cocopeat",
  },
  {
    title: "Vermicompost",
    description:
      "Nutrient-rich organic fertilizer produced by earthworms. A powerhouse of essential nutrients, beneficial microorganisms, and humic acids. Transforms any soil into a thriving growing medium for plants.",
    benefits: [
      "Rich in essential plant nutrients",
      "Improves soil structure and texture",
      "Enhances beneficial microbial activity",
      "Promotes stronger root development",
      "Slow-release nutrition for plants",
    ],
    image: vermicompostProduct,
    slug: "vermicompost",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroFarm})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6 animate-fade-up">
              Premium Organic Soil Enhancers
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Nurturing Nature, Growing Together
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Transform your garden with our premium Cocopeat and Vermicompost. 
              100% organic, sustainably sourced, and crafted for exceptional plant growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/order">
                <Button variant="hero" size="lg">
                  Order Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  Explore Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center p-6 rounded-2xl bg-background shadow-soft hover:shadow-card transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Premium Products
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover our range of organic soil enhancers designed to help your plants thrive naturally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Image Slider */}
      <ImageSlider />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Garden?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Get in touch with us today and order premium organic soil enhancers for your plants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Order via WhatsApp
              </Button>
            </a>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
              <a href="Green_Harvest_Agro_Farm.pdf" target="_blank" rel="noopener noreferrer" download="Green_Harvest_Agro_Farm.pdf">
                <Download className="h-5 w-5" />
                Download Brochure
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;