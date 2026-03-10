type Project = {
  title: string;
  description: string;
  video: string | null;
  tags: string[];
  link: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "MIC Booking Mobile App (Placement Project)",
    description:
      "React Native booking app integrated with WordPress, Ultimate Member auth, and Amelia for real-time bookings.",
    video: "/videos/mic-booking-mobile-app.mp4",
    tags: ["React Native", "WordPress API", "Amelia API", "Mobile"],
    link: "#",
    github: "",
  },
  {
    title: "AI Study Career Copilot",
    description:
      "Full-stack app that helps students plan goals, track study progress, and get AI-powered feedback.",
    video: null,
    tags: ["React", "Next.js", "TypeScript", "Node.js", "AI"],
    link: "#",
    github: "https://github.com/andrewcoder2005/ai-study-career-copilot",
  },
  {
    title: "University ETL",
    description:
      "ETL project for extracting, cleaning, and transforming university data into analysis-ready outputs.",
    video: null,
    tags: ["Python", "ETL", "SQL", "Data Processing"],
    link: "#",
    github: "https://github.com/andrewcoder2005/university-etl",
  },
  {
    title: "Early Childhood Education App",
    description:
      "Interactive education app designed to support early learning with simple and engaging user flows.",
    video: null,
    tags: ["React", "Education", "Frontend", "UX"],
    link: "#",
    github: "https://github.com/andrewcoder2005/early_childhood_education_app",
  },
  {
    title: "Cheese Grater Chat",
    description:
      "Real-time chat application with responsive messaging experience and clean, scalable frontend design.",
    video: null,
    tags: ["React", "Node.js", "WebSockets", "Realtime"],
    link: "#",
    github: "https://github.com/andrewcoder2005/cheese-grater-chat",
  },
  {
    title: "E-Commerce App",
    description:
      "Full-stack e-commerce app with product browsing, cart, and checkout-focused user journeys.",
    video: null,
    tags: ["React", "Node.js", "MongoDB", "E-commerce"],
    link: "#",
    github: "https://github.com/andrewcoder2005/e-commerce-app",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-muted-foreground">
            Projects I&apos;ve built across web, mobile, AI, and data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group glass rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-background/60 flex items-center justify-center">
                {project.video ? (
                  <video
                    src={project.video}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    autoPlay
                    playsInline
                    controls
                    preload="metadata"
                  />
                ) : (
                  <span className="text-sm text-muted-foreground">
                    Demo coming soon
                  </span>
                )}
              </div>

              <div className="p-5 flex flex-col gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.title}-${tag}`}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-1 mt-auto">
                  <a href={project.link} className="text-primary text-sm hover:underline">
                    Live Demo
                  </a>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;