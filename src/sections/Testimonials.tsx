type Testimonial = {
  title: string;
  description: string;
  source: string;
};

const testimonials: Testimonial[] = [
  {
    title: "Reliable delivery",
    description:
      "Known for consistently completing tasks on time and taking ownership from implementation through refinement.",
    source: "Mentor feedback",
  },
  {
    title: "Strong communication",
    description:
      "Praised for asking the right questions early and collaborating well with design and product teammates.",
    source: "Project collaboration feedback",
  },
  {
    title: "High learning velocity",
    description:
      "Recognized for quickly learning new tools and applying feedback to improve both code quality and product outcomes.",
    source: "Placement and university project feedback",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What People Value About Working With Me
          </h2>
          <p className="text-muted-foreground">
            Recruiter-focused highlights based on recurring feedback themes from
            placement and project collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <article
              key={item.title}
              className="glass rounded-2xl border border-border p-6 flex flex-col gap-4"
            >
              <div className="text-primary text-2xl leading-none">&ldquo;</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              <p className="text-xs uppercase tracking-wider text-primary/80 mt-auto">
                {item.source}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;