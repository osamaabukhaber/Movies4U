import React from "react";

export default function MovieDetailsLoader() {
  // Skeleton utility classes
  

  const skeletonBtn =
    "h-10 w-32 bg-gray-700 animate-pulse rounded-full";
    

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8 font-inter text-white">
      {/* Main Card Skeleton */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-950 rounded-xl shadow-2xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row border border-purple-700 mb-12">
        {/* Poster Skeleton */}
        <div className="md:w-1/3 flex-shrink-0 flex items-center justify-center p-4">
          <div className="w-full h-[400px] md:h-[500px] bg-gray-700 animate-pulse rounded-xl" />
        </div>
        {/* Content Skeleton */}
        <div className="md:w-2/3 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="h-10 w-2/3 mb-4 bg-gray-700 animate-pulse rounded" />
            <div className="h-4 w-full mb-2 bg-gray-700 animate-pulse rounded" />
            <div className="h-4 w-5/6 mb-6 bg-gray-700 animate-pulse rounded" />
            <div className="space-y-3 mb-8">
              <div className="h-4 w-1/2 bg-gray-700 animate-pulse rounded" />
              <div className="h-4 w-1/3 bg-gray-700 animate-pulse rounded" />
              <div className="h-4 w-1/4 bg-gray-700 animate-pulse rounded" />
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            <div className={skeletonBtn} />
            <div className={skeletonBtn} />
          </div>
        </div>
      </div>

      {/* Next Episodes Skeleton (optional, only if series) */}
      <section className="w-full max-w-5xl bg-gray-800 rounded-xl shadow-xl p-6 sm:p-8 mb-12 border border-blue-700">
        <div className="h-8 w-1/3 mb-6 bg-gray-700 animate-pulse rounded" />
        <div className="h-4 w-2/3 mb-2 bg-gray-700 animate-pulse rounded" />
        <div className="h-4 w-1/2 mb-2 bg-gray-700 animate-pulse rounded" />
        <div className={skeletonBtn + " mt-6"} />
      </section>

      {/* Cast Skeleton */}
      <section className="w-full max-w-5xl bg-gray-800 rounded-xl shadow-xl p-6 sm:p-8 mb-12 border border-teal-700">
        <div className="h-8 w-1/4 mb-6 bg-gray-700 animate-pulse rounded" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-700 animate-pulse rounded-full mb-3" />
              <div className="h-4 w-16 bg-gray-700 animate-pulse rounded mb-1" />
              <div className="h-3 w-12 bg-gray-700 animate-pulse rounded" />
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Skeleton */}
      <section className="w-full max-w-5xl bg-gray-800 rounded-xl shadow-xl p-6 sm:p-8 mb-12 border border-red-700">
        <div className="h-8 w-1/4 mb-6 bg-gray-700 animate-pulse rounded" />
        <div className="space-y-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-gray-900 p-5 rounded-lg shadow-inner border border-gray-700">
              <div className="flex items-center mb-3">
                <div className="h-4 w-24 bg-gray-700 animate-pulse rounded mr-3" />
                <div className="h-4 w-10 bg-gray-700 animate-pulse rounded mr-3" />
                <div className="h-3 w-16 bg-gray-700 animate-pulse rounded ml-auto" />
              </div>
              <div className="h-4 w-5/6 bg-gray-700 animate-pulse rounded mb-1" />
              <div className="h-4 w-2/3 bg-gray-700 animate-pulse rounded" />
            </div>
          ))}
        </div>
      </section>

      {/* Similar Movies Skeleton */}
      <section className="w-full max-w-5xl bg-gray-800 rounded-xl shadow-xl p-6 sm:p-8 mb-12 border border-orange-700">
        <div className="h-8 w-1/4 mb-6 bg-gray-700 animate-pulse rounded" />
        <div className="flex overflow-x-auto pb-4 -mx-2 hide-scrollbar">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex-shrink-0 w-40 sm:w-48 mx-2 bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-700">
              <div className="w-full h-48 bg-gray-700 animate-pulse rounded-t-lg" />
              <div className="h-4 w-5/6 mx-auto my-2 bg-gray-700 animate-pulse rounded" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
