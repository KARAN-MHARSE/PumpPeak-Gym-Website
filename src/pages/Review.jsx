import React from "react";
import StaffCard from "../components/StaffReviewCard";

function Review() {
  return (
    <div id="review" className="pt-20">
      <h1 className="ml-9 mb-6 text-3xl font-NeueMachina text-white">
        Reviews
      </h1>
      <div className=" flex gap-5 flex-wrap items-center justify-center">
        <StaffCard type="reviewCard" />
        <StaffCard type="reviewCard" />
        <StaffCard type="reviewCard" />
        <StaffCard type="reviewCard" />
      </div>
    </div>
  );
}

export default Review;
