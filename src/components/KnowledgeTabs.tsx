"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { KnowlageInterface } from "@/types/KnowlageInterface";

interface KnowledgeTabsProps {
  areas: KnowlageInterface[];
}

export default function KnowledgeTabs({ areas }: KnowledgeTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1; 
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => setIsDragging(false);
  const onMouseLeave = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      className="flex items-center  overflow-x-auto scrollbar-hide cursor-grab"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      {areas.map((area: KnowlageInterface, index: number) => (
        <div key={area.name} className="flex items-center  shrink-0">
          {index > 0 && (
            <>
              <div
                className={cn(
                  "w-10 md:w-[69px] h-px border-t border-dashed",
                  areas[index-1].active ? "border-brand" : "border-muted"
                )}
              />
              <div
                className={`w-2 h-2 rounded-full shrink-0 ${
                  areas[index-1].active  ? "bg-brand" : "bg-muted"
                }`}
              />
            </>
          )}
          <div
            className={cn(
              "px-4 md:px-4 py-3 rounded-3xl font-inter text-xs md:text-sm font-medium leading-5 tracking-[-0.14px] whitespace-nowrap",
              area.active ? "bg-brand text-white" : "bg-muted text-muted-foreground"
            )}
          >
            {area.name}
          </div>
        </div>
      ))}
    </div>
  );
}
