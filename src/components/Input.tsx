import React, { InputHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: LucideIcon;
}

export const Input: React.FC<InputProps> = ({ label, icon: Icon, ...props }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={props.id} className="text-sm font-medium text-gray-700 block">
        {label}
      </label>
      <div className="relative">
        <Icon className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
        <input
          {...props}
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg 
                     focus:ring-2 focus:ring-[#3cabe0]/50 focus:border-[#3cabe0] outline-none 
                     transition-all text-gray-900 placeholder-gray-400 shadow-sm"
        />
      </div>
    </div>
  );
}