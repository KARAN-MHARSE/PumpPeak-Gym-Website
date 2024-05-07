import React from "react";

function Card({ data, type }) {
  // console.log(type == "card");
  return (
    <div>
      {type === "card" ? (
        <div className="font-Poppins max-w-[280px] max-h-[280px] sm:max-w-[310px] sm:max-h-[310px] p-6 bg-karanGrey rounded-xl hover:rotate-3 transition duration-150 ease-in-out">
          <h1 className="text-karanYellow fotn font-semibold mb-4">
            {data.title}
          </h1>
          <p className="text-white text-[14px]">{data.desc}</p>
        </div>
      ) : (
        <div className="font-Poppins max-w-[280px] max-h-[280px] sm:max-w-[310px] sm:max-h-[310px]   rounded-t-xl hover:animate-pulse">
          <img
            className=" w-full h-full overflow-hidden rounded-xl"
            src={data.image}
            alt=""
          />
          <h1 className=" rounded-b-xl p-2 text-karanYellow fotn font-semibold bg-karanGrey mb-4 ">
            {data.name}
          </h1>
        </div>
      )}
    </div>
  );
}

export default Card;
