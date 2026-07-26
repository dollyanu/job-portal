import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
          🔥 No.1 Job Hunt Website
        </span>

        <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
          Find & Apply to Your{" "}
          <span className="text-purple-600">Dream Job</span> Faster
        </h1>

        <p className="mt-5 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          10,000+ jobs from top companies. Verified recruiters only.
        </p>

        <div className="mt-8 flex w-full sm:w-[90%] md:w-[70%] lg:w-[55%] xl:w-[45%] max-w-xl mx-auto rounded-full border border-gray-200 bg-white shadow-lg overflow-hidden">
          <input
            type="text"
            placeholder="Find your dream jobs"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-5 py-3 outline-none"
          />

          <Button
           variant="outline"
            onClick={searchJobHandler}
            className="rounded-r-full bg-[#6A38C2] hover:bg-[#5b30a6] px-6"
          >
            <Search className="h-5 w-5 " />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;