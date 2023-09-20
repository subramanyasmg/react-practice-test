import React, { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import { products } from "../server";
import { Link } from "react-router-dom";



export default function Left() {
  const [basicActive, setBasicActive] = useState("tab1");

  const selectedProduct = products[0];
  const Snippet = () => {
    var regex = /sky it has/;
    const details = selectedProduct.details.replace(regex, "<s>sky it has</s>");
    return (<React.Fragment>
      <div dangerouslySetInnerHTML={{ __html: details }} />
    </React.Fragment>);
  };

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  return (
    <div className="mb-4 md:sticky top-30">
      <TETabs>
        <TETabsItem
          onClick={() => handleBasicClick("tab1")}
          active={basicActive === "tab1"}
        >
          Details
        </TETabsItem>
        <TETabsItem
          onClick={() => handleBasicClick("tab2")}
          active={basicActive === "tab2"}
        >
          Delivery
        </TETabsItem>
        <TETabsItem
          onClick={() => handleBasicClick("tab3")}
          active={basicActive === "tab3"}
        >
          Fit
        </TETabsItem>
        <TETabsItem
          onClick={() => handleBasicClick("tab4")}
          active={basicActive === "tab3"}
        >
          Share
        </TETabsItem>
      </TETabs>

      <TETabsContent>
        <TETabsPane show={basicActive === "tab1"}>
            <div>{ Snippet()}</div>
            <div className="pt-5">
                <p>
                    see the <Link to="/"><span className="uppercase underline"> Editor's Note </span></Link>
                </p>
            </div>
            <div className="pt-5">
                <p>
                    Lear about the <Link to="/"><span className="uppercase underline"> Designer </span> </Link>
                </p>
            </div>
        </TETabsPane>
        <TETabsPane show={basicActive === "tab2"}>Delivery goes here</TETabsPane>
        <TETabsPane show={basicActive === "tab3"}>Fit goes here</TETabsPane>
        <TETabsPane show={basicActive === "tab4"}>Share goes here</TETabsPane>
      </TETabsContent>
    </div>
  );
}
