import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ game }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/booking/${game.name}`);
  };

  return (
    <div className="card">
      <img src={game.image} alt={game.name} />
      <h3>{game.name}</h3>
      <p>Price: {game.price}</p>
      <button onClick={handleBookNow}>Book Now</button>
    </div>
  );
};

export default Card;
