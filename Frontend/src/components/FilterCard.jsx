import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi",
      "Bangalore",
      "Hyderabad",
      "Pune",
      "Mumbai",
      "Lucknow",
    ],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "FullStack Developer",
      "ML/AI",
      "Microsoft Excel Specialist",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "40k-1 Lakh", "1 Lakh - 5 Lakh"],
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue, dispatch]);

  return (
    <div className="w-full bg-white rounded-2xl p-5 shadow-md border sticky top-24">
      <h2 className="text-xl font-bold">Filter Jobs</h2>

      <hr className="my-4" />

      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((data, index) => (
          <div key={index} className="mb-6">
            <h3 className="font-semibold text-lg mb-3">
              {data.filterType}
            </h3>

            {data.array.map((item, idx) => {
              const itemId = `id-${index}-${idx}`;

              return (
                <div
                  key={itemId}
                  className="flex items-center space-x-2 mb-2"
                >
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId}>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;