import { whyUs } from "../assets";
import { strategies } from "../constants";
const WhyUs = () => {
  return (
    <div className="flex items-center justify-center mt-20 mb-24">
      <div className="w-[570px] h-[420px] m-auto">
        <p className="font-bold text-[22px] leading-[11px] text-[#FF5D22]">
          Why Us
        </p>
        <p className="font-bold text-[56px] leading-[67px] mt-4">
          What makes us
          <br /> stand out
        </p>
        {strategies.map((strategy) => (
          <div
            key={`${strategy.id}`}
            className="flex flex-col justify-center mb-6 mt-6"
          >
            <div className="flex items-center">
              <img src={`${strategy.imgUrl}`} alt="strategy-img" />
              <p className="font-bold text-[26px] leading-[67px] ml-3">{`${strategy.title}`}</p>
            </div>
            <p className="font-semibold text-[16px] leading-[19px] text-[#A9B0BC] mt-6">{`${strategy.sub}`}</p>
          </div>
        ))}
      </div>
      <div className="w-[442px] h-[418px]">
        <img src={`${whyUs}`} alt="logo" />
      </div>
    </div>
  );
};

export default WhyUs;
