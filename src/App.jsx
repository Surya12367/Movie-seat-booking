import React from 'react'
import MovieSeatBooking from './components/MovieSeatBooking'

const App = () => {
  return (
    <MovieSeatBooking
    layout={{
      rows:8,
      seatsPerRow:12,
      aislePosition:5,
    }}
    
    seatTypes={{
      regular: {name: "Regular", price: 150, rows: [0,1,2]},
      premium: {name: "Premium", price: 250, rows: [3,4,5]},
      vip: {name: "VIP", price: 350, rows: [6,7]},
    }}
    bookedSeats={["C2", "C4"]}
    onBookingComplete={(booking) => console.log(booking)
    }/>
  )
}

export default App