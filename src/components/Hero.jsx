import {
  heroImg,
  cloud1,
  cloud2,
  linkedin,
  instagram,
  youtube,
  fb,
  twitter,
  whatsapp,
  behance,
  pinterest,
} from "../assets";
const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-10 h-[875px] relative top-0 left-0">
      <div className="absolute top-[46px] left-[214px]">
        <img src={`${cloud1}`} alt="cloud" />
      </div>
      <div className="absolute top-[174px] left-[1214px]">
        <img src={`${cloud2}`} alt="cloud" />
      </div>
      <h2 className="font-bold text-[40px] leading-[54px] text-center mb-5 ">
        We ensure and transform <br /> business growing
      </h2>
      <p className="mb-5 font-semibold text-[14px] leading-[19px] text-light text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem <br />
        Ipsum has been the industry&#39;s standard dummy text
      </p>
      <div className="flex mb-5 gap-5">
        <div className=" cursor-pointer btn-2 bg-btn-orange text-white flex items-center justify-center font-semibold text-[16px] leading-[21px]">
          {" "}
          Get Started
        </div>
        <div className=" cursor-pointer btn-2 bg-btn-white flex items-center justify-center font-semibold text-[16px] leading-[21px] text-light">
          {" "}
          Learn More
        </div>
      </div>
      {/* row 1 socials */}
      <div>
        <img src={`${heroImg}`} alt="" />
      </div>
      <div className="absolute top-[654px] left-[4px] h-[113px] w-[107px]">
        <img src={`${linkedin}`} alt="linkedin" />
      </div>
      <div className="absolute top-[654px] left-[257px] h-[113px] w-[107px]">
        <img src={`${instagram}`} alt="instagram" />
      </div>
      <div className="absolute top-[654px] left-[946px] h-[113px] w-[107px]">
        <img src={`${youtube}`} alt="youtube" />
      </div>
      <div className="absolute top-[654px] left-[1223px] h-[113px] w-[107px]">
        <img src={`${behance}`} alt="behance" />
      </div>
      {/* row 2 socials */}
      <div className="absolute top-[554px] left-[124px] h-[113px] w-[107px]">
        <img src={`${fb}`} alt="fb" />
      </div>
      <div className="absolute top-[554px] left-[424px] h-[113px] w-[107px]">
        <img src={`${twitter}`} alt="twitter" />
      </div>
      <div className="absolute top-[554px] left-[1084px] h-[113px] w-[107px]">
        <img src={`${whatsapp}`} alt="whatsapp" />
      </div>
      <div className="absolute top-[554px] left-[1338px] h-[113px] w-[107px]">
        <img src={`${pinterest}`} alt="pinterest" />
      </div>
    </div>
  );
};

export default Hero;
