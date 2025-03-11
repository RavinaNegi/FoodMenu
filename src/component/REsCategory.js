import React from "react";
import ItemList from "./ItemsList";

const REsCategory = ({ data, showItem, setShowIndex }) => {
  const { itemCards } = data;
  console.log("itemlist", itemCards);

  const handleShowItem = () => {
    setShowIndex();
  };

  return (
    <div className="my-2 sm:my-3 md:my-4 border-b-[10px] sm:border-b-[20px] md:border-b-[30px] border-gray-200">
      {/* ✅ Title Section */}
      <div
        className="py-1 sm:py-2 md:py-3 flex justify-between items-center cursor-pointer"
        onClick={handleShowItem}
      >
        <span className="font-bold text-xl sm:text-2xl md:text-3xl">
          {data.title}
        </span>
        <span className="text-lg sm:text-xl md:text-3xl">⬇️</span>
      </div>

      {/* ✅ Items List */}
      <div className="ml-2 sm:ml-4">
        {showItem &&
          itemCards.map((item, index) => (
            <ItemList key={index} data={item.card.info} />
          ))}
      </div>
    </div>
  );
};

export default REsCategory;
