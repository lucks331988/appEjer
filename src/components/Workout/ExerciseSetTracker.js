import React from 'react';

const ExerciseSetTracker = ({ exercise, member, completedSets, onToggleSet }) => {
  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{member.name}</span>
        <span className="text-xs text-gray-500">
          {completedSets.filter(Boolean).length}/{exercise.sets} sets
        </span>
      </div>
      <div className="flex space-x-1">
        {Array.from({ length: exercise.sets }).map((_, setIndex) => (
          <button
            key={setIndex}
            onClick={() => onToggleSet(setIndex)}
            className={`flex-1 h-8 rounded-md ${completedSets[setIndex] ? member.color : 'bg-gray-200'} ${completedSets[setIndex] ? 'text-white' : 'text-gray-700'}`}
          >
            {setIndex + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExerciseSetTracker;