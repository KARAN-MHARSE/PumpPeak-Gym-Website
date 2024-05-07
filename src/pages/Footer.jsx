import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="font-Poppins text-white px-9 py-14 mb-1 bg-karanGrey rounded-3xl flex justify-between gap-4">
      {/* left div */}
      <div className="flex flex-col gap-3 max-w-[40%]">
        <h1 className="text-3xl font-bold flex items-center gap-2 ">
          <img className="size-[50px] rounded-full" src={logo} />
          PumpPeak
        </h1>
        <p className="text-[12px] text-[#ffffff80]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste nostrum
          ipsam cumque blanditiis natus, nulla quod necessitatibus nesciunt esse
          illo neque odit error reiciendis molestias veniam voluptas maxime,
          maiores molestiae at, reprehenderit culpa velit. Reprehenderit dolor
          consectetur provident optio veritatis nobis numquam architecto, rem
          necessitatibus expedita
        </p>
        <h1 className="font-semibold">FOLLOW US</h1>
        <div className="grid grid-cols-2 gap-2 max-w-[200px]">
          <button className="text-[13px] text-[#ffffff80] p-2 border-2 border-karanLightGrey rounded-3xl">
            Instagram
          </button>
          <button className="text-[13px] text-[#ffffff80] p-2 border-2 border-karanLightGrey rounded-3xl">
            YouTube
          </button>
          <button className="text-[13px] text-[#ffffff80] p-2 border-2 border-karanLightGrey rounded-3xl">
            TikTok
          </button>
          <button className="text-[13px] text-[#ffffff80] p-2 border-2 border-karanLightGrey rounded-3xl">
            Facebook
          </button>
        </div>
      </div>
      {/* middle div */}
      <div className="hidden md:inline-block">
        <h1 className="text-lg font-semibold">OUR LINKS</h1>
        <div className="flex flex-col gap-2 mt-5">
          <a className="text-[12px] whitespace-nowrap" href="#about">
            ABOUT US
          </a>
          <a className="text-[12px] whitespace-nowrap" href="#staff-details">
            COACHES
          </a>
          <a className="text-[12px] whitespace-nowrap" href="#training">
            TRAINING TYPE
          </a>
          <a className="text-[12px] whitespace-nowrap" href="#review">
            REVIEWS
          </a>
          <a className="text-[12px] whitespace-nowrap" href="#">
            SPORTS NUTRITIONS
          </a>
          <a className="text-[12px] whitespace-nowrap" href="#faq">
            FAQ
          </a>
          <a className="text-[12px] whitespace-nowrap" href="#contctUs">
            CONTACTS
          </a>
        </div>
      </div>
      {/* right div */}
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold">NEWS</h1>
        <p className="text-[12px] text-[#ffffff80]">
          Sign up our newsLetter to stay up to date with the latest events and
          relevant updates!
        </p>
        <div>
          <input
            className="bg-[#10131a] px-3 py-2 w-full rounded-xl"
            type="email"
            placeholder="E-mail"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
