import { useState } from 'react'
import './app.css'

export default function App() {
  const [showContent, setShowContent] = useState(false)

  return (
    <main className="hero-main">
      <h1 
        className="greeting"
        onClick={() => setShowContent(!showContent)}
      >
        こんにちわ
      </h1>
    </main>
  )
}