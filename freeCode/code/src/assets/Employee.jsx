import React, { useState } from 'react';

const Employee = () => {
  const [data, setData] = useState([
    { name: 'hammad', skills: 'web programming', team: 'a', gender: 'male' },
    { name: 'hammad', skills: 'web programming', team: 'b', gender: 'female' },
    { name: 'hammad', skills: 'web programming', team: 'a', gender: 'male' },
    { name: 'hammad', skills: 'web programming', team: 'c', gender: 'female' },
    { name: 'hammad', skills: 'web programming', team: 'b', gender: 'male' },
    { name: 'hammad', skills: 'web programming', team: 'c', gender: 'female' },
  ]);

  const [selectedTeam, setSelectedTeam] = useState('a'); // Set initial value to lowercase 'a'

  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value.toLowerCase()); // Convert to lowercase
  };

  return (
    <>
      <select
        className='form-select form-select-lg container my-5'
        value={selectedTeam}
        onChange={handleTeamChange}
      >
        <option value='a'>A</option>
        <option value='b'>B</option>
        <option value='c'>C</option>
      </select>
      <div className='container d-flex '>
        {data.map((em, index) => {
          if (em.team !== selectedTeam) {
            return null;
          }
          return (
            <div className='card' key={index} style={{ width: '15rem' }}>
              {em.gender === 'male' ? (
                <img src='maleProfile.jpg' className='card-img-top' alt='...' />
              ) : (
                <img src='femaleProfile.jpg' className='card-img-top' alt='...' />
              )}
              <div className='card-body'>
                <h5 className='card-title'>{em.name}</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href='#' className='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Employee;
