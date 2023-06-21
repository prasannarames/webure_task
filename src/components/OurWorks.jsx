import { works } from "../constants";
const OurWorks = () => {
  return (
    <div>
      <div className="mt-36 flex flex-col items-center">
        <p className="font-bold text-[20px] leading-[27px] text-[#ff5d22]">
          Our works
        </p>
        <p className="font-bold text-[36px] leading-[49px] ">
          Our case studies
        </p>
      </div>
      <div className="flex justify-center items-center text-center gap-10 mt-5">
        {works.map((work) => (
          <div
            key={`${work.id}`}
            className="flex flex-col w-[339px] h-[449px] justify-center items-center hover:border-2"
          >
            <img
              src={`${work.imgUrl}`}
              alt={`${work.title}`}
              className={`w-[339px] h-[339px] object-contain`}
              style={{ backgroundColor: `${work.bgColor}` }}
            />
            <p className="font-bold text-[26px] leading-[35px] mt-4">{`${work.title}`}</p>
            <p className="font-semibold text-[18px] leading-[25px] text-[#4F4F4F]">{`${work.category}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorks;
