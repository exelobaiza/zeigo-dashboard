import React from 'react';
import { MapPin, ChevronDown, MoreHorizontal } from 'lucide-react';

export const SiteSelector = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <MapPin size={20} className="text-gray-500" />
          <span className="font-medium">Houston Factory</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span>United States</span>
          <ChevronDown size={20} />
        </div>
        <div className="flex items-center space-x-2">
          <span>2023 - Q4</span>
          <ChevronDown size={20} />
        </div>
        <MoreHorizontal size={20} />
      </div>
    </div>
  );
};