import training1 from "@/assets/about/WhatsApp Image 2026-10-18 at 1.43.11 PM.jpeg";
import training2 from "@/assets/about/WhatsApp Image 2026-10-18 at 11.44.17 AM.jpeg";
import training3 from "@/assets/about/WhatsApp Image 2026-10-18 at 11.44.18 AM.jpeg";
import training4 from "@/assets/about/WhatsApp Image 2026-10-18 at 11.44.20 AM.jpeg";

interface TrainingImage {
  src: string;
  alt: string;
}

const trainingImages: TrainingImage[] = [
  { src: training1, alt: "Training activity image 1" },
  { src: training2, alt: "Training activity image 2" },
  { src: training3, alt: "Training activity image 3" },
  { src: training4, alt: "Training activity image 4" },
];

const TrainingSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Training
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-center mb-10 max-w-3xl mx-auto">
            This is the first development program which are held under MSME by
            Coir Board regional office , Sindhudurg, Which Are empowering and
            builds good opportunity for the women's
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {trainingImages.map((image, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
