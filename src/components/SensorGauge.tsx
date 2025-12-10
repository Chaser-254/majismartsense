import React from 'react';
import { Waves } from 'lucide-react';
interface SensorGaugeProps {
  level: number; // 0 to 100
  label: string;
  status: 'normal' | 'warning' | 'critical';
}
export function SensorGauge({
  level,
  label,
  status
}: SensorGaugeProps) {
  // Calculate stroke dasharray for the circle
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - level / 100 * circumference;
  const statusColors = {
    normal: 'text-cyan-500 stroke-cyan-500',
    warning: 'text-amber-500 stroke-amber-500',
    critical: 'text-rose-500 stroke-rose-500'
  };
  return <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>

      <h3 className="text-slate-500 font-medium mb-4 text-sm uppercase tracking-wider">
        {label}
      </h3>

      <div className="relative h-32 w-32 flex items-center justify-center">
        {/* Background Circle */}
        <svg className="transform -rotate-90 w-full h-full">
          <circle cx="64" cy="64" r={radius} stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
          {/* Progress Circle */}
          <circle cx="64" cy="64" r={radius} stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" className={`${statusColors[status]} transition-all duration-1000 ease-out`} />
        </svg>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Waves className={`h-6 w-6 mb-1 ${statusColors[status].split(' ')[0]}`} />
          <span className="text-2xl font-bold text-slate-800">{level}%</span>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-xs text-slate-400">Capacity Status</p>
        <p className={`text-sm font-medium ${statusColors[status].split(' ')[0]}`}>
          {status === 'normal' ? 'Optimal Level' : status === 'warning' ? 'Check Levels' : 'Critical Low'}
        </p>
      </div>
    </div>;
}