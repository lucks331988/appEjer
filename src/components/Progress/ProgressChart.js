import React from 'react';

const ProgressChart = ({ data }) => {
  const maxValue = Math.max(...data.map(item => item.value), 0);
  
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Progreso semanal</h3>
      <div className="flex items-end space-x-2 h-40">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div 
              className="w-full bg-indigo-100 rounded-t-sm"
              style={{ height: `${(item.value / (maxValue || 1)) * 100}%` }}
            >
              <div className="bg-indigo-600 h-full rounded-t-sm"></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">{item.day}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressChart;