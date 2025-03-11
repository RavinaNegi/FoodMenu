import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import REsCategory from "./REsCategory";

const ResData = () => {
  const [data, setData] = useState(null);
  const [showIndex, setShowIndex] = useState(null);

  let { resId } = useParams();

  useEffect(() => {
    getResData();
  }, [resId]);

  const getResData = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${resId}&submitAction=ENTER`
      );
      const json = await response.json();
      setData(json?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (data === null) return <p className="text-center text-lg">Loading...</p>;

  console.log("Fetched data:", data);
  const text = data?.cards?.[0]?.card?.card?.text;

  const categories =
    data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (f) =>
        f.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  console.log("Categories:", categories);

  return (
    <div className="pt-20 sm:pt-32 md:pt-40 py-4 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] mx-auto">
      {/* ✅ Restaurant Title */}
      <div className="my-2 sm:my-3">
        <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
          {text}
        </p>
      </div>

      {/* ✅ Categories List */}
      <div className="my-2 sm:my-3 flex flex-col gap-4">
        {categories.map((d, index) => (
          <REsCategory
            key={index}
            data={d.card.card}
            showItem={index === showIndex}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ResData;
