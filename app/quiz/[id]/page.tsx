'use client'
import { useState } from 'react'
import QuizTimer from '@/components/QuizTimer'

export default function QuizPage({ params }: { params: { id: string } }) {
  const [status, setStatus] = useState("Sedang Mengerjakan")

  const handleTimeUp = () => {
    setStatus("WAKTU HABIS!")
    alert("Waktu sudah habis, kuis otomatis dikunci.")
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Kuis ID: {params.id}</h1>
      
      {/* Kita set 0.1 menit (6 detik) saja untuk testing cepat */}
      <div style={{ background: '#eee', padding: '10px', marginBottom: '20px' }}>
        <QuizTimer duration={0.1} onTimeUp={handleTimeUp} />
      </div>

      <div style={{ 
        padding: '20px', 
        border: '2px solid', 
        borderColor: status === "WAKTU HABIS!" ? 'red' : 'green' 
      }}>
        <p>Status Kuis: <strong>{status}</strong></p>
        
        {status !== "WAKTU HABIS!" ? (
          <div>
            <p>1. Apakah timer ini berjalan?</p>
            <button onClick={() => alert("Jawaban disimpan")}>Klik Jawaban</button>
          </div>
        ) : (
          <p style={{ color: 'red' }}>Input sudah tidak bisa ditekan karena waktu habis.</p>
        )}
      </div>
    </div>
  )
}