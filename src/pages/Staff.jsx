import React from "react";
import Card from "../components/Card";
import StaffCard from "../components/StaffReviewCard";
import { staff } from "../data";

function Staff() {
  return (
    <div id="staff-details" className="pt-20">
      <h1 className="ml-9 mb-6 text-3xl font-NeueMachina text-white">
        Coaching staff
      </h1>
      <div className="flex flex-wrap gap-10 w-full items-center justify-center">
        {staff.map((d, index) => (
          <StaffCard data={d} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Staff;
