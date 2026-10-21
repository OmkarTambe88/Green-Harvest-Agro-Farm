import "./ImageSlider.css";

import slider1 from "@/assets/slider/WhatsApp Image 2026-10-18 at 1.38.33 PM.jpeg";
import slider2 from "@/assets/slider/WhatsApp Image 2026-10-18 at 1.38.39 PM.jpeg";
import slider3 from "@/assets/slider/WhatsApp Image 2026-10-18 at 1.38.40 PM.jpeg";
import slider4 from "@/assets/slider/WhatsApp Image 2026-10-18 at 1.38.41 PM.jpeg";
import slider5 from "@/assets/slider/WhatsApp Image 2026-10-18 at 1.38.42 PM.jpeg";

interface SliderImage {
  src: string;
  alt: string;
}

const defaultImages: SliderImage[] = [
  { src: slider1, alt: "Green Harvest Agro Farm — Slider image 1" },
  { src: slider2, alt: "Green Harvest Agro Farm — Slider image 2" },
  { src: slider3, alt: "Green Harvest Agro Farm — Slider image 3" },
  { src: slider4, alt: "Green Harvest Agro Farm — Slider image 4" },
  { src: slider5, alt: "Green Harvest Agro Farm — Slider image 5" },
];

interface ImageSliderProps {
  images?: SliderImage[];
}

const ImageSlider = ({ images = defaultImages }: ImageSliderProps) => {
  // Duplicate the images to create a seamless infinite loop
  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-12 md:py-16 bg-muted">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center">
          Our Farm Gallery
        </h2>
      </div>
      <div className="image-slider" aria-label="Image gallery slider">
        <div className="image-slider__track">
          {duplicatedImages.map((image, index) => (
            <div className="image-slider__slide" key={index}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
