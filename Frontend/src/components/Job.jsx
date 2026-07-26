import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="bg-white border border-blue-200 rounded-xl p-5 shadow-md hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
      
      {/* Top */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
        >
          <Bookmark className="h-5 w-5" />
        </Button>
      </div>

      {/* Company */}
      <div className="flex items-center gap-3 mt-5">
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
      <div className="mt-5 flex-1">
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

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => navigate(`/description/${job?._id}`)}
        >
          Details
        </Button>

        <Button
        variant="outline"
        className="w-full bg-[#7209b7] hover:bg-[#5d0a92]">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;