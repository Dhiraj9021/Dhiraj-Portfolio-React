import { useEffect, useState } from "react";

export default function FloatingCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const visitors = localStorage.getItem("visitors");

    let currentCount = visitors ? parseInt(visitors) : 0;

    const alreadyCounted = sessionStorage.getItem("visited");

    if (!alreadyCounted) {
      currentCount += 1;
      localStorage.setItem("visitors", currentCount);
      sessionStorage.setItem("visited", "true");
    }

    setCount(currentCount);
  }, []);

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-6 z-50">
      <div className="bg-[#111] border border-purple-500/30 shadow-lg shadow-purple-500/10 text-white px-2 py-1.5 sm:px-6 sm:py-2 rounded-lg sm:rounded-xl backdrop-blur-md">
        
        <p className="text-[10px] sm:text-xs text-purple-400 flex items-center gap-1">
          <span className="text-gray-400">Visitors:</span>
          <span className="text-sm sm:text-base  text-white">
            {count}+
          </span>
        </p>

      </div>
    </div>
  );
}