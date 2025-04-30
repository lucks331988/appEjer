import React, { useState } from 'react';
import { setStorage } from '../../utilities/storage';

const TeamSetup = ({ onStart }) => {
  const [teamSize, setTeamSize] = useState(1);
  const [teamNames, setTeamNames] = useState(['']);

  const handleSizeChange = (e) => {
    const size = parseInt(e.target.value);
    setTeamSize(size);
    setTeamNames(Array(size).fill('').map((_, i) => teamNames[i] || `Miembro ${i + 1}`));
  };

  const handleNameChange = (index, value) => {
    const newNames = [...teamNames];
    newNames[index] = value;
    setTeamNames(newNames);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const teamMembers = teamNames.map((name, index) => ({
      id: `member-${index}`,
      name: name || `Miembro ${index + 1}`,
      color: getColor(index)
    }));
    
    setStorage('fitTeam', { team: teamMembers });
    onStart(teamMembers);
  };

  const getColor = (index) => {
    const colors = ['bg-indigo-600', 'bg-pink-600', 'bg-emerald-600', 'bg-amber-600', 'bg-purple-600'];
    return colors[index % colors.length];
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Configura tu equipo</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Número de personas en el equipo
          </label>
          <select
            value={teamSize}
            onChange={handleSizeChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        <div className="space-y-4 mb-6">
          {teamNames.map((name, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre del miembro {index + 1}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => handleNameChange(index, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Comenzar entrenamiento
        </button>
      </form>
    </div>
  );
};

export default TeamSetup;