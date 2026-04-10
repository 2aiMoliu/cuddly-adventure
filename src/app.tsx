import { useState } from 'react'
import './app.css'

export default function App() {
  const [showContent, setShowContent] = useState(false)
  const pageUrl = 'https://2aiMoliu.github.io/cuddly-adventure/'

  return (
    <main className="hero-main">
      <h1 
        className="greeting"
        onClick={() => setShowContent(!showContent)}
      >
        こんにちわ
      </h1>
      <img 
        src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(pageUrl)}&size=120x120`}
        alt="QR Code"
        className="qr-code"
      />
    </main>
  )
}