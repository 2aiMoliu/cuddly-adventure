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
        src={`https://goqr.me/api/qrcode/?size=120x120&data=${encodeURIComponent(pageUrl)}`}
        alt="QR Code"
        className="qr-code"
      />
    </main>
  )
}