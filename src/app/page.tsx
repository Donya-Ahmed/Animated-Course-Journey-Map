"use client";

import CourceCard from "@/components/CourceCard";
import CourseJourney from "@/components/CourseJourney";
import Breadcrumbs from "@/components/ui/breadCrumbs";

export default function Home() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: "MEP Engineering" },
        ]}
      />
      <div className="mt-8">
        <CourceCard />
      </div>
      <CourseJourney />
    </>
  );
}
