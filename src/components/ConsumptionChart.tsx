import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [{
  time: '00:00',
  usage: 240
}, {
  time: '04:00',
  usage: 139
}, {
  time: '08:00',
  usage: 980
}, {
  time: '12:00',
  usage: 1200
}, {
  time: '16:00',
  usage: 1108
}, {
  time: '20:00',
  usage: 680
}, {
  time: '23:59',
  usage: 340
}];
export function ConsumptionChart() {
  return <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm col-span-1 lg:col-span-2">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800">
            Water Consumption Trends
          </h3>
          <p className="text-sm text-slate-500">
            Daily usage across all zones (Liters)
          </p>
        </div>
        <select className="bg-slate-50 border border-slate-200 text-slate-600 text-sm rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500/20">
          <option>Last 24 Hours</option>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{
          top: 10,
          right: 10,
          left: -20,
          bottom: 0
        }}>
            <defs>
              <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{
            fill: '#94a3b8',
            fontSize: 12
          }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{
            fill: '#94a3b8',
            fontSize: 12
          }} />
            <Tooltip contentStyle={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
          }} itemStyle={{
            color: '#0891b2'
          }} />
            <Area type="monotone" dataKey="usage" stroke="#06b6d4" strokeWidth={3} fillOpacity={1} fill="url(#colorUsage)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>;
}