import React from 'react';
import { X, TrendingUp, AlertTriangle, Zap, Target, Clock, Activity } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
interface AIAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const predictionData = [{
  time: '00:00',
  actual: 240,
  predicted: 235,
  confidence: 92
}, {
  time: '04:00',
  actual: 139,
  predicted: 145,
  confidence: 88
}, {
  time: '08:00',
  actual: 980,
  predicted: 970,
  confidence: 95
}, {
  time: '12:00',
  actual: 1200,
  predicted: 1180,
  confidence: 91
}, {
  time: '16:00',
  actual: 1108,
  predicted: 1120,
  confidence: 89
}, {
  time: '20:00',
  actual: 680,
  predicted: 690,
  confidence: 93
}, {
  time: '23:59',
  actual: 340,
  predicted: 350,
  confidence: 90
}];
const anomalyData = [{
  zone: 'Zone A',
  severity: 85,
  type: 'Leak Detection'
}, {
  zone: 'Zone B',
  severity: 92,
  type: 'Usage Spike'
}, {
  zone: 'Zone C',
  severity: 45,
  type: 'Pressure Drop'
}, {
  zone: 'Zone D',
  severity: 30,
  type: 'Minor Variance'
}];
const optimizationMetrics = [{
  metric: 'Water Saved',
  current: 2340,
  potential: 3200,
  unit: 'L/day'
}, {
  metric: 'Efficiency',
  current: 87,
  potential: 94,
  unit: '%'
}, {
  metric: 'Cost Reduction',
  current: 450,
  potential: 620,
  unit: '$/month'
}, {
  metric: 'Leak Prevention',
  current: 3,
  potential: 7,
  unit: 'incidents'
}];
export function AIAnalysisModal({
  isOpen,
  onClose
}: AIAnalysisModalProps) {
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-slate-900 to-slate-800 text-white px-8 py-6 flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/20 rounded-lg backdrop-blur-sm border border-cyan-500/30">
              <Activity className="h-6 w-6 text-cyan-300" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                Maji AI - Full Analysis Report
              </h2>
              <p className="text-sm text-slate-400 mt-0.5">
                Comprehensive system intelligence and predictions
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-100px)] p-8 space-y-8">
          {/* Predictive Forecasting Section */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-800">
                Predictive Forecasting
              </h3>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <p className="text-sm text-slate-600 mb-6">
                AI model accuracy:{' '}
                <span className="font-bold text-emerald-600">91.2%</span> |
                Forecast horizon: <span className="font-bold">48 hours</span> |
                Last updated: <span className="font-bold">2 min ago</span>
              </p>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={predictionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="time" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }} />
                    <Legend />
                    <Line type="monotone" dataKey="actual" stroke="#0891b2" strokeWidth={3} name="Actual Usage (L)" dot={{
                    fill: '#0891b2',
                    r: 4
                  }} />
                    <Line type="monotone" dataKey="predicted" stroke="#8b5cf6" strokeWidth={3} strokeDasharray="5 5" name="AI Prediction (L)" dot={{
                    fill: '#8b5cf6',
                    r: 4
                  }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                    Next Peak
                  </p>
                  <p className="text-2xl font-bold text-slate-800">14:30</p>
                  <p className="text-xs text-slate-500 mt-1">
                    Expected: 1,250 L/hr
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                    Depletion Risk
                  </p>
                  <p className="text-2xl font-bold text-emerald-600">Low</p>
                  <p className="text-xs text-slate-500 mt-1">
                    Reserves sufficient
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                    Confidence
                  </p>
                  <p className="text-2xl font-bold text-blue-600">91%</p>
                  <p className="text-xs text-slate-500 mt-1">High accuracy</p>
                </div>
              </div>
            </div>
          </section>

          {/* Anomaly Detection Section */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              <h3 className="text-xl font-bold text-slate-800">
                Anomaly Detection & Risk Assessment
              </h3>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="h-[250px] mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={anomalyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="zone" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }} />
                    <Bar dataKey="severity" fill="#f59e0b" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3">
                {anomalyData.map((item, idx) => <div key={idx} className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className={`h-3 w-3 rounded-full ${item.severity > 80 ? 'bg-rose-500' : item.severity > 50 ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                      <div>
                        <p className="font-semibold text-slate-800">
                          {item.zone}
                        </p>
                        <p className="text-sm text-slate-500">{item.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-slate-800">
                        {item.severity}%
                      </p>
                      <p className="text-xs text-slate-500">Severity Score</p>
                    </div>
                  </div>)}
              </div>
            </div>
          </section>

          {/* Optimization Recommendations */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-emerald-600" />
              <h3 className="text-xl font-bold text-slate-800">
                Optimization Opportunities
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {optimizationMetrics.map((item, idx) => <div key={idx} className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200">
                  <p className="text-sm text-slate-600 font-medium mb-4">
                    {item.metric}
                  </p>
                  <div className="flex items-end justify-between mb-2">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Current</p>
                      <p className="text-2xl font-bold text-slate-800">
                        {item.current}
                        <span className="text-sm text-slate-500 ml-1">
                          {item.unit}
                        </span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-emerald-600 mb-1">Potential</p>
                      <p className="text-2xl font-bold text-emerald-600">
                        {item.potential}
                        <span className="text-sm text-emerald-500 ml-1">
                          {item.unit}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 mt-3">
                    <div className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full transition-all duration-500" style={{
                  width: `${item.current / item.potential * 100}%`
                }} />
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    +
                    {Math.round((item.potential - item.current) / item.current * 100)}
                    % improvement possible
                  </p>
                </div>)}
            </div>
          </section>

          {/* Action Items */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Target className="h-5 w-5 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-800">
                Recommended Actions
              </h3>
            </div>
            <div className="space-y-3">
              <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-rose-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-rose-900">
                      Urgent: Inspect Zone B Sector 4
                    </p>
                    <p className="text-sm text-rose-700 mt-1">
                      Leak detection algorithm flagged abnormal flow patterns.
                      Estimated water loss: 120 L/hr. Dispatch technician within
                      4 hours.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900">
                      Schedule Pump #3 Maintenance
                    </p>
                    <p className="text-sm text-amber-700 mt-1">
                      Vibration sensors indicate increased wear. Recommend
                      inspection within 72 hours to prevent failure.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-900">
                      Optimize Tank Refill Schedule
                    </p>
                    <p className="text-sm text-blue-700 mt-1">
                      AI suggests shifting Tank A refill to 2:00 AM for 12%
                      energy cost reduction based on usage patterns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 px-8 py-4 flex justify-between items-center">
          <p className="text-sm text-slate-600">
            Report generated:{' '}
            <span className="font-medium">Dec 6, 2024 at 14:32</span>
          </p>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-slate-600 hover:text-slate-800 font-medium transition-colors">
              Export PDF
            </button>
            <button onClick={onClose} className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>;
}