import React from 'react';

export const EmissionsChart = () => {
  const data = [
    { name: 'Fleet', value: 8000, color: 'bg-purple-700' },
    { name: 'Electric\npower', value: 5000, color: 'bg-purple-700' },
    { name: 'Heating', value: 7000, color: 'bg-purple-300' },
  ];

  const maxValue = 9000;

  return (
    <div className="p-6 bg-white rounded-lg">
      <div className="space-y-8">
        {data.map((item) => (
          <div key={item.name} className="relative">
            <div className="flex items-center mb-2 h-8">
              <span className="text-sm text-gray-600 font-medium whitespace-pre-line">{item.name}</span>
            </div>
            <div className="relative h-6">
              {/* Background with grid lines */}
              <div className="absolute inset-0 flex">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="flex-1 border-r border-gray-100 first:border-l"
                  />
                ))}
              </div>
              {/* Progress bar background */}
              <div className="absolute inset-0 bg-gray-50">
                {/* Progress bar */}
                <div
                  className={`h-full ${item.color}`}
                  style={{ width: `${(item.value / maxValue) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Scale */}
      <div className="mt-2 pl-[2px]">
        <div className="flex justify-between text-xs text-gray-500">
          <span>0</span>
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i}>{(i + 1) * 1000}</span>
          ))}
        </div>
        <div className="mt-1 text-xs text-gray-500">tCO2e</div>
      </div>
    </div>
  );
};