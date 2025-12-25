import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  benefits: string[];
  image: string;
  slug: string;
}

const ProductCard = ({ title, description, benefits, image, slug }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6 md:p-8">
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        <div className="mb-6">
          <h4 className="font-semibold text-foreground mb-2">Key Benefits:</h4>
          <ul className="space-y-1">
            {benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-muted-foreground">
                <span className="text-primary mt-1">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <Link to={`/products#${slug}`}>
          <Button variant="outline" className="group/btn w-full">
            Learn More
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;