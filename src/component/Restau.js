import React from 'react';

const Restau = ({ data }) => {
  return (
    <div className=" w-full max-w-xs md:max-w-sm transition-transform duration-300 hover:scale-95">
      <div className="overflow-hidden  h-[202px] rounded-2xl">
        <img 
          className="  object-cover" 
          alt="resImage" 
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data?.info?.cloudinaryImageId}`} 
        />
      </div>
      <ul className="mt-3 text-sm md:text-base">
        <li className="font-bold">{data?.info?.name || "Restaurant Name"}</li>
        <li>⭐{data?.info?.avgRatingString || "N/A"}</li>
        <li className="text-gray-500">{data?.info?.costForTwo || "Price Not Available"}</li>
        <li className="text-gray-500">{data?.info?.areaName || "Location Not Available"}</li>
        <li className="overflow-hidden text-gray-500">{data?.info?.cuisines?.join(", ") || "No Cuisines Available"}</li>
      </ul>
    </div>
  );
};
export const withPromoted = (Restau)=>{
  return (data)=>{
    return(
      <>
      <label className='bg-black rounded-md'>Promoted</label>
      <Restau {...data}/>
      </>

    )
  }

}

export default Restau;
