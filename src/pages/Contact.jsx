import { FaShareAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";

function Contact() {
  return (
    <div id="contctUs" className="py-20 text-white">
      <h1 className="ml-9 mb-6 text-3xl font-NeueMachina text-white">
        Contact us
      </h1>
      <div className=" px-9 flex gap-8 font-Poppins h-[350px] justify-center mt-10">
        <div className="basis-[40%] flex flex-col gap-4">
          {/* contact card */}
          <div className="bg-karanGrey p-3 rounded-xl hover:border-b-2 border-karanYellow">
            <div className="flex justify-between items-center">
              <p className="text-[14px] text-white font-semibold">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <FaShareAlt color="#FFBE17" />
            </div>
            <div className="flex justify-between mt-3">
              <div className="flex gap-1 items-center">
                <IoIosCall color="#FFBE17" />
                <p className="text-[13px] whitespace-nowrap ">+91 1234567890</p>
              </div>
              <div className="flex gap-1 items-center">
                <FaMessage color="#FFBE17" />
                <p className="text-[13px] whitespace-nowrap ">
                  karanm@gmail.com
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <p className="text-[12px] whitespace-nowrap ">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
          <div className="bg-karanGrey p-3 rounded-xl hover:border-b-2 border-karanYellow">
            <div className="flex justify-between items-center">
              <p className="text-[14px] text-white font-semibold">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <FaShareAlt color="#FFBE17" />
            </div>
            <div className="flex justify-between mt-3">
              <div className="flex gap-1 items-center">
                <IoIosCall color="#FFBE17" />
                <p className="text-[13px] whitespace-nowrap ">+91 1234567890</p>
              </div>
              <div className="flex gap-1 items-center">
                <FaMessage color="#FFBE17" />
                <p className="text-[13px] whitespace-nowrap ">
                  karanm@gmail.com
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <p className="text-[12px] whitespace-nowrap ">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
          <div className="bg-karanGrey p-3 rounded-xl hover:border-b-2 border-karanYellow">
            <div className="flex justify-between items-center">
              <p className="text-[14px] text-white font-semibold">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <FaShareAlt color="#FFBE17" />
            </div>
            <div className="flex justify-between mt-3">
              <div className="flex gap-1 items-center">
                <IoIosCall color="#FFBE17" />
                <p className="text-[13px] whitespace-nowrap ">+91 1234567890</p>
              </div>
              <div className="flex gap-1 items-center">
                <FaMessage color="#FFBE17" />
                <p className="text-[13px] whitespace-nowrap ">
                  karanm@gmail.com
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <p className="text-[12px] whitespace-nowrap ">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
          <div className="bg-karanGrey p-3 rounded-xl hover:border-b-2 border-karanYellow">
            <div className="flex justify-between items-center">
              <p className="text-[14px] text-white font-semibold">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <FaShareAlt color="#FFBE17" />
            </div>
            <div className="flex justify-between mt-3">
              <div className="flex gap-1 items-center">
                <IoIosCall color="#FFBE17" />
                <p className="text-[13px] whitespace-nowrap ">+91 1234567890</p>
              </div>
              <div className="flex gap-1 items-center">
                <FaMessage color="#FFBE17" />
                <p className="text-[13px] whitespace-nowrap ">
                  karanm@gmail.com
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <p className="text-[12px] whitespace-nowrap ">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
        </div>

        <img
          className="max-w-[500px] rounded-xl hidden lg:flex"
          src="https://images.pexels.com/photos/21014/pexels-photo.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Contact;
