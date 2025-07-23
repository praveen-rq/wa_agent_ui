'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Upload, FileText, CheckCircle } from 'lucide-react'

interface Props {
  data: any
  updateData: (data: any) => void
  onNext: () => void
}

export default function FAQUploadStep({ data, updateData, onNext }: Props) {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadedFile(file)
      setIsProcessing(true)
      
      // Simulate processing
      setTimeout(() => {
        setIsProcessing(false)
        updateData({ faqFile: file.name })
      }, 2000)
    }
  }

  const handleNext = () => {
    onNext()
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <FileText className="h-12 w-12 mx-auto text-green-600 mb-4" />
        <h3 className="text-lg font-semibold mb-2">Upload Your FAQ Document</h3>
        <p className="text-muted-foreground">
          Upload your FAQ, return policy, or any document containing common questions and answers
        </p>
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        {!uploadedFile ? (
          <div>
            <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <div className="space-y-2">
              <p className="text-lg font-medium">Drop your file here or click to browse</p>
              <p className="text-sm text-muted-foreground">
                Supports PDF, DOCX, TXT files (Max 10MB)
              </p>
            </div>
            <input
              type="file"
              accept=".pdf,.docx,.txt"
              onChange={handleFileUpload}
              className="hidden"
              id="faq-upload"
            />
            <Button asChild className="mt-4">
              <label htmlFor="faq-upload" className="cursor-pointer">
                Choose File
              </label>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {isProcessing ? (
              <div>
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-lg font-medium">Processing your FAQ document...</p>
                <p className="text-sm text-muted-foreground">
                  We're extracting Q&A pairs from your document
                </p>
              </div>
            ) : (
              <div>
                <CheckCircle className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <p className="text-lg font-medium text-green-600">
                  ✅ {uploadedFile.name} uploaded successfully!
                </p>
                <p className="text-sm text-muted-foreground">
                  Found 15 Q&A pairs that will help your bot answer customer questions
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {uploadedFile && !isProcessing && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 mb-2">Sample Extracted Q&A:</h4>
          <div className="space-y-2 text-sm">
            <div>
              <strong>Q:</strong> What is your return policy?
            </div>
            <div>
              <strong>A:</strong> We offer 30-day returns on all items in original condition...
            </div>
          </div>
        </div>
      )}

      <div className="pt-4">
        <Button 
          onClick={handleNext} 
          disabled={!uploadedFile || isProcessing}
          className="w-full md:w-auto"
        >
          Continue to Shopify Integration
        </Button>
      </div>
    </div>
  )
} 