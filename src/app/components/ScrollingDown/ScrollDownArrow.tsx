"use client";

import { useEffect, useState } from "react";

const ScrollDownArrow = () => {
  const [showArrow, setShowArrow] = useState(true);

  if (!showArrow) return null;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Arrow with bounce animation */}
      <div className="flex flex-col items-center animate-bounce">
        <div className="w-px h-8 bg-white"></div>
        <div className="w-2.5 h-2.5 border-b-2 border-r-2 border-white rotate-45 -mt-1"></div>
      </div>

      {/* SCROLL text below the arrow */}
      <p className="text-[10px] tracking-[0.3em] font-light mt-2 text-white">
        SCROLL
      </p>
    </div>
  );
};

export default ScrollDownArrow;
