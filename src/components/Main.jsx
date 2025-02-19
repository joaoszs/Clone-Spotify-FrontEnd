/* eslint-disable no-unused-vars */

import React from "react";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
      
      {/* Item List de Artistas */}
      <ItemList />

      {/* Item List de musicas */}
      <ItemList />
    </div>
  );
};

export default Main;
