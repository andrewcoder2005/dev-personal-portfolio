import { useState, useEffect } from "react";
import Button from '../components/Button'
import { Menu, X } from 'lucide-react'
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" }
]
function Navbar() {
  const [isMobileOpen, setisMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])
  return (
    <header className={`fixed top-0 left-0 right-0 ${isScrolled ? "glass effect py-3" : "bg-transparent py-5"} z-50 transition-all duration-500`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href='#' className='text-xl font-bold tracking-tight hover:text-primary'>
          AP<span className='text-primary'>.</span>
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover: bg-surface">{link.label}  </a>
            ))}
          </div>
        </div>
        {/* CTA button */}
        <div className='hidden md:block'>
          <a href="#contact">
            <Button size='sm'>
              Contact me
            </Button>
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button className='md:hidden p-2 text-foreground cursor-pointer' onClick={() => setisMobileOpen((prev) => !prev)}>
          {isMobileOpen ? <X /> : <Menu />}
        </button>
        {/* Mobile Menu */}
      </nav>
      {
        isMobileOpen &&
        <div className={`md:hidden glass-strong animate-fade-in`}>
          <div className=" container mx-auto flex flex-col glass py-6 px-6 gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-lg text-muted-foreground hover:text-foreground hover: bg-surface py-2 "
                onClick={() => setisMobileOpen(false)}
              >
                {link.label}  </a>
            ))}
            <a href="#contact" onClick={() => setisMobileOpen(false)}>
              <Button>
                Contact me
              </Button>
            </a>
          </div>
        </div>
      }

    </header>
  )
}

export default Navbar