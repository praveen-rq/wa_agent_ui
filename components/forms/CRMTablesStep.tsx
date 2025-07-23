'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Database, Table, Users, Package, ShoppingCart } from 'lucide-react'

interface Props {
  data: any
  updateData: (data: any) => void
  onNext: () => void
}

const crmTables = [
  {
    id: 'customers',
    name: 'Customers',
    icon: Users,
    description: 'Customer profiles, contact info, purchase history',
    columns: ['ID', 'Name', 'Email', 'Phone', 'Orders Count', 'Total Spent'],
    recordCount: 15847,
    enabled: true
  },
  {
    id: 'products',
    name: 'Products',
    icon: Package,
    description: 'Product catalog, descriptions, prices, inventory',
    columns: ['ID', 'Title', 'Price', 'SKU', 'Inventory', 'Status'],
    recordCount: 1247,
    enabled: true
  },
  {
    id: 'orders',
    name: 'Orders',
    icon: ShoppingCart,
    description: 'Order details, status, shipping information',
    columns: ['ID', 'Customer', 'Status', 'Total', 'Created Date', 'Fulfilled'],
    recordCount: 3892,
    enabled: true
  },
  {
    id: 'collections',
    name: 'Collections',
    icon: Database,
    description: 'Product categories and collections',
    columns: ['ID', 'Title', 'Handle', 'Products Count', 'Published'],
    recordCount: 23,
    enabled: false
  }
]

export default function CRMTablesStep({ data, updateData, onNext }: Props) {
  const [selectedTables, setSelectedTables] = useState<Record<string, boolean>>(
    crmTables.reduce((acc, table) => ({
      ...acc,
      [table.id]: table.enabled
    }), {} as Record<string, boolean>)
  )

  const handleTableToggle = (tableId: string) => {
    setSelectedTables(prev => ({
      ...prev,
      [tableId]: !prev[tableId]
    }))
  }

  const handleNext = () => {
    updateData({ selectedCrmTables: selectedTables })
    onNext()
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Table className="h-12 w-12 mx-auto text-orange-600 mb-4" />
        <h3 className="text-lg font-semibold mb-2">Review Your Shopify Data</h3>
        <p className="text-muted-foreground">
          Select which data tables your WhatsApp bot should have access to for customer inquiries
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {crmTables.map((table) => {
          const IconComponent = table.icon
          return (
            <Card key={table.id} className={`cursor-pointer transition-all ${
              selectedTables[table.id] ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:shadow-md'
            }`}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                    <div>
                      <CardTitle className="text-lg">{table.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {table.recordCount.toLocaleString()} records
                      </p>
                    </div>
                  </div>
                  <Checkbox
                    checked={selectedTables[table.id]}
                    onCheckedChange={() => handleTableToggle(table.id)}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  {table.description}
                </p>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-gray-700">Available Columns:</p>
                  <div className="flex flex-wrap gap-1">
                    {table.columns.map((column) => (
                      <span
                        key={column}
                        className="px-2 py-1 bg-gray-100 text-xs rounded"
                      >
                        {column}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 mb-2">🤖 What your bot can do with this data:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• <strong>Customers:</strong> Look up customer orders and account information</li>
          <li>• <strong>Products:</strong> Answer questions about prices, availability, and specifications</li>
          <li>• <strong>Orders:</strong> Track order status, shipping details, and delivery updates</li>
          <li>• <strong>Collections:</strong> Help customers browse product categories</li>
        </ul>
      </div>

      <div className="pt-4">
        <Button onClick={handleNext} className="w-full md:w-auto">
          Continue to Tier Selection
        </Button>
      </div>
    </div>
  )
} 