import { useEffect, useState } from "react";
import { arrowblack, webSolutions } from "../assets";
import { stats } from "../constants";

const Expertise = () => {
  const [count, setCount] = useState(0);
  
  const maximum = 10;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < maximum) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="flex items-center mt-10">
        <div className="w-[570px] h-[420px] m-auto">
          <p className="font-bold text-[22px] leading-[11px] text-[#FF5D22]">
            Web Solutions
          </p>
          <p className="font-bold text-[47px] leading-[67px] mt-4">
            Strategics experiences
            <br /> ad visual appeal
          </p>
          <p className="font-semibold text-[16px] leading-[19px] text-[#A9B0BC] mt-6">
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&#39;s standard dummy text ever <br />
            since the 1500s,simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s <br />
            standard dummy text ever since the 1500s,
          </p>
          <p className="flex items-center mt-6 font-bold text-[16px] leading-[19px] text-[#FF5D22] cursor-pointer">
            Read More{" "}
            <span className="ml-4">
              <img src={`${arrowblack}`} alt="arrow" />
            </span>
          </p>
        </div>
        <div className="w-[412px] h-[418px]">
          <img src={`${webSolutions}`} alt="employee_image" />
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 w-[1227px] h-[268px] m-auto ">
        {stats.map((stat) => (
          <div
            key={`${stat.id}`}
            className=" flex flex-col justify-center items-center w-[232px] h-[232px] rounded-md boxShadow mt-10"
          >
            <p className="font-bold text-[94px] leading-[127px]">{count}+</p>
            <p className="font-bold text-[27px] leading-[38px] text-[#828282]">
              {stat.statTitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
