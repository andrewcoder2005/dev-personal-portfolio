import { Code2,GraduationCap,Users,Layers,ArrowUpRight} from 'lucide-react';
import React from 'react'
const highlights = [
  {
    icon: GraduationCap,
    title: "Graduate Software Engineer (2 Years Experience)",
    description:
      "Early-career engineer with 2 years of hands-on experience building and shipping real web product features.",
  },
  {
    icon: Code2,
    title: "Strong Frontend Foundation",
    description:
      "Comfortable building modern interfaces with React, Next.js, and TypeScript, with attention to clean, maintainable code.",
  },
  {
    icon: Layers,
    title: "Learns Fast, Delivers Consistently",
    description:
      "Quickly picks up new tools and patterns, then turns requirements into reliable features with good user experience.",
  },
  {
    icon: Users,
    title: "Great Team Contributor",
    description:
      "Collaborates well with senior engineers, designers, and PMs, asks good questions, and improves through feedback.",
  },

];
function About() {
  return (
    <section id="about" className=" py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
                About me
              </span>
            </div>
          <h2 className=' text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
            2 Years In,
            <span className='font-serif italic font-normal text-white'> Still Curious, Always Shipping</span>
          </h2>
          <div className="space-y-4 text-muted-foreground animate-fade-in animaiton-delay-200">
            <p> I’m a graduate software engineer with 2 years of experience building modern web applications. I work mainly with React, Next.js, TypeScript, and Java, and I enjoy turning requirements into clean, maintainable features that users actually value. I’m early in my career, but I bring strong ownership, fast learning, and a genuine drive to improve with every project.</p>
            <p>Outside of coding, you’ll usually find me on the volleyball court, playing League of Legends, or watching tech and esports content.</p>
          </div>
          <div className="glass rounded-2xl p-6 glow-border aniamte-fade-in animaiton-delay-300">
            <p text-lg font-medium text-foreground>
              “My mission is to build fast, reliable, and user-focused software that solves real problems and creates meaningful impact.”
            </p>
          </div>
        </div>
        {/* Right Column - Highlights */}
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((highlight,index)=>(
            <div
            className='rounded-2xl glass p-6 glow-border aniamte-fade-in animaiton-fade-in'
            key={index}
            style={{animationDelay: `${(index + 1) * 100}ms`}}
            >
              <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20'> <highlight.icon className='w-6 h-6 text-primary'/></div>
              <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}

export default About