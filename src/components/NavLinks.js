import React from "react";
import { navLinks } from "../server";
import { Link } from "react-router-dom";

export default function NavLinks({ linkClassName }) {
  return (
    <>
      {navLinks &&
        navLinks.length &&
        navLinks.map((e, index) => {
          return (
            <Link
              key={index}
              to={e.link}
              className={linkClassName}
            >
              {e.label}
            </Link>
          );
        })}
    </>
  );
}
