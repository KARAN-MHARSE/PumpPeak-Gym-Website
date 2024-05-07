import React from "react";
import Card from "../components/Card";

function About() {
  const data = {
    title: "Variety of training",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sediure sapiente dolorem nihil, quae, officia numquam aut ab saepe nullavoluptates possimus",
  };
  return (
    <div id="about" className="pt-24">
      <h1 className="ml-9 mb-6 text-3xl font-NeueMachina text-white">
        About Us
      </h1>
      <div className="flex flex-wrap gap-10 w-full items-center justify-center">
        <Card type={"card"} data={data} />
        <Card type={"card"} data={data} />
        <Card type={"card"} data={data} />
        <Card type={"card"} data={data} />
        <Card type={"card"} data={data} />
        <Card type={"card"} data={data} />
        <Card type={"card"} data={data} />
        <Card type={"card"} data={data} />
      </div>
    </div>
  );
}

export default About;
