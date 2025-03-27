import { useState } from 'react'
import { Button } from "/components/ui/button"
import { Input } from "/components/ui/input"
import { Label } from "/components/ui/label"
import { Check, X, Search } from "lucide-react"

export default function ValidationForm() {
  const [inputValue, setInputValue] = useState('')
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const correctAnswer = '42'

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputValue === correctAnswer) {
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-sm w-full p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="answer" className="block text-sm font-medium text-gray-700">
              What is the answer to the ultimate question of life, the universe, and everything?
            </Label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <Input
                type="text"
                id="answer"
                value={inputValue}
                onChange={handleInputChange}
                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm"
              />
              <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                <Search className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
        {isCorrect !== null && (
          <div className={mt-4 p-4 rounded-lg ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}}>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {isCorrect ? <Check className="h-5 w-5" aria-hidden="true" /> : <X className="h-5 w-5" aria-hidden="true" />}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">
                  {isCorrect ? 'Correct!' : 'Incorrect. Try again.'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}