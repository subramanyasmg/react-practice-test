import React, { useState } from "react";
import { currency, allSizes } from "../server";

export default function RightPanel({ selectedProduct}) {
  const [size, setSize] = useState("");

  const sizes = allSizes.map((s) => {
    const details = selectedProduct.availableSize.indexOf(s) !== -1 ? s : `<s>${s}</s>`;
    return (
      <React.Fragment>
        <div className="pr-5 pb-5 inline-flex">
          <button
            dangerouslySetInnerHTML={{ __html: details }}
            type="button"
            class="inline-block rounded-full bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
          />
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <div>
        <div>
          <div className="uppercase">{selectedProduct.productName}</div>
          <h6>{selectedProduct.productHighlights}</h6>
          <h5>
            {currency[0].currency}
            {selectedProduct.price}
          </h5>
        </div>
        <div>
          <div className="uppercase">
            {" "}
            <b>COLOR</b> {selectedProduct.color}
          </div>
          <div>small image goes....</div>
        </div>
        <div>
          <div className="uppercase inline-flex bold">Size: {size}</div>{" "}
          <div className="uppercase inline-flex float-right"> Size Guide</div>
          <div>{sizes}</div>
          <div>
            <button
              type="button"
              class="w-full inline-block rounded-full bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
            >
              Add to bag
            </button>
          </div>
          <div className="mt-6">
            <p>Get 4 interest-free payments of {currency[0].currency}{selectedProduct.interestFree} with Kiarna</p>
            <p>LEARN MORE</p>
          </div>
          <div className="mt-6">
            <p>Speak to a personal stylist <button>CHAT NOW</button></p>
          </div>
        </div>
      </div>
    </>
  );
}
