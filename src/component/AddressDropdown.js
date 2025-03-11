import { useState } from "react";

 function AddressDropdown() {
  const [selected, setSelected] = useState("Select Address");
  const addresses = ["Home", "Work", "Office", "Other"];

  return (
    <div className="relative w-64">
      <button
        onClick={() => setSelected(null)}
        className="w-full p-2 border rounded-lg bg-white flex justify-between items-center"
      >
        {selected || "Select Address"}
      </button>

      {!selected && (
        <ul className="absolute left-0  mt-2 w-full bg-white border rounded-lg shadow-md">
          {addresses.map((address) => (
            <li
              key={address}
              onClick={() => setSelected(address)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {address}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default AddressDropdown;
