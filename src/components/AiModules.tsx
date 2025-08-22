import { Button } from '@/components/ui/button'
import { Bot, TrendingUp, MessageCircle, BarChart3, Lightbulb, Mic } from 'lucide-react'

const AiModules = () => {
  const aiFeatures = [
    {
      id: 'price-recommender',
      title: 'Smart Price Recommender',
      description: 'AI analyzes market trends to suggest optimal pricing for your crops',
      icon: TrendingUp,
      color: 'metallic-green',
      stats: {
        accuracy: '94%',
        label: 'Price Accuracy'
      }
    },
    {
      id: 'demand-forecast',
      title: 'Demand Forecast',
      description: 'Predict market demand up to 30 days ahead with AI insights',
      icon: BarChart3,
      color: 'apple-green',
      stats: {
        accuracy: '89%',
        label: 'Forecast Accuracy'
      }
    },
    {
      id: 'farmer-assistant',
      title: 'Krishify AI Assistant',
      description: 'Voice & text-based farming advisor available 24/7',
      icon: Bot,
      color: 'morning-blue',
      stats: {
        accuracy: '96%',
        label: 'Query Resolution'
      }
    }
  ]

  return (
    <section id="ai" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border border-metallic-green/30 mb-6">
            <Bot className="w-4 h-4 text-metallic-green mr-2" />
            <span className="text-sm font-medium text-metallic-green">AI-Powered Intelligence</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            <span className="text-foreground">Smart Farming with</span>
            <br />
            <span className="gradient-text">Krishify AI</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our advanced AI algorithms help farmers make data-driven decisions, 
            optimize pricing, and maximize profits through intelligent insights.
          </p>
        </div>

        {/* AI Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {aiFeatures.map((feature, index) => (
            <div 
              key={feature.id}
              className="glass-card p-6 hover-float group transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon & Stats */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-${feature.color} rounded-lg flex items-center justify-center glow-primary group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className={`text-lg font-bold text-${feature.color}`}>
                    {feature.stats.accuracy}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {feature.stats.label}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {feature.description}
              </p>

              {/* Action Button */}
              <Button variant="glass" size="sm" className="w-full group-hover:shadow-glow-primary">
                Try Now
                <Lightbulb className="w-4 h-4 ml-2 group-hover:text-metallic-green transition-colors" />
              </Button>
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="glass-card p-8 glow-primary animate-fade-in-scale">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Demo Interface */}
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Try Krishify AI Assistant
              </h3>
              <p className="text-muted-foreground mb-6">
                Ask anything about farming, pricing, weather, or crop management.
              </p>
              
              <div className="space-y-4">
                {/* Sample Questions */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground/80">Popular Questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "What's the onion price today?",
                      "Best time to plant wheat?", 
                      "Weather forecast for farming?"
                    ].map((question, idx) => (
                      <button
                        key={idx}
                        className="text-xs px-3 py-1 bg-morning-blue/10 text-morning-blue rounded-full hover:bg-morning-blue/20 transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="flex gap-2">
                  <input 
                    type="text"
                    placeholder="Ask Krishify AI anything..."
                    className="flex-1 px-4 py-2 bg-background-smoky border border-morning-blue/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-metallic-green"
                  />
                  <Button variant="ai" size="icon">
                    <Mic className="w-4 h-4" />
                  </Button>
                  <Button variant="hero" size="icon">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* AI Response Preview */}
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-metallic-green/5 to-apple-green/5 rounded-xl p-6 border border-metallic-green/20">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-metallic-green rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-metallic-green mb-1">Krishify AI</div>
                    <div className="text-sm text-foreground/90">
                      Based on current market analysis, onions are trading at ₹2,340 per quintal 
                      in your region. The AI predicts a 15% increase in the next 3 days due to 
                      reduced supply from neighboring states. 
                      <span className="text-metallic-green font-medium">This is an optimal time to sell!</span>
                    </div>
                    <div className="mt-3 flex items-center text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1 mr-4">
                        <div className="w-2 h-2 bg-metallic-green rounded-full"></div>
                        <span>94% confidence</span>
                      </div>
                      <span>Updated 2 minutes ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AiModules