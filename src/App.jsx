import { useState } from 'react' // Only need useState now
import './App.css'
import './index.css'

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
]

const stepDescriptions = [
  'Master the fundamentals of React including components, state, and props',
  'Prepare your portfolio and apply to positions that match your skill set',
  'Make smart financial decisions with your developer income',
]

function App() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)
  const [isClosing, setIsClosing] = useState(false)

  function handlePrevious() {
    if (step > 1) setStep(step - 1)
  }

  function handleNext() {
    if (step < 3) setStep(step + 1)
  }

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
    }, 300)
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <>
      {!isOpen && (
        <button
          className="open-button"
          onClick={handleOpen}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(139, 92, 246, 0.2)',
            border: '1px solid rgba(139, 92, 246, 0.4)',
            color: '#8b5cf6',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            backdropFilter: 'blur(5px)',
            zIndex: 100,
          }}
        >
          Open Tracker
        </button>
      )}

      {isOpen && (
        <div className={`steps ${isClosing ? 'closing' : ''}`}>
          <div className="github-badge">Step Tracker v2.0</div>
          <h1 className="app-title">Development Journey</h1>

          <button className="close" onClick={handleClose}>
            &times;
          </button>

          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(step - 1) * 50}%` }}
            ></div>
          </div>

          <div className="message">
            <span>{messages[step - 1]}</span>
            <div className="step-info">{stepDescriptions[step - 1]}</div>
          </div>

          <div className="buttons">
            <button onClick={handlePrevious} disabled={step === 1}>
              <span>←</span> Previous
            </button>
            <button onClick={handleNext} disabled={step === 3}>
              Next <span>→</span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
