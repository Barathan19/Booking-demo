import React, { useState } from 'react';
import Card from './Card';
import SearchBox from './SearchBox';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const games = [
    { name: 'Football', image: '/images/football.jpg', price: '$50' },
    { name: 'Basketball', image: '/images/basketball.jpg', price: '$40' },
    { name: 'Tennis', image: '/images/tennis.jpg', price: '$30' },
  ];

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchBox onSearch={(query) => setSearchQuery(query)} />
      <div className="card-container">
        {filteredGames.map((game, index) => (
          <Card key={index} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Home;
