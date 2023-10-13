import React from "react";
import NavBar from "@/components/NavBar";
import CreateWorkoutSection from "@/components/CreateWorkoutSection";
import WorkoutAnalyticsSection from "@/components/WorkoutAnalyticsSection";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 ">
      <div className="px-4 sm:px-6 lg:px-8">
        <NavBar />
        <div className="grid grid-cols-3 gap-4 mt-8">
          <CreateWorkoutSection />
          <WorkoutAnalyticsSection />
        </div>
      </div>
    </div>
  );
};

export default page;
