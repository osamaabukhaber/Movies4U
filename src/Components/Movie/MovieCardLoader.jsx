import React from "react";

export default function MovieCardLoader() {
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-lg bg-white/10 animate-pulse cursor-wait">
      {/* Poster Skeleton */}
      <div className="w-full h-[400px] bg-gray-300/30" />

      {/* Favorite Icon Placeholder */}
      <div className="absolute top-2 left-2 z-10">
        <div className="w-10 h-10 bg-white/30 rounded-full" />
      </div>

      {/* Overlay Placeholder */}
      <div className="absolute inset-0 bg-black/20 flex flex-col justify-between p-4">
        {/* Top Tags */}
        <div className="flex justify-end gap-2">
          <div className="w-16 h-5 bg-white/30 rounded-full" />
          <div className="w-16 h-5 bg-white/30 rounded-full" />
        </div>

        {/* Play Button */}
        <div className="flex-grow flex items-center justify-center">
          <div className=" bg-white/30 rounded-full w-20 h-20" />
        </div>

        {/* Rating Circle */}
        <div className="flex justify-center mb-10">
          <div className="w-12 h-12 bg-white/40 rounded-full" />
        </div>

        {/* Genre & Vote Count */}
        <div className="mb-10 flex justify-between items-center">
          <div className="w-24 h-6  bg-white/30 rounded-full" />
          <div className="w-16 h-6 bg-white/30 rounded-full" />
        </div>
      </div>

      {/* Bottom Title Placeholder */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <div className="h-6 bg-white/30 rounded w-3/4 mx-auto" />
      </div>
    </div>
  );
}
