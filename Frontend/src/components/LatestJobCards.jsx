import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";

const LatestJobCards = ({ job }) => {
  return (
    <div className="bg-white border border-blue-200 rounded-xl p-4 md:p-5 shadow-md hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col">
      
      {/* Company */}
      <div className="flex items-center gap-3 mb-4">
        <Button
          variant="outline"
          size="icon"
          className="h-14 w-14 rounded-full"
        >
          <Avatar className="h-10 w-10">
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>

        <div>
          <h2 className="text-lg font-semibold">
            {job?.company?.name}
          </h2>
          <p className="text-sm text-gray-500">
            India
          </p>
        </div>
      </div>

      {/* Job Details */}
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">
          {job?.title}
        </h2>

        <p className="text-sm text-gray-600 line-clamp-3">
          {job?.description}
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mt-5">
        <Badge
          variant="ghost"
          className="bg-blue-50 text-blue-700 rounded-full px-3 py-1"
        >
          {job?.position} Positions
        </Badge>

        <Badge
          variant="ghost"
          className="bg-green-50 text-green-700 rounded-full px-3 py-1"
        >
          {job?.jobType}
        </Badge>

        <Badge
          variant="ghost"
          className="bg-purple-50 text-purple-700 rounded-full px-3 py-1"
        >
          ₹ {job?.salary} LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;