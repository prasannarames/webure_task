import { logo, arrowRight } from "../assets";
import { navLinks } from "../constants";
const Header = () => {
  return (
    <nav className="w-full flex justify-between items-center py-6 ">
      <div className="flex items-center justify-between">
        <img src={`${logo}`} alt="webure_logo" className="w-[96px] h-[92px]" />
        <p className="leading-[37px] text-[27px] font-bold ml-2">Webure</p>
      </div>
      <ul className="flex justify-between items-center">
        {navLinks.map((nav) => (
          <li
            key={`${nav.id}`}
            className="cursor-pointer list-none mr-10 text-[21px] leading-[29px] font-semibold text-light"
          >
            <a href={`#${nav.id}`}>{`${nav.title}`}</a>
          </li>
        ))}
      </ul>
      <div className="flex text-[18px] leading-[25px] font-semibold items-center justify-center text-white btn bg-btn-orange cursor-pointer">
        Contact Us{" "}
        <span>
          <img src={`${arrowRight}`} alt="arrow" />
        </span>
      </div>
    </nav>
  );
};

export default Header;
