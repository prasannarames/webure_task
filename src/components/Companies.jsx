import { companiesLogo } from "../constants";
import "./Companies.css";

const Companies = () => {
  return (
    <div>
      <div>
        <p className="font-bold items-center text-center text-[36px] leading-[49px]">
          Trust by over 20 companies
        </p>
      </div>
      <div className="slider flex h-[90px] w-[1550px] justify-center items-center">
        <div className="slider-track flex">
          <div className=" slide flex text-center mr-2 gap-10">
            {companiesLogo.map((company) => (
              <img
                className="comp-img"
                key={`${company.id}`}
                src={`${company.imgUrl}`}
                alt={`${company.id}`}
              />
            ))}
          </div>

          <div className="slide flex text-center ml-2 gap-10">
            {companiesLogo.map((company) => (
              <img
                className="comp-img"
                key={`${company.id}`}
                src={`${company.imgUrl}`}
                alt={`${company.id}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="hr flex items-center mt-10">
        <hr/>
      </div>
    </div>
  );
};

export default Companies;
