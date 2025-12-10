import React, { useState } from 'react';
import { BrainCircuit, Sparkles, AlertTriangle, TrendingUp } from 'lucide-react';
import { AIAnalysisModal } from './AIAnalysisModal';
export function AIInsights() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return <>
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white shadow-xl shadow-slate-900/10 overflow-hidden relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>

        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
            <BrainCircuit className="h-6 w-6 text-cyan-300" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Maji AI Insights</h3>
            <p className="text-xs text-slate-400">
              Powered by Predictive Models
            </p>
          </div>
        </div>

        <div className="space-y-4 relative z-10">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-amber-300 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-slate-200">
                  Usage Anomaly Detected
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Zone B shows unusual consumption patterns between 2 AM - 4 AM.
                  Possible unreported leak in Sector 4.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="flex items-start gap-3">
              <TrendingUp className="h-5 w-5 text-emerald-300 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-slate-200">
                  Efficiency Forecast
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Based on current trends, tank depletion will stabilize by
                  18:00. No shortages expected for next 48h.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-rose-300 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-slate-200">
                  Maintenance Prediction
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Pump #3 vibration levels increasing. Recommended inspection
                  within 3 days to prevent failure.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button onClick={() => setIsModalOpen(true)} className="w-full mt-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-sm font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
          View Full Analysis
        </button>
      </div>

      <AIAnalysisModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>;
}