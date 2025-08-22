import { Button } from '@/components/ui/button'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const footerSections = [
    {
      title: 'Platform',
      links: [
        { label: 'Marketplace', href: '#marketplace' },
        { label: 'AI Assistant', href: '#ai' },
        { label: 'Equipment Sharing', href: '#equipment' },
        { label: 'Knowledge Hub', href: '#knowledge' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '#help' },
        { label: 'Contact Us', href: '#contact' },
        { label: 'Farmer Support', href: '#support' },
        { label: 'Technical Help', href: '#tech-support' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Careers', href: '#careers' },
        { label: 'Press Kit', href: '#press' },
        { label: 'Partners', href: '#partners' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Service', href: '#terms' },
        { label: 'Cookie Policy', href: '#cookies' },
        { label: 'Data Security', href: '#security' }
      ]
    }
  ]

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-bg opacity-30"></div>
      
      <div className="relative z-10 bg-gradient-to-br from-background-smoky/90 to-background/95 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-16">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-text rounded-lg flex items-center justify-center glow-primary">
                  <span className="text-xl font-bold text-white">K</span>
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold gradient-text">Krishify</h2>
                  <p className="text-xs text-muted-foreground -mt-1">Every Crop Counts</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-6 max-w-xs">
                Empowering farmers with AI-driven insights, transparent trading, 
                and smart agricultural solutions for sustainable farming.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
                  { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
                  { icon: Twitter, href: '#', color: 'hover:text-blue-300' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-8 h-8 bg-background-smoky rounded-lg flex items-center justify-center text-muted-foreground ${social.color} transition-all hover:scale-110`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-heading font-semibold text-foreground mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-metallic-green transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="glass-card p-6 mb-8">
            <h3 className="font-heading font-semibold text-foreground mb-4">Get in Touch</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-metallic-green/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-metallic-green" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Call Us</p>
                  <p className="text-xs text-muted-foreground">+91 1800-KRISHIFY</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-apple-green/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-apple-green" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-xs text-muted-foreground">support@krishify.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-morning-blue/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-morning-blue" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Office</p>
                  <p className="text-xs text-muted-foreground">Bangalore, Karnataka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="glass-card p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  Stay Updated
                </h3>
                <p className="text-sm text-muted-foreground">
                  Get weekly insights on crop prices, weather updates, and farming tips.
                </p>
              </div>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 bg-background-smoky border border-morning-blue/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-metallic-green"
                />
                <Button variant="hero">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-muted-foreground">
                © 2024 Krishify Technologies. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6 text-xs text-muted-foreground">
                <span>Made with ❤️ for Indian Farmers</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-metallic-green rounded-full animate-pulse"></div>
                  <span>Platform Status: All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer