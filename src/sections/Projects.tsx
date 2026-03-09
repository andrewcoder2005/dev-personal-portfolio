import React from 'react'
const projects = [
  {
    title: "MIC Booking Mobile App (Placement Project)",
    description:
      "React Native booking app integrated with WordPress, Ultimate Member auth, and Amelia for real-time bookings.",
    video: "/", // replace after demo recording
    tags: ["React Native", "WordPress API", "Amelia API", "Mobile"],
    link: "#",
    github: "",
  },
    {
    title: "AI Study Career Copilot",
    description:
      "Full-stack app that helps students plan goals, track study progress, and get AI-powered feedback.",
    video: "/",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "AI"],
    link: "#",
    github: "https://github.com/andrewcoder2005/ai-study-career-copilot",
  },
  {
    title: "University ETL",
    description:
      "ETL project for extracting, cleaning, and transforming university data into analysis-ready outputs.",
    video: "/",
    tags: ["Python", "ETL", "SQL", "Data Processing"],
    link: "#",
    github: "https://github.com/andrewcoder2005/university-etl",
  },
  {
    title: "Developer Personal Portfolio",
    description:
      "Modern portfolio site to showcase my projects, skills, and experience with clean UI and performance focus.",
    video: "/",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    link: "#",
    github: "https://github.com/andrewcoder2005/dev-personal-portfolio",
  },
  {
    title: "Early Childhood Education App",
    description:
      "Interactive education app designed to support early learning with simple and engaging user flows.",
    video: "/",
    tags: ["React", "Education", "Frontend", "UX"],
    link: "#",
    github: "https://github.com/andrewcoder2005/early_childhood_education_app",
  },
  {
    title: "Cheese Grater Chat",
    description:
      "Real-time chat application with responsive messaging experience and clean, scalable frontend design.",
    video: "/",
    tags: ["React", "Node.js", "WebSockets", "Realtime"],
    link: "#",
    github: "https://github.com/andrewcoder2005/cheese-grater-chat",
  },
  {
    title: "E-Commerce App",
    description:
      "Full-stack e-commerce app with product browsing, cart, and checkout-focused user journeys.",
    video: "/",
    tags: ["React", "Node.js", "MongoDB", "E-commerce"],
    link: "#",
    github: "https://github.com/andrewcoder2005/e-commerce-app",
  },

];
function Projects() {
  return (
    <section  id="projects" className=" py-32 relative overflow-hidden">
      {/* Background glows */}
        <div className="container mx-auto px-6 relative z-10"></div>
    </section>
  )
}

export default Projects