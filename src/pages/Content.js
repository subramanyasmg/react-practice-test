import React from "react";
import Left from "./Left";
import RightPanel from "./RightPanel";
import Slider from "../components/Slider";
import { products } from "../server";
import ImageScroll from "../components/ImageScroller";

export default function Content() {
  const selectedProduct = products[0];
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full hidden md:block lg-flex md:w-1/3 p-2 h-screen sticky top-0">
        <Left />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <div className="sm:flex md:hidden lg:hidden bg-green">
          <Slider />
        </div>
        <div className=" hidden sm:hidden md:flex lg:flex">
            <ImageScroll product={selectedProduct} />
        </div>
        <div className="grid place-items-center hidden md:block lg:block">
          <div className="uppercase font-semibold"> a note from the editor</div>
          <div>
            <p className="grid place-items-center pt-4 text-gray-800">
              {selectedProduct.details}
            </p>
            <div class="inline-flex place-items-center py-4">
              <div class="flex-shrink text-1xl px-4 h-px bg-gray-400"></div>
              <span class="flex-shrink text-1xl text-gray-500 px-4 italic font-light">
                By <span className="uppercase underline">Minna Shim</span>, <span>Fashion Editor</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4 h-screen sticky top-0">
        <RightPanel selectedProduct={selectedProduct} />
      </div>
    </div>
  );
}
