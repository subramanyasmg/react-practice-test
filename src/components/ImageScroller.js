import React from "react";

export default function ImageScroll({product}) {
  return (
    <>
      <div className="w-full sm:hidden md:block lg:block grid place-items-center">
        { product && product.image.map((e) => {
                return (
                    <div className="grid place-items-center">
                        <img src={`../assets/images/${e}`} alt={e} width="400px" height="400px"/>
                    </div>
                )
            })
        }
      </div>
    </>
  );
}
