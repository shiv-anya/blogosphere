import React from "react";
import StarIcon from "../assets/star-icon.png";

const Header = () => {
  return (
    <header>
      <nav className="w-full flex justify-between items-center border-b border-gray-100 px-5 py-2">
        <div className="flex items-center">
          <img src={StarIcon} alt="icon" className="h-12 w-12" />
          <div className="bg-gray-100 p-1 rounded-full flex items-center">
            <i class="fas fa-search text-gray-500 mx-2 my-1"></i>
            <input
              type="text"
              placeholder="Search by keywords"
              className="bg-gray-100 text-sm text-gray-500"
            />
          </div>
        </div>
        <div className="flex text-gray-500">
          <div className="flex items-center">
            <i class="fas fa-edit mr-2 text-2xl"></i>
            <p>Write</p>
          </div>
          <div className="mx-8">
            <i class="fas fa-bell text-2xl"></i>
          </div>
          <div className="flex items-center">
            <p className="mr-2">Name</p>
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
