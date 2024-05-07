import { FaArrowRightLong } from "react-icons/fa6";

function Starting() {
  return (
    <div className="text-white px-7 mt-10 flex flex-col ">
      {/* upper div */}
      <div className="flex">
        <h1 className="font-NeueMachina text-4xl lg:text-6xl ">
          Sculpt Your Strength, <br />
          Own Your Fitness!
        </h1>
        <div className="relative top-10 lg:top-12 -left-7 text-karanYellow hidden lg:flex">
          <FaArrowRightLong size={105} />
        </div>
        <div className="relative top-10 lg:top-20 -left-7 text-karanYellow lg:hidden">
          <FaArrowRightLong size={50} />
        </div>
        <div className="relative font-Poppins top-12 lg:top-20 flex gap-3 lg:gap-10 lg:ml-20">
          <button className="bg-karanYellow px-3 h-10 rounded-xl lg:text-2xl">
            MemberShip
          </button>
          <button className="border-2 text-nowrap border-karanYellow px-3 h-10 rounded-xl lg:text-2xl">
            Find a gym
          </button>
        </div>
      </div>
      {/* lower div */}
      <div className="flex  mt-8 gap-5">
        <div className=" md:basis-[70%] ">
          <img
            className="w-[900px] h-[500px] rounded-xl object-fit"
            src="https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg"
            alt=""
          />
        </div>

        <div className="flex flex-col basis-[40%] hidden md:flex">
          <img
            className="h-[430px] w-[90%] rounded-xl object-center"
            src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg"
            alt=""
          />
          <p className="font-Poppins text-sm line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia
            optio nulla mollitia error aperiam, enim nemo necessitatibus natus
            harum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Starting;
