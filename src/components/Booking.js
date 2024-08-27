import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Booking = () => {
  const { gameName } = useParams();
  const navigate = useNavigate();
  const [numPersons, setNumPersons] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const games = {
    Football: { image: '/images/football.jpg', price: '$50' },
    Basketball: { image: '/images/basketball.jpg', price: '$40' },
    Tennis: { image: '/images/tennis.jpg', price: '$30' },
  };

  const game = games[gameName];

  const handleBooking = () => {
    alert('Successfully booked');
    navigate('/home');
  };

  return (
    <div className="booking-container">
      {game ? (
        <>
          <img src={game.image} alt={gameName} />
          <h2>{gameName}</h2>
          <p>Price per person: {game.price}</p>
          <label>
            Number of Persons:
            <input
              type="number"
              value={numPersons}
              onChange={(e) => setNumPersons(e.target.value)}
              min="1"
            />
          </label>
          <label>
            Select Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label>
            Select Time:
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </label>
          <button onClick={handleBooking}>Book</button>
        </>
      ) : (
        <p>Game not found</p>
      )}
    </div>
  );
};

export default Booking;
