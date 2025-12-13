"use client";

import { useState, useRef, ReactNode } from "react";

export type SliderRenderProps<T> = {
  item: T;
  index: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  total: number;
};

interface ReusableSliderProps<T> {
  items: T[];
  renderSlide: (props: SliderRenderProps<T>) => ReactNode;
  className?: string;
}

export default function Slider<T>({
  items,
  renderSlide,
  className = "",
}: ReusableSliderProps<T>) {
  const [current, setCurrent] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const handleStart = (x: number) => {
    startX.current = x;
    isDragging.current = true;
  };

  const handleEnd = (x: number) => {
    if (!isDragging.current || items.length <= 1) return;
    const delta = startX.current - x;
    const threshold = 50; 
    isDragging.current = false;

    if (delta > threshold) {
      setCurrent((prev) => (prev + 1) % items.length);
    } else if (delta < -threshold) {
      setCurrent((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  return (
    <div
      className={`relative w-full h-full ${className}`}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseUp={(e) => handleEnd(e.clientX)}
      onMouseLeave={() => isDragging.current = false} 
    >
      {renderSlide({ 
        item: items[current], 
        index: current, 
        setCurrent: setCurrent, 
        total: items.length 
      })}
    </div>
  );
}