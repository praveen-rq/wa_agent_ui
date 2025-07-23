'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ShoppingBag, Key, CheckCircle, AlertCircle } from 'lucide-react'

interface Props {
  data: any
  updateData: (data: any) => void
  onNext: () => void
}

export default function ShopifyCredentialsStep({ data, updateData, onNext }: Props) {
  const [credentials, setCredentials] = useState({
    storeUrl: data.shopifyStoreUrl || '',
    apiKey: data.shopifyApiKey || '',
    apiSecret: data.shopifyApiSecret || ''
  })
  const [isConnecting, setIsConnecting] = useState(false)
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleTestConnection = async () => {
    setIsConnecting(true)
    
    // Simulate API connection test
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Mock successful connection
    setConnectionStatus('success')
    setIsConnecting(false)
    updateData({ shopifyCredentials: credentials })
  }

  const handleNext = () => {
    onNext()
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <ShoppingBag className="h-12 w-12 mx-auto text-purple-600 mb-4" />
        <h3 className="text-lg font-semibold mb-2">Connect Your Shopify Store</h3>
        <p className="text-muted-foreground">
          Provide your Shopify credentials to enable order tracking and product inquiries
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="storeUrl">Shopify Store URL *</Label>
          <Input
            id="storeUrl"
            value={credentials.storeUrl}
            onChange={(e) => setCredentials({...credentials, storeUrl: e.target.value})}
            placeholder="your-store.myshopify.com"
            required
          />
        </div>

        <div>
          <Label htmlFor="apiKey">API Key *</Label>
          <div className="relative">
            <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="apiKey"
              type="password"
              value={credentials.apiKey}
              onChange={(e) => setCredentials({...credentials, apiKey: e.target.value})}
              placeholder="Enter your Shopify API key"
              className="pl-10"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="apiSecret">API Secret *</Label>
          <div className="relative">
            <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="apiSecret"
              type="password"
              value={credentials.apiSecret}
              onChange={(e) => setCredentials({...credentials, apiSecret: e.target.value})}
              placeholder="Enter your Shopify API secret"
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800 mb-2">📘 How to get your Shopify API credentials:</h4>
          <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
            <li>Go to your Shopify Admin → Apps → App and sales channel settings</li>
            <li>Click "Develop apps" → "Create an app"</li>
            <li>Configure Admin API scopes (orders, products, customers)</li>
            <li>Install the app and copy your API credentials</li>
          </ol>
        </div>

        {connectionStatus === 'idle' && (
          <Button 
            onClick={handleTestConnection}
            disabled={isConnecting || !credentials.storeUrl || !credentials.apiKey || !credentials.apiSecret}
            className="w-full"
          >
            {isConnecting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Testing Connection...
              </>
            ) : (
              'Test Connection'
            )}
          </Button>
        )}

        {connectionStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
            <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
            <div>
              <p className="font-semibold text-green-800">✅ Connection Successful!</p>
              <p className="text-sm text-green-700">Found 1,247 products and 3,892 orders</p>
            </div>
          </div>
        )}

        {connectionStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
            <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
            <div>
              <p className="font-semibold text-red-800">Connection Failed</p>
              <p className="text-sm text-red-700">Please check your credentials and try again</p>
            </div>
          </div>
        )}
      </div>

      <div className="pt-4">
        <Button 
          onClick={handleNext}
          disabled={connectionStatus !== 'success'}
          className="w-full md:w-auto"
        >
          Continue to CRM Review
        </Button>
      </div>
    </div>
  )
} 