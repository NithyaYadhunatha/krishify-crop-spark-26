import { Button } from '@/components/ui/button'
import { BookOpen, Mic, Search, Globe, Award, Users } from 'lucide-react'

const KnowledgeHub = () => {
  const languages = [
    { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ]

  const knowledgeCategories = [
    {
      title: 'Crop Advisory',
      description: 'Expert guidance on crop selection, planting, and harvesting',
      icon: '🌱',
      articles: 245,
      color: 'metallic-green'
    },
    {
      title: 'Weather Insights',
      description: 'Weather forecasts and climate-based farming tips',
      icon: '🌤️',
      articles: 89,
      color: 'morning-blue'
    },
    {
      title: 'Market Analysis',
      description: 'Price trends, demand forecasts, and market opportunities',
      icon: '📈',
      articles: 156,
      color: 'apple-green'
    },
    {
      title: 'Pest Management',
      description: 'Identify and manage pests and diseases effectively',
      icon: '🐛',
      articles: 178,
      color: 'granny-apple'
    }
  ]

  return (
    <section id="knowledge" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border border-metallic-green/30 mb-6">
            <BookOpen className="w-4 h-4 text-metallic-green mr-2" />
            <span className="text-sm font-medium text-metallic-green">Knowledge & Advisory</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            <span className="text-foreground">Learn & Grow with</span>
            <br />
            <span className="gradient-text">Expert Knowledge</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access farming wisdom in your native language. Voice-enabled search 
            and expert advisory to help you make informed decisions.
          </p>
        </div>

        {/* Language Selection */}
        <div className="flex justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="glass-card p-4 rounded-full">
            <div className="flex items-center space-x-1">
              <Globe className="w-5 h-5 text-metallic-green mr-3" />
              {languages.map((lang, index) => (
                <button
                  key={lang.code}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    index === 0 
                      ? 'bg-metallic-green text-white shadow-glow-primary' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
                  }`}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Voice Search */}
        <div className="max-w-2xl mx-auto mb-16 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
          <div className="glass-card p-6 text-center">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
              Voice-Enabled Knowledge Search
            </h3>
            <div className="flex gap-2 mb-4">
              <input 
                type="text"
                placeholder="Ask: 'What is the fair price for onions today?' or press mic to speak..."
                className="flex-1 px-4 py-3 bg-background-smoky border border-morning-blue/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-metallic-green"
              />
              <Button variant="ai" size="icon" className="h-12">
                <Mic className="w-5 h-5" />
              </Button>
              <Button variant="hero" size="icon" className="h-12">
                <Search className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Try: "ಈ ವಾರ ಈರುಳ್ಳಿ ಬೆಲೆ ಏನು?" or "आज प्याज़ का दाम क्या है?"
            </p>
          </div>
        </div>

        {/* Knowledge Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {knowledgeCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-card p-6 hover-float group transition-all duration-300 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {category.description}
              </p>
              <div className={`text-sm font-medium text-${category.color} mb-4`}>
                {category.articles} articles
              </div>
              <Button variant="glass" size="sm" className="w-full group-hover:shadow-glow-primary">
                Explore
              </Button>
            </div>
          ))}
        </div>

        {/* Expert Advisory CTA */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass-card p-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-metallic-green rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">Expert Advisory</h3>
                <p className="text-sm text-muted-foreground">Connect with certified agricultural experts</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Get personalized advice from certified agricultural scientists and experienced farmers. 
              Book one-on-one consultations for your specific farming challenges.
            </p>
            <Button variant="hero" className="w-full">
              Book Expert Consultation
            </Button>
          </div>

          <div className="glass-card p-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-apple-green rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">Community Forum</h3>
                <p className="text-sm text-muted-foreground">Learn from fellow farmers' experiences</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Join discussions, share experiences, and learn from thousands of farmers 
              across India. Ask questions and get answers from the community.
            </p>
            <Button variant="secondary-glass" className="w-full">
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KnowledgeHub