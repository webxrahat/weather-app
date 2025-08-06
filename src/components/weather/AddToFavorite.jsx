import React from "react";

export default function AddToFavorite() {
 return (
  <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
   <span>Add to Favourite</span>
   <img src="/heart.svg" alt="" />
  </button>
 );
}
