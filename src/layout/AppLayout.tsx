import {
  activedLinkClassName,
  commonClassName,
  navBarItem,
} from "@/constants/constant";

import { NavLink, Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* SIDE BAR ELEMENT */}
      <div className="h-full w-80 bg-gray-100">
        {/* SIDE TOP ELEMENT */}
        <div className="pt-5">
          <div className="flex items-center justify-center">
            <img className="w-44 h-auto" src={""} alt="logo" />
          </div>
          <h1 className="text-xl pt-4 text-sbbsBlue leading-3 font-extrabold ml-6 ">
            Spider test
          </h1>
        </div>

        {/* NAVIGATIONS */}

        <div className="flex-1 flex-col pt-7 px-4 py-4 gap-1">
          {navBarItem.map((item) => (
            <NavLink
              key={item.id}
              to={item.href}
              className={({ isActive }) =>
                !isActive ? commonClassName : activedLinkClassName
              }
            >
              <span>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* OUTLET (THE CHILDREN) */}
      <div className="outlet overflow-y-scroll w-full no-scrollbar p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
