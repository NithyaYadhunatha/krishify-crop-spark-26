import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { MessageCircle, Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Marketplace', href: '#marketplace' },
    { label: 'AI Assistant', href: '#ai' },
    { label: 'Equipment Sharing', href: '#equipment' },
    { label: 'Knowledge Hub', href: '#knowledge' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <header className="glass-nav h-16">
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-text rounded-lg flex items-center justify-center glow-primary">
              <span className="text-xl font-bold text-white">K</span>
            </div>
            <div>
              <h1 className="text-2xl font-heading font-bold gradient-text">Krishify</h1>
              <p className="text-xs text-muted-foreground -mt-1">Every Crop Counts</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground hover:scale-105 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ai" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              Ask Krishify AI
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 animate-slide-up">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground py-2 px-4 rounded-lg hover:bg-accent/10 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="ai" size="sm" className="w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Ask Krishify AI
                </Button>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button variant="hero" size="sm" className="w-full" asChild>
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header