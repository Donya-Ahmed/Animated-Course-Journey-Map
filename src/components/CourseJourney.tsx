"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import LessonNode from "./LessonNode";
import LessonModal from "./LesoonModel";
import { LessonInterface as Lesson } from "@/types/LessonInterface";
import { lessons } from "@/api/LessonData";
import Card from "./ui/card";
import { Typography } from "./ui/typography";
import KnowledgeTabs from "./KnowledgeTabs";
import { areas } from "@/api/KnowlageData";
import LessonInfo from "./LessonInfo";
import { ArrowRight, ClipboardCheck, ClipboardList, Clock } from "lucide-react";
import { Button } from "./ui/button";

export default function CourseJourney() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapSize, setMapSize] = useState({ width: 0, height: 0 });
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setLoaded(true);
    }, 2000); // 2 seconds loader
    return () => clearTimeout(t);
  }, []);

  const handleStartLesson = () => {
    setSelectedLesson(null);
  };

  useEffect(() => {
    if (!loaded) return;
    if (mapRef.current) {
      const { offsetWidth, offsetHeight } = mapRef.current;
      setMapSize({ width: offsetWidth, height: offsetHeight });
    }
    const handleResize = () => {
      if (mapRef.current) {
        const { offsetWidth, offsetHeight } = mapRef.current;
        setMapSize({ width: offsetWidth, height: offsetHeight });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [loaded]);

  const percentToPx = (xPercent: number, yPercent: number) => {
    return {
      x: (xPercent / 100) * mapSize.width,
      y: (yPercent / 100) * mapSize.height,
    };
  };

  const activeIndex = lessons.findIndex((l) => l.status === "active");

  if (!loaded) {
    return (
      <Card className="flex items-center justify-center h-[500px]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-[#FF7F24] rounded-full animate-spin"></div>
          <p className="text-secondary font-medium text-sm">
            Loading Course Journey...
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="pb-10">
      <Typography variant="large" className="mb-8 text-secondary">
        Knowledge Areas
      </Typography>

      <KnowledgeTabs areas={areas} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-8">
        <div className="col-span-12 lg:col-span-4 grid h-80">
          <Card>
            <Typography variant="large" className="mb-2">
              Foundation Lesson
            </Typography>

            <Typography
              variant="small"
              className="text-muted-foreground leading-[150%]"
            >
              Master the fundamentals of Mechanical, Electrical, and Plumbing
              systems in modern engineering projec....
            </Typography>

            <div className="mt-4 flex flex-col gap-2">
              <LessonInfo
                title="10 Quizes"
                icon={
                  <ClipboardList className="w-5 h-5 shrink-0 text-blue-600" />
                }
              />
              <LessonInfo
                title="1 Hour"
                icon={<Clock className="w-5 h-5 shrink-0 text-blue-600" />}
              />
              <LessonInfo
                title="10 Questions"
                icon={
                  <ClipboardCheck className="w-5 h-5 shrink-0 text-secondary" />
                }
              />
            </div>

            <div className="flex justify-center mt-4">
              <Image
                src="/imgSchool.png"
                alt="Lesson Image"
                width={98}
                height={72}
              />
            </div>

            <div className="flex justify-center">
              <Button className="bg-transparent flex items-center w-full mt-4 justify-center gap-1 py-2 px-2 border-t border-muted hover:bg-gray-50/50 transition-colors rounded-none">
                <span className="text-sm font-bold text-brand leading-[150%]">
                  Start Lesson
                </span>
                <ArrowRight className="w-5 h-5 text-brand shrink-0" />
              </Button>
            </div>
          </Card>
        </div>

        <div className="col-span-2"></div>

        <div
          ref={mapRef}
          className="
            relative w-full 
            min-h-[600px] 
            md:min-h-[750px] 
            lg:min-h-[650px] 
            overflow-hidden 
            col-span-12 lg:col-span-6 
            rounded-lg
          "
        >
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {mapSize.width > 0 &&
              lessons.map((lesson, index) => {
                if (index === lessons.length - 1) return null;
                const next = lessons[index + 1];

                const p1 = percentToPx(lesson.x, lesson.y);
                const p2 = percentToPx(next.x, next.y);

                const dx = p2.x - p1.x;
                const dy = p2.y - p1.y;
                let d = "";

                if (Math.abs(dx) > Math.abs(dy)) {
                  const midX = p1.x + dx / 2;
                  d = `M ${p1.x} ${p1.y} L ${midX} ${p1.y} L ${midX} ${p2.y} L ${p2.x} ${p2.y}`;
                } else {
                  const midY = p1.y + dy / 2;
                  d = `M ${p1.x} ${p1.y} L ${p1.x} ${midY} L ${p2.x} ${midY} L ${p2.x} ${p2.y}`;
                }

               

                return (
                  // <path
                  //   key={index}
                  //   d={d}
                  //   fill="none"
                  //   stroke={strokeColor}
                  //   strokeWidth={2.5}
                  //   strokeLinecap="round"
                  //   strokeDasharray={index === activeIndex ? "10, 10" : "0, 0"}

                  // />
                  <path
                    key={index}
                    d={d}
                    fill="none"
                    stroke={index < activeIndex ? "#FF7F24" : "#cccccc"}
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    className={index < activeIndex ? "active-path" : "" }
                  />
                );
              })}
          </svg>

          {lessons.map((lesson) => {
            const pos = percentToPx(lesson.x, lesson.y);
            return (
              <div
                key={lesson.id}
                className="absolute"
                style={{
                  left: pos.x,
                  top: pos.y,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <LessonNode
                  title={`Lesson ${lesson.id + 1}`}
                  status={lesson.status as "done" | "active" | "disabled"}
                  onClick={() =>
                    setSelectedLesson({
                      ...lesson,
                      status: lesson.status as "done" | "active" | "disabled",
                    })
                  }
                />
              </div>
            );
          })}

          {selectedLesson && (
            <LessonModal
              open={!!selectedLesson}
              lessonNumber={selectedLesson.id}
              title={selectedLesson.title}
              description={selectedLesson.description}
              status={selectedLesson.status}
              onClose={() => setSelectedLesson(null)}
              onStartLesson={handleStartLesson}
            />
          )}
        </div>
      </div>
    </Card>
  );
}
