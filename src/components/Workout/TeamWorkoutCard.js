import React, { useState } from 'react';
import ExerciseSetTracker from './ExerciseSetTracker';
import ExerciseEditor from './ExerciseEditor';

const TeamWorkoutCard = ({ day, exercises, teamMembers, completed, onToggleSet, onUpdateExercise, onAddExercise, onRemoveExercise }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const handleSaveExercise = (index, newExercise) => {
    onUpdateExercise(day, index, newExercise);
    setEditingIndex(null);
  };

  const handleAddExercise = (newExercise) => {
    onAddExercise(day, newExercise);
    setIsAdding(false);
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
      <div className="px-4 py-3 bg-gray-800 flex justify-between items-center">
        <h3 className="text-lg font-medium text-white">{day}</h3>
        <div>
          <button
            onClick={() => setIsAdding(true)}
            className="text-xs bg-indigo-600 text-white px-2 py-1 rounded mr-2"
          >
            + Ejercicio
          </button>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {isAdding && (
          <div className="p-4">
            <ExerciseEditor
              exercise={{ name: '', sets: 3, reps: 10, muscle: '' }}
              onSave={handleAddExercise}
              onCancel={() => setIsAdding(false)}
            />
          </div>
        )}

        {exercises.map((exercise, exIndex) => (
          <div key={exIndex} className="p-4">
            {editingIndex === exIndex ? (
              <ExerciseEditor
                exercise={exercise}
                onSave={(newExercise) => handleSaveExercise(exIndex, newExercise)}
                onCancel={() => setEditingIndex(null)}
              />
            ) : (
              <>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{exercise.name}</h4>
                    <p className="text-sm text-gray-500">
                      {exercise.sets} sets × {exercise.reps} reps • {exercise.muscle}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setEditingIndex(exIndex)}
                      className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => onRemoveExercise(day, exIndex)}
                      className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  {teamMembers.map(member => (
                    <ExerciseSetTracker
                      key={member.id}
                      exercise={exercise}
                      member={member}
                      completedSets={completed[`${day}-${exercise.name}-${member.id}`] || []}
                      onToggleSet={(setIndex) => onToggleSet(day, exercise.name, member.id, setIndex)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamWorkoutCard;