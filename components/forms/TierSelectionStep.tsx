'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Zap, Target, Crown, Check } from 'lucide-react'

interface Props {
  data: any
  updateData: (data: any) => void
  onNext: () => void
}

const tiers = [
  {
    id: 'small',
    name: 'Small',
    icon: Target,
    price: '₹2,399',
    period: '/month',
    limit: '< 1,000 orders/month',
    recommended: false,
    features: [
      'WhatsApp Business API',
      'Basic FAQ responses',
      'Order tracking',
      '5 custom workflows',
      'Email support'
    ]
  },
  {
    id: 'medium',
    name: 'Medium',
    icon: Zap,
    price: '₹6,499',
    period: '/month',
    limit: '1,000 - 5,000 orders/month',
    recommended: true,
    features: [
      'Everything in Small',
      'Advanced AI responses',
      'Product recommendations',
      'Unlimited workflows',
      'Analytics dashboard',
      'Priority support'
    ]
  },
  {
    id: 'large',
    name: 'Large',
    icon: Crown,
    price: '₹16,499',
    period: '/month',
    limit: '5,000+ orders/month',
    recommended: false,
    features: [
      'Everything in Medium',
      'Custom AI training',
      'Multi-language support',
      'API integrations',
      'Dedicated account manager',
      '24/7 phone support'
    ]
  }
]

export default function TierSelectionStep({ data, updateData, onNext }: Props) {
  const [selectedTier, setSelectedTier] = useState(data.selectedTier || 'medium')

  const handleTierSelect = (tierId: string) => {
    setSelectedTier(tierId)
  }

  const handleNext = () => {
    updateData({ selectedTier, pricing: tiers.find(t => t.id === selectedTier) })
    onNext()
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Crown className="h-12 w-12 mx-auto text-yellow-600 mb-4" />
        <h3 className="text-lg font-semibold mb-2">Choose Your Plan</h3>
        <p className="text-muted-foreground">
          Select the plan that best fits your business volume and needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => {
          const IconComponent = tier.icon
          return (
            <Card
              key={tier.id}
              className={`cursor-pointer transition-all relative ${
                selectedTier === tier.id
                  ? 'ring-2 ring-blue-500 scale-105'
                  : 'hover:shadow-lg'
              } ${tier.recommended ? 'border-blue-500' : ''}`}
              onClick={() => handleTierSelect(tier.id)}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-2">
                <IconComponent className={`h-12 w-12 mx-auto mb-4 ${
                  tier.id === 'small' ? 'text-green-600' :
                  tier.id === 'medium' ? 'text-blue-600' : 'text-purple-600'
                }`} />
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <div className="space-y-1">
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground ml-1">{tier.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{tier.limit}</p>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 mb-2">💡 Need help choosing?</h4>
        <div className="text-sm text-blue-700 space-y-1">
          <p>• <strong>Small:</strong> Perfect for new or seasonal businesses</p>
          <p>• <strong>Medium:</strong> Great for growing businesses with regular sales</p>
          <p>• <strong>Large:</strong> Ideal for established stores with high volume</p>
        </div>
      </div>

      <div className="pt-4">
        <Button onClick={handleNext} className="w-full md:w-auto">
          Create My Bot - {tiers.find(t => t.id === selectedTier)?.price}/month
        </Button>
      </div>
    </div>
  )
} 