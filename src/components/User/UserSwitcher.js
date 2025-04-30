import React from 'react';

const UserSwitcher = ({ users, currentUserId, onChange }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Usuario activo</label>
      <select
        value={currentUserId}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        {users.map(user => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>
    </div>
  );
};

export default UserSwitcher;