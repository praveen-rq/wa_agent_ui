'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Building2, Globe, Users } from 'lucide-react'

interface Props {
  data: any
  updateData: (data: any) => void
  onNext: () => void
}

export default function BusinessInfoStep({ data, updateData, onNext }: Props) {
  const [formData, setFormData] = useState({
    businessName: data.businessName || '',
    website: data.website || '',
    country: data.country || '',
    audience: data.audience || '',
    description: data.description || ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateData({ businessInfo: formData })
    onNext()
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Building2 className="h-12 w-12 mx-auto text-blue-600 mb-4" />
        <h3 className="text-lg font-semibold mb-2">Tell us about your business</h3>
        <p className="text-muted-foreground">
          We'll use this information to customize your WhatsApp bot for your specific needs
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="businessName">Business Name *</Label>
            <Input
              id="businessName"
              value={formData.businessName}
              onChange={(e) => setFormData({...formData, businessName: e.target.value})}
              placeholder="e.g., Acme Store"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="website">Website URL *</Label>
            <div className="relative">
              <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="website"
                value={formData.website}
                onChange={(e) => setFormData({...formData, website: e.target.value})}
                placeholder="https://your-store.com"
                className="pl-10"
                required
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="country">Country *</Label>
            <Input
              id="country"
              value={formData.country}
              onChange={(e) => setFormData({...formData, country: e.target.value})}
              placeholder="e.g., United States"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="audience">Target Audience</Label>
            <div className="relative">
              <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="audience"
                value={formData.audience}
                onChange={(e) => setFormData({...formData, audience: e.target.value})}
                placeholder="e.g., Young adults, Fashion enthusiasts"
                className="pl-10"
              />
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="description">Business Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            placeholder="Briefly describe what your business does, what products you sell, etc."
            rows={3}
          />
        </div>

        <div className="pt-4">
          <Button type="submit" className="w-full md:w-auto">
            Continue to FAQ Upload
          </Button>
        </div>
      </form>
    </div>
  )
} 