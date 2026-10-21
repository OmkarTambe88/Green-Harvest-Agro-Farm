import course1 from "@/assets/about/WhatsApp Image 2026-10-18 at 4.39.35 PM.jpeg";
// import course2 from "@/assets/about/course-2.svg";
// import course3 from "@/assets/about/course-3.svg";
// import course4 from "@/assets/about/course-4.svg";

interface CourseImage {
  src: string;
  alt: string;
}

const courseImages: CourseImage[] = [
  { src: course1, alt: "Course completion and training image 1" }
];

const CompleteCourseSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Complete Course
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-center mb-10 max-w-3xl mx-auto">
            Proud moment to Completed 6 months course Under Coir Training
            Artisians programme In Thanjavur Coir Board , Tamilnadu . I am the
            first trainer in Maharashtra to completing Corridor Mats , Coir
            Ropes , Pith Block , Cocopeat Manure , Coir Brushes products
          </p>
        </div>

        <div className="flex justify-center">
  {courseImages.map((image, index) => (
    <div
      key={index}
      className="w-full max-w-md rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
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

export default CompleteCourseSection;
