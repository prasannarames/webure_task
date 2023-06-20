import {
  buildYourTeam,
  ourCampany,
  resources,
  services,
  socials,
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
      <div className="flex w-[1325px] justify-between items-center m-auto mb-10">
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
    </div>
  );
};

export default Footer;
