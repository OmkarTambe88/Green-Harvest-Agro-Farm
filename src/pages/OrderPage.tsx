import Layout from "@/components/layout/Layout";
import PackageCard from "@/components/PackageCard";

import package1kg from "@/assets/package-1kg.jpg";
import package10kg from "@/assets/package-10kg.jpg";
import packageLoose from "@/assets/bulk.jpg";
import package1_kg from "@/assets/1kg vermicompost.jpg";
import package_10kg from "@/assets/10 kg vermicompost.jpg";

const cocopeatPackages = [
  {
    product: "Cocopeat",
    size: "1 kg Pack",
    description: "Perfect for home gardeners and small container plants. Ideal for seed starting and indoor plants.",
    image: package1kg,
  },
  {
    product: "Cocopeat",
    size: "10 kg Pack",
    description: "Great value for regular gardeners. Suitable for multiple containers and raised beds.",
    image: package10kg,
  },
  {
    product: "Cocopeat",
    size: "Loose / Bulk",
    description: "Best for commercial growers and large-scale applications. Contact us for custom quantities.",
    image: packageLoose,
  },
];

const vermicompostPackages = [
  {
    product: "Vermicompost",
    size: "1 kg Pack",
    description: "Ideal for potted plants and small gardens. Rich organic nutrition in a convenient size.",
    image: package1_kg,
  },
  {
    product: "Vermicompost",
    size: "10 kg Pack",
    description: "Perfect for vegetable gardens and flower beds. Long-lasting nutrition for healthy plants.",
    image: package_10kg,
  },
  {
    product: "Vermicompost",
    size: "Loose / Bulk",
    description: "Designed for farms and commercial applications. Competitive bulk pricing available.",
    image: packageLoose,
  },
];

const OrderPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Order Now
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Choose your preferred packaging and order directly via WhatsApp for fast and easy ordering
          </p>
        </div>
      </section>

      {/* Cocopeat Products */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Cocopeat
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cocopeat Packages
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Premium coconut coir substrate for all your gardening needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cocopeatPackages.map((pkg, index) => (
              <PackageCard key={`cocopeat-${index}`} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="h-px bg-border max-w-5xl mx-auto" />
      </div>

      {/* Vermicompost Products */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
              Vermicompost
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vermicompost Packages
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Nutrient-rich organic fertilizer for exceptional plant growth
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {vermicompostPackages.map((pkg, index) => (
              <PackageCard key={`vermicompost-${index}`} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              How to Order
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="bg-background rounded-xl p-6 shadow-soft">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  1
                </div>
                <h3 className="font-semibold text-foreground mb-2">Choose Product</h3>
                <p className="text-muted-foreground text-sm">Select your preferred product and packaging size</p>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-soft">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  2
                </div>
                <h3 className="font-semibold text-foreground mb-2">Click WhatsApp</h3>
                <p className="text-muted-foreground text-sm">Tap the order button to start a WhatsApp chat</p>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-soft">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  3
                </div>
                <h3 className="font-semibold text-foreground mb-2">Confirm Order</h3>
                <p className="text-muted-foreground text-sm">Share your details and confirm your order</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OrderPage;
