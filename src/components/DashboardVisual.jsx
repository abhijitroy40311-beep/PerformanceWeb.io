import React, { useState } from 'react';
import { TrendingUp, MousePointerClick, Users, Percent, DollarSign, CheckCircle2, ArrowUpRight, BarChart3, Info } from 'lucide-react';

export default function DashboardVisual() {
  const [activeTab, setActiveTab] = useState('30d');

  // Illustrative demo datasets for interactive switching
  const datasets = {
    '14d': {
      clicks: '2,310',
      leads: '174',
      cvr: '7.53%',
      cpl: '$13.80',
      periodLabel: 'Last 14 Days',
      trendPoints: [
        { label: 'D1', val: 8 },
        { label: 'D3', val: 11 },
        { label: 'D5', val: 10 },
        { label: 'D7', val: 14 },
        { label: 'D9', val: 13 },
        { label: 'D11', val: 17 },
        { label: 'D13', val: 19 },
      ],
      campaigns: [
        { name: 'Search • High-Intent Enquiries', leads: '94', cvr: '8.4%', status: 'Active' },
        { name: 'Direct Inbound Call-Only', leads: '52', cvr: '11.8%', status: 'Active' },
        { name: 'Targeted Competitor Intent', leads: '28', cvr: '5.2%', status: 'Optimized' },
      ],
    },
    '30d': {
      clicks: '4,820',
      leads: '342',
      cvr: '7.09%',
      cpl: '$14.20',
      periodLabel: 'Last 30 Days',
      trendPoints: [
        { label: 'W1', val: 68 },
        { label: 'W2', val: 82 },
        { label: 'W3', val: 89 },
        { label: 'W4', val: 103 },
      ],
      campaigns: [
        { name: 'Search • High-Intent Enquiries', leads: '184', cvr: '8.2%', status: 'Active' },
        { name: 'Direct Inbound Call-Only', leads: '96', cvr: '11.4%', status: 'Active' },
        { name: 'Targeted Competitor Intent', leads: '62', cvr: '5.8%', status: 'Optimized' },
      ],
    },
    'all': {
      clicks: '12,450',
      leads: '918',
      cvr: '7.37%',
      cpl: '$14.05',
      periodLabel: 'Quarterly Aggregated',
      trendPoints: [
        { label: 'M1', val: 240 },
        { label: 'M2', val: 310 },
        { label: 'M3', val: 368 },
      ],
      campaigns: [
        { name: 'Search • High-Intent Enquiries', leads: '498', cvr: '8.1%', status: 'Active' },
        { name: 'Direct Inbound Call-Only', leads: '264', cvr: '11.2%', status: 'Active' },
        { name: 'Targeted Competitor Intent', leads: '156', cvr: '5.9%', status: 'Optimized' },
      ],
    },
  };

  const current = datasets[activeTab];

  return (
    <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800/90 p-5 md:p-6 shadow-2xl backdrop-blur-sm text-slate-100">
      {/* Notice header disclaimer pill */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-wide text-slate-200">
            Google Ads Engine
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/60 font-medium">
            Search & Conversion
          </span>
        </div>

        {/* Clear neutral compliance label */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-[11px] text-slate-300 font-medium" title="Sample metrics used to demonstrate campaign architecture and reporting visibility">
          <Info className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span>Portfolio Demo • Illustrative Data</span>
        </div>
      </div>

      {/* Filter / Range tabs */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800">
          {[
            { id: '14d', label: '14 Days' },
            { id: '30d', label: '30 Days' },
            { id: 'all', label: 'All-Time' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-2.5 py-1 text-xs rounded-md font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="text-[11px] text-slate-400 flex items-center gap-1">
          <BarChart3 className="w-3.5 h-3.5 text-blue-400" />
          <span>Conversion Tracking: Verified</span>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
        {/* Clicks */}
        <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3 hover:border-slate-700 transition-colors">
          <div className="flex items-center justify-between text-slate-400 mb-1">
            <span className="text-[11px] font-medium uppercase tracking-wider">Clicks</span>
            <MousePointerClick className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <div className="text-lg font-bold text-white tracking-tight">{current.clicks}</div>
          <div className="text-[10px] text-emerald-400 flex items-center gap-0.5 mt-0.5">
            <ArrowUpRight className="w-3 h-3" />
            <span>High-Intent Traffic</span>
          </div>
        </div>

        {/* Leads */}
        <div className="bg-slate-950/60 border border-blue-900/40 rounded-xl p-3 hover:border-blue-700/60 transition-colors bg-gradient-to-br from-blue-950/20 to-transparent">
          <div className="flex items-center justify-between text-blue-300 mb-1">
            <span className="text-[11px] font-medium uppercase tracking-wider">Leads (Demo)</span>
            <Users className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <div className="text-lg font-bold text-sky-400 tracking-tight">{current.leads}</div>
          <div className="text-[10px] text-blue-300 flex items-center gap-0.5 mt-0.5">
            <span>Calls & Form Fills</span>
          </div>
        </div>

        {/* Conversion Rate */}
        <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3 hover:border-slate-700 transition-colors">
          <div className="flex items-center justify-between text-slate-400 mb-1">
            <span className="text-[11px] font-medium uppercase tracking-wider">Conv. Rate</span>
            <Percent className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="text-lg font-bold text-white tracking-tight">{current.cvr}</div>
          <div className="text-[10px] text-slate-400 flex items-center gap-0.5 mt-0.5">
            <span>Landing Page CRO</span>
          </div>
        </div>

        {/* Cost Per Lead */}
        <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3 hover:border-slate-700 transition-colors">
          <div className="flex items-center justify-between text-slate-400 mb-1">
            <span className="text-[11px] font-medium uppercase tracking-wider">CPL (Demo)</span>
            <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="text-lg font-bold text-emerald-400 tracking-tight">{current.cpl}</div>
          <div className="text-[10px] text-emerald-400/90 flex items-center gap-0.5 mt-0.5">
            <span>Low Wasted Spend</span>
          </div>
        </div>
      </div>

      {/* SVG Performance Trend Chart */}
      <div className="mt-4 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-sky-400" />
            <span className="text-xs font-semibold text-slate-200">
              Lead Acquisition Trend ({current.periodLabel})
            </span>
          </div>
          <span className="text-[10px] text-slate-400 font-medium">
            Illustrative Trend Line
          </span>
        </div>

        {/* Clean SVG Line Curve */}
        <div className="h-28 w-full relative">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 360 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid Lines */}
            <line x1="0" y1="20" x2="360" y2="20" stroke="#1e293b" strokeDasharray="3 3" />
            <line x1="0" y1="50" x2="360" y2="50" stroke="#1e293b" strokeDasharray="3 3" />
            <line x1="0" y1="80" x2="360" y2="80" stroke="#1e293b" strokeDasharray="3 3" />

            {/* Gradient Fill Area */}
            <path
              d="M 10 75 Q 70 65, 120 52 T 220 38 T 310 22 L 350 14 L 350 95 L 10 95 Z"
              fill="url(#chartGrad)"
            />

            {/* Smooth Spline Line */}
            <path
              d="M 10 75 Q 70 65, 120 52 T 220 38 T 310 22 L 350 14"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Interactive/Data Points */}
            <circle cx="10" cy="75" r="3.5" fill="#38bdf8" stroke="#0f172a" strokeWidth="2" />
            <circle cx="120" cy="52" r="3.5" fill="#38bdf8" stroke="#0f172a" strokeWidth="2" />
            <circle cx="220" cy="38" r="3.5" fill="#38bdf8" stroke="#0f172a" strokeWidth="2" />
            <circle cx="310" cy="22" r="3.5" fill="#38bdf8" stroke="#0f172a" strokeWidth="2" />
            <circle cx="350" cy="14" r="4.5" fill="#fde047" stroke="#0f172a" strokeWidth="2" />
          </svg>
        </div>

        <div className="flex justify-between items-center text-[10px] text-slate-500 mt-1 px-1">
          <span>Campaign Launch</span>
          <span>Negative Keyword Pruning</span>
          <span>Target CPA Scaled</span>
          <span className="text-sky-400 font-medium">Optimal Lead Flow</span>
        </div>
      </div>

      {/* Campaign Structure Breakdown */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span>Search Campaign Strategy</span>
          <span>Lead Volume (Demo)</span>
        </div>

        {current.campaigns.map((camp, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/50 border border-slate-800/70 hover:border-slate-700 text-xs transition-colors"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <div>
                <p className="font-medium text-slate-200">{camp.name}</p>
                <p className="text-[10px] text-slate-400">CVR: {camp.cvr} • {camp.status}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="font-bold text-sky-400">{camp.leads}</span>
              <span className="text-[10px] text-slate-500 block">enquiries</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quality indicator footer */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Targeted Negative Keyword Filter: Active
        </span>
        <span className="font-mono text-slate-300">QS: 8-10/10</span>
      </div>
    </div>
  );
}
