'use client'
import { useState, useEffect } from 'react'

export default function QuizTimer({ duration, onTimeUp }: { duration: number, onTimeUp: () => void }) {
  const [timeLeft, setTimeLeft] = useState(duration * 60)

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp()
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <div style={{ fontWeight: 'bold', color: timeLeft < 60 ? 'red' : 'black' }}>
      Sisa Waktu: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  )
}