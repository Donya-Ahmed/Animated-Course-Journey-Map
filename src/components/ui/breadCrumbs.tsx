"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string; 
}

interface BreadcrumbsProps {
  items: Crumb[];
  className?: string;
}

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <div className={`mx-auto px-4 md:px-10 lg:px-20 mt-6 ${className}`}>
      <div className="flex items-center gap-1 text-sm md:text-base font-normal leading-[140%]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <div key={index} className="flex items-center gap-1">
              {!isLast ? (
                <Link
                  href={item.href || "#"}
                  className="text-gray-400 hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground truncate">{item.label}</span>
              )}

              {!isLast && (
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-400 shrink-0" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
