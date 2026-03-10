import { useEffect, useRef, useState } from "react";

type Project = {
  title: string;
  description: string;
  video: string | null;
  poster: string;
  tags: string[];
  link: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "MIC Booking Mobile App (Placement Project)",
    description:
      "React Native booking app integrated with WordPress, Ultimate Member auth, and Amelia for real-time bookings.",
    video: "/videos/mic-phone.mp4",
    poster: "/hero-bg.jpg",
    tags: ["React Native", "WordPress API", "Amelia API", "Mobile"],
    link: "#",
    github: "",
  },
  {
    title: "AI Study Career Copilot",
    description:
      "Full-stack app that helps students plan goals, track study progress, and get AI-powered feedback.",
    video: null,
    poster: "/hero-bg.jpg",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "AI"],
    link: "#",
    github: "https://github.com/andrewcoder2005/ai-study-career-copilot",
  },
  {
    title: "University ETL",
    description:
      "ETL project for extracting, cleaning, and transforming university data into analysis-ready outputs.",
    video: null,
    poster: "/hero-bg.jpg",
    tags: ["Python", "ETL", "SQL", "Data Processing"],
    link: "#",
    github: "https://github.com/andrewcoder2005/university-etl",
  },
  {
    title: "Early Childhood Education App",
    description:
      "Interactive education app designed to support early learning with simple and engaging user flows.",
    video: null,
    poster: "/hero-bg.jpg",
    tags: ["React", "Education", "Frontend", "UX"],
    link: "#",
    github: "https://github.com/andrewcoder2005/early_childhood_education_app",
  },
  {
    title: "Cheese Grater Chat",
    description:
      "Real-time chat application with responsive messaging experience and clean, scalable frontend design.",
    video: null,
    poster: "/hero-bg.jpg",
    tags: ["React", "Node.js", "WebSockets", "Realtime"],
    link: "#",
    github: "https://github.com/andrewcoder2005/cheese-grater-chat",
  },
  {
    title: "E-Commerce App",
    description:
      "Full-stack e-commerce app with product browsing, cart, and checkout-focused user journeys.",
    video: null,
    poster: "/hero-bg.jpg",
    tags: ["React", "Node.js", "MongoDB", "E-commerce"],
    link: "#",
    github: "https://github.com/andrewcoder2005/e-commerce-app",
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const handlePreviewEnter = (title: string) => {
    const video = videoRefs.current[title];
    if (!video) return;
    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise) {
      void playPromise.catch(() => {
        // Ignore blocked autoplay promise in some browsers.
      });
    }
  };

  const handlePreviewLeave = (title: string) => {
    const video = videoRefs.current[title];
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  useEffect(() => {
    if (!activeProject) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProject]);

  return (
    <>
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
                <div
                  className="relative aspect-video bg-gradient-to-br from-primary/20 to-background/60 flex items-center justify-center"
                  onMouseEnter={() => handlePreviewEnter(project.title)}
                  onMouseLeave={() => handlePreviewLeave(project.title)}
                >
                  {project.video ? (
                    <>
                      <video
                        ref={(node) => {
                          videoRefs.current[project.title] = node;
                        }}
                        src={project.video}
                        poster={project.poster}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                      <button
                        type="button"
                        onClick={() => setActiveProject(project)}
                        className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus:opacity-100"
                      >
                        <span className="rounded-full border border-white/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                          View Demo
                        </span>
                      </button>
                    </>
                  ) : (
                    <>
                      <img
                        src={project.poster}
                        alt={`${project.title} poster`}
                        className="w-full h-full object-cover opacity-65"
                      />
                      <span className="absolute text-sm text-foreground/90">
                        Demo coming soon
                      </span>
                    </>
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
                    <a
                      href={project.link}
                      className="text-primary text-sm hover:underline"
                    >
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

      {activeProject?.video ? (
        <div
          className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setActiveProject(null)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setActiveProject(null);
            }
          }}
        >
          <div
            className="relative mx-auto mt-10 w-full max-w-5xl rounded-2xl border border-border bg-background/95 p-4 md:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              className="absolute right-3 top-3 rounded-full border border-border px-3 py-1 text-sm text-muted-foreground hover:text-foreground"
            >
              Close
            </button>
            <h3 className="mb-4 pr-16 text-lg font-semibold">{activeProject.title}</h3>
            <video
              key={activeProject.video}
              src={activeProject.video}
              poster={activeProject.poster}
              className="aspect-video w-full rounded-xl bg-black object-contain"
              controls
              autoPlay
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Projects;