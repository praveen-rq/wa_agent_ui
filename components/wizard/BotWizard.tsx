'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react'

// Import step components (we'll create these next)
import BusinessInfoStep from '@/components/forms/BusinessInfoStep'
import FAQUploadStep from '@/components/forms/FAQUploadStep'
import ShopifyCredentialsStep from '@/components/forms/ShopifyCredentialsStep'
import CRMTablesStep from '@/components/forms/CRMTablesStep'
import TierSelectionStep from '@/components/forms/TierSelectionStep'
import BotCreationStep from '@/components/forms/BotCreationStep'
import BotDashboardStep from '@/components/forms/BotDashboardStep'

const steps = [
  { id: 1, title: 'Business Overview', component: BusinessInfoStep },
  { id: 2, title: 'FAQ Upload', component: FAQUploadStep },
  { id: 3, title: 'Shopify Integration', component: ShopifyCredentialsStep },
  { id: 4, title: 'CRM Data Review', component: CRMTablesStep },
  { id: 5, title: 'Tier Selection', component: TierSelectionStep },
  { id: 6, title: 'Bot Creation', component: BotCreationStep },
  { id: 7, title: 'Bot Dashboard', component: BotDashboardStep },
]

export default function BotWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())
  const [wizardData, setWizardData] = useState({})

  const progress = (currentStep / steps.length) * 100
  const CurrentStepComponent = steps[currentStep - 1].component

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCompletedSteps(prev => new Set([...prev, currentStep]))
      setCurrentStep(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleStepClick = (stepId: number) => {
    if (stepId <= currentStep || completedSteps.has(stepId)) {
      setCurrentStep(stepId)
    }
  }

  const updateWizardData = (stepData: any) => {
    setWizardData(prev => ({ ...prev, ...stepData }))
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Progress Header */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <CardTitle className="text-2xl">Step {currentStep} of {steps.length}</CardTitle>
            <Badge variant="outline">{Math.round(progress)}% Complete</Badge>
          </div>
          <Progress value={progress} className="mb-4" />
          
          {/* Step Navigation */}
          <div className="flex flex-wrap gap-2">
            {steps.map((step) => (
              <Button
                key={step.id}
                variant={currentStep === step.id ? "default" : completedSteps.has(step.id) ? "secondary" : "outline"}
                size="sm"
                onClick={() => handleStepClick(step.id)}
                disabled={step.id > currentStep && !completedSteps.has(step.id)}
                className="flex items-center gap-2"
              >
                {completedSteps.has(step.id) && step.id !== currentStep && (
                  <CheckCircle className="h-4 w-4" />
                )}
                <span className="hidden sm:inline">{step.id}.</span>
                <span className="truncate">{step.title}</span>
              </Button>
            ))}
          </div>
        </CardHeader>
      </Card>

      {/* Current Step Content */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{steps[currentStep - 1].title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CurrentStepComponent 
            data={wizardData} 
            updateData={updateWizardData}
            onNext={handleNext}
          />
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => console.log('Save Draft', wizardData)}>
            Save Draft
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={currentStep === steps.length}
            className="flex items-center gap-2"
          >
            {currentStep === steps.length ? 'Complete' : 'Next'}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
} 