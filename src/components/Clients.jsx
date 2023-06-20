import { clients, johnDoe } from "../assets";
const Clients = () => {
  return (
    <div className="flex mt-10">
      <div className="w-[1363px] h-[620px]">
        <img src={`${clients}`} alt="clients" />
      </div>
      <div className="flex flex-col mt-10 p-4">
        <p className="font-bold text-[20px] leading-[27px] text-[#ff5d22] mt-2">
          Our clients
        </p>
        <p className="font-bold text-[36px] leading-[49px] mt-2">
          Love form happy clients from
          <br /> the entire world
        </p>

        <p className="font-semibold text-[16px] leading-[19px] text-[#828282] mt-2">
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry&#39;s standard dummy text ever since the
          1500s,simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry&#39;s standard dummy text ever since
          the 1500s,
        </p>

        <div className="flex items-center mt-5">
          <img src={`${johnDoe}`} alt="johndoe" />
          <div className="ml-4">
            <p className="font-bold text-[24px] leading-[19px]">Mr. John Doe</p>
            <p className="font-semibold text-[18px] leading-[19px] text-[#4F4F4F] mt-3">
              Design Manager
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
