export const users = [
  {
    id: '1',
    name: 'Juan Pérez',
    email: 'juan@example.com',
    age: 32,
    weight: 75,
    height: 175,
    bmi: 24.5,
    level: 'Intermedio',
    goal: 'Ganar músculo'
  },
  {
    id: '2',
    name: 'María García',
    email: 'maria@example.com',
    age: 28,
    weight: 62,
    height: 165,
    bmi: 22.8,
    level: 'Principiante',
    goal: 'Perder peso'
  }
];

export const workouts = {
  '1': [
    {
      day: 'Lunes - Pecho y Tríceps',
      exercises: [
        { name: 'Press de banca', sets: 4, reps: 8, muscle: 'Pecho' },
        { name: 'Fondos en paralelas', sets: 3, reps: 10, muscle: 'Tríceps' },
        { name: 'Aperturas con mancuernas', sets: 3, reps: 12, muscle: 'Pecho' }
      ]
    },
    {
      day: 'Miércoles - Espalda y Bíceps',
      exercises: [
        { name: 'Dominadas', sets: 4, reps: 6, muscle: 'Espalda' },
        { name: 'Remo con barra', sets: 3, reps: 8, muscle: 'Espalda' },
        { name: 'Curl de bíceps', sets: 3, reps: 10, muscle: 'Bíceps' }
      ]
    }
  ],
  '2': [
    {
      day: 'Martes - Cardio y Core',
      exercises: [
        { name: 'Cinta de correr', sets: 1, reps: '20 min', muscle: 'Cardio' },
        { name: 'Plancha', sets: 3, reps: '30 seg', muscle: 'Core' },
        { name: 'Abdominales', sets: 3, reps: 15, muscle: 'Core' }
      ]
    }
  ]
};

export const progressData = {
  '1': [
    { day: 'Lun', value: 85 },
    { day: 'Mar', value: 60 },
    { day: 'Mié', value: 90 },
    { day: 'Jue', value: 45 },
    { day: 'Vie', value: 75 },
    { day: 'Sáb', value: 30 },
    { day: 'Dom', value: 0 }
  ],
  '2': [
    { day: 'Lun', value: 70 },
    { day: 'Mar', value: 85 },
    { day: 'Mié', value: 50 },
    { day: 'Jue', value: 65 },
    { day: 'Vie', value: 90 },
    { day: 'Sáb', value: 40 },
    { day: 'Dom', value: 20 }
  ]
};

export const notes = {
  '1': 'Recordar aumentar peso en press de banca la próxima semana.',
  '2': 'Hacer estiramientos después de cada sesión de cardio.'
};