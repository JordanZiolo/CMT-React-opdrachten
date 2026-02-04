import { useState } from 'react'
import { toast } from 'react-toastify'
import { getUserProfile, saveUserProfile } from '../utils/localStorage'

export default function UserProfile() {
  const storedProfile = getUserProfile()

  const [form, setForm] = useState({
    name: storedProfile?.name || '',
    email: storedProfile?.email || '',
    phone: storedProfile?.phone || ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.phone) {
      toast.error('Alle velden zijn verplicht')
      return
    }
    saveUserProfile(form)
    toast.success('Profiel opgeslagen')
  }

  return (
    <section>
      <h2>Mijn profiel</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Naam"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="Telefoon"
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
        />
        <button>Opslaan</button>
      </form>

      {form.name && form.email && form.phone && (
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Naam:</strong> {form.name}</p>
          <p><strong>Email:</strong> {form.email}</p>
          <p><strong>Telefoon:</strong> {form.phone}</p>
        </div>
      )}
    </section>
  )
}