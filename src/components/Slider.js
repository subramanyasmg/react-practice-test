import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Slider() {
  const onChange = () => {};
  const onClickItem = () => {};
  const onClickThumb = () => {};

  return (
    <>
      <div className="" style={{ zIndex: 1 }}>
        <Carousel
          showArrows={true}
          onChange={onChange}
          onClickItem={onClickItem}
          onClickThumb={onClickThumb}
          className="z-10"
        >
          <div className="w-full sm:block md:hidden lg:hidden">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 absolute top-0 right-0 h-8 w-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <img
              src="../assets/images/1.jpeg"
              alt="img1"
              height="400px"
              width="400px"
            />
          </div>
          <div className="-z-50">
            <img
              src="../assets/images/2.jpeg"
              alt="img2"
              height="400px"
              width="400px"
            />
          </div>
          <div>
            <img
              src="../assets/images/3.jpeg"
              alt="img3"
              height="400px"
              width="400px"
            />
          </div>
          <div>
            <img
              src="../assets/images/4.jpeg"
              alt="img4"
              height="400px"
              width="400px"
            />
          </div>
          <div>
            <img
              src="../assets/images/5.jpeg"
              alt="img5"
              height="400px"
              width="400px"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
}
