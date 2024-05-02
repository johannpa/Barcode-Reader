import { useRef } from 'react'
import { useSymbologyScanner } from '@use-symbology-scanner/react'
import './App.css'

function App() {
  const ref = useRef(null)

  const handleSymbol = (symbol, matchedSymbologies) => {
      console.log(`Scanned ${symbol}`)
  }
      useSymbologyScanner(handleSymbol, { target: ref })
  return (
    <>
      <h1>Test barcode reader</h1>

      <div ref={ref}>
        </div>
    </>
  )
}

export default App
