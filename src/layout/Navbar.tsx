import React, { useState } from 'react'
import Button from '../components/Button'
import { Menu, X } from 'lucide-react'
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" }
]
function Navbar() {
  const [isMobileOpen, setisMobileOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5 z-50">
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
          <Button size='sm'>
            Contact me
          </Button>
        </div>
        {/* Mobile Menu Button */}
        <button className='md:hidden p-2 text-foreground cursor-pointer'onClick={()=>setisMobileOpen((prev)=>!prev)}>
          {isMobileOpen?<X/>:<Menu/>}
        </button>
        {/* Mobile Menu */}
      </nav>
      {
        isMobileOpen&&
      <div className={`md:hidden glass-strong animate-fade-in`}>
        <div className=" container mx-auto flex flex-col glass py-6 px-6 gap-4">
          {navLinks.map((link, index) => (
            <a href={link.href} key={index} className="text-lg text-muted-foreground hover:text-foreground hover: bg-surface py-2 ">
              {link.label}  </a>
          ))}
        <Button>
          Contact me
        </Button>
        </div>
      </div>
      }

    </header>
  )
}

export default Navbar