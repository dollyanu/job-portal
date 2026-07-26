import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl md:text-4xl font-bold">
        <span className="text-purple-600">Latest & Top</span> Job Openings
      </h1>

      <p className="text-gray-500 mt-2">
        Hand-picked jobs from top companies
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {allJobs.length <= 0 ? (
          <span>No Job Available</span>
        ) : (
          allJobs
            .slice(0, 6)
            .map((job) => (
              <LatestJobCards key={job._id} job={job} />
            ))
        )}
      </div>
    </section>
  );
};

export default LatestJobs;