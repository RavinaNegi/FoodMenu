import React from 'react';

const ScrolllItem = ({ data }) => {
  return (
    <div className="flex-shrink-0 snap-center min-w-[50px] sm:min-w-[80px] md:min-w-[150px] lg:min-w-[200px]">
      <img
        alt={data.accessibility?.altText || "Food Image"}
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${data.imageId || data.info?.cloudinaryImageId}`}
        className="rounded-lg w-48 h-auto"
      />
    </div>
  );
};

export default ScrolllItem;
