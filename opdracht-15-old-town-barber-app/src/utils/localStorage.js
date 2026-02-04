export const getUserProfile = () =>
  JSON.parse(localStorage.getItem('userProfile'))

export const saveUserProfile = profile =>
  localStorage.setItem('userProfile', JSON.stringify(profile))

export const getAppointments = () =>
  JSON.parse(localStorage.getItem('appointments')) || []

export const saveAppointments = appointments =>
  localStorage.setItem('appointments', JSON.stringify(appointments))