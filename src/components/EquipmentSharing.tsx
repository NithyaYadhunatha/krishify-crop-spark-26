import { Button } from '@/components/ui/button'
import { Tractor, Wrench, MapPin, Clock, Star, Calendar } from 'lucide-react'

const EquipmentSharing = () => {
  const equipment = [
    {
      id: 'tractor',
      name: 'John Deere 5050D Tractor',
      owner: 'Rajesh Kumar',
      location: 'Bangalore Rural',
      distance: '2.5 km',
      rating: 4.8,
      price: '₹800/day',
      available: true,
      image: '🚜',
      features: ['55 HP', 'Power Steering', 'PTO Available']
    },
    {
      id: 'harvester',
      name: 'Combine Harvester',
      owner: 'Farming Co-op',
      location: 'Mysore District',
      distance: '5.2 km',
      rating: 4.6,
      price: '₹2,500/day',
      available: true,
      image: '🌾',
      features: ['Multi-crop', 'GPS Enabled', 'High Efficiency']
    },
    {
      id: 'tiller',
      name: 'Power Tiller - Mahindra',
      owner: 'Suresh Patel',
      location: 'Hassan',
      distance: '8.1 km',
      rating: 4.9,
      price: '₹400/day',
      available: false,
      image: '🚛',
      features: ['Rotary Tiller', 'Fuel Efficient', 'Easy Operation']
    }
  ]

  return (
    <section id="equipment" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border border-metallic-green/30 mb-6">
            <Tractor className="w-4 h-4 text-metallic-green mr-2" />
            <span className="text-sm font-medium text-metallic-green">Equipment Sharing Hub</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Share & Rent</span>
            <br />
            <span className="text-foreground">Farm Equipment</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access expensive farming equipment when you need it. 
            Share your own equipment to earn extra income.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {['All Equipment', 'Tractors', 'Harvesters', 'Tillers', 'Sprayers', 'Seeders'].map((filter) => (
            <button 
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'All Equipment' 
                  ? 'bg-metallic-green text-white shadow-glow-primary' 
                  : 'glass-card text-muted-foreground hover:text-foreground hover:border-metallic-green/40'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {equipment.map((item, index) => (
            <div 
              key={item.id}
              className="glass-card p-6 hover-float group transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Equipment Image & Status */}
              <div className="relative mb-4">
                <div className="text-4xl mb-2 text-center">{item.image}</div>
                <div className={`absolute top-0 right-0 px-2 py-1 rounded-full text-xs font-medium ${
                  item.available 
                    ? 'bg-metallic-green/20 text-metallic-green border border-metallic-green/30' 
                    : 'bg-destructive/20 text-destructive border border-destructive/30'
                }`}>
                  {item.available ? 'Available' : 'Busy'}
                </div>
              </div>

              {/* Equipment Info */}
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                {item.name}
              </h3>
              
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                <span>by {item.owner}</span>
                <div className="flex items-center">
                  <Star className="w-3 h-3 text-apple-green mr-1" />
                  <span>{item.rating}</span>
                </div>
              </div>

              {/* Location & Distance */}
              <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-4">
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{item.distance} away</span>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-1 mb-4">
                {item.features.map((feature, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-2 py-1 bg-morning-blue/10 text-morning-blue rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Price & Action */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold text-apple-green">{item.price}</div>
                  <div className="text-xs text-muted-foreground">+ transportation</div>
                </div>
                <Button 
                  variant={item.available ? "hero" : "ghost"} 
                  size="sm"
                  disabled={!item.available}
                  className="group-hover:shadow-glow-primary"
                >
                  {item.available ? (
                    <>
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Now
                    </>
                  ) : (
                    'Unavailable'
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Your Equipment CTA */}
        <div className="glass-card p-8 text-center animate-fade-in-scale">
          <div className="max-w-2xl mx-auto">
            <Wrench className="w-12 h-12 text-metallic-green mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              List Your Equipment
            </h3>
            <p className="text-muted-foreground mb-6">
              Earn extra income by renting out your farming equipment to fellow farmers. 
              Join thousands of equipment owners already earning on Krishify.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Tractor className="w-5 h-5 mr-2" />
                List Equipment
              </Button>
              <Button variant="secondary-glass" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EquipmentSharing