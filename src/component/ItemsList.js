import React from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../utils/slice';


const ItemList = ({data}) => {
  
    const {isVeg,name,description,defaultPrice,price,imageId}= data;
    const dispatch=useDispatch();
    
  
        return (
    <div className=' flex  justify-between  space-y-6 leading-[40px] py-9 border-b-2 last:border-b-0 border-gray-300   max-w-[1200px] mx-auto '>
        
      <div className='w-9/12'>
        <ul>
          <li>{isVeg?"🟢":"🔴"}</li>
          <li className='text-gray-900 text-2xl font-bold'>{name || "No name available"}</li>
          <li className='text-lg'>{description || "No description available"}</li>
          <li className=' text-xl'>
            {defaultPrice ? defaultPrice / 100 :price ? price / 100 : "Price not available"} Rupees
          </li>
        </ul>
        </div>
        <div className="relative w-4/12 ">
  {imageId && (
    <img
      className="rounded-lg object-cover h-[200px] w-[250px] ml-32"
      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
      alt={name}
    />
  )}
  <button onClick={()=>{dispatch(add(data))}} className="top-full  left-3/4 -translate-x-1/2 -translate-y-1/2 w-36 bg-white py-2 absolute font-bold text-xl text-green-700 rounded-xl shadow-lg">
    ADD
  </button>
</div>
</div>
  )
}

export default ItemList;
