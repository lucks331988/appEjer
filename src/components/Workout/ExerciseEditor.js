import React, { useState } from 'react';

const ExerciseEditor = ({ exercise, onSave, onCancel }) => {
  const [editedExercise, setEditedExercise] = useState(exercise);

  const handleChange = (field, value) => {
    setEditedExercise(prev => ({
      ...prev,
      [field]: field === 'sets' || field === 'reps' ? Number(value) : value
    }));
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ejercicio</label>
          <input
            type="text"
            value={editedExercise.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Grupo muscular</label>
          <input
            type="text"
            value={editedExercise.muscle}
            onChange={(e) => handleChange('muscle', e.target.value)}
            className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Series</label>
          <input
            type="number"
            value={editedExercise.sets}
            onChange={(e) => handleChange('sets', e.target.value)}
            min="1"
            className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Repeticiones/Tiempo</label>
          <input
            type="text"
            value={editedExercise.reps}
            onChange={(e) => handleChange('reps', e.target.value)}
            className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm"
          />
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onCancel}
          className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm"
        >
          Cancelar
        </button>
        <button
          onClick={() => onSave(editedExercise)}
          className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm"
        >
          Guardar
        </button>
      </div>
    </div>
  );
};

export default ExerciseEditor;