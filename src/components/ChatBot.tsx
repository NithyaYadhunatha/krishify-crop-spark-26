import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Bot, Send, Mic, X, Minimize2 } from 'lucide-react'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [message, setMessage] = useState('')

  const sampleMessages = [
    {
      type: 'bot',
      content: "Hello! I'm Krishify AI Assistant. How can I help you with your farming needs today?",
      time: '2 min ago'
    },
    {
      type: 'user',
      content: "What's the current onion price?",
      time: '1 min ago'
    },
    {
      type: 'bot',
      content: "Current onion prices in your area (Bangalore Rural): ₹2,340 per quintal. Based on market analysis, prices are expected to rise by 15% in the next 3 days. Would you like me to help you find buyers?",
      time: 'Just now'
    }
  ]

  const quickActions = [
    "Today's crop prices",
    "Weather forecast",
    "Pest identification",
    "Find buyers",
    "Equipment rental"
  ]

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button 
            variant="ai-chat" 
            size="chat"
            onClick={() => setIsOpen(true)}
            className="animate-glow-pulse"
          >
            <Bot className="w-6 h-6" />
          </Button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 w-80 h-96 z-50 transition-all duration-300 ${
          isMinimized ? 'h-12' : 'h-96'
        }`}>
          <div className="glass-card h-full flex flex-col shadow-2xl glow-primary">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/30">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-metallic-green rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">Krishify AI Assistant</h3>
                  <p className="text-xs text-muted-foreground">Online • Responds in seconds</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-accent/10 rounded transition-colors"
                >
                  <Minimize2 className="w-4 h-4 text-muted-foreground" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-accent/10 rounded transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                  {sampleMessages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        msg.type === 'user' 
                          ? 'bg-metallic-green text-white ml-auto' 
                          : 'bg-background-smoky text-foreground border border-border/30'
                      }`}>
                        <p>{msg.content}</p>
                        <p className={`text-xs mt-1 opacity-70 ${
                          msg.type === 'user' ? 'text-white/70' : 'text-muted-foreground'
                        }`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="px-4 pb-2">
                  <div className="flex flex-wrap gap-1">
                    {quickActions.slice(0, 3).map((action, index) => (
                      <button
                        key={index}
                        className="text-xs px-2 py-1 bg-morning-blue/10 text-morning-blue rounded-full hover:bg-morning-blue/20 transition-colors"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="p-4 border-t border-border/30">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask me about prices, tools, or subsidies..."
                      className="flex-1 px-3 py-2 text-sm bg-background-smoky border border-morning-blue/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-metallic-green"
                      onKeyPress={(e) => e.key === 'Enter' && console.log('Send message:', message)}
                    />
                    <Button variant="ai" size="icon" className="h-8 w-8">
                      <Mic className="w-3 h-3" />
                    </Button>
                    <Button variant="hero" size="icon" className="h-8 w-8">
                      <Send className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default ChatBot