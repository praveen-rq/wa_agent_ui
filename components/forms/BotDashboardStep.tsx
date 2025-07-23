'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Phone, QrCode, MessageSquare, TrendingUp, 
  Users, ShoppingCart, Copy, ExternalLink 
} from 'lucide-react'

interface Props {
  data: any
  updateData: (data: any) => void
  onNext: () => void
}

export default function BotDashboardStep({ data }: Props) {
  const phoneNumber = data.phoneNumber || '+1 (555) 123-4567'
  const businessName = data.businessInfo?.businessName || 'Your Business'

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(phoneNumber)
    // You could add a toast notification here
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <MessageSquare className="h-12 w-12 text-green-600 mr-3" />
          <div className="text-left">
            <h3 className="text-2xl font-semibold">🎉 Welcome to Your Bot Dashboard!</h3>
            <p className="text-muted-foreground">Your WhatsApp bot is live and ready to help customers</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bot Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              Bot Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Phone Number</label>
              <div className="flex items-center mt-1">
                <span className="text-lg font-mono mr-2">{phoneNumber}</span>
                <Button size="sm" variant="outline" onClick={copyPhoneNumber}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-muted-foreground">Business Name</label>
              <p className="text-lg mt-1">{businessName}</p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-muted-foreground">Status</label>
              <div className="mt-1">
                <Badge className="bg-green-600">🟢 Active</Badge>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground">Plan</label>
              <p className="text-lg mt-1">{data.pricing?.name || 'Medium'} - {data.pricing?.price || '₹6,499'}/month</p>
            </div>
          </CardContent>
        </Card>

        {/* QR Code */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <QrCode className="h-5 w-5 mr-2" />
              WhatsApp QR Code
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300 mb-4">
              {/* Mock QR Code */}
              <div className="w-32 h-32 mx-auto bg-black flex items-center justify-center text-white text-xs">
                QR CODE
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Scan this QR code to start chatting with your bot on WhatsApp
            </p>
            <Button variant="outline" className="w-full">
              <ExternalLink className="h-4 w-4 mr-2" />
              Open in WhatsApp Web
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <MessageSquare className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="text-2xl font-bold">0</p>
                <p className="text-sm text-muted-foreground">Messages Today</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <p className="text-2xl font-bold">0</p>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <p className="text-2xl font-bold">0%</p>
                <p className="text-sm text-muted-foreground">Response Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>🚀 Next Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button className="h-auto p-4 flex-col">
              <MessageSquare className="h-6 w-6 mb-2" />
              <span className="font-medium">Test Your Bot</span>
              <span className="text-xs text-muted-foreground">Send a test message</span>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex-col">
              <Users className="h-6 w-6 mb-2" />
              <span className="font-medium">Invite Team</span>
              <span className="text-xs text-muted-foreground">Add team members</span>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex-col">
              <TrendingUp className="h-6 w-6 mb-2" />
              <span className="font-medium">View Analytics</span>
              <span className="text-xs text-muted-foreground">See detailed metrics</span>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex-col">
              <ShoppingCart className="h-6 w-6 mb-2" />
              <span className="font-medium">Customize Responses</span>
              <span className="text-xs text-muted-foreground">Edit bot messages</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="text-center pt-4">
        <p className="text-muted-foreground">
          🎉 Congratulations! Your WhatsApp bot is now ready to help your customers 24/7
        </p>
      </div>
    </div>
  )
} 