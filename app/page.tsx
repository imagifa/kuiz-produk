// app/page.tsx
import { supabase } from '@/lib/supabase'

export default async function HomePage() {
  // Ambil data kuis dari tabel 'quizzes' di Supabase
  const { data: quizzes } = await supabase.from('quizzes').select('*')

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Portal Kuis Karyawan</h1>
      <p>Pilih kuis yang ingin Anda kerjakan:</p>
      
      <div style={{ display: 'grid', gap: '1rem', marginTop: '2rem' }}>
        {quizzes?.map((quiz) => (
          <div key={quiz.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <h2>{quiz.title}</h2>
            <p>Durasi: {quiz.duration_minutes} Menit</p>
            <button style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
              Mulai Kerjakan
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}