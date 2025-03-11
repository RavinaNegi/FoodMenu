import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemsList";
import { clear, remove } from "../utils/slice"; // Import remove action

const CartItems = (ItemList) => {
  return ({ items, onRemove }) => {
    return (
      <>
        {items.map((i, index) => (
          <div key={index} className="relative flex items-center space-x-4">
            <ItemList data={i} />
            <button
              className="absolute top-3 right-11 bg-red-500 rounded-lg p-2 text-white "
              onClick={() => onRemove(index)} // Pass index to remove item
            >
              Remove
            </button>
          </div>
        ))}
      </>
    );
  };
};

const Cart = () => {
  const items = useSelector((state) => state.appSlice.items);
  const dispatch = useDispatch();

  console.log("items", items);

  // ✅ Wrap ItemList with CartItems HOF
  const EnhancedItemList = CartItems(ItemList);
  const handleRemove=(index)=>{
    dispatch(remove(index)
  );
  }
  if(items.length==0) return (<div className="pt-[400px] py-4 w-[1200px]  mx-auto shadow-md p-2">
     <h1 className="font-bold text-center text-2xl">Cart</h1>
     <p className="font-bold text-2xl text-center p-2 ">Add items to the cart</p>

  </div>

  )

  return (
    <div className="pt-[400px] py-4 max-w-[1200px] h-full mx-auto shadow-md p-2">
      <h2 className="font-bold text-center text-2xl">Cart Items</h2>
      {items.length==0 && <button
        onClick={() => dispatch(clear())}
        className="bg-black rounded-lg p-2 text-white mr-0"
      >
        Clear Cart
      </button>}
      {/* ✅ Pass remove function */}
      <EnhancedItemList
        items={items}
        onRemove={handleRemove} // Handle item removal
      />
    </div>
  );
};

export default Cart;
