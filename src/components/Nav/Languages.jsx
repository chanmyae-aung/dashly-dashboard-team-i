import React, { useState } from "react";
import { language } from "../../constants/nav";
import { stateContextCustom } from "../../context/StateContext";

const Languages = () => {
const {setImage} = stateContextCustom()
  return (
    <ul
      className={`flex flex-col mt-3 justify-center py-2 w-40 rounded-lg bg-white`}
    >
      {language.map((i) => {
        let currentImg = i.image;
        return (
          <li
            onClick={() => setImage(currentImg)}
            key={i.id}
            className="nav-dropdown"
          >
            <img src={i.image} alt="" className="w-[20px]" />
            <p>{i.title}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Languages;
