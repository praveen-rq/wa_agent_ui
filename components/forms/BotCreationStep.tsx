'use client'

import { useState, useEffect } from 'react'
import { Progress } from '@/components/ui/progress'
import { Card, CardContent } from '@/components/ui/card'
import { Bot, CheckCircle, Loader } from 'lucide-react'

interface Props {
  data: any
  updateData: (data: any) => void
  onNext: () => void
}

const creationSteps = [
  { id: 1, title: 'Setting up WhatsApp Business API', duration: 3 },
  { id: 2, title: 'Training AI with your FAQ data', duration: 4 },
  { id: 3, title: 'Connecting Shopify integration', duration: 2 },
  { id: 4, title: 'Configuring workflows and responses', duration: 3 },
  { id: 5, title: 'Testing bot functionality', duration: 2 },
  { id: 6, title: 'Deploying to production', duration: 1 }
]

export default function BotCreationStep({ data, updateData, onNext }: Props) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (isComplete) return

    const totalDuration = creationSteps.reduce((sum, step) => sum + step.duration, 0)
    let elapsed = 0

    const interval = setInterval(() => {
      elapsed += 0.1
      const newProgress = Math.min((elapsed / totalDuration) * 100, 100)
      setProgress(newProgress)

      // Update current step
      let cumulativeDuration = 0
      for (let i = 0; i < creationSteps.length; i++) {
        cumulativeDuration += creationSteps[i].duration
        if (elapsed <= cumulativeDuration) {
          setCurrentStep(i)
          break
        }
      }

      if (newProgress >= 100) {
        setIsComplete(true)
        updateData({
          botCreated: true,
          phoneNumber: '+1 (555) 123-4567',
          botId: 'bot_' + Math.random().toString(36).substr(2, 9)
        })
        setTimeout(() => {
          onNext()
        }, 2000)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [isComplete, onNext, updateData])

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Bot className="h-16 w-16 mx-auto text-blue-600 mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Creating Your WhatsApp Bot</h3>
        <p className="text-muted-foreground">
          Please wait while we set up your AI-powered WhatsApp bot...
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {creationSteps.map((step, index) => (
          <div
            key={step.id}
            className={`flex items-center p-4 rounded-lg border ${
              index < currentStep
                ? 'bg-green-50 border-green-200'
                : index === currentStep
                ? 'bg-blue-50 border-blue-200'
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            <div className="mr-4">
              {index < currentStep ? (
                <CheckCircle className="h-6 w-6 text-green-600" />
              ) : index === currentStep ? (
                <Loader className="h-6 w-6 text-blue-600 animate-spin" />
              ) : (
                <div className="h-6 w-6 rounded-full border-2 border-gray-300" />
              )}
            </div>
            <div className="flex-1">
              <p className={`font-medium ${
                index < currentStep
                  ? 'text-green-800'
                  : index === currentStep
                  ? 'text-blue-800'
                  : 'text-gray-600'
              }`}>
                {step.title}
              </p>
            </div>
            {index < currentStep && (
              <CheckCircle className="h-5 w-5 text-green-600" />
            )}
          </div>
        ))}
      </div>

      {isComplete && (
        <div className="text-center p-6 bg-green-50 border border-green-200 rounded-lg">
          <CheckCircle className="h-12 w-12 mx-auto text-green-600 mb-4" />
          <h4 className="text-lg font-semibold text-green-800 mb-2">
            🎉 Your Bot is Ready!
          </h4>
          <p className="text-green-700">
            Redirecting to your bot dashboard...
          </p>
        </div>
      )}
    </div>
  )
} 