import React from "react";

export default function LessonInfo({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-sm md:text-base font-medium text-secondary leading-[150%]">
        {title}
      </span>
    </div>
  );
}
