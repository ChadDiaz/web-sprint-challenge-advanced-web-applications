import React, { useEffect, useState } from "react";
import axiosWithAuth from "../helpers/axiosWithAuth";
import { fetchColors } from "../helpers/fetchColors";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  const getColors = () => {
    fetchColors()
      .then((res) => {
        // console.log("cd: BubblePage.js: axios.get response: ", res);
        setColorList(res.data);
      })
      .catch((err) => {
        // console.log("cd: BubblePage.js: axios.get error: ", err);
      });
  };
  useEffect(() => {
    getColors();
  }, []);

  if (!colorList) {
    return <div>"User must be logged in to do that"</div>;
  }

  return (
    <>
      <ColorList
        colors={colorList}
        updateColors={setColorList}
        getColors={getColors}
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
