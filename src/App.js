import React, { useState, useEffect } from 'react';
import TeamSetup from './components/Team/TeamSetup';
import TeamWorkoutCard from './components/Workout/TeamWorkoutCard';
import TeamProgress from './components/Progress/TeamProgress';
import { getStorage, setStorage } from './utilities/storage';

const initialWorkouts = [
  {
    day: 'Lunes - Full Body',
    exercises: [
      { id: 'ex-1', name: 'Sentadillas', sets: 3, reps: 12, muscle: 'Piernas' },
      { id: 'ex-2', name: 'Flexiones', sets: 3, reps: 10, muscle: 'Pecho' },
      { id: 'ex-3', name: 'Plancha', sets: 3, reps: '30 seg', muscle: 'Core' }
    ]
  },
  {
    day: 'Miércoles - Cardio',
    exercises: [
      { id: 'ex-4', name: 'Saltar cuerda', sets: 1, reps: '5 min', muscle: 'Cardio' },
      { id: 'ex-5', name: 'Burpees', sets: 3, reps: 10, muscle: 'Full Body' },
      { id: 'ex-6', name: 'Escaladores', sets: 3, reps: 20, muscle: 'Core' }
    ]
  },
  {
    day: 'Viernes - Fuerza',
    exercises: [
      { id: 'ex-7', name: 'Peso muerto', sets: 4, reps: 8, muscle: 'Espalda' },
      { id: 'ex-8', name: 'Press militar', sets: 3, reps: 8, muscle: 'Hombros' },
      { id: 'ex-9', name: 'Dominadas', sets: 3, reps: 'MAX', muscle: 'Espalda' }
    ]
  }
];

const App = () => {
  const [team, setTeam] = useState([]);
  const [workouts, setWorkouts] = useState(initialWorkouts);
  const [completed, setCompleted] = useState({});

  useEffect(() => {
    const savedData = getStorage('fitTeam', {});
    if (savedData.team) {
      setTeam(savedData.team);
    }
    if (savedData.workouts) {
      setWorkouts(savedData.workouts);
    }
    if (savedData.completed) {
      setCompleted(savedData.completed);
    }
  }, []);

  const saveAllData = (newTeam, newWorkouts, newCompleted) => {
    setStorage('fitTeam', {
      team: newTeam || team,
      workouts: newWorkouts || workouts,
      completed: newCompleted || completed
    });
  };

  const handleStart = (teamMembers) => {
    setTeam(teamMembers);
    saveAllData(teamMembers, null, {});
  };

  const handleToggleSet = (day, exerciseId, memberId, setIndex) => {
    const key = `${day}-${exerciseId}-${memberId}`;
    setCompleted(prev => {
      const workout = workouts.find(w => w.day === day);
      const exercise = workout.exercises.find(e => e.id === exerciseId);
      const currentSets = prev[key] || Array(exercise.sets).fill(false);
      
      const newSets = [...currentSets];
      newSets[setIndex] = !newSets[setIndex];
      const newCompleted = { ...prev, [key]: newSets };
      
      saveAllData(null, null, newCompleted);
      return newCompleted;
    });
  };

  const handleUpdateExercise = (day, exerciseIndex, newExercise) => {
    setWorkouts(prev => {
      const workoutIndex = prev.findIndex(w => w.day === day);
      const updatedExercises = [...prev[workoutIndex].exercises];
      updatedExercises[exerciseIndex] = newExercise;
      
      const newWorkouts = [...prev];
      newWorkouts[workoutIndex] = {
        ...newWorkouts[workoutIndex],
        exercises: updatedExercises
      };
      
      saveAllData(null, newWorkouts, null);
      return newWorkouts;
    });
  };

  const handleAddExercise = (day, newExercise) => {
    setWorkouts(prev => {
      const workoutIndex = prev.findIndex(w => w.day === day);
      const updatedExercises = [
        ...prev[workoutIndex].exercises, 
        { ...newExercise, id: `ex-${Date.now()}` }
      ];
      
      const newWorkouts = [...prev];
      newWorkouts[workoutIndex] = {
        ...newWorkouts[workoutIndex],
        exercises: updatedExercises
      };
      
      saveAllData(null, newWorkouts, null);
      return newWorkouts;
    });
  };

  const handleRemoveExercise = (day, exerciseIndex) => {
    setWorkouts(prev => {
      const workoutIndex = prev.findIndex(w => w.day === day);
      const updatedExercises = [...prev[workoutIndex].exercises];
      const [removedExercise] = updatedExercises.splice(exerciseIndex, 1);
      
      // Remove completed sets for this exercise
      const newCompleted = { ...completed };
      Object.keys(newCompleted).forEach(key => {
        if (key.includes(`${day}-${removedExercise.id}`)) {
          delete newCompleted[key];
        }
      });
      
      const newWorkouts = [...prev];
      newWorkouts[workoutIndex] = {
        ...newWorkouts[workoutIndex],
        exercises: updatedExercises
      };
      
      saveAllData(null, newWorkouts, newCompleted);
      setCompleted(newCompleted);
      return newWorkouts;
    });
  };

  const calculateProgress = () => {
    const progress = {};
    team.forEach(member => {
      progress[member.id] = workouts.reduce((count, workout) => {
        return count + workout.exercises.reduce((exCount, exercise) => {
          const key = `${workout.day}-${exercise.id}-${member.id}`;
          const setsCompleted = (completed[key] || []).filter(Boolean).length;
          return exCount + setsCompleted;
        }, 0);
      }, 0);
    });
    return progress;
  };

  if (team.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <TeamSetup onStart={handleStart} />
      </div>
    );
  }

  const progress = calculateProgress();

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">FitFix</h1>
        
        <TeamProgress teamMembers={team} progress={progress} />
        
        <div className="space-y-6">
          {workouts.map((workout) => (
            <TeamWorkoutCard
              key={workout.day}
              day={workout.day}
              exercises={workout.exercises}
              teamMembers={team}
              completed={completed}
              onToggleSet={handleToggleSet}
              onUpdateExercise={handleUpdateExercise}
              onAddExercise={handleAddExercise}
              onRemoveExercise={handleRemoveExercise}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

// DONE