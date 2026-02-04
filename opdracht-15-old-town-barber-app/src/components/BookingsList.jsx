import { getAppointments } from '../utils/localStorage'

export default function BookingsList() {
  const appointments = getAppointments()

  if (!appointments.length) return <p>Geen afspraken</p>

  const sorted = appointments.sort(
    (a, b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time)
  )

  return (
    <section>
      <h2>Mijn afspraken</h2>
      <ul>
        {sorted.map(a => (
          <li key={a.id}>
            {a.serviceName} – {a.date} {a.time} – €{a.price}
          </li>
        ))}
      </ul>
    </section>
  )
}