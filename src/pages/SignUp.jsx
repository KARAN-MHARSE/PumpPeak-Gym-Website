import React from "react";

function SignUp() {
  return (
    <div id="signUp" className="pt-20">
      <h1 className="ml-9 mb-6 text-3xl font-NeueMachina text-white">
        Sign Up
      </h1>
      <div className=" px-9 flex gap-8 font-Poppins h-[350px] justify-center mt-10">
        <div className="basis-[40%]">
          <form className="flex flex-col gap-3 ">
            <div className="flex gap-2 w-full">
              <input
                type="text"
                placeholder="Full Name"
                className="p-2 bg-karanGrey rounded-lg"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-2 bg-karanGrey rounded-lg"
              />
            </div>
            <input
              type="email"
              placeholder="E-Mail"
              className="p-2 bg-karanGrey rounded-lg"
            />
            <input
              type="number"
              placeholder="Mobile Number"
              className="p-2 bg-karanGrey rounded-lg"
            />
            <textarea
              className="p-2 bg-karanGrey rounded-lg"
              placeholder="Message"
            ></textarea>
            <button className="bg-karanYellow p-2  font-bold rounded-xl">
              Sign Up
            </button>
          </form>
        </div>

        <img
          className="max-w-[500px] rounded-xl hidden lg:flex"
          src="https://images.pexels.com/photos/700392/pexels-photo-700392.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}

export default SignUp;
