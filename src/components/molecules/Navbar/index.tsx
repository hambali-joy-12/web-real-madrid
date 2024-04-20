import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { MdMoreVert } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Navaitems from "../../atoms/NavaiTems";
import { NAV_ITEM } from "../../../constant/const";

const Navbar = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  return (
    <div>
      <nav className="bg-white h-[9vh] flex justify-between items-center p-9">
        <div className="flex items-center justify-center gap-4">
          <button
            className={`rounded-lg p-[6px] ${isOpenSidebar ? "bg-indigo-200 text-indigo-800" : ""
              }`}
            onClick={() => setIsOpenSidebar(!isOpenSidebar)}
          >
            <RxHamburgerMenu size={30} />
          </button>
          <div className="flex items-center gap-3">
            <img
              src="/assets/images/real-madrid-logo.png"
              alt="logo-real-madrid"
              className="h-[6vh]"
            />
            <div className="h-[5vh] bg-slate-200 w-px"></div>
            <img
              src="/assets/images/champions.webp"
              alt="ucel-14"
              className="h-[6vh]"
            />
          </div>
        </div>

        <div className="hidden lg:flex gap-4">
          {NAV_ITEM.map((item) => (
            <Navaitems link={item.url} name={item.name} key={item.name} />
          ))}
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden lg:flex items-center gap-5">
            <a href="#">
              <img
                src="/assets/icons/emirates_gray.svg"
                alt="adidas"
                className="h-[6vh]"
              />
            </a>

            <a href="#">
              <img
                src="/assets/icons/adidas_gray.svg"
                alt="adidas"
                className="h-[6vh]"
              />
            </a>

            <button className=" text-gray-300 hover:text-indigo-600 transition-all duration-700">
              <MdMoreVert size={20} />
            </button>
          </div>
          <button className="flex items-center justify-center gap-2 border-2
            border-indigo-600 text-indigo-600 font-medium p-2 rounded-lg">
            {" "}
            <CiUser size={30} /> Sign in
          </button>
        </div>
      </nav>

      {isOpenSidebar ? <div className="h-[91vh] bg-red-900"></div> : null}
    </div>
  );
};

export default Navbar;
