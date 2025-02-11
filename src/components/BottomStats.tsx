import React from 'react';
import { Car, Flame, Smartphone, Droplet, Home, ChevronRight } from 'lucide-react';

export const BottomStats = () => {
  const equivalents = [
    {
      label: 'City car driven for one year',
      value: '45',
      average: '/ 10 average',
      icon: Car,
      color: 'text-amber-500',
      progressColor: 'bg-amber-500',
      progress: 90
    },
    {
      label: 'Pound of coal burned',
      value: '228',
      average: '/ 1000 average',
      icon: Flame,
      color: 'text-amber-500',
      progressColor: 'bg-amber-500',
      progress: 60
    },
    {
      label: '# of smartphones charged',
      value: '28,000',
      average: '/ 150k average',
      icon: Smartphone,
      color: 'text-green-600',
      progressColor: 'bg-green-600',
      progress: 75
    },
    {
      label: 'Gallons of gasoline consumed',
      value: '25,099',
      average: '/ 50k average',
      icon: Droplet,
      color: 'text-green-600',
      progressColor: 'bg-green-600',
      progress: 80
    },
    {
      label: "Homes' energy use for one year",
      value: '25',
      average: '/ 100 avg',
      icon: Home,
      color: 'text-rose-600',
      progressColor: 'bg-rose-600',
      progress: 20
    }
  ];

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold">Equivalents</h2>
            <p className="text-sm text-gray-600">65.5 tCO2e is equivalent to:</p>
          </div>
          <button className="flex items-center text-purple-600 text-sm hover:text-purple-700">
            View full report
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {equivalents.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Represents</div>
                <div className="flex items-start space-x-2 mb-3">
                  <Icon size={20} className={item.color} />
                  <div className="text-sm font-medium">{item.label}</div>
                </div>
                <div className="mb-2">
                  <span className={`text-3xl font-bold ${item.color}`}>{item.value}</span>
                  <span className="text-xs text-gray-500 ml-1">{item.average}</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.progressColor}`}
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};