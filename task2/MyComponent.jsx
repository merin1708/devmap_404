import { useState } from 'react'
import { Button } from "/components/ui/button"
import { Input } from "/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "/components/ui/card"

export default function TextDisplayApp() {
  const [inputText, setInputText] = useState('')
  const [displayText, setDisplayText] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  const handleButtonClick = () => {
    setDisplayText(inputText)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Text Display App</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="text"
            placeholder="Enter some text"
            value={inputText}
            onChange={handleInputChange}
            className="w-full"
          />
          <Button onClick={handleButtonClick} className="w-full">
            Display Text
          </Button>
          {displayText && (
            <div className="bg-white p-4 rounded shadow-md">
              <p className="text-lg font-semibold">You entered:</p>
              <p className="text-gray-700">{displayText}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
