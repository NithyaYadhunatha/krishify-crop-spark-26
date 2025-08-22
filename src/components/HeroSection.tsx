import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react'

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen pt-16 pattern-bg overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-glow rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-apple-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-morning-blue/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Content */}
          <div className="lg:w-1/2 space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border border-metallic-green/30">
                <Sparkles className="w-4 h-4 text-metallic-green mr-2" />
                <span className="text-sm font-medium text-metallic-green">AI-Powered Agriculture</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                <span className="gradient-text">Krishify</span>
                <br />
                <span className="text-foreground">Every Crop</span>
                <br />
                <span className="text-apple-green">Counts</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground font-light max-w-2xl">
                Transparent trade, AI insights, and smarter farming for everyone. 
                Empowering farmers with technology that understands agriculture.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Selling
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary-glass" size="lg" className="group">
                <TrendingUp className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Explore Marketplace
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/30">
              <div className="text-center">
                <div className="text-2xl font-heading font-bold gradient-text">10K+</div>
                <div className="text-sm text-muted-foreground">Active Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-heading font-bold gradient-text">50M+</div>
                <div className="text-sm text-muted-foreground">Crops Traded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-heading font-bold gradient-text">95%</div>
                <div className="text-sm text-muted-foreground">Fair Pricing</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative">
              {/* Main Visual Card */}
              <div className="glass-card p-8 max-w-md glow-primary hover-float">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-metallic-green rounded-lg flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Today's AI Insight</div>
                      <div className="text-lg font-bold text-apple-green">₹2,340/quintal</div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-2">Onion Price Forecast</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      AI predicts 15% price increase in next 3 days. Best time to sell!
                    </p>
                    
                    <div className="bg-gradient-to-r from-metallic-green/20 to-apple-green/20 rounded-lg p-3">
                      <div className="flex items-center justify-between text-xs">
                        <span>Confidence</span>
                        <span className="text-metallic-green font-semibold">94%</span>
                      </div>
                      <div className="w-full bg-background-smoky rounded-full h-2 mt-2">
                        <div className="bg-gradient-to-r from-metallic-green to-apple-green h-2 rounded-full w-[94%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 glass-card rounded-full flex items-center justify-center animate-glow-pulse">
                <TrendingUp className="w-8 h-8 text-metallic-green" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass-card p-3 rounded-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="text-xs text-muted-foreground">Live Market</div>
                <div className="font-bold text-apple-green">₹12.5L traded</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection