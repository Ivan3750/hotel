"use client";

import React, { useEffect, useState } from "react";

interface StatItemProps {
  value: number;
  label: string;
  duration?: number;  
}

const StatItem: React.FC<StatItemProps> = ({ value, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 50);  
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <div className="flex flex-col items-center">
      <p className="text-[4rem] md:text-[5rem] font-medium text-[#d16806] transition-all duration-700">
        {count.toLocaleString()}
      </p>
      <p className="text-[#353535] text-base md:text-lg font-light mt-2">{label}</p>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around text-center my-24 md:my-48 px-4 md:px-0 gap-12 md:gap-0">
      <StatItem value={25000} label="Happy Clients" />
      <StatItem value={160} label="Total Rooms" />
      <StatItem value={28} label="Awards Won" />
      <StatItem value={100} label="Team Members" />
    </div>
  );
};

export default Stats;
