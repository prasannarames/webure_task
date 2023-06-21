import {
  buildYourTeam,
  ourCampany,
  resources,
  services,
  socials,
  address,
} from "../constants";

const Footer = () => {
  return (
    <div>
      <div className="flex w-[1325px]  justify-between m-auto mt-5 border-b-2 mb-3 pb-8">
        <ul>
          <p className="mb-3 font-bold text-[22px] leading-[32px]">
            Our Company
          </p>
          {ourCampany.map((data) => (
            <li key={`${data.id}`}>
              <a
                className="cursor-pointer text-[18px] leading-[30px]"
                href={`#${data.title}`}
              >{`${data.title}`}</a>
            </li>
          ))}
        </ul>
        <ul>
          <p className="mb-3 font-bold text-[22px] leading-[32px]">
            Build Your Team
          </p>
          {buildYourTeam.map((data) => (
            <li key={`${data.id}`}>
              <a
                className="cursor-pointer text-[18px] leading-[30px]"
                href={`#${data.title}`}
              >{`${data.title}`}</a>
            </li>
          ))}
        </ul>
        <ul>
          <p className="mb-3 font-bold text-[22px] leading-[32px]">Services</p>
          {services.map((data) => (
            <li key={`${data.id}`}>
              <a
                className="cursor-pointer text-[18px] leading-[30px]"
                href={`#${data.title}`}
              >{`${data.title}`}</a>
            </li>
          ))}
        </ul>
        <ul>
          <p className="mb-3 font-bold text-[22px] leading-[32px]">Resources</p>
          {resources.map((data) => (
            <li key={`${data.id}`}>
              <a
                className="cursor-pointer text-[18px] leading-[30px]"
                href={`#${data.title}`}
              >{`${data.title}`}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex w-[1325px] justify-between items-center m-auto mb-3 ">
        <div>
          <label
            htmlFor="email"
            className="mr-3 font-semibold text-[16px] leading-[30px]"
          >
            Signup for webure emails
          </label>

          <input
            type="text"
            id="email"
            className="w-[326px] h-[55px] border-1 rounded-md "
          />
        </div>
        <div>
          <label
            htmlFor="region"
            className="mr-3 font-semibold text-[16px] leading-[30px]"
          >
            {" "}
            Choose region
          </label>
          <select
            id="region"
            className="bg-footer w-[195px] h-[55px] border-3 border-white rounded-md "
          >
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Canada">Canada</option>
          </select>
        </div>
        <div>
          <ul className="flex items-center">
            {socials.map((social) => (
              <li key={`${social.id}`}>
                <a href={`#${social.title}`}>
                  <img
                    className="w-[40px] h-[40px] ml-3"
                    src={`${social.imgUrl}`}
                    alt={`${social.title}`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col w-[1325px] m-auto items-end justify-center border-b-2 pb-8">
        <p className="secondary-footer font-bold text-[24px] leading-[30px]">
          +91-0123456789
        </p>
        <p className="secondary-footer font-bold text-[24px] leading-[30px] mt-2">
          sales@webure.in
        </p>
      </div>
      <div className="flex w-[1325px] items-center mt-8 border-b-2 pb-10 m-auto">
        {address.map((ad) => (
          <div key={`${ad.id}`} className={`w-[240px] h-[150px] m-auto`}>
            <ul
              className={`pl-4 pb-4 ${
                ad.id === 1 ? "border-l-0" : "border-l-2"
              }`}
            >
              <li className="font-bold text-[22px] leading-[32px]">{`${ad.country}`}</li>
              <li className="secondary-footer">{`${ad.city}`}</li>
              <li className="text-[18px] leading-[30px]">{`${ad.location}`}</li>
            </ul>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-8 mb-8">
        <p className=" font-semibold text-[18px] leading-[30px]">
          © 2021 Webure Technologies. All rights reserved.{" "}
          <span className="border-b-2 border-yellow-300">Privacy Policy </span>|{" "}
          <span className="border-b-2 border-yellow-300">ISMS Policy</span>
        </p>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="mr-5">
          <a href="https://github.com/prasannarames/webure_task">SOURCE</a>
        </h1>
        <h1>
          <a href="https://www.figma.com/file/ooUYPYw69dBb5B5JyLCTDs/Assestment?type=design&node-id=0%3A1&t=xvMMh1783UGOtjry-1">
            DESIGN LINK
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
