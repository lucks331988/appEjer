import React, { useState } from 'react';

const NotesEditor = ({ initialText, onSave }) => {
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    onSave(text);
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium text-gray-900">Notas</h3>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="text-sm text-indigo-600 hover:text-indigo-800"
          >
            Editar
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="text-sm text-indigo-600 hover:text-indigo-800"
          >
            Guardar
          </button>
        )}
      </div>
      {isEditing ? (
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          rows="4"
        />
      ) : (
        <p className="text-gray-700 whitespace-pre-line">{text || 'No hay notas aún'}</p>
      )}
    </div>
  );
};

export default NotesEditor;