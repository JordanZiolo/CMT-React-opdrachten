import { useState } from 'react'
import { toast } from 'react-toastify'
import { v4 as uuid } from 'uuid'
import { services } from './ShopInfo'
import { getAppointments, saveAppointments, getUserProfile } from '../utils/localStorage'

export default function BookingForm() {
  const user = getUserProfile()

  // Bestaande profielgegevens als default, maar bewerkbaar
  const [name, setName] = useState(user?.name || '')
  const [email, setEmail] = useState(user?.email || '')
  const [phone, setPhone] = useState(user?.phone || '')
  const [service, setService] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (!name || !email || !phone || !service || !date || !time) {
      toast.error('Vul alles in')
      return
    }

    const selected = services.find(s => s.name === service)
   
    const appointment = {
      id: uuid(),
      customerName: name,
      customerEmail: email,
      customerPhone: phone,
      serviceName: selected.name,
      price: selected.price,
      duration: selected.duration,
      date,
      time,
      reminded: false
    }

    const appointments = getAppointments()
    saveAppointments([...appointments, appointment])

    toast.success('Afspraak geboekt')

    // reset formulier
    setService('')
    setDate('')
    setTime('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Afspraak boeken</h2>

      {/* Nu bewerkbaar */}
      <input
        placeholder="Naam"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        placeholder="Telefoon"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />

      <select value={service} onChange={e => setService(e.target.value)}>
        <option value="">Selecteer service</option>
        {services.map(s => <option key={s.name}>{s.name}</option>)}
      </select>

      <input
        type="date"
        min={new Date().toISOString().split('T')[0]}
        value={date}
        onChange={e => setDate(e.target.value)}
      />

      <select value={time} onChange={e => setTime(e.target.value)}>
        <option value="">Tijd</option>
        {['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'].map(t => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <button>Boeken</button>
    </form>
  )
}