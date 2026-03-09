import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import Button from "../components/Button";

const contactLinks = [
  {
    label: "Email",
    value: "hello.andrew.dev@gmail.com",
    href: "mailto:hello.andrew.dev@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "nguyen-vu-pham-2241042a4",
    href: "https://www.linkedin.com/in/nguyen-vu-pham-2241042a4/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "andrewcoder2005",
    href: "https://github.com/andrewcoder2005",
    icon: Github,
  },
];

function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="glass-strong rounded-3xl border border-border p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary mb-3">
                Contact
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let&apos;s Build Something Great Together
              </h2>
              <p className="text-muted-foreground max-w-xl">
                I&apos;m open to graduate and junior software engineering roles.
                If you think I&apos;d be a good fit for your team, I&apos;d love to
                connect.
              </p>

              <a href="mailto:hello.andrew.dev@gmail.com" className="inline-block mt-6">
                <Button size="lg">
                  Send me an email <MessageSquare className="w-5 h-5" />
                </Button>
              </a>
            </div>

            <div className="space-y-4">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Email" ? undefined : "_blank"}
                  rel={item.label === "Email" ? undefined : "noreferrer"}
                  className="glass rounded-2xl border border-border p-4 flex items-center justify-between hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm">{item.value}</p>
                    </div>
                  </div>
                  <span className="text-xs text-primary">Open</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;