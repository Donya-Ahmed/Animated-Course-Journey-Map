import React from "react";
import Card from "./ui/card";
import Image from "next/image";
import {
  ArrowRight,
  BookOpenCheck,
  Boxes,
  ClipboardList,
  Star,
} from "lucide-react";
import { Typography } from "./ui/typography";
import { Button } from "./ui/button";
import { NativeSelect } from "@/components/ui/native-select";
import LessonInfo from "./LessonInfo";

export default function CourceCard() {
  return (
    <div className="flex xl:flex-row flex-col xl:items-center items-start justify-between gap-4">
      <Card className="p-4 grid-cols-1 md:grid-cols-2  flex gap-4">
        <div className=" relative w-[143px] h-[143px]  border-2 border-muted rounded-lg">
          <Image src="/cource.png" alt="logo" fill />
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="bg-secondary/10 text-secondary w-[60px] h-6  text-[10px] flex gap-1 px-2 py-1 rounded-full items-center justify-center">
            <Boxes className="w-3 h-3 text-secondary" />
            HVAC
          </div>
          <div className="flex items-center gap-4">
            <Typography variant="large">MEP Engineering</Typography>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-chart-4 text-chart-4" />
              <span className="text-sm font-medium text-gray-700 leading-[125%]">
                5.0
              </span>
            </div>
          </div>
          <p className="w-full md:w-[373px] text-sm font-normal text-gray-400 leading-[125%] tracking-[-0.28px]">
            Master the fundamentals of Mechanical, Electrical, and Plumbing
            systems in modern engineering projec...
          </p>
          <div className="flex gap-4">
            <LessonInfo
              title="7 Lessons"
              icon={
                <BookOpenCheck className="w-5 h-5 shrink-0 text-blue-600" />
              }
            />
            <LessonInfo
              title="10 Practice"
              icon={
                <ClipboardList className="w-5 h-5 shrink-0 text-blue-600" />
              }
            />
          </div>
        </div>
      </Card>
      <div className="grid-cols-1 md:grid-cols-2 ">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8 w-full lg:w-auto">
          <Button className="flex items-center justify-center gap-1 px-5 w-[206px] py-2 md:py-0.5 h-10 bg-brand rounded-md hover:opacity-90 transition-opacity">
            <span className="text-sm font-bold text-white leading-[150%]">
              Level Assessment
            </span>
            <ArrowRight className="w-5 h-5 text-white shrink-0" />
          </Button>

          <div className="flex items-center gap-2">
            <span className="text-[14px] md:text-base font-normal text-muted-foreground leading-[140%]">
              Level:
            </span>
            <NativeSelect className="flex-1 sm:flex-initial px-4 py-2 border border-gray-50 rounded-md text-brand text-[12px] md:text-base">
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </NativeSelect>
          </div>
        </div>
      </div>
    </div>
  );
}
