import React from "react";
import Card from "../components/Card";

function Training() {
  const data = [
    {
      name: "Mountain Pose",
      image:
        "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
    },
    {
      name: "Chair Pose (Utkatasana)",
      image:
        "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
    },
    {
      name: "Downward-Facing Dog (Adho Mukha Svanasana)",
      image:
        "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
    },
    {
      name: "Warrior II (Virabhadrasana II)",
      image:
        "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
    },
    {
      name: "Triangle Pose (Trikonasana)",
      image:
        "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
    },
    {
      name: "Tree Pose (Vrksasana)",
      image:
        "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
    },
    {
      name: "Bridge Pose (Setu Bandha Sarvangasana)",
      image:
        "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
    },
    {
      name: "Bound Ankle Pose (Baddha Konasana)",
      image:
        "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
    },
  ];
  return (
    <div id="training" className="pt-20">
      <h1 className="ml-9 mb-6 text-3xl font-NeueMachina text-white">
        Training variety
      </h1>
      <div className="flex flex-wrap gap-10 w-full items-center justify-center">
        {data.map((d, index) => (
          <Card data={d} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Training;
