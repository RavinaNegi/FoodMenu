import React, { useContext } from "react";
import AddressDropdown from "./AddressDropdown";
import IsOnline from "./IsOnline";
import { Link } from "react-router-dom";
import Context from "./Context";
import { useSelector } from "react-redux";

const Head = () => {
  const { username,setUserName } = useContext(Context);
  const items = useSelector((state) => state.appSlice.items);
  const isOnline = IsOnline();

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-orange-500 shadow-lg p-4 md:p-6">
      {/* Main Header Container */}
      <div className="flex flex-wrap items-center justify-between max-w-7xl mx-auto">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-4">
          <img
            className="w-[80px] h-auto md:w-[100px]"
            alt="swiggy-logo"
            src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
          />
          <Link to={"/"}>
            <p className="text-3xl md:text-4xl">🏠</p>
          </Link>
        </div>

        {/* Middle Section: Search & Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <AddressDropdown />
          <Link to={"/grocery"} className="font-bold text-white text-lg">
            Grocery
          </Link>
          <Link to={"/cart"} className="font-bold text-white text-lg">
            Cart ({items.length})
          </Link>
          <div className="flex items-center bg-white rounded-lg p-2 shadow-md w-full md:w-[300px]">
            <input
              className="w-full outline-none bg-transparent px-2 text-black"
              placeholder="Search for a restaurant"
            />
            <button className="bg-black text-white px-4 py-1 rounded-lg">
              Search
            </button>
          </div>
        </div>

        {/* Right Section: Sign-in & Status */}
        <div className="flex items-center space-x-4">
          <p className="text-lg text-white">
            Status: {isOnline ? "🟢 Online" : "🔴 Offline"}
          </p>
          
         </div>
      </div>

      {/* Header Text & Images */}
      <div className="flex flex-col items-center text-center w-full mt-6">
        {/* Decorative Images */}
        <img
          className="absolute left-4 top-16 w-[80px] md:w-[120px] hidden sm:block"
          alt="left decoration"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
        />

        {/* Main Header Text */}
        <h1 className="text-white font-bold text-2xl md:text-3xl max-w-[600px] mx-auto">
          Order food & groceries. Discover the best restaurants. Swiggy it!
        </h1>

        {/* Right Decorative Image */}
        <img
          className="absolute right-4 top-16 w-[80px] md:w-[120px] hidden sm:block"
          alt="right decoration"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
        />
      </div>
    </div>
  );
};

export default Head;
