import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus, BoxIcon } from 'lucide-react';
interface SummaryCardProps {
  title: string;
  value: string;
  unit?: string;
  icon: BoxIcon;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  color: 'blue' | 'cyan' | 'teal' | 'indigo';
}
export function SummaryCard({
  title,
  value,
  unit,
  icon: Icon,
  trend,
  trendValue,
  color
}: SummaryCardProps) {
  const colorStyles = {
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    cyan: 'bg-cyan-50 text-cyan-600 border-cyan-100',
    teal: 'bg-teal-50 text-teal-600 border-teal-100',
    indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100'
  };
  const trendColors = {
    up: 'text-emerald-600 bg-emerald-50',
    down: 'text-rose-600 bg-rose-50',
    neutral: 'text-slate-500 bg-slate-50'
  };
  return <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${colorStyles[color]} border`}>
          <Icon className="h-6 w-6" />
        </div>
        {trend && <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${trendColors[trend]}`}>
            {trend === 'up' && <ArrowUpRight className="h-3 w-3" />}
            {trend === 'down' && <ArrowDownRight className="h-3 w-3" />}
            {trend === 'neutral' && <Minus className="h-3 w-3" />}
            {trendValue}
          </div>}
      </div>

      <div>
        <p className="text-slate-500 text-sm font-medium mb-1">{title}</p>
        <div className="flex items-baseline gap-1">
          <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
          {unit && <span className="text-slate-400 text-sm font-medium">{unit}</span>}
        </div>
      </div>
    </div>;
}