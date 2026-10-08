import React from 'react';

export default function SkeletonLoader({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-slate-950 text-white overflow-hidden pointer-events-none transition-opacity duration-500 ease-out ${
        isLoading ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Top Navbar Skeleton */}
      <div className="border-b border-slate-900 bg-slate-950/90 py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Skeleton */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg skeleton-shimmer" />
            <div className="w-36 h-5 rounded-md skeleton-shimmer" />
          </div>

          {/* Desktop Nav links skeleton */}
          <div className="hidden md:flex items-center gap-6">
            <div className="w-12 h-4 rounded skeleton-shimmer" />
            <div className="w-16 h-4 rounded skeleton-shimmer" />
            <div className="w-20 h-4 rounded skeleton-shimmer" />
            <div className="w-14 h-4 rounded skeleton-shimmer" />
            <div className="w-12 h-4 rounded skeleton-shimmer" />
          </div>

          {/* Right Action Button Skeleton */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl skeleton-shimmer md:hidden" />
            <div className="w-9 h-9 rounded-xl skeleton-shimmer md:hidden" />
            <div className="hidden md:block w-32 h-9 rounded-xl skeleton-shimmer" />
          </div>
        </div>
      </div>

      {/* Hero Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 sm:pt-14 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column Skeleton */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tag pill */}
            <div className="w-64 h-6 rounded-full skeleton-shimmer" />

            {/* Headline bars */}
            <div className="space-y-3">
              <div className="w-full max-w-lg h-10 sm:h-12 rounded-xl skeleton-shimmer" />
              <div className="w-4/5 max-w-md h-10 sm:h-12 rounded-xl skeleton-shimmer" />
            </div>

            {/* Description lines */}
            <div className="space-y-2.5 max-w-xl pt-2">
              <div className="w-full h-4 rounded skeleton-shimmer" />
              <div className="w-11/12 h-4 rounded skeleton-shimmer" />
              <div className="w-3/4 h-4 rounded skeleton-shimmer" />
            </div>

            {/* Action buttons */}
            <div className="flex gap-4 pt-3">
              <div className="w-40 h-12 rounded-xl skeleton-shimmer" />
              <div className="w-36 h-12 rounded-xl skeleton-shimmer" />
            </div>

            {/* Value badges row */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-900 max-w-xl">
              <div className="h-10 rounded-lg skeleton-shimmer" />
              <div className="h-10 rounded-lg skeleton-shimmer" />
              <div className="h-10 rounded-lg skeleton-shimmer" />
            </div>
          </div>

          {/* Right Column: Performance Dashboard Skeleton */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 space-y-4 shadow-2xl">
              {/* Dashboard top header */}
              <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                <div className="w-32 h-5 rounded skeleton-shimmer" />
                <div className="w-28 h-5 rounded skeleton-shimmer" />
              </div>

              {/* Filter tabs */}
              <div className="w-48 h-7 rounded-lg skeleton-shimmer" />

              {/* 4 Metric cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="h-20 rounded-xl skeleton-shimmer" />
                <div className="h-20 rounded-xl skeleton-shimmer" />
                <div className="h-20 rounded-xl skeleton-shimmer" />
                <div className="h-20 rounded-xl skeleton-shimmer" />
              </div>

              {/* Trend chart visual */}
              <div className="h-28 rounded-xl skeleton-shimmer" />

              {/* Campaign list rows */}
              <div className="space-y-2">
                <div className="h-11 rounded-lg skeleton-shimmer" />
                <div className="h-11 rounded-lg skeleton-shimmer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
