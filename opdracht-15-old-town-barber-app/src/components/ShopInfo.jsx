export const services = [
  { name: 'Haircut', price: 25, duration: 30 },
  { name: 'Beard Trim', price: 15, duration: 20 },
  { name: 'Hair & Beard', price: 35, duration: 45 }
]

// Openingstijden per dag
const openingHours = {
  maandag: '09:00 - 18:00',
  dinsdag: '09:00 - 18:00',
  woensdag: '09:00 - 18:00',
  donderdag: '09:00 - 18:00',
  vrijdag: '09:00 - 18:00',
  zaterdag: '09:00 - 18:00',
  zondag: 'Gesloten'
}

export default function ShopInfo() {
  return (
    <section>
      <h2>Old School Barber</h2>
      <h3>Openingstijden:</h3>
      <ul>
        {Object.entries(openingHours).map(([day, hours]) => (
          <li key={day}>
            {day.charAt(0).toUpperCase() + day.slice(1)}: {hours}
          </li>
        ))}
      </ul>

      <h3>Diensten:</h3>
      <ul>
        {services.map(service => (
          <li key={service.name}>
            {service.name} – €{service.price} ({service.duration} min)
          </li>
        ))}
      </ul>
    </section>
  )
}