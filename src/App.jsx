import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MultiStepForm from './pages/MultiStepForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Multi Step Form</h1>
        <MultiStepForm />
      </div>

    </>
  )
}

export default App
