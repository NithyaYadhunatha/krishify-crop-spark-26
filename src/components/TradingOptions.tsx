import { Button } from '@/components/ui/button'
import { Handshake, ShoppingCart, TrendingUp, Users, Globe, Clock } from 'lucide-react'

const TradingOptions = () => {
  const tradingModes = [
    {
      id: 'wholesale',
      title: 'Wholesale Mode',
      subtitle: 'Bulk Trading & Bidding',
      icon: Handshake,
      color: 'metallic-green',
      features: [
        'Real-time bidding system',
        'Bulk quantity trading',
        'Verified buyer network',
        'Transparent pricing'
      ],
      stats: {
        label: 'Average Savings',
        value: '18%',
        description: 'vs traditional markets'
      }
    },
    {
      id: 'retail',
      title: 'Direct-to-Customer',
      subtitle: 'Premium Retail Store',
      icon: ShoppingCart,
      color: 'apple-green',
      features: [
        'Direct consumer access',
        'Premium pricing',
        'Brand building tools',
        'Quality certification'
      ],
      stats: {
        label: 'Price Premium',
        value: '35%',
        description: 'higher margins'
      }
    }
  ]

  return (
    <section id="marketplace" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border border-metallic-green/30 mb-6">
            <Globe className="w-4 h-4 text-metallic-green mr-2" />
            <span className="text-sm font-medium text-metallic-green">Dual Trading Platform</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Choose Your</span>
            <br />
            <span className="text-foreground">Selling Strategy</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're selling in bulk or directly to consumers, 
            Krishify's AI optimizes your pricing and connects you with the right buyers.
          </p>
        </div>

        {/* Trading Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {tradingModes.map((mode, index) => (
            <div 
              key={mode.id}
              className="glass-card p-8 hover-float group transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 bg-${mode.color} rounded-xl flex items-center justify-center glow-primary`}>
                    <mode.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                      {mode.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {mode.subtitle}
                    </p>
                  </div>
                </div>
                
                {/* Stats Badge */}
                <div className="text-right">
                  <div className={`text-2xl font-bold text-${mode.color}`}>
                    {mode.stats.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {mode.stats.label}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {mode.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 bg-${mode.color} rounded-full`}></div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <Button 
                variant={mode.id === 'wholesale' ? 'hero' : 'secondary-glass'} 
                className="w-full group-hover:shadow-glow-primary transition-all duration-300"
              >
                <span>Start {mode.title.split(' ')[0]} Trading</span>
                <TrendingUp className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              
              <p className="text-xs text-muted-foreground text-center mt-3">
                {mode.stats.description}
              </p>
            </div>
          ))}
        </div>

        {/* Live Stats */}
        <div className="glass-card p-6 animate-fade-in-scale">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-metallic-green rounded-full animate-pulse"></div>
              <span className="font-medium text-foreground">Live Trading Activity</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-apple-green" />
                <span className="text-muted-foreground">1,247 active traders</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-morning-blue" />
                <span className="text-muted-foreground">₹2.3Cr traded today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TradingOptions