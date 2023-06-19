import { arrowblack, webSolutions } from "../assets";
const Expertise = () => {
  return (
    <div className="flex items-center pt-10">
      <div className="w-[512px] h-[420px] m-auto">
        <p className="font-bold text-[22px] leading-[11px] text-[#FF5D22]">
          Web Solutions
        </p>
        <p className="font-bold text-[47px] leading-[67px] pt-4">
          Strategics experiences
          <br /> ad visual appeal
        </p>
        <p className="font-semibold text-[16px] leading-[19px] text-[#A9B0BC] pt-6">
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry&#39;s standard dummy text ever <br />
          since the 1500s,simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&#39;s <br />
          standard dummy text ever since the 1500s,
        </p>
        <p className="flex items-center pt-6 font-bold text-[16px] leading-[19px] text-[#FF5D22] cursor-pointer">
          Read More{" "}
          <span className="ml-4">
            <img src={`${arrowblack}`} alt="arrow" />
          </span>
        </p>
      </div>
      <div>
        <img src={`${webSolutions}`} alt="employee_image" />
      </div>
    </div>
  );
};

export default Expertise;
