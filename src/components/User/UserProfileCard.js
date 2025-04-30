import React from 'react';

const UserProfileCard = ({ user }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xl font-bold">
            {user.name.charAt(0)}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">{user.name}</h3>
          <p className="text-gray-500">{user.level} • {user.goal}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Edad</p>
          <p className="font-medium">{user.age}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Peso</p>
          <p className="font-medium">{user.weight} kg</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Altura</p>
          <p className="font-medium">{user.height} cm</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">IMC</p>
          <p className="font-medium">{user.bmi}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;