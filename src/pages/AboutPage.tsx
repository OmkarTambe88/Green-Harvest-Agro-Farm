import Layout from "@/components/layout/Layout";
import AwardedSection from "@/components/about/AwardedSection";
import TrainingSection from "@/components/about/TrainingSection";
import CompleteCourseSection from "@/components/about/CompleteCourseSection";
import { Target, Eye, Heart, Shield, Users, Award } from "lucide-react";

import heroFarm from "@/assets/hero-farm.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion for Nature",
    description: "We are deeply committed to sustainable agriculture and environmental preservation.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every product undergoes rigorous testing to ensure premium quality standards.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your success is our success. We are dedicated to helping your plants thrive.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We continuously innovate to deliver the best organic solutions in the market.",
  },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroFarm})` }}
        >
          <div className="absolute inset-0 bg-primary/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            About Us
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Cultivating a greener future through sustainable organic solutions
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
              Green Harvest Agro Farm Organics was born from a simple yet powerful vision: to revolutionize the way we nurture our plants and care for our environment. Founded by a team of passionate agriculturists and environmental enthusiasts, we set out to create premium organic soil enhancers that deliver exceptional results while preserving our planet.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                What started as a small operation has grown into a trusted name in organic gardening solutions. Today, we proudly serve thousands of farmers, gardeners, and plant enthusiasts across the country with our premium Cocopeat and Vermicompost products.
              </p>
              <p className="text-lg leading-relaxed">
                Every product we create is a testament to our commitment to quality, sustainability, and the belief that nature knows best. We source our raw materials responsibly, process them with care, and deliver products that help your plants flourish naturally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awarded by Ministry of MSME */}
      <AwardedSection />

      {/* Training */}
      <TrainingSection />

      {/* Complete Course */}
      <CompleteCourseSection />

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-background rounded-2xl p-8 md:p-10 shadow-card">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide farmers and gardeners with the highest quality organic soil enhancers that promote healthy plant growth while protecting our environment. We strive to make sustainable gardening accessible and affordable for everyone.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 md:p-10 shadow-card">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading provider of organic soil solutions in India, inspiring a movement towards sustainable agriculture. We envision a world where every garden thrives naturally, and every farmer reaps the benefits of organic practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Why Choose Green Harvest Agro Farm?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Premium quality organic products",
              "Sustainably sourced materials",
              "Rigorous quality testing",
              "Competitive pricing",
              "Fast and reliable delivery",
              "Expert customer support",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-primary-foreground/10"
              >
                <span className="text-accent text-2xl">✓</span>
                <span className="text-primary-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
