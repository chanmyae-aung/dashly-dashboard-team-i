import React, { useState } from "react";
import { language } from "../../constants/nav";
import { stateContextCustom } from "../../context/StateContext";

const Languages = () => {
  const { setImage } = stateContextCustom();

  return (
    <ul
      className={`shadow-lg flex flex-col mt-3 justify-center py-2 w-40 rounded-lg bg-white`}
    >
      {language.map((i) => {
        const currentImg = i.image;
        // const imgUrl = currentImg.split('').splice(4,37).join('')

        return (
          <li
            onClick={() => {
              localStorage.removeItem("currentLanguage")
              localStorage.setItem("currentLanguage", currentImg);
              setImage(localStorage.getItem("currentLanguage"));
              console.log(imgUrl)
            }}
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
