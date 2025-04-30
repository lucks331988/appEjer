import React from 'react';

const TeamProgress = ({ teamMembers, progress }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Progreso del equipo</h3>
      <div className="space-y-3">
        {teamMembers.map(member => (
          <div key={member.id} className="flex items-center">
            <div className={`w-4 h-4 rounded-full mr-2 ${member.color}`}></div>
            <span className="text-sm font-medium text-gray-700 flex-1">{member.name}</span>
            <span className="text-sm font-medium text-gray-900">
              {progress[member.id] || 0} sets completados
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamProgress;