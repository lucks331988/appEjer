import React from 'react';

const WorkoutDayCard = ({ day, exercises, onComplete }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-3 bg-indigo-600">
        <h3 className="text-lg font-medium text-white">{day}</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {exercises.map((exercise, index) => (
          <div key={index} className="p-4 flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">{exercise.name}</h4>
              <p className="text-sm text-gray-500">
                {exercise.sets} sets × {exercise.reps} reps • {exercise.muscle}
              </p>
            </div>
            <button
              onClick={() => onComplete(index)}
              className="ml-4 inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Completar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutDayCard;