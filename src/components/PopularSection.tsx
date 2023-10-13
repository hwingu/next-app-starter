import React from "react";
import WorkoutItems from "./WorkoutItems";

type Props = {};

const PopularSection = (props: Props) => {
  return (
    <section className="relative border border-slate-400 dark:bg-slate-700 mt-8 py-5 px-5">
      <h1 className="font-semibold text-lg">🔥Popular</h1>
      <div className="grid grid-cols-3 gap-6">
        <WorkoutItems />
        <WorkoutItems />
        <WorkoutItems />
        <WorkoutItems />
        <WorkoutItems />
        <WorkoutItems />
      </div>
    </section>
  );
};

export default PopularSection;
