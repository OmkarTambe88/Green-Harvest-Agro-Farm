import award1 from "@/assets/about/WhatsApp Image 2026-10-18 at 1.43.10 PM.jpeg";
import award2 from "@/assets/about/WhatsApp Image 2026-10-18 at 4.18.44 PM (1).jpeg";
import award3 from "@/assets/about/WhatsApp Image 2026-10-18 at 4.18.44 PM.jpeg";
import award4 from "@/assets/about/WhatsApp Image 2026-10-18 at 4.18.45 PM.jpeg";
// import award5 from "@/assets/about/award-5.svg";

interface AwardCard {
  image: string;
  alt: string;
  description: string;
}

const awardCards: AwardCard[] = [
  {
    image: award1,
    alt: "Award and recognition image 1",
    description: "",
  },
  {
    image: award2,
    alt: "Award and recognition image 2",
    description: "",
  },
  {
    image: award3,
    alt: "Award and recognition image 3",
    description: "",
  },
  {
    image: award4,
    alt: "Award and recognition image 4",
    description: "",
  },
  
];

const AwardedSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Awarded by Ministry of MSME
          </h2>
          <p className="text-muted-foreground text-lg">
            Organised by Coir Board and Regional Office
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {awardCards.map((card, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardedSection;
