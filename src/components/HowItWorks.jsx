import { howItWorks } from "../constants";

const HowItWorks = () => {
  return (
    <div className="pt-16">
      <p className="font-bold text-[16px] leading-[22px] text-center ">
        Here how it works
      </p>
      <h2 className="font-extrabold  text-center text-[36px] leading-[49px]">
        Simple process to start
      </h2>
      <div className="flex justify-center items-center text-center w-[1012px] h-[384px] m-auto pt-14">
        {howItWorks.map((how) => (
          <div
            className={`flex flex-col w-[320px] h-[384px] justify-center items-center mr-8 p-3 ${
              how.id === "digital marketing" ? "highlight" : ""
            }`}
            key={`${how.id}`}
          >
            <img
              src={`${how.imgUrl}`}
              alt={`${how.id}`}
              className="mb-5 w-[132px] h-[132px]"
            />
            <h3 className="mb-3 font-bold text-[16px] leading-[22px]">
              {`${how.title}`}{" "}
            </h3>
            <p className="font-semibold text-[16px] leading-[19px] text-[#A9B0BC]">{`${how.sub}`}</p>
          </div>
        ))}
      </div>
      <div>
        <div className=" cursor-pointer btn-2 bg-[#EBF2F3] flex items-center justify-center font-semibold text-[16px] leading-[21px] m-auto mt-20">
          {" "}
          All Features
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
