'use client'

import BotWizard from '@/components/wizard/BotWizard'
import { MessageCircle, Zap, Shield, TrendingUp, Users, Bot, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center text-white">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <div className="relative bg-white/20 backdrop-blur-sm rounded-full p-6">
                  <MessageCircle className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>
            
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-6 py-2">
              <Sparkles className="h-4 w-4 mr-2" />
              AI-Powered Customer Support
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              WhatsApp Bot Creator
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Create your AI-powered WhatsApp bot for Shopify in minutes. 
              <br className="hidden md:block" />
              Automate customer support, boost sales, and delight your customers 24/7
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center">
                <Zap className="h-5 w-5 mr-2 text-yellow-300" />
                <span>Setup in 7 Simple Steps</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-green-300" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-purple-300" />
                <span>Boost Sales by 40%</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-300/20 rounded-full blur-xl animate-float"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Our WhatsApp Bot?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by 10,000+ Shopify merchants to automate customer support and increase sales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-8 text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Smart AI Responses</h3>
              <p className="text-gray-600">
                Advanced AI that understands context and provides personalized responses to customer queries
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-100">
            <CardContent className="p-8 text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Instant Order Tracking</h3>
              <p className="text-gray-600">
                Real-time integration with Shopify for instant order status updates and shipping information
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-8 text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">24/7 Customer Support</h3>
              <p className="text-gray-600">
                Never miss a customer inquiry with round-the-clock automated support that feels human
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Wizard Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2">
            Get Started Now
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Create Your Bot in 7 Simple Steps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow our guided wizard to set up your WhatsApp bot in under 10 minutes
          </p>
        </div>
        
        <BotWizard />
      </div>

      {/* Floating Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
