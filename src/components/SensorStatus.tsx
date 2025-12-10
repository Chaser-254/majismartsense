import React from 'react';
import { Activity, Signal, Battery, Wifi } from 'lucide-react';
const sensors = [{
  id: 'S-01',
  name: 'Main Tank Level',
  status: 'active',
  battery: 98,
  signal: 100
}, {
  id: 'S-02',
  name: 'Flow Meter North',
  status: 'active',
  battery: 85,
  signal: 92
}, {
  id: 'S-03',
  name: 'Quality Sensor A',
  status: 'warning',
  battery: 15,
  signal: 78
}, {
  id: 'S-04',
  name: 'Pump Monitor',
  status: 'inactive',
  battery: 0,
  signal: 0
}];
export function SensorStatus() {
  return <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-slate-800">Sensor Health</h3>
        <button className="text-sm text-blue-600 font-medium hover:text-blue-700">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sensors.map(sensor => <div key={sensor.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <div className={`h-2.5 w-2.5 rounded-full ${sensor.status === 'active' ? 'bg-emerald-500' : sensor.status === 'warning' ? 'bg-amber-500' : 'bg-slate-300'}`} />
                <span className="text-xs font-mono text-slate-400">
                  {sensor.id}
                </span>
              </div>
              <Activity className={`h-4 w-4 ${sensor.status === 'active' ? 'text-emerald-500' : 'text-slate-300'}`} />
            </div>

            <h4 className="text-sm font-semibold text-slate-700 mb-4 group-hover:text-blue-600 transition-colors">
              {sensor.name}
            </h4>

            <div className="flex items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1" title="Battery Level">
                <Battery className={`h-3 w-3 ${sensor.battery < 20 ? 'text-rose-500' : 'text-slate-400'}`} />
                <span>{sensor.battery}%</span>
              </div>
              <div className="flex items-center gap-1" title="Signal Strength">
                <Wifi className="h-3 w-3 text-slate-400" />
                <span>{sensor.signal}%</span>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
}