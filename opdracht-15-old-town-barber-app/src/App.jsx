import { ToastContainer } from 'react-toastify'
import UserProfile from './components/UserProfile'
import ShopInfo from './components/ShopInfo'
import BookingForm from './components/BookingForm'
import BookingsList from './components/BookingsList'
import { getUserProfile, getAppointments, saveAppointments } from './utils/localStorage'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

export default function App() {
  const user = getUserProfile()

  // 15 minuten reminder
  useEffect(() => {
    const interval = setInterval(() => {
      const appointments = getAppointments()
      const now = new Date()

      const updated = appointments.map(a => {
        const time = new Date(`${a.date} ${a.time}`)
        const diff = (time - now) / 60000

        if (diff > 0 && diff <= 15 && !a.reminded) {
          toast.info(`Reminder: ${a.serviceName} om ${a.time}`)
          return { ...a, reminded: true }
        }
        return a
      })

      saveAppointments(updated)
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app">
      <h1>Barber Booking</h1>

      {!user && <UserProfile />}

      {user && (
        <>
          <ShopInfo />
          <BookingForm />
          <BookingsList />
        </>
      )}

      <ToastContainer />
    </div>
  )
}