type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  type: string;
  highlights: string[];
};

const experienceItems: ExperienceItem[] = [
  {
    role: "Mobile App Developer (Placement)",
    company: "MIC",
    period: "2025 - 2026",
    type: "React Native · WordPress API · Amelia",
    highlights: [
      "Built a booking mobile app from scratch for iOS and Android using React Native.",
      "Integrated WordPress backend APIs and Amelia booking endpoints for real-time booking updates.",
      "Implemented user registration, authentication, and role-based access for mobile users.",
    ],
  },
  {
    role: "Graduate Software Engineer",
    company: "Personal & University Projects",
    period: "2024 - Present",
    type: "React · Next.js · TypeScript · Java",
    highlights: [
      "Shipped full-stack projects including AI-driven study tools, chat apps, and e-commerce features.",
      "Focused on clean architecture and maintainable code for long-term development speed.",
      "Collaborated with peers, gathered feedback quickly, and improved delivery quality each sprint.",
    ],
  },
  {
    role: "Computer Science Student",
    company: "University",
    period: "2022 - 2024",
    type: "Software Engineering Fundamentals",
    highlights: [
      "Built strong foundations in data structures, algorithms, and software development practices.",
      "Applied classroom concepts to practical products through project-based learning.",
      "Developed a growth mindset around continuous learning and ownership.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey So Far</h2>
          <p className="text-muted-foreground">
            I am an early-career engineer with 2 years of practical development
            experience across web and mobile products.
          </p>
        </div>

        <div className="space-y-6">
          {experienceItems.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="glass rounded-2xl border border-border p-6 md:p-7"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <p className="text-primary">{item.company}</p>
                </div>
                <div className="text-sm text-muted-foreground md:text-right">
                  <p>{item.period}</p>
                  <p>{item.type}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;