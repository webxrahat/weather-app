import React from "react";
import Logo from "./Logo";
import Favorite from "./Favorite";
import FavoriteListModal from "./FavoriteListModal";

export default function Header() {
 return (
  <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
   <nav className="container flex items-center justify-between py-6">
    <Logo />

    <div className="flex items-center gap-4 relative">
     <Favorite />
     <FavoriteListModal />
    </div>
   </nav>
  </header>
 );
}
// dc381a7c5ae5a93ef0db548f634a6c3c
