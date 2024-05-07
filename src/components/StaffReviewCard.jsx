import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function StaffCard({ type, data }) {
  console.log(data);
  return (
    <div>
      {type != "reviewCard" ? (
        <div className="font-Poppins max-w-[280px] max-h-[280px] sm:w-[310px] sm:max-h-[600px]  bg-karanGrey hover:border-b-2 border-karanYellow rounded-xl pb-2 ">
          <img
            src={data.image}
            className="h-[270px] w-full object-center overflow-hidden rounded-t-xl object-cover"
          />
          <div className="py-2">
            <h1 className="text-white text-center">{data.name}</h1>
            <p className="text-karanLightGrey text-[12px] text-center mx-2">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-karanLightGrey text-[12px] text-center mx-2">
              exp:{data.exp}
            </p>
          </div>
          <div className="w-full flex gap-3 text-[20px] items-center justify-center text-white ">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>
      ) : (
        <div className="font-Poppins text-white max-w-[280px] max-h-[280px] sm:max-w-[310px] sm:max-h-[310px] p-6 bg-karanGrey rounded-xl">
          {/* header */}
          <div className="flex gap-2 items-center">
            <img
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
              className="size-[40px] rounded-full"
            />
            <div>
              <h1 className="font-bold">Karan,21 y.o.</h1>
              <p className="text-[12px]">Software Developer</p>
            </div>
            <p className="text-[12px] ml-5">⭐⭐⭐⭐⭐</p>
          </div>
          {/* content */}
          <p className="text-[13px] italic mt-5">
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur recusandae facilis quod cum minus eum. Porro quia
            animi, mollitia perferendis voluptas necessitatibus, consequuntur
            consequatur deserunt minima recusandae consectetur error harum.
            Mollitia, vitae."
          </p>
        </div>
      )}
    </div>
  );
}

export default StaffCard;

<img
  src=""
  srcset=""
  alt="Free Woman Wearing Black Eyeglasses Stock Photo"
  class="spacing_noMargin__F5u9R PhotoZoom_image__2c8qM"
  width="6000"
  height="4000"
  style="transform: none; background: rgb(156, 161, 160);"
></img>;
