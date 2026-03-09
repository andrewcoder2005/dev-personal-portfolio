type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Andrew attended our weekly meetings well prepared, presented progress clearly, and consistently incorporated feedback into practical improvements.",
    author: "Deanna Jarvis",
    role: "Placement Supervisor, Morwell Innovation Centre",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Deanna%20Jarvis",
  },
  {
    quote:
      "He showed strong initiative by proposing additional features, explaining trade-offs, and working effectively with our external website administrator.",
    author: "Lisa Maatsoo",
    role: "Placement Supervisor, Morwell Innovation Centre",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Lisa%20Maatsoo",
  },
  {
    quote:
      "Andrew approached backend work with a problem-solving mindset, delivered reliable API/data improvements, and documented handover details thoroughly.",
    author: "Edward Ivanovic",
    role: "CTO, PTCARES Physiotherapy & Wellness",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Edward%20Ivanovic",
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
              key={item.author}
              className="glass rounded-2xl border border-border p-6 flex flex-col gap-4"
            >
              <div className="text-primary text-2xl leading-none">&ldquo;</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.quote}
              </p>
              <div className="mt-auto flex items-center gap-3 pt-2">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-10 h-10 rounded-full border border-border bg-surface"
                />
                <div>
                  <p className="text-sm font-semibold">{item.author}</p>
                  <p className="text-xs text-primary/80 uppercase tracking-wider">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;